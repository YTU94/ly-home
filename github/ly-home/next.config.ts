import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   // Cloudflare Pages 的配置
   output: 'standalone',
   images: {
     unoptimized: true,
     // 如果使用远程图片，需要配置域名
     domains: ['example.com']
   }
};

export default nextConfig;
