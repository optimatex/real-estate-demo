import { observable, computed, action } from 'mobx';
import _get from 'lodash/get';

const serviceData = {
  lng: -0.1277801,
  lat: 51.5073835,
  rad: 20,
};

export default class PropertyStore {
  @observable
  adress = {};
  @observable
  geoData = {};
  @computed
  get canService() {
    return (
      this.geoData &&
      this.defineServiceStatus(this.geoData, serviceData, serviceData.rad)
    );
  }
  @observable
  isLoading = false;

  constructor(model) {
    this.fromJS(model);
  }

  @action
  fromJS(model) {
    this.owner = model.owner;
    this.address = model.address;
    this.airbnbId = model.airbnbId;
    this.numberOfBedrooms = model.numberOfBedrooms;
    this.numberOfBathrooms = model.numberOfBathrooms;
    this.incomeGenerated = model.incomeGenerated;
  }

  @action
  setData = data => {
    this.geoData = _get(data, 'results[0].geometry.location');
  };

  defineServiceStatus = (checkPoint, centerPoint, km) => {
    const ky = 40000 / 360;
    const kx = Math.cos((Math.PI * centerPoint.lat) / 180.0) * ky;
    const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
  };
}
