import { get } from './http'

export const getManagerList = (params) => get('api/manager-list', params)
export const getRoleList = (params) => get('api/role-list', params)
