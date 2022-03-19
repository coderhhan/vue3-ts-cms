<template>
  <div class="login-account">
    <el-form
      ref="accountFormRef"
      :model="accountFrom"
      :rules="rules"
      status-icon
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountFrom.name" type="name" autocomplete="off"></el-input>
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
import { rules } from '../config/login-account'
export default defineComponent({
  name: '',
  setup() {
    const accountFrom = reactive({
      name: '',
      password: ''
    })

    const accountFormRef = ref<InstanceType<typeof ElForm>>()
    console.log(accountFormRef)

    const loginAction = () => {
      console.log('账号登录')
    }
    return {
      accountFrom,
      rules,
      loginAction
    }
  }
})
</script>
<style lang="less" scoped></style>
