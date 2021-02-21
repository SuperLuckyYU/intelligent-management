<template>
  <div>
    <a-button type="primary" @click="handleAddClick">
      新增管理员
    </a-button>
    <a-table
      class="mt-2"
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
    <a-modal v-model="visible" @ok="handleOk" cancelText="取消" okText="确定">
      <div slot="title">
        {{ dialogType === 'add' ? '新增管理员' : '修改' }}
      </div>
      <a-form
        :form="form.fc">
        <a-form-item label="账号" v-bind="formItemLayout">
          <a-input  v-decorator="decorators.phone" placeholder="请输入管理员手机号" />
        </a-form-item>
        <a-form-item label="姓名" v-bind="formItemLayout">
          <a-input v-decorator="decorators.name" placeholder="请输入姓名" />
        </a-form-item>
        <a-form-item label="角色" v-bind="formItemLayout">
          <a-select v-decorator="decorators.level" placeholder="请选择角色">
            <a-select-option :value="1">
              一级管理员
            </a-select-option>
            <a-select-option :value="2">
              二级管理员
            </a-select-option>
            <a-select-option :value="3">
              三级管理员
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="启用状态" v-bind="formItemLayout">
          <a-switch v-decorator="decorators.enable" checked-children="开" un-checked-children="关" />
        </a-form-item>
      </a-form>
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
      dialogType: 'add',
      form: {
        fc: this.$form.createForm(this),
      },
      decorators: {
        phone: [
          'phone',
          {
            rules: [
              { required: true, message: '请填写手机号' },
            ],
          },
        ],
        name: [
          'name',
          {
            rules: [
              { required: true, message: '请输入名称' },
            ],
          },
        ],
        level: [
          'level',
          {
            rules: [
              { required: true, message: '请选择角色' },
            ],
          },
        ],
        enable: [
          'enable',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ],
      },
      formItemLayout: {
        wrapperCol: {
          span: 20,
        },
        labelCol: {
          span: 4,
        },
      },
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
    handleAddClick () {
      this.dialogType = 'add'
      this.visible = true
    },
    handleEditClick () {
      this.dialogType = 'edit'
      this.visible = true
    },
    handleOk () {
      this.visible = false
    },
  },
}
</script>
