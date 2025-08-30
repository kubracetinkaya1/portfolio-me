<template>
  <div class="fixed left-0 top-0 w-screen h-screen flex flex-col">
    <div class="absolute left-0 top-0 flex flex-col w-full h-full z-9999">
      <AppHeader />
      <div class="flex-1 w-full overflow-y-scroll scroll-smooth">
        <slot />
      </div>
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
</style>
