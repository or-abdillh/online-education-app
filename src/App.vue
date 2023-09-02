<template>
  <main class="bg-gray-50 md:w-4/12 md:mx-auto pb-16">
    <router-view></router-view>
  </main>
  <BottomBar></BottomBar>
</template>

<script setup lang="ts">

import BottomBar from '@/components/BottomBar.vue'

</script>
