<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :icon="UserFilled" />
        {{ userName }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'userInfo',
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.loginModule.userInfo.name)
    return {
      UserFilled,
      userName
    }
  }
})
</script>
<style scoped lang="less">
.user-info {
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
