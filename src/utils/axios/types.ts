import type { AxiosResponse, AxiosRequestConfig } from "axios";

// 拦截器对象的类型
export interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig // 请求拦截
  requestInterceptorsCatch?: (err: any) => any // 请求失败拦截
  // 响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}
