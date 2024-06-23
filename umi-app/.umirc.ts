import { defineConfig } from "umi";

export default defineConfig({
  base: '/',
  mountElementId: 'root',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  crossorigin: {},
  extraBabelPlugins: process.env.NODE_ENV === 'production'
    ? ['babel-plugin-dynamic-import-node']
    : [],

  // tailwindcss: {},
  // plugins: ['@umijs/plugins/dist/tailwindcss'],
})
