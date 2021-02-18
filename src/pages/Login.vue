<template>
  <div class="login-index-wrap h-100 d-flex">
    <div class="from p-2">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="用户登陆" />
      </a-tabs>
      <a-form
        :form="form"
        class="login-form p-2"
        @submit="handleSubmit">
        <a-form-item class="mt-4">
          <a-input
            v-decorator="[
              'user_name',
              { rules: [{ required: true, message: '请输入您的用户名!' }] },
            ]"
            placeholder="用户名">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请输入您的密码!' }] },
            ]"
            placeholder="密码">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button mt-5">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .login-index-wrap {
    background-image: url('../assets/bg.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgb(240, 242, 246);
    background-size: 100%;
  }
  .from {
    width: 400px;
    height: 400px;
    background: #fff;
    border-radius: 8px;
    align-self: center;
    margin: auto;
  }
  .login-form-button {
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
  }
  ::v-deep {
    .ant-tabs-tab {
      font-size: 20px;
    }
    .ant-tabs-ink-bar-animated {
      width: 100% !important;
    }
  }
</style>
