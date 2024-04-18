import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'zh-CN',
  title: '云倚的博客',
  titleTemplate: ':title - yunyi', // 浏览器窗口标题+后缀
  description: 'personal boke',
  head: [['link', { rel: 'icon', href: '/avator.jpg' }]],
  themeConfig: {},
  rewrites: {
    'packages/:pkg.md': ':pkg/index.md',
  },
})
