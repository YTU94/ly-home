'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined
} from '@ant-design/icons'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人信息',
      path: '/admin/profile'
    },
    {
      key: 'analytics',
      icon: <BarChartOutlined />,
      label: '数据分析',
      path: '/admin/analytics'
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
      path: '/admin/settings'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm fixed w-full z-10">
        <div className="flex justify-between items-center px-4 h-16">
          <div className="flex items-center">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
            <span className="text-lg font-semibold ml-2">用户中心</span>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <BellOutlined className="text-xl" />
            </button>
            <div className="flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="用户头像"
              />
              <span className="text-sm font-medium text-gray-700">张三</span>
            </div>
          </div>
        </div>
      </div>

      {/* 左侧菜单和主内容区域 */}
      <div className="flex pt-16">
        {/* 左侧菜单 */}
        <div className={`fixed left-0 h-full bg-white shadow-sm transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'
          }`}>
          <nav className="mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className={`flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 ${pathname === item.path ? 'text-indigo-600 bg-indigo-50' : ''
                  }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* 主内容区域 */}
        <div className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'
          }`}>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}