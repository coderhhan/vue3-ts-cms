<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" :destroy-on-close="true" title="Tips" width="30%">
      {{ defaultInfo }}
      <h-form v-model="formData" v-bind="modelConfig"> </h-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HForm from '@/components/HForm'
import { HFormItem } from '@/components/HForm/type/index'

export default defineComponent({
  name: 'page-model',
  components: {
    HForm
  },
  props: {
    modelConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    defaultInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props: any) {
    const dialogVisible = ref(false)
    const originData: any = { ...props.defaultInfo }
    props.modelConfig?.formItems.forEach((config: HFormItem) => {
      originData[config.field] = ''
    })
    const formData = ref(originData)
    watch(
      () => props.defaultInfo,
      (value) => {
        debugger 
        formData.value = { ...value }
      },
      {
        deep: true
      }
    )
    return {
      formData,
      dialogVisible
    }
  }
})
</script>
<style scoped lang="less"></style>
