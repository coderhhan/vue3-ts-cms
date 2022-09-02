<template>
  <div class="user-content">
    <div class="search-content">
      <page-search :searchConfig="searchConfig" />
    </div>
    <div class="result-content">content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import PageSearch from '@/components/page-search/index'
import { searchConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    return { searchConfig }
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
