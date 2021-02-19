import Login from '../pages/Login'
import ManagerSetting from '../pages/ManagerSetting'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: { layout: 'full-screen', auth: false },
  },
  {
    name: 'managerSetting',
    path: '/manager-setting',
    component: ManagerSetting,
  },
]

export default routes
