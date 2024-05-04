---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/71803933?v=4',
    name: 'yunyi',
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/2386793228' },
      { icon: 'twitter', link: 'https://juejin.cn/user/352295950759463i' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
