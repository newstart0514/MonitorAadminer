import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const PROCESS: AppRouteRecordRaw = {
  path: '/process',
  name: 'process',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.process',
    requiresAuth: true,
    icon: 'icon-archive',
    order: 1,
  },
  children: [
    {
      path: 'danger',
      name: 'danger',
      component: () => import('@/views/process/danger/index.vue'),
      meta: {
        locale: 'menu.process.danger',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'team',
      name: 'team',
      component: () => import('@/views/process/team/index.vue'),
      meta: {
        locale: 'menu.process.team',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/process/user/index.vue'),
      meta: {
        locale: 'menu.process.user',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default PROCESS;
