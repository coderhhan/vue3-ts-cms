<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts" setup name="login">
import LoginPanel from './components/login-panel.vue'
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
