import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const SERVICE: AppRouteRecordRaw = {
  path: '/service',
  name: 'service',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.service',
    requiresAuth: true,
    icon: 'icon-common',
    order: 2,
  },
  children: [
    {
      path: 'chatapp',
      name: 'chatapp',
      component: () => import('@/views/services/chatapp/index.vue'),
      meta: {
        locale: 'menu.service.chatapp',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'message',
      name: 'message',
      component: () => import('@/views/services/message/index.vue'),
      meta: {
        locale: 'menu.service.message',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'phone',
      name: 'phone',
      component: () => import('@/views/services/phone/index.vue'),
      meta: {
        locale: 'menu.service.phone',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'ai',
      name: 'ai',
      component: () => import('@/views/services/ai/index.vue'),
      meta: {
        locale: 'menu.service.ai',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'map',
      name: 'map',
      component: () => import('@/views/services/map/index.vue'),
      meta: {
        locale: 'menu.service.map',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default SERVICE;
