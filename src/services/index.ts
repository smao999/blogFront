import Request from "../utils/axios"
import type { RequestConfig } from "../utils/axios/types"

interface myRequestConfig<T> extends RequestConfig {
  data?: T
}
interface myResponse<T> {
  code: number,
  message: string,
  data: T
}

const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 30,
  interceptors: {
    requestInterceptors: config => {
      console.log("实例请求拦截器", config)
      return config
    },
    responseInterceptors: result => {
      console.log("实例响应拦截器", result)
      return result
    }
  }
})

const myRequest = <D, T = any>(config: myRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method === "get" || "GET") {
    config.params = config.data
  }
  return request.request<myResponse<T>>(config)
}
export default myRequest
