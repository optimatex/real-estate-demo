import { observable, computed, action } from 'mobx';
import PropertyStore from '../PropertyStore';
import * as api from '../api';

export default class PropertiesStore {
  @observable.shallow
  collection = [];
  @computed
  get collectionSize() {
    return this.collection.length;
  }
  @observable
  isLoading = false;
  @observable
  error = '';

  @action
  setLoading() {
    this.isLoading = true;
  }

  @action
  unsetLoading() {
    this.isLoading = false;
  }

  @action
  setError(newError) {
    this.error = newError;
  }

  @action
  fromJS(arr) {
    if (arr) {
      this.collection = arr.map(item => this.createStore(item));
    } else {
      this.collection = [];
    }
  }

  createStore = model => new PropertyStore(model);

  getProperties = () => {
    this.setLoading();
    return api
      .getPropertiesRequest()
      .then(res => {
        this.unsetLoading();
        this.fromJS(res.data);
        this.getGeo();
      })
      .catch(error => {
        this.unsetLoading();
        this.setError(error);
      });
  };

  getGeo = () => {
    this.collection.forEach(item => {
      api
        .getPropertyGeoRequest(item.address.postCode)
        .then(res => item.setData(res.data));
    });
  };
}
