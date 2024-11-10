import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import { message } from 'antd'

// 创建 axios 实例
const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api', // API 的基础URL
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

// 错误信息映射表
const errorMessages: Record<number, string> = {
  400: '请求参数错误',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求地址不存在',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
}

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 从 localStorage 获取 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    message.error('请求发送失败')
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    
    // 这里假设后端返回的数据结构为 { code: number, data: any, message: string }
    if (data.code !== 0) {
      message.error(data.message || '请求失败')
      return Promise.reject(new Error(data.message || '请求失败'))
    }
    
    return data.data
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response
      
      // 处理 401 未授权的情况
      if (status === 401) {
        localStorage.removeItem('token')
        // 可以在这里添加重定向到登录页的逻辑
        window.location.href = '/login'
        return Promise.reject(error)
      }
      
      // 显示错误提示
      message.error(errorMessages[status] || '请求失败')
    } else if (error.request) {
      // 请求已发出但未收到响应
      message.error('网络异常，请检查网络连接')
    } else {
      // 请求配置出错
      message.error('请求配置错误')
    }
    
    return Promise.reject(error)
  }
)

// 封装 GET 请求
export const get = <T>(url: string, params?: any): Promise<T> => {
  return request.get(url, { params })
}

// 封装 POST 请求
export const post = <T>(url: string, data?: any): Promise<T> => {
  return request.post(url, data)
}

// 封装 PUT 请求
export const put = <T>(url: string, data?: any): Promise<T> => {
  return request.put(url, data)
}

// 封装 DELETE 请求
export const del = <T>(url: string): Promise<T> => {
  return request.delete(url)
}

export default request