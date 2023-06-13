<template>
  <div class="page-search">
    <h-form v-model="formData" v-bind="searchConfig">
      <template #header> 高级搜索 </template>
      <template #footer>
        <el-button @click="handleReset">重置</el-button>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </template>
    </h-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HForm from '@/components/HForm'
import { HFormItem } from '@/components/HForm/type/index'
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
  setup(props, { emit }) {
    const originData: any = {}
    props.searchConfig?.formItems.forEach((config: HFormItem) => {
      originData[config.field] = ''
    })
    const formData = ref(originData)

    const handleReset = () => {
      props.searchConfig?.formItems.forEach((config: HFormItem) => {
        formData.value[config.field] = ''
      })
    }
    const handleSearch = () => {
      console.log('搜索')
    }
    return {
      formData,
      handleReset,
      handleSearch
    }
  }
})
</script>

<style scoped lang="less"></style>
