<style scoped>
.curved {
  position: relative;
  background: #32357A;
  height: 5vh;
  border-bottom-left-radius: 50% 75%;
  border-bottom-right-radius: 50% 75%;
}

.no-ruler::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <main class="min-h-screen">

    <!-- top section -->
    <section class="h-[40vh] md:h-[55vh] bg-primary p-8">
      <header class="text-white flex justify-between items-center mb-10">
        <div class="flex gap-4 items-center">
          <!-- avatar -->
          <div><img class="rounded-full" src="/avatar.png" width="50" alt="Avatar"></div>
          <!-- name -->
          <p class="text-lg font-semibold">Hi, Shahinur</p>
        </div>
        <!-- bell -->
        <div>
          <span class="grid place-items-center w-10 h-10 border border-white rounded-full"><i
              class="fa-regular fa-bell"></i></span>
        </div>
      </header>

      <section class="mb-10">
        <!-- welcome -->
        <h1 class="text-xl text-white font-semibold mb-4">Find your favorite <br> Course here!</h1>

        <!-- searchbar -->
        <div class="text-white flex items-center px-5 bg-secondary rounded-full">
          <!-- icon -->
          <i class="fa-solid fa-search me-2"></i>
          <input type="text" placeholder="Search Course" class="bg-secondary w-11/12 py-4 outline-none">
          <i class="fa-solid fa-microphone"></i>
        </div>
      </section>

      <!-- categories -->
      <section class="grid grid-cols-3 gap-4 text-primary">
        <template v-for="category in categories" :key="category.name">
          <div
            class="px-4 py-6 z-10 rounded-lg bg-white flex flex-col items-center gap-4 border border-gray-200 shadow-sm">
            <span class="grid place-items-center rounded-full p-3 w-12 h-12 bg-tersier">
              <i class="fa-solid" :class="category.icon"></i>
            </span>
            <p class="text-sm">{{ category.name }}</p>
          </div>
        </template>
      </section>
    </section>
    <!-- end of top section -->

    <!-- curved effect -->
    <section class="curved -translate-y-1  mb-24"></section>

    <!-- trendings -->
    <section>
      <header class="px-8 flex justify-between items-center mb-4">
        <p class="text-xl font-semibold text-primary">Trending Courses</p>
        <router-link to="/" class="text-gray-400 font-medium">See all</router-link>
      </header>

      <!-- cards -->
      <section class="flex gap-6 overflow-auto px-8 no-ruler">
        <template v-for="course in courses" :key="course.title">
          <CardTrendingCourse :course="course"></CardTrendingCourse>
        </template>
      </section>
    </section>

  </main>
</template>

<script setup lang="ts">

import CardTrendingCourse from '@/components/card/TrendingCourse.vue'

type Category = {
  name: string
  icon: string
}

type Course = {
  title: string
  lectures: number
  thumbnail: string
}

// dummy categories
const categories: Array<Category> = [
  {
    name: 'Design',
    icon: 'fa-brush'
  },
  {
    name: 'Marketing',
    icon: 'fa-rocket'
  },
  {
    name: 'Editing',
    icon: 'fa-clipboard'
  }
]

// dummy courses
const courses: Array<Course> = [
  { title: 'UI/UX Design', lectures: 20, thumbnail: '/ui-ux-design.png' },
  { title: 'Digital Marketing', lectures: 20, thumbnail: '/digital-marketing.png' },
]

</script>
