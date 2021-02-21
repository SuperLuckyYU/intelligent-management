import Login from '../pages/Login'
import ManagerSetting from '../pages/ManagerSetting'
import RoleSetting from '../pages/RoleSetting'
import Statistic from '../pages/Statistic'

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
  {
    name: 'roleSetting',
    path: '/role-setting',
    component: RoleSetting,
  },
  {
    name: 'statistic',
    path: '/statistic',
    component: Statistic,
  },
]

export default routes
