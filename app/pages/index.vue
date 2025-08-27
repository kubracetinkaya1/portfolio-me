<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

const { data } = await useAsyncData(`me`, () => queryCollection('me').first())
const { data: socialsPage } = await useAsyncData(`socials`, () => queryCollection('socials').first())
</script>

<template>
  <div class="min-h-screen relative flex items-center justify-center z-30">
    <div class="absolute top-4 left-4 text-gray-700 font-semibold text-lg z-30 px-2 py-1 rounded">
      KC
    </div>
    <div class="absolute top-4 right-4 md:hidden z-30">
      <UButton
        icon="lucide:sun"
        variant="ghost"
        size="md"
        class="p-2 flex items-center justify-center text-primary-200"
        @click="toggleTheme"
      />
    </div>
    <div class="hidden md:flex absolute top-10 right-8 gap-4 items-center z-20">
      <a
        v-for="item in socialsPage?.links"
        :key="item.name"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2  transition"
      >
        <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
      </a>
      <UButton
        icon="lucide:sun"
        variant="ghost"
        size="md"
        class="p-2 flex items-center justify-center text-primary-200"
        @click="toggleTheme"
      />
    </div>
    <div class="w-full flex justify-center">
      <div
        class="p-6 max-w-3xl w-11/12 md:w-2/3 text-left shadow-md rounded-md flex flex-col items-center justify-center bg-secondary-200/50"
      >
        <ContentRenderer v-if="data" :value="data" class="me-wrapper" />
        <div class="flex flex-col w-full mt-8 gap-2">
          <div class="flex flex-wrap gap-4 justify-start md:justify-start">
            <div
              v-for="item in socialsPage?.links"
              :key="item.name"
              class="flex items-center gap-2"
            >
              <a
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2  transition"
              >
                <UIcon v-if="item.icon" :name="item.icon" class="w-6 h-6" />
              </a>
              <span v-if="item?.description" class="text-sm text-gray-400">{{ item.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
