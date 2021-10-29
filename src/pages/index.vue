<script setup lang="ts">

import { useHead } from '@vueuse/head'

import whynuxt3 from './locales/en/blog/whyNuxt3.md'
import whynuxt3pl from './locales/pl/blog/whyNuxt3.md'
import vue32 from './locales/en/blog/vue32.md'
import vue32pl from './locales/pl/blog/vue32.md'

import nuxt3b from './locales/en/blog/nuxt3beta.md'
import nuxt3bpl from './locales/pl/blog/nuxt3beta.md'

import starters from './locales/en/blog/starters.md'
import starterspl from './locales/pl/blog/starters.md'

import silvers from './locales/en/blog/silvers.md'
import silverspl from './locales/pl/blog/silvers.md'

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
  <div class="flex justify-center ">
    <div class="md:w-2/3 ">
      <img class="object-none h-30 w-full my-6 mb-8 hover:animate-pulse" src="/50p.png">
      <p class="mb-8">
        <em class="text-md opacity-75">{{ t('intro.desc') }}</em>
      </p>
      <!-- <div class="m-3 ">
        <em class="text-xl opacity-80"> {{ t('intro.discription_50p') }} </em>
      </div> -->

      <div class="mb-6">
        <div v-if=" locale === 'en' " class="">
          <silvers />
        </div>
        <div v-else>
          <silverspl />
        </div>
      </div>

      <div class="mb-6">
        <div v-if=" locale === 'en' " class="">
          <starters />
        </div>
        <div v-else>
          <starterspl />
        </div>
      </div>

      <div class="mb-6">
        <div v-if=" locale === 'en' " class="">
          <nuxt3b />
        </div>
        <div v-else>
          <nuxt3bpl />
        </div>
      </div>

      <div class="mb-6">
        <div v-if=" locale === 'en' " class="">
          <vue32 />
        </div>
        <div v-else>
          <vue32pl />
        </div>
      </div>

      <div v-if=" locale === 'en' " class="">
        <whynuxt3 />
      </div>
      <div v-else>
        <whynuxt3pl />
      </div>
    <!-- <div class="text-orange-600 text-2xl m-3 mt-5">
      {{ t('intro.note') }}
    </div> -->
    </div>
  </div>
</template>
