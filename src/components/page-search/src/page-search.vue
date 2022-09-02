<template>
  <div class="page-search">
    {{ searchConfig }}
    <h-form v-model="formData" v-bind="searchConfig">
      <template #header> 高级搜索 </template>
      <template #footer>
        <el-button>重置</el-button>
        <el-button type="primary">搜索</el-button>
      </template>
    </h-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HForm from '@/components/HForm'
export default defineComponent({
  name: 'page-search',
  components: {
    HForm
  },
  props: {
    searchConfig: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    const formData = ref({
      name: '111',
      age: '10'
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>
