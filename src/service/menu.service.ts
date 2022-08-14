import requestInstance from './index'

export function menu(): any {
  return requestInstance.request({
    url: '/menu',
    isShowLoading: true
  })
}

// export function login(data: any): any {
//   return requestInstance.post({
//     url: '/login',
//     isShowLoading: true,
//     data
//   })
// }
