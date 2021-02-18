import Login from '../pages/Login.vue'

const routes = [
  { name: 'login', path: '/login', component: Login, meta: { layout: 'full-screen', auth: false } },
]

export default routes
