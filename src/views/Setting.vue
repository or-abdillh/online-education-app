<style scoped>
.curved {
  @apply bg-gray-50;
  position: relative;
  height: 5vh;
  border-top-left-radius: 50% 75%;
  border-top-right-radius: 50% 75%;
}
</style>

<template>
  <header class="sticky top-0 left-0 right-0 z-20">
    <!-- wrapper -->
    <section class="w-full md:w-4/12 md:mx-auto bg-primary p-8 flex justify-between items-center">
      <!-- back -->
      <div>
        <button class="w-12 h-12 bg-secondary rounded-full grid place-items-center"><i
            class="fa-solid fa-arrow-left-long text-gray-100"></i></button>
      </div>
      <!-- page -->
      <div class="-translate-x-3">
        <p class="text-gray-100 font-medium text-lg">Profile</p>
      </div>
      <div></div>
    </section>
  </header>
  <main>
    <!-- top -->
    <section class="h-[15vh] bg-primary"></section>

    <!-- curved -->
    <div class="curved -translate-y-8"></div>

    <!-- bottom -->
    <section class="p-8 -translate-y-44">

      <!-- profile -->
      <div class="flex flex-col items-center mb-12">
        <div class="relative mb-3">
          <img src="/avatar.png" class="rounded-full w-10/12 mx-auto" alt="Avatar">
          <button class="absolute bg-white rounded-full w-10 h-10 top-0 right-6"><i
              class="fa-solid fa-pencil"></i></button>
        </div>
        <p class="text-2xl font-medium text-primary mb-1">Shahinur Rahman</p>
        <small class="text-gray-500 text-md">shahinurrahman@gmail.com</small>
      </div>

      <!-- settings -->
      <div>
        <template v-for="setting in settings" :key="setting.title">
          <!-- setting -->
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-6 items-center">
              <span :class="setting.color" class="grid place-items-center w-16 h-16 rounded-full">
                <i class="fa-solid" :class="setting.icon"></i>
              </span>
              <p class="text-gray-600 text-lg">{{ setting.title }}</p>
            </div>
            <button v-if="setting.useChevron"><i class="fa-solid fa-chevron-right text-gray-600"></i></button>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">

type Setting = {
  icon: string
  title: string
  color: string
  useChevron?: boolean
}

const settings: Array<Setting> = [
  { icon: 'fa-user', title: 'User Details', color: 'bg-pink-100 text-pink-600', useChevron: true },
  { icon: 'fa-graduation-cap', title: 'Certificate', color: 'bg-blue-100 text-blue-600', useChevron: true },
  { icon: 'fa-wallet', title: 'Payment', color: 'bg-yellow-100 text-yellow-600', useChevron: true },
  { icon: 'fa-folder-open', title: 'Document', color: 'bg-purple-100 text-purple-600', useChevron: true },
  { icon: 'fa-sign-out', title: 'Logout', color: 'bg-sky-100 text-sky-600' },
]

</script>
