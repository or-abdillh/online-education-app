<template>
  <section class="fixed bottom-0 left-0 right-0">
    <!-- wrapper -->
    <section class="md:w-4/12 md:mx-auto bg-white px-8 py-5 flex justify-between items-center border-t border-gray-200">
      <template v-for="menu in menus" :key="menu.name">
        <button @click="active = menu.name" class="w-14 h-14 rounded-full text-lg duration-300 active:scale-90"
          :class="active == menu.name ? 'text-primary bg-tersier' : 'text-gray-400'">
          <i class="fa-solid" :class="menu.icon"></i>
        </button>
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'

type Menu = {
  name: string
  icon: string
}

const active = ref<string>('home')

const menus: Array<Menu> = [
  { name: 'home', icon: 'fa-home' },
  { name: 'chat', icon: 'fa-comment' },
  { name: 'setting', icon: 'fa-cog' },
  { name: 'course', icon: 'fa-play' },
]

</script>
