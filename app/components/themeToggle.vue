<script setup lang="ts">
import { isDark, toggleTheme } from '~/utils/theme'
</script>

<template>
  <UButton
    :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
    variant="ghost"
    size="md"
    class="p-1 flex items-center justify-center text-gray-700 dark:text-primary-200"
    @click="toggleTheme"
  />
</template>
