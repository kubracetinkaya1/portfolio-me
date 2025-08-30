<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

const { data } = await useAsyncData(`me`, () => queryCollection('me').first())
const { data: socialsPage } = useSocials()
</script>

<template>
  <div class="min-h-screen relative flex justify-center z-30 px-2 md:px-0">
    <div class="w-full flex justify-center">
      <div
        class="p-4 sm:p-6 max-w-xl md:max-w-4xl w-full text-left flex flex-col items-center justify-start
        pt-16 md:pt-28 "
      >
        <ContentRenderer v-if="data" :value="data" class="me-wrapper w-full" />
        <div class="flex flex-col w-full mt-6 gap-2">
          <SocialLinks :links="socialsPage?.links || []" variant="content" />
        </div>
      </div>
    </div>
  </div>
</template>
