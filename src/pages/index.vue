<script setup lang="ts">

import { useHead } from '@vueuse/head'
import blog from './playground/playgroundv3/blog/app.vue'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '50p.dev',
  meta: [
    { name: 'description', content: 'Space for mature developers' },
  ],
})

const { t, locale } = useI18n()
</script>

<template>
  <div class="divide-y divide-orange-400 md:divide-y-1">
    <div class="flex justify-center ">
      <div class="md:w-2/3 ">
        <img class="object-none h-30 w-full my-6 mb-8 hover:animate-pulse" src="/50p.png">
        <p class="mb-8">
          <em class="text-md opacity-75">{{ t('intro.desc') }}</em>
        </p>
        <div class="m-3 ">
          <em class="text-xl opacity-80"> {{ t('intro.discription_50p') }} </em>
        </div>
      </div>
    </div>
    <!-- <div class="flex justify-center p-3">
      <div class="text-3xl p-2 border-orange-500 border-1 ">
        <router-link class="icon-btn mx-2" to="/playground/playgroundv3/blog/app">
          <button class="p-1 border-orange-500 border-1 rounded-md">
            BLOG
          </button>
        </router-link>
      </div>
    </div> -->
    <div>
      <blog />
    </div>
  </div>
</template>
