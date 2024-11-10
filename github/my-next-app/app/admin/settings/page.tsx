'use client'

export default function SettingsPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">系统设置</h2>
      <div className="space-y-6">
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium mb-4">通知设置</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">邮件通知</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">系统通知</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">安全设置</h3>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50">
              修改密码
            </button>
            <button className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-50">
              两步验证
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}