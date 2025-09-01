<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="absolute inset-0 w-screen min-h-[100dvh] flex flex-col">
    <div
      class="absolute inset-0 flex flex-col w-full h-full z-9999 scroll-smooth scroll-smooth-ios"
      :class="[
        route.name === 'home'
          ? 'overflow-y-auto md:overflow-y-hidden scrollbar-thin'
          : route.name === 'project'
            ? 'overflow-y-auto md:scrollbar-hidden scrollbar-thin'
            : 'overflow-y-auto',
      ]"
    >
      <AppHeader />
      <slot />
    </div>

    <div class="particles-container">
      <Particles
        :particle-count="250"
        :particle-spread="10"
        :speed="0.1"
        :particle-colors="isDark ? ['#d69aba'] : ['#8c8c8c']"
        :move-particles-on-hover="true"
        :particle-hover-factor="1"
        :alpha-particles="false"
        :particle-base-size="100"
        :size-randomness="1"
        :camera-distance="20"
        :disable-rotation="true"
      />
    </div>
  </div>
</template>

<style>
.particles-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  border-radius: 2px;
}

@media (min-width: 768px) {
  .md\:scrollbar-hidden::-webkit-scrollbar {
    width: 0px;
  }
}
.scroll-smooth-ios {
  -webkit-overflow-scrolling: touch;
}
</style>
