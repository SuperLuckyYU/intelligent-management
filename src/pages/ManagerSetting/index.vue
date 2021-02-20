<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action">
        <a class="mr-2">编辑</a>
        <a>删除</a>
      </span>
    </a-table>
  </div>
</template>
<script>
import { getManagerList } from '@/request/api'

const columns = [
  {
    title: '管理员账号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '姓名',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '角色',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '状态',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '创建时间',
    key: 'time',
    dataIndex: 'time',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    time: '132',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    time: '132',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    time: '132',
  },
]

export default {
  name: 'ManagerSetting',
  data () {
    return {
      data,
      columns,
    }
  },
  created () {
    getManagerList().then(res => {
      console.log(res)
    })
  },
}
</script>
