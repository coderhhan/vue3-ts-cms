<template>
  <div>
    <template v-if="item.children && item.children.length > 0">
      <el-sub-menu :index="item.name">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <nav-menu-item v-for="i in item.children" :key="i.url" :item="i"></nav-menu-item>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.name" @click="handleRouter(item.url)">
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    item: Object
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.loginModule.menu)
    const handleRouter = (url: string) => {
      console.log(url)
    }
    return {
      userMenus,
      handleRouter
    }
  }
})
</script>
