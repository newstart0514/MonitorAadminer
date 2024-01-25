import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';
import localeDateview from '@/views/dashboard/dataView/locale/en-US';
import localeProcessTeam from '@/views/process/team/locale/en-US';
import localeProcessUser from '@/views/process/user/locale/en-US';
import localeServicesChatapp from '@/views/services/chatapp/locale/en-US';
import localeServicesMessage from '@/views/services/message/locale/en-US';
import localeServicesPhone from '@/views/services/phone/locale/en-US';
import localeServicesAi from '@/views/services/ai/locale/en-US';
import localeServicesMap from '@/views/services/map/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.process': 'process management',
  'menu.service': 'Service management',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
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
};
