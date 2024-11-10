'use client'

export default function AnalyticsPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">数据分析</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-indigo-700">总访问量</h3>
          <p className="text-3xl font-bold text-indigo-900 mt-2">1,234</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-green-700">活跃用户</h3>
          <p className="text-3xl font-bold text-green-900 mt-2">891</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-purple-700">转化率</h3>
          <p className="text-3xl font-bold text-purple-900 mt-2">23.5%</p>
        </div>
      </div>
    </div>
  )
}