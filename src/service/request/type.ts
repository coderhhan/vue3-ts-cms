import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface HhRequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (err: any) => any
  responseInterceptor: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (err: any) => any
}

export interface HhRequestConfig extends AxiosRequestConfig {
  interceptors?: HhRequestInterceptors
}
