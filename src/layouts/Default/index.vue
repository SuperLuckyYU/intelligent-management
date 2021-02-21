<template>
  <a-layout class="app-container">
    <a-layout-sider :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="['manager-setting']"
        :default-open-keys="['auth']">
        <a-sub-menu key="auth">
          <span slot="title"><a-icon type="setting" /><span>权限管理</span></span>
          <a-menu-item key="manager-setting" @click="handleClick">
            <router-link to="/manager-setting">
              <a-icon type="user" />
              <span>管理员设置</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="role-setting">
            <router-link to="/role-setting">
              <a-icon type="user" />
              <span>角色管理</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-avatar class="float-right avatar" icon="user" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleClick () {

    },
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
}

.app-container .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.header {
  background: #fff;
  padding: 0 40px;
}
.avatar {
  background-color:#87d068;
  margin-top: 16px;
}
::v-deep {
  .ant-layout-content {
    min-height: auto;
  }
}
</style>
