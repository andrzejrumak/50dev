<script setup lang="ts">

import portfolio from './locales/en/portfolio.md'
import portfoliopl from './locales/pl/portfolio.md'

const { locale } = useI18n()

</script>
<template>
  <div>
    <div v-if=" locale === 'en'" class="">
      <portfolio />
    </div>
    <div v-else>
      <portfoliopl />
    </div>
  </div>
</template>
