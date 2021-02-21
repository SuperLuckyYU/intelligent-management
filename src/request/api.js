import { get } from './http'

export const getManagerList = (params) => get('api/manager-list', params)
