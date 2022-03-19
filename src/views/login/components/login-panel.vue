<template>
  <div class="login-panel">
    <el-tabs type="border-card" v-model="tabActive">
      <el-tab-pane label="账号登录" name="account">
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>

    <div class="bottom-btn">
      <el-link @click="$router.push('/register')">注册账号</el-link>
      <el-link>忘记密码</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'
import { menu } from '@/service/menu.service'
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const tabActive = ref('account')
    menu().then((res) => {
      console.log(res)
    })

    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLogin = () => {
      switch (tabActive.value) {
        case 'account': {
          accountRef.value?.loginAction()
          break
        }
        case 'phone': {
          phoneRef.value?.loginAction()
          break
        }
      }
    }

    return {
      tabActive,
      handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  width: 32rem;

  .login-btn {
    width: 100%;
    margin-top: 3rem;
  }
  .bottom-btn {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>
