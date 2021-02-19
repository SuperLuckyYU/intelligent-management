<template>
  <a-layout class="app-container">
    <a-layout-sider :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>管理员设置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
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
</style>
