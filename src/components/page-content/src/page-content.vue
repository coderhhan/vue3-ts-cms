<template>
  <div class="page-content">
    <el-button @click="handleClick(null, 'create')">新建</el-button>
    <HTable
      :list-data="pageData"
      :list-count="pageCount"
      v-bind="contentConfig"
      v-model:page="pageInfo"
    >
      <template #status="scope">
        <el-button v-if="scope.row.enable === 1">启用</el-button>
        <el-button v-if="scope.row.enable === 0">禁用</el-button>
      </template>
      <template #action="scope">
        <el-button @click="handleClick(scope.row, 'edit')">编辑</el-button>
        <el-button @click="handleClick(scope.row, 'delete')">删除</el-button>
      </template>
    </HTable>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store/index'
import { defineComponent, ref, computed, watch } from 'vue'

import HTable from '@/components/HTable'
export default defineComponent({
  name: 'page-content',
  components: {
    HTable
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentConfig: {
      type: Object,
      reqeuired: true
    }
  },
  emits: ['addUserClick', 'editUserClick'],
  setup(props, { emit }) {
    const sotre = useStore()
    const pageInfo: any = ref({
      currentPage: 1,
      pageSize: 10
    })
    const pageData = computed(() => sotre.getters['systemModule/pageListData'](props.pageName))
    const pageCount = computed(() => sotre.getters['systemModule/pageListCount'](props.pageName))

    const getPageData = (query: any = {}) => {
      sotre.dispatch('systemModule/getList', {
        pageName: props.pageName,
        query: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...query.name
        }
      })
    }
    getPageData(pageInfo)

    //监听码数据改变后刷新列表
    watch(pageInfo, () => {
      getPageData()
    })

    const handleClick = (row: any, type: string) => {
      switch (type) {
        case 'create': {
          emit('addUserClick')
          break
        }
        case 'edit': {
          debugger
          console.log(row)
          emit('editUserClick', row)
          break
        }
        case 'delete': {
          break
        }
      }
    }
    return {
      getPageData,
      handleClick,

      pageData,
      pageCount,
      pageInfo
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  margin-top: 20px;
}
</style>
