import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HhRequestConfig, HhRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
// import { ILoadingInstance } from 'element-plus/lib/components/loading/src'
interface HYData<T> {
  data: T
  returnCode: string
  success: boolean
}

class HhRequest {
  instance: AxiosInstance
  interceptors?: HhRequestInterceptors
  isShowLoading: boolean
  laoding?: any

  constructor(config: HhRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.isShowLoading = config.isShowLoading ?? true

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //global
    this.instance.interceptors.request.use(
      (config) => {
        this.isShowLoading &&
          (this.laoding = ElLoading.service({
            lock: true,
            text: '请求中'
          }))
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.isShowLoading &&
          setTimeout(() => {
            this.laoding?.close()
          }, 1000)
        return res
      },
      (err) => {
        this.isShowLoading &&
          setTimeout(() => {
            this.laoding?.close()
          }, 1000)
        return err
      }
    )
  }

  request<T>(config: HhRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.isShowLoading === false) {
        this.isShowLoading = config.isShowLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res: any) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res.data)
          this.isShowLoading = true
        })
        .catch((err) => {
          console.log(err)
          reject(err.data)
          this.isShowLoading = true
        })
    })
  }

  post<T>(config: HhRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }
  get<T>(config: HhRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'get' })
  }
}

export default HhRequest
