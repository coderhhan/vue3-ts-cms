<template>
  <div class="login-account">
    <el-form
      ref="accountFormRef"
      :model="accountFrom"
      :rules="rules"
      status-icon
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="userAccount">
        <el-input
          v-model="accountFrom.userAccount"
          type="userAccount"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountFrom.password" type="password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/login-account'
import localCache from '@/utils/cache'
export default defineComponent({
  name: '',
  setup() {
    const accountFrom = reactive({
      userAccount: localCache.getCache('userAccount') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const store = useStore()
    const accountFormRef = ref<InstanceType<typeof ElForm>>()
    console.log(accountFormRef)

    const loginAction = (isRememberPassword: boolean) => {
      accountFormRef.value?.validate((validate) => {
        console.log(validate)
        if (!validate) return
        if (isRememberPassword) {
          localCache.setCache('userAccount', accountFrom.userAccount)
          localCache.setCache('password', accountFrom.password)
        } else {
          localCache.clearCache()
        }
        store.dispatch('loginModule/accountLoginAction', {
          name: accountFrom.userAccount,
          password: accountFrom.password
        })
      })
      console.log('账号登录')
    }
    return {
      accountFormRef,
      accountFrom,
      rules,
      loginAction
    }
  }
})
</script>
<style lang="less" scoped></style>
