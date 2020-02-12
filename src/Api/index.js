import ajax from './ajax';

const BASE_URL = ' https://ratings-api.dev.reputationaire.com/api';

export const getResult = (params) => ajax(BASE_URL + '/result', params);

export const sendId = (data)=> ajax(BASE_URL + '/request-rating', data, 'POST');