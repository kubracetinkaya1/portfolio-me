<script setup lang="ts">
definePageMeta({ name: 'project' })

const { data: page } = await useAsyncData(
  'projects-page',
  () => queryCollection('projects').first(),
)

const sections = computed(() => {
  if (page.value)
    return Object.entries(page.value.projects) as Array<[string, Project[]]>
  else
    return []
})

function formatTitle(key: string): string {
  return key
    .split(/[-_ ]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<template>
  <div class="min-h-screen relative flex justify-center z-30 px-2 md:px-0">
    <div class="w-full flex justify-center">
      <div
        class="p-4 sm:p-6 max-w-xl md:max-w-4xl w-full flex flex-col gap-12 pt-16 md:pt-28"
      >
        <section
          v-for="([key, items]) in sections"
          :id="key"
          :key="key"
          class="flex flex-col gap-6 "
        >
          <a :href="`#${key}`" class="text-2xl group relative flex flex-row gap-2 items-center">
            <h2 class="font-semibold tracking-tight">
              {{ formatTitle(key) }}
            </h2>
            <span class="opacity-0 ml-1 group-hover:opacity-80 transition-opacity">#</span>
          </a>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardProject v-for="item in items" :key="item.name" :project="item" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
