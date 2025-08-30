<script setup lang="ts">
import signBlack from '@/assets/sign/sign_black.png'
import signWhite from '@/assets/sign/sign_white.png'

const { data: socialsPage } = useSocials()

const mounted = ref<boolean>(false)
onMounted(() => mounted.value = true)
</script>

<template>
  <header class="min-h-20 py-2 px-3">
    <div v-if="mounted" class="h-20 flex w-full items-center flex-row justify-between">
      <RouterLink :to="{ name: 'home' }" aria-label="Go to homepage">
        <img :src="isDark ? signWhite : signBlack" class="h-20">
      </RouterLink>
      <div class="flex flex-row items-center gap-4">
        <SocialLinks :links="socialsPage?.links || []" variant="header" />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
