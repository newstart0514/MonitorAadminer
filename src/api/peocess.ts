import axios from 'axios';

export interface getListData {
  page?: number;
  size?: number;
  status?: string;
  from_city?: string;
  to_city?: string;
  type?: string;
  car_type?: string;
} 

export function getList(params: getListData) {
  return axios.get('/process/list', { params });
}