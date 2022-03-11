import requestInstance from './index'

export function menu() {
  return requestInstance.request({
    url: '/menu',
    isShowLoading: true
  })
}
