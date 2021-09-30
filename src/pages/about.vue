<script setup lang="ts">

import about from './locales/en/about.md'
import aboutpl from './locales/pl/about.md'

const { locale } = useI18n()

</script>
<template>
  <div>
    <div v-if=" locale === 'en'" class="">
      <about />
    </div>
    <div v-else>
      <aboutpl />
    </div>
  </div>
</template>
