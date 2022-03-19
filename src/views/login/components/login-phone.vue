<template>
  <div class="login-phone">
    <el-form ref="phoneFormRef" :model="phoneForm" :rules="rules" status-icon class="demo-ruleForm">
      <el-form-item label="账号" prop="phone">
        <el-input v-model="phoneForm.phone" type="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="verifyCode" class="">
        <div class="verify-code">
          <el-input v-model="phoneForm.verifyCode" type="password" autocomplete="off"></el-input>
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, ref, reactive } from 'vue'
import { rules } from '../config/login-phone'
export default defineComponent({
  name: '',
  setup() {
    const phoneForm = reactive({
      phone: '',
      verifyCode: ''
    })

    const phoneFormRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      phoneFormRef.value?.validate()
    }
    return {
      rules,

      phoneForm,

      loginAction
    }
  }
})
</script>
<style lang="less" scoped>
.verify-code {
  display: flex;
  .get-code-btn {
    margin-left: 0.8rem;
  }
}
</style>
