<template>
  <div class="my-form">
    <div class="header">
      <slot name="header" />
    </div>
    <el-form :model="form" label-width="120px">
      <el-row>
        <template v-for="formItem in formItems" :key="formItem.label">
          <el-col v-bind="collapseLayout">
            <el-form-item :label="formItem.label" :style="itemStyle">
              <template v-if="formItem.type === 'input' || formItem.type === 'password'">
                <el-input v-model="formData[`${formItem.field}`]" style="width: 100%" />
              </template>
              <template v-else-if="formItem.type === 'select'">
                <el-select
                  v-model="formData[`${formItem.field}`]"
                  class="m-2"
                  placeholder="Select"
                  style="width: 100%"
                >
                  <el-option
                    v-for="item in formItem.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </template>
              <template v-else-if="formItem.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[`${formItem.field}`]"
                  :type="formItem.otherOptions.type"
                  :range-separator="formItem.otherOptions.rangeSeparator"
                  :start-placeholder="formItem.otherOptions.startPlaceholder"
                  :end-placeholder="formItem.otherOptions.endPlaceholder"
                  style="width: 100%"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer-btn">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, PropType } from 'vue'
import { HFormItem } from '../type/index'
export default defineComponent({
  name: 'my-form',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<HFormItem[]>,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => {
        return {
          padding: '10px 40px'
        }
      }
    },
    collapseLayout: {
      type: Object,
      default: () => {
        return {
          xl: 6, // >1920px 4个
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let formData = reactive({
      ...props.modelValue
    })

    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )

    const reset = () => {
      const keys = Object.keys(formData)
      keys.forEach((key) => {
        formData[key] = ''
      })
    }
    const search = () => {
      console.log('res')
    }
    return {
      formData,
      reset,
      search
    }
  }
})
</script>
<style scoped lang="less">
.my-form {
  .header {
    padding: 20px 0;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  .footer-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
