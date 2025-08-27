<template>
  <div class="flex flex-col w-screen h-screen dark:bg-black bg-zinc-200">
    <div class="absolute left-0 top-0 w-screen h-screen">
      <slot />
    </div>
    <div class="particles-container absolute left-0 top-0 w-screen h-screen object-cover">
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
  position: relative;
  overflow: hidden;
}
</style>
