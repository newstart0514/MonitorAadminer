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
export interface RefreshData {
  refresh_token: string;
}

export interface LoginRes {
  userInfo: {
    id: number;
    username: string;
    name: string;
    email: string;
    avatar: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/user/login', data);
}

export function getCaptcha(params: CaptchData) {
  return axios.get<noDataRes>('/user/captcha', { params });
}

export function refresh(params: RefreshData) {
  return axios.get<LoginRes>('/user/refresh', { params });
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
