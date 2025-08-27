<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

const { data } = await useAsyncData(`me`, () => queryCollection('me').first())
const { data: socialsPage } = await useAsyncData(`socials`, () => queryCollection('socials').first())
</script>

<template>
  <div class="min-h-screen relative flex items-center justify-center z-30 px-2 md:px-0">
    <div class="absolute top-4 left-4 font-semibold text-lg z-30 px-2 py-1 rounded">
      KC
    </div>
    <div class="absolute top-4 right-4 md:hidden z-30">
      <ThemeToggle />
    </div>
    <div class="hidden md:flex absolute top-10 right-4 lg:right-8 gap-3 items-center z-20 flex-wrap">
      <a
        v-for="item in socialsPage?.links"
        :key="item.name"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 transition text-sm hover:opacity- hover:scale-105"
      >
        <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5 md:w-6 md:h-6" />
      </a>
      <ThemeToggle />
    </div>

    <div class="w-full flex justify-center">
      <div
        class="p-4 sm:p-6 max-w-xl md:max-w-3xl w-full text-left  flex flex-col items-center justify-center "
      >
        <ContentRenderer v-if="data" :value="data" class="me-wrapper w-full" />
        <div class="flex flex-col w-full mt-6 gap-2">
          <SocialLinks :links="socialsPage?.links || []" />
        </div>
      </div>
    </div>
  </div>
</template>
