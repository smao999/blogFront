import axios, { AxiosResponse } from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"
import type { RequestConfig, RequestInterceptors } from "./types"

class Request {
  instance: AxiosInstance // axios的实例
  interceptorObj?: RequestInterceptors // 拦截器对象

  constructor (config: RequestConfig) {
    this.instance = axios.create(config) // config axios的实例化配置
    this.interceptorObj = config.interceptors

    /* 
    拦截器执行顺序：实例请求拦截器 -> 类请求拦截器 -> 实例响应拦截器 -> 类响应拦截器
    请求拦截器注册顺序与执行顺序相反（unshift），响应拦截器注册顺序与执行顺序相同（push）
    接口请求 -> 。。。。。-> 接口响应
    */
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log("类请求拦截器", res)
        return res
      },
      (err: any) => err
    )
    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorObj?.requestInterceptors,
      this.interceptorObj?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorObj?.responseInterceptors,
      this.interceptorObj?.responseInterceptorCatch
    )
    // 全局响应拦截器最后执行
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log("类响应拦截器", res)
        return res
      },
      (err: any) => err
    )
  }

  // 接口拦截
  request <T>(config: RequestConfig): Promise <T> {
    return new Promise((resolve, reject) => {
      // 单个的请求拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 单个的响应拦截
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors <T>(res)
          }

          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}

export default Request
