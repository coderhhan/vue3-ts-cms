import { ref } from 'vue'
import pageModel from '@/components/page-model'

type CallBackFun = (item?: any) => void
export function usePageModel(createCb?: CallBackFun, editCb?: CallBackFun): any[] {
  const pageModelRef = ref<InstanceType<typeof pageModel>>()
  const defaultInfo = ref({})
  const handleAddUserClick = () => {
    defaultInfo.value = {}
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
    }
  }

  const handleEditUserClick = (item: any) => {
    debugger
    defaultInfo.value = { ...item }
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
    }
  }

  return [pageModelRef, defaultInfo, handleAddUserClick, handleEditUserClick]
}
