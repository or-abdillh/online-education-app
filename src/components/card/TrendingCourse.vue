<template>
  <section class="rounded-xl overflow-hidden bg-white min-w-[60%] border border-gray-100 shadow-sm">
    <header>
      <img class="w-full" :src="course.thumbnail" alt="">
    </header>
    <div class="p-3 flex gap-2 items-start justify-between">
      <!-- heading -->
      <div>
        <p class="text-sm font-semibold text-gray-600 text-ellipsis">{{ course.title }}</p>
        <small class="text-gray-500">{{ course.lectures }} lectures</small>
      </div>

      <!-- action -->
      <div>
        <button @click="isLiked = !isLiked" class="w-8 h-8 text-sm bg-tersier rounded-full text-primary"><i
            :class="isLiked ? 'fa-solid' : 'fa-regular'" class="fa-heart duration-300"></i></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { Course } from '@interface/course.interface'

const isLiked = ref<boolean>(false)

defineProps({
  course: {
    type: Object as () => Course,
    required: true
  }
})

</script>
