<template>
  <header class="sticky top-0 left-0 right-0">
    <!-- wrapper -->
    <section class="bg-gray-50 md:w-4/12 md:mx-auto px-8 pt-8 pb-4">
      <section class="flex items-center justify-between">
        <!-- avatar -->
        <div><img src="/avatar.png" width="50" class="rounded-full" alt="avatar"></div>
        <!-- page -->
        <div>
          <p class="text-primary font-medium text-lg">Our Courses</p>
        </div>
        <!-- search -->
        <div>
          <span class="grid place-items-center h-10 w-10 rounded-full bg-tersier"><i
              class="fa-solid fa-search text-primary"></i></span>
        </div>
      </section>
    </section>
  </header>
  <main class="p-8">
    <!-- filter -->
    <section class="grid grid-cols-2 gap-2 mb-8">
      <template v-for="filter in filters" :key="filter">
        <button @click="filterActive = filter"
          :class="filterActive == filter ? 'bg-primary text-gray-100' : 'bg-tersier text-primary'"
          class="py-5 rounded-xl duration-100">{{ filter
          }}</button>
      </template>
    </section>

    <!-- lists -->
    <section>
      <!-- ongoing -->
      <template v-if="filterActive == 'Ongoing'">
        <template v-for="course in ongoingCourses" :key="course.title">
          <CardOurCourse :course="course"></CardOurCourse>
        </template>
      </template>

      <!-- complete -->
      <template v-else>
        <template v-for="course in completeCourses" :key="course.title">
          <CardOurCourse :course="course"></CardOurCourse>
        </template>
      </template>
    </section>
  </main>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { OurCourse } from '@interface/our-course.interface'
import CardOurCourse from '@/components/card/OurCourse.vue'

const filters: Array<string> = ['Ongoing', 'Complete']

const filterActive = ref<string>(filters[0])

// dummies
const ongoingCourses: Array<OurCourse> = [
  {
    title: 'UI/UX Design',
    lecture: 'Mahmud Al Hassan',
    thumbnail: '/ui-ux-design.png',
    video: {
      total: 20,
      complete: 18
    }
  },
  {
    title: 'Digital Marketing',
    lecture: 'Mahmud Al Hassan',
    thumbnail: '/digital-marketing.png',
    video: {
      total: 15,
      complete: 12
    }
  },
  {
    title: 'Video Editing',
    lecture: 'Mahmud Al Hassan',
    thumbnail: '/video-editing.png',
    video: {
      total: 10,
      complete: 4
    }
  },
  {
    title: 'App Development',
    lecture: 'Mahmud Al Hassan',
    thumbnail: '/app-development.png',
    video: {
      total: 12,
      complete: 6
    }
  }
]

const completeCourses: Array<OurCourse> = [
  {
    title: 'UI/UX Design',
    lecture: 'Mahmud Al Hassan',
    thumbnail: '/ui-ux-design.png',
    video: {
      total: 20,
      complete: 20
    }
  },
  {
    title: 'Video Editing',
    lecture: 'Mahmud Al Hassan',
    thumbnail: '/video-editing.png',
    video: {
      total: 10,
      complete: 10
    }
  }
]
</script>
