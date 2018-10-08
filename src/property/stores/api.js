import axios from 'axios';

export const getPropertiesRequest = () =>
  axios.get('../../../exerciseData_frontend.json');

export const getPropertyGeoRequest = address =>
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAEzlhWDzQGAQcdIJ2DlmcKrXFCe4Y44w4`,
  );
