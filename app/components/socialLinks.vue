<script setup lang="ts">
defineProps<{
  links: Array<{
    name: string
    link: string
    icon?: string
    description?: string
    clickable?: boolean
  }>
  variant?: 'header' | 'content'
}>()

const router = useRouter()
</script>

<template>
  <div
    :class="variant === 'header' ? 'flex gap-3 items-center' : 'flex flex-wrap gap-3 justify-start'"
  >
    <div v-if="variant === 'header'" class="flex items-center  md:mr-3 mr-1">
      <UButton
        variant="ghost"
        size="md"
        class="flex items-center gap-2 text-secondary-700 dark:text-primary-200"
        icon="lucide:folder-closed"
        label="Projelerim"
        @click="router.push({ name: 'project' })"
      />
    </div>

    <div
      v-for="item in links"
      :key="item.name"
      :class="[
        variant === 'header'
          ? 'hidden md:flex items-center'
          : 'flex items-center gap-2 flex-wrap',
      ]"
    >
      <a
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          variant === 'header'
            ? 'flex items-center gap-2 hover:opacity-80 hover:scale-105'
            : 'flex items-center gap-2',
        ]"
      >
        <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5 md:w-5 md:h-5" />
      </a>
      <span v-if="variant === 'content' && item?.description" class="hover:underline">
        <a
          v-if="item.clickable"
          :href="item.link"
          class="mt-2 block text-xs sm:text-sm"
        >
          {{ item.description }}
        </a>
        <span
          v-else
          :class="item.name === 'E-mail'
            ? 'mt-2 block text-xs sm:text-sm'
            : 'text-xs sm:text-sm'"
        >
          {{ item.description }}
        </span>
      </span>
    </div>
  </div>
</template>
