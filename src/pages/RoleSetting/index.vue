<template>
  <div>
    <a-button type="primary" @click="handleAddClick">
      新增角色
    </a-button>
    <a-table
      class="mt-2"
      :columns="columns"
      :data-source="data"
      rowKey="id"
      :loading="loading">
      <span slot="action">
        <a class="mr-2" @click="handleEditClick">编辑</a>
        <a>删除</a>
      </span>
    </a-table>
    <a-modal v-model="visible" @ok="handleOk" cancelText="取消" okText="确定">
      <div slot="title">
        {{ dialogType === 'add' ? '新增角色' : '修改' }}
      </div>
      <a-form
        :form="form.fc">
        <a-form-item label="名称" v-bind="formItemLayout">
          <a-input  v-decorator="decorators.name" placeholder="请填写角色名称" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
// import { getRoleList } from '@/request/api'

export default {
  name: 'RoleSetting',
  data () {
    return {
      loading: false,
      data: [
        {
          id: '1',
          name: '一级管理员',
        },
        {
          id: '2',
          name: '二级管理员',
        },
        {
          id: '3',
          name: '三级管理员',
        },
      ],
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
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
        name: [
          'name',
          {
            rules: [
              { required: true, message: '请填写角色名称' },
            ],
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
    // this.fetchData()
  },
  methods: {
    // fetchData (params = {}) {
    //   this.loading = true
    //   getRoleList(params).then(res => {
    //     this.data = res
    //     this.loading = false
    //   })
    // },
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
