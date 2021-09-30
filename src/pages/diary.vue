<script setup lang="ts">

import diary from './locales/en/diary.md'
import diarypl from './locales/pl/diary.md'

const { locale } = useI18n()

</script>
<template>
  <div>
    <div v-if=" locale === 'en'" class="">
      <diary />
    </div>
    <div v-else>
      <diarypl />
    </div>
  </div>
</template>
