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
