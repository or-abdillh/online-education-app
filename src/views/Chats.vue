<template>
  <header class="sticky top-0 left-0 right-0">
    <!-- wrapper -->
    <section class="bg-gray-50 md:w-4/12 md:mx-auto px-8 pt-8 pb-4">
      <section class="flex items-center justify-between">
        <!-- avatar -->
        <div><img src="/avatar.png" width="50" class="rounded-full" alt="avatar"></div>
        <!-- page -->
        <div class="-translate-x-3">
          <p class="text-primary font-medium text-lg">Chats</p>
        </div>
        <div></div>
      </section>
    </section>
  </header>

  <main class="p-8">
    <!-- searchbar -->
    <section class="bg-tersier px-4 flex items-center rounded-xl overflow-hidden gap-3 mb-8">
      <i class="fa-solid fa-search"></i>
      <input type="search" class="bg-tersier outline-none py-4" placeholder="Search">
    </section>

    <!-- chats -->
    <section>
      <template v-for="chat in chats" :key="chat.name">
        <!-- chat -->
        <section class="mb-10 flex items-center gap-4 justify-between">
          <!-- profile -->
          <div class="w-2/12"><img src="/avatar.png" class="rounded-full" alt="avatar"></div>
          <!-- detail -->
          <div class="w-9/12">
            <!-- top -->
            <div class="flex justify-between mb-1">
              <p class="text-primary font-medium text-lg">{{ chat.name }}</p>
              <small class="text-gray-500">{{ chat.timestamp }}</small>
            </div>
            <!-- bottom -->
            <div class="flex justify-between items-end gap-4">
              <p class="text-sm text-gray-500 truncate">{{ chat.lastMessage }}</p>
              <div>
                <span v-if="chat.unreads"
                  class="grid place-items-center bg-primary text-tersier text-xs w-6 h-6 rounded-full">
                  {{ chat.unreads }}
                </span>
              </div>
            </div>
          </div>
        </section>
      </template>
    </section>
  </main>
</template>

<script setup lang="ts">

type Chat = {
  name: string
  lastMessage: string
  unreads?: number
  timestamp: string
}

const chats: Array<Chat> = [
  {
    name: 'Wanda Klein',
    lastMessage: 'Aute aliquip fugiat esse consequat eiusmod cillum culpa velit consectetur ullamco.',
    unreads: 3,
    timestamp: '8:30 AM'
  },
  {
    name: 'Jessie Lebby',
    lastMessage: 'Aliquip Lorem dolor sit labore ipsum do cupidatat incididunt minim cillum non laboris amet reprehenderit.',
    unreads: 2,
    timestamp: '7:30 AM'
  },
  {
    name: 'Billy Green',
    lastMessage: 'Laboris enim reprehenderit mollit incididunt consectetur voluptate aliquip.',
    timestamp: '7:00 AM'
  },
  {
    name: 'Andre Flores',
    lastMessage: 'Adipisicing anim incididunt do commodo incididunt exercitation occaecat aliqua ea quis ad et commodo sunt.',
    unreads: 2,
    timestamp: '6:43 AM'
  },
  {
    name: 'Jaime Allen',
    lastMessage: 'Magna tempor exercitation nulla fugiat cupidatat incididunt et.',
    timestamp: '3:15 AM'
  },
  {
    name: 'Sansa Stark',
    lastMessage: 'Veniam ex fugiat ad fugiat minim irure aliquip non labore.',
    timestamp: '3:15 AM'
  }
]

</script>
