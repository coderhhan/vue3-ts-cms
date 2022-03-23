import requestInstance from './index'

export function menu() {
  return requestInstance.request({
    url: '/menu',
    isShowLoading: true
  })
}

export function login(data: any) {
  return requestInstance.post({
    url: '/login',
    isShowLoading: true,
    data
  })
}
