<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-container class="page-content">
          <el-main><router-view /></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import NavMenu from '@/components/nav-menu'
// import { login } from '@/service/menu.service'
export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    const env = ref(process.env.VUE_APP_API)
    console.log(process.env.VUE_APP_API)
    const query = {
      name: 'coderwhy',
      password: '123456'
    }
    // login(query).then((res) => {
    //   console.log(res)
    // })
    return {
      env
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
}
</style>
