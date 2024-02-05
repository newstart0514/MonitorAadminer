import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';
import localeDateview from '@/views/dashboard/dataView/locale/zh-CN';
import localeProcessDanger from '@/views/process/danger/locale/zh-CN';
import localeProcessTeam from '@/views/process/team/locale/zh-CN';
import localeProcessUser from '@/views/process/user/locale/zh-CN';
import localeServicesChatapp from '@/views/services/chatapp/locale/zh-CN';
import localeServicesMessage from '@/views/services/message/locale/zh-CN';
import localeServicesPhone from '@/views/services/phone/locale/zh-CN';
import localeServicesAi from '@/views/services/ai/locale/zh-CN';
import localeServicesMap from '@/views/services/map/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.process': '流程管理',
  'menu.service': '服务管理',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.dataView': '',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  ...localeDateview,
  ...localeProcessTeam,
  ...localeProcessUser,
  ...localeServicesChatapp,
  ...localeServicesMessage,
  ...localeServicesPhone,
  ...localeServicesAi,
  ...localeServicesMap,
  ...localeProcessDanger
};
