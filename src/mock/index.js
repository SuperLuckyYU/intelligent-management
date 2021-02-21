import Mock from 'mockjs'

const Random = Mock.Random
const managerList = []
for (let i = 0; i < 15; i++) {
  // 生成10个对象放到数组中
  const template = {
    id: '@id',
    phone: '@email',
    name: '@name',
    level: Random.integer(1, 3),
    enable: '@boolean',
    time: '@datetime',
  }
  managerList.push(template)
}
Mock.mock(document.location.origin + '/api/manager-list', 'get', managerList)

const roleList = []
for (let i = 0; i < 3; i++) {
  // 生成10个对象放到数组中
  const template = {
    name: Random.integer(1, 3),
  }
  roleList.push(template)
}
Mock.mock(document.location.origin + '/api/role-list', 'get', roleList)
