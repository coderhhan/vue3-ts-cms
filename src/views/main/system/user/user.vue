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
    <page-model
      ref="pageModelRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :modelConfig="modelConfig"
    />
  </div>
</template>

<script lang="ts" setup name="user">
import PageSearch from './components/page-search'
import PageContent from './components/page-content'
import PageModel from './components/page-model'

import { searchConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modelConfig } from './config/model.config'

import { usePageSearch } from '@/hooks/page-search'
import { usePageModel } from '@/hooks/page-model'

const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch()

const [pageModelRef, defaultInfo, handleAddUserClick, handleEditUserClick] = usePageModel()
// store.dispatch('systemModule/getList')
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
