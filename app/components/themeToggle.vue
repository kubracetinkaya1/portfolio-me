<script setup lang="ts">
</script>

<template>
  <UButton
    :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
    variant="ghost"
    size="md"
    class="p-2 flex items-center justify-center text-gray-700 dark:text-primary-200 "
    @click="toggleTheme"
  />
</template>
