<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

const { data } = await useAsyncData(`me`, () => {
  return queryCollection('me').first()
})
const { data: socialsPage } = await useAsyncData(`socials`, () =>
  queryCollection('socials').first())
</script>

<template>
  <div class="flex justify-center  bg-gray-300 border-2 border-amber-500">
    <div>
      k
    </div>
    <div class="min-h-screen flex justify-center items-center bg-gray-300 border-4 border-red-600">
      <div
        class="w-3/5 p-6 rounded-lg bg-[#f3f4f6]"
        style="box-shadow: 0 10px 25px rgba(0,0,0,0.4);"
      >
        <ContentRenderer v-if="data" :value="data" />
      </div>
    </div>
    <div class="max-w-3xl mx-auto px-4 mt-12 border-8">
      <div class="flex gap-6">
        <a
          v-for="item in socialsPage?.links"
          :key="item.name"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
        >

          <span>{{ item.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

 <style>
 h1 {
  font-size: 2.5rem;
  color: #3d3b64;
  font-weight: 900;
}

h2 {
  font-size: 1.3rem;
  color: #3d3b64;
  font-weight: 500;
}

p {
  color: #3d3b64;
  line-height: 1.7;
}
body{
  background-color: rgb(154, 153, 155);
}
ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

li {
  color: #3d3b64;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
</style>
