<template>
  <div class="register">
    <div class="register-box">
      <el-form
        label-position="left"
        label-width="100px"
        :model="registerForm"
        :rules="registerRules"
        ref="registerFormRef"
      >
        <el-form-item label="账号/手机" prop="userAccount">
          <el-input v-model="registerForm.userAccount" placeholder="请输入账号/手机" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="验证码" prop="verifyCode">
          <div class="verify-code-box">
            <el-input v-model="registerForm.verifyCode" placeholder="请输入验证码" />
            <el-button @click="sendVerifyCode" class="send-code-btn">发送验证码</el-button>
          </div>
        </el-form-item>
      </el-form>

      <el-button class="register-btn" type="primary" @click="handlerRegister">立即注册</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { registerRules } from './config/register-rules'

import { sendCode } from '@/service/login/login.service'

import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import { ElForm } from 'element-plus/lib/components'

export default defineComponent({
  name: '',
  setup() {
    const registerForm = reactive({
      userAccount: '',
      password: '',
      email: '',
      verifyCode: ''
    })
    const sendVerifyCode = () => {
      console.log(registerForm.email)
      sendCode(registerForm)
        .then((res) => {
          if (res.code === 200) {
            ElMessage({
              showClose: true,
              message: res.message,
              type: 'success'
            })
          } else {
            ElMessage({
              showClose: true,
              message: res.message,
              type: 'error'
            })
          }
        })
        .catch((err) => {
          debugger
          console.log
          ElMessage({
            showClose: true,
            message: err.message,
            type: 'error'
          })
        })
    }

    const registerFormRef = ref<InstanceType<typeof ElForm>>()
    const handlerRegister = () => {
      console.log(registerForm)
      registerFormRef.value?.validate((valid) => {
        if (!valid) return
        const query = JSON.parse(JSON.stringify(registerForm))
      })
    }
    return {
      registerForm,
      registerRules,

      sendVerifyCode,
      handlerRegister
    }
  }
})
</script>
<style lang="less" scoped>
.register {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .register-btn {
    margin-top: 2.4rem;
    width: 100%;
  }
  .verify-code-box {
    display: flex;
    .send-code-btn {
      margin-left: 1rem;
    }
  }
}
</style>
