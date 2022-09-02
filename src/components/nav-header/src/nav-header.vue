<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleFoldClick">
      <component :is="isFold ? 'Fold' : 'Expand'" />
    </el-icon>
    <div class="content">
      <breadcrumb />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import UserInfo from './user-info.vue'
import breadcrumb from './breadcrumb.vue'
export default defineComponent({
  name: 'NavHeader',
  components: {
    UserInfo,
    breadcrumb
  },
  emits: ['changeFold'],
  setup(props, { emit }) {
    const store = useStore()
    const isFold = ref(false)
    const userMenus = computed(() => store.state.loginModule.menu)
    const handleFoldClick = function () {
      isFold.value = !isFold.value
      emit('changeFold', isFold.value)
    }
    return {
      userMenus,
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
  .content {
    padding-left: 20px;
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
}
</style>
