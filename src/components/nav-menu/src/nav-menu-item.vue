<template>
  <template v-if="item.children && item.children.length > 0 && item.type !== 2">
    <el-sub-menu :index="item.id + ' '">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <nav-menu-item v-for="i in item.children" :key="i.url" :item="i"></nav-menu-item>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="item.id + ' '" @click="handleRouter(item.url)">
      <span>{{ item.name }}</span>
    </el-menu-item>
  </template>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    item: Object
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenus = computed(() => store.state.loginModule.menu)
    const handleRouter = (url: string) => {
      console.log(url)
      router.push(url)
    }
    return {
      userMenus,
      handleRouter
    }
  }
})
</script>
<style lang="less" scoped>
.el-submenu {
  // 二级菜单 ( 默认背景 )
  .el-menu-item {
    padding-left: 50px !important;
    // background-color: @side-lighten-bg-color !important;
  }
}
</style>
