import { defineStore } from 'pinia';
import {
  login as userLogin,
  getUserInfo,
  LoginData,
  refresh,
} from '@/api/user';
import { setToken, clearToken, setRefreshToken, getRefreshToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: 0,
    username: '',
    name: '',
    avatar: '',
    email: '',
    phone: '',
    student_id: '',
    from: '',
    guardian_name: '',
    guardian_phone: '',
    is_forzen: false,
    role: 'user',
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'admin' : 'user';
        resolve(this.role);
      });
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      this.$reset();
    },

    // Get user's information
    async info() {
      const res = await getUserInfo();

      this.setInfo(res.data);
    },

    // Login
    async login(loginForm: LoginData) {
      try {
        const res = await userLogin(loginForm);
        setToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        this.setInfo(res.data.userInfo);
      } catch (err) {
        clearToken();
        throw err;
      }
    },
    // 刷新token
    async refresh() {
      try {
        const token = getRefreshToken();
        const res = await refresh({ refresh_token: token });
        setToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        this.setInfo(res.data.userInfo);
      } catch (err) {
        clearToken();
        throw err;
      }
    },
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },
    // Logout
    async logout() {
      clearToken();
    },
  },
});

export default useUserStore;
