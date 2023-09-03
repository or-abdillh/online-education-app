<template>
  <section class="w-full mb-4 p-3 rounded-xl bg-white flex gap-6 items-start">
    <!-- thumbnail -->
    <div class="w-4/12"><img class="rounded-xl" :src="course.thumbnail" :alt="course.title"></div>

    <!-- copywriter -->
    <div class="w-7/12">
      <p class="text-primary font-medium">{{ course.title }}</p>
      <span class="text-xs text-gray-500">
        <i class="fa-regular fa-user"></i>
        {{ course.lecture }}
      </span>
      <!-- progress -->
      <div class="mt-4">
        <!-- stats -->
        <div class="flex justify-between items-center text-gray-500 mb-1">
          <small>{{ course.video.complete }}/{{ course.video.total }} Videos</small>
          <small>{{ Math.round((100 / course.video.total) * course.video.complete) }}%</small>
        </div>
        <!-- bar -->
        <div class="h-2 rounded-xl w-full bg-tersier overflow-hidden">
          <div class="h-2 bg-primary" :style="{ width: `${(100 / course.video.total) * course.video.complete}%` }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { OurCourse } from '@interface/our-course.interface'

defineProps({
  course: {
    type: Object as () => OurCourse,
    required: true
  }
})

</script>
