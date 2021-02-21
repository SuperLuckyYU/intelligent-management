<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="data"
      rowKey="id"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange">
      <span slot="enable" slot-scope="enable">
        <a-tag
          :color="enable ? 'green' : 'volcano'">
          {{ enable ? '启用' : '禁用' }}
        </a-tag>
      </span>
      <span slot="level" slot-scope="level">
        {{ levelMap[level] }}
      </span>
      <span slot="action">
        <a class="mr-2" @click="handleEditClick">编辑</a>
        <a>删除</a>
      </span>
    </a-table>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script>
import { getManagerList } from '@/request/api'

export default {
  name: 'ManagerSetting',
  data () {
    return {
      pagination: {},
      levelMap: {
        1: '一级管理员',
        2: '二级管理员',
        3: '三级管理员',
      },
      loading: false,
      data: [],
      columns: [
        {
          title: '管理员账号',
          dataIndex: 'phone',
        },
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '角色',
          dataIndex: 'level',
          scopedSlots: { customRender: 'level' },
        },
        {
          title: '状态',
          dataIndex: 'enable',
          scopedSlots: { customRender: 'enable' },
        },
        {
          title: '创建时间',
          dataIndex: 'time',
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      visible: false,
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    handleTableChange (pagination) {
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetchData({
        results: pagination.pageSize,
        page: pagination.current,
      })
    },
    fetchData (params = {}) {
      this.loading = true
      getManagerList(params).then(res => {
        this.data = res
        this.loading = false
      })
    },
    handleEditClick () {
      this.visible = true
    },
    handleOk () {
      this.visible = false
    },
  },
}
</script>
