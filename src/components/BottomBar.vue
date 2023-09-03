<template>
  <section class="fixed bottom-0 left-0 right-0">
    <!-- wrapper -->
    <section class="md:w-4/12 md:mx-auto bg-white px-8 py-5 flex justify-between items-center border-t border-gray-200">
      <template v-for="menu in menus" :key="menu.name">
        <button @click="navigateTo(menu)" class="w-14 h-14 rounded-full text-lg duration-300 active:scale-90"
          :class="active == menu.name ? 'text-primary bg-tersier' : 'text-gray-400'">
          <i class="fa-solid" :class="menu.icon"></i>
        </button>
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

type Menu = {
  name: string
  icon: string
  path?: string
}

const router = useRouter()
const route = useRoute()
const active = computed(() => route.name as string)

const menus: Array<Menu> = [
  { name: 'home', icon: 'fa-home', path: '/' },
  { name: 'chats', icon: 'fa-comment', path: '/chats' },
  { name: 'setting', icon: 'fa-cog' },
  { name: 'courses', icon: 'fa-play', path: '/courses' },
]

const navigateTo = (menu: Menu): void => {

  menu?.path && router.push({ path: menu.path as string })
}

</script>
