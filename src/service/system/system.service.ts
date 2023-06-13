import requestInstance from '../index'

import { ResponeData } from './type'
import { queryata } from './type'

export function getPageListData(url: string, queryInfo: any) {
  return requestInstance.post<ResponeData>({
    url: url,
    data: queryInfo
  })
}
