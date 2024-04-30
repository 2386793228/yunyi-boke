---
layout: home

hero:
  name: yunyi
  # text: welcome to home
  tagline: welcome to home
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
features:
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
    link: '/my/'
    linkText: 'my'
  - icon:
      src: /avator.jpg
    title: Another cool feature
    details: Lorem ipsum...
  - icon:
      dark: /avator.jpg
      light: /avator.jpg
    title: Another cool feature
    details: Lorem ipsum...
---

[动态路由 1](/foo/)

[动态路由 2](/bar/)

## title <Badge type="tip" text="1.0.0" />

<script setup>
  import demo from './components/demo.vue'
</script>
<demo />
