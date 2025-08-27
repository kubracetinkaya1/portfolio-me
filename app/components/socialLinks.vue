<script setup lang="ts">
defineProps<{
  links: Array<{ name: string, link: string, icon?: string, description?: string }>
  showDescriptions?: boolean
}>()
</script>

<template>
  <div class="flex flex-wrap gap-3 justify-start">
    <div
      v-for="item in links"
      :key="item.name"
      class="flex items-center gap-2 flex-wrap"
    >
      <a
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 transition hover:opacity-80 hover:scale-105"
      >
        <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5 md:w-6 md:h-6" />
      </a>
      <span
        v-if="showDescriptions && item?.description"
        :class="item.name === 'E-mail' ? 'mt-1 text-xs sm:text-sm' : 'text-xs sm:text-sm'"
      >
        {{ item.description }}
      </span>
    </div>
  </div>
</template>
