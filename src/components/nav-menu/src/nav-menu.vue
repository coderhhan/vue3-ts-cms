<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" />
      <span class="title">vue3+ts</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- <template v-if="item.type === 1"> -->
        <nav-menu-item :item="item" />
        <!-- </template>
        <template v-else-if="item.type === 2">
          <nav-menu-item :item="item" />
        </template> -->
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import NavMenuItem from './nav-menu-item.vue'
import navMenuItem from './nav-menu-item.vue'
export default defineComponent({
  components: { navMenuItem },
  name: 'HelloWorld',
  props: {
    NavMenuItem
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.loginModule.menu)
    return {
      userMenus
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
      margin-right: 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: black;
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
</style>
