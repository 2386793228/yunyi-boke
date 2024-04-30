import { defineConfig } from 'vitepress'
import { nav } from './rela-conf'
export default defineConfig({
  lang: 'zh-CN',
  title: '云倚的博客',
  titleTemplate: ':title - yunyi', // 浏览器窗口标题+后缀
  description: 'personal boke',
  // srcDir: 'src', // 当配置了srcDir的时候，themeConfig.logo就没生效了
  head: [['link', { rel: 'icon', href: '/avator.jpg' }]],
  cacheDir: './.vitepress/.vite', // 开发环境缓存
  themeConfig: {
    logo: '/avator.jpg',
    siteTitle: '云深不知处',
    nav: nav,
    sidebar: {
      '/my/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'my',
              link: '/my/',
            },
            {
              text: 'Github',
              link: 'https://github.com/2386793228',
            },
          ],
          collapsed: true,
        },
      ],
    },
    // 由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
    footer: {
      message: '个人学习过程非商用',
      copyright: '<a href="https://github.com/2386793228">github</a>',
    },
    // 自定义上次更新的文本和日期格式
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },
  rewrites: {
    'packages/:pkg.md': ':pkg/index.md',
  },
  vite: {
    // vite配置
    server: {
      port: 5173,
    },
  },
})
