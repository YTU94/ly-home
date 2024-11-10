'use client'

export default function ProfilePage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">个人信息</h2>
      <div className="space-y-6">
        <div className="flex items-center">
          <img
            className="h-24 w-24 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="用户头像"
          />
          <button className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            更换头像
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">用户名</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value="张三"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">邮箱</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value="zhangsan@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  )
}