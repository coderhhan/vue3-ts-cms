<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" />
      <span v-show="!collapse" class="title">vue3+ts</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <nav-menu-item :item="item" />
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
// import navMenuItem from './nav-menu-item.vue'
export default defineComponent({
  // components: { navMenuItem },
  name: 'HelloWorld',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenus = computed(() => store.state.loginModule.menu)
    const handleMenuItemClick = (item: any) => {
      console.log('--------')
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: rgb(84, 92, 100);
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(84, 92, 100);

    img {
      height: 20px;
      width: 20px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: black;
      margin-left: 10px;
    }
  }
  .el-menu-vertical {
    // 没有设置100%, 右边会突出（因为子布局比父亲大）
    width: 100%;
    border-right: none;

    // 目录
    .el-submenu {
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        // background-color: @side-lighten-bg-color !important;
      }
    }
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
