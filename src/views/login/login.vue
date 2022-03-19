<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'

export default defineComponent({
  name: 'login',
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
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
