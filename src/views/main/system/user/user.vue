<template>
  <div class="user-content">
    <div class="search-content">
      <page-search
        :searchConfig="searchConfig"
        @resetBtnClick="handleResetClick"
        @searchBtnClick="handleSearchClick"
      />
    </div>
    <page-content
      :contentConfig="contentConfig"
      pageName="users"
      ref="pageContentRef"
      @addUserClick="handleAddUserClick"
      @editUserClick="handleEditUserClick"
    />
    <page-model ref="pageModelRef" :defaultInfo="defaultInfo" :modelConfig="modelConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content/index'
import PageModel from '@/components/page-model/index'

import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

import { usePageSearch } from '@/hooks/page-search'
import { usePageModel } from '@/hooks/page-model'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModel
  },
  setup() {
    const sotre = useStore()

    const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch()

    const [pageModelRef, defaultInfo, handleAddUserClick, handleEditUserClick] = usePageModel()
    // store.dispatch('systemModule/getList')

    return {
      pageContentRef,
      handleResetClick,
      handleSearchClick,
      pageModelRef,
      defaultInfo,
      handleAddUserClick,
      handleEditUserClick,

      searchConfig,
      contentConfig,
      modelConfig
    }
  }
})
</script>
<style scoped lang="less">
.user-content {
  .search-content {
    padding-bottom: 20px;
    background-color: white;
  }
  .result-content {
    margin-top: 20px;
    background-color: white;
  }
}
</style>
