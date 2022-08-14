import HhRequest from './request'
import localCache from '@/utils/cache'
export default new HhRequest({
  baseURL: process.env.VUE_APP_API,
  // baseURL: '/api',
  interceptors: {
    requestInterceptor: (config) => {
      //携帶token 的拦截
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
