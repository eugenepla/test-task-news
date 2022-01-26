import { API_URL } from './../config';
import { fetchWrapper } from './../helpers/fetchWrapper';

export const NewsService = {
  get
};

function get(params) {
  return fetchWrapper.get(`${API_URL}${params}`);
}