import { observable, computed, action } from 'mobx';
import getPropertiesRequest from '../api';

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
      this.collection = arr;
    } else {
      this.collection = [];
    }
  }

  getProperties = () => {
    this.setLoading();
    return getPropertiesRequest()
      .then(res => {
        console.log('%c res', 'color: #0087d4', res);
        this.unsetLoading();
        this.fromJS(res.data);
      })
      .catch(error => {
        this.unsetLoading();
        this.setError(error);
      });
  };
}
