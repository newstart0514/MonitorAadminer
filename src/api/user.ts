import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';
import { noDataRes } from './currency.interface';

export interface LoginData {
  username: string;
  password: string;
  captcha: string;
}
export interface CaptchData {
  address: string;
}

export interface LoginRes {
  token: string;
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/user/login', data);
}

export function getCaptcha(params: CaptchData) {
  return axios.get<noDataRes>('/user/captcha', { params });
}

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
