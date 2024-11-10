'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface LoginForm {
  email: string
  password: string
}

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: LoginForm) => {
    setLoading(true)
    try {
      // 这里处理登录逻辑
      console.log(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          登录您的账号
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                邮箱地址
              </label>
              <div className="mt-1">
                <input
                  {...register('email', {
                    required: '请输入邮箱地址',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: '请输入有效的邮箱地址'
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                密码
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  {...register('password', {
                    required: '请输入密码',
                    minLength: {
                      value: 6,
                      message: '密码长度至少6位'
                    }
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {loading ? '登录中...' : '登录'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-medium mb-2">关于我们</h3>
          <p className="mb-4">
            我们致力于为用户提供最优质的服务体验。您的信任是我们前进的动力。
          </p>
          <p>
            如需帮助，请联系客服：support@example.com
          </p>
        </div>
      </div>
    </div>
  )
}