<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const router = useRouter()
// const goAbout = () => {
//   if (locale.value)
//     router.push(`/locales/${encodeURIComponent(locale.value)}/about`)
// // }
// const goDiary = () => {
//   if (locale.value)
//     router.push(`/locales/${encodeURIComponent(locale.value)}/diary`)
// }

// const goPortfolio = () => {
//   if (locale.value)
//     router.push(`/locales/${encodeURIComponent(locale.value)}/portfolio`)
// }
</script>

<template>
  <nav class=" dark:bg-gray-800 bg-white text-2xl p-1 mt-6 sticky bottom-0">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon:code />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>
    <a class=" text-orange-500 text-3xl">
      {{ locale }}
    </a>
    <!-- <button class="icon-btn mx-2 !outline-none" @click="goAbout">
      <carbon-dicom-overlay />
    </button>

    <button class="icon-btn mx-2 !outline-none" @click="goDiary">
      <uil:diary />
    </button>
    <button class="icon-btn mx-2 !outline-none" @click="goPortfolio">
      <carbon:portfolio />
    </button> -->

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>
    <router-link class="icon-btn mx-2" to="/diary" :title="t('button.about')">
      <uil:diary />
    </router-link>
    <router-link class="icon-btn mx-2" to="/portfolio" :title="t('button.about')">
      <carbon:portfolio />
    </router-link>
    <!-- <router-link class="icon-btn mx-2" to="/kasa" :title="t('button.kasa')">
      <mdi:square-inc-cash />
    </router-link> -->
  </nav>
  <p class="mt-4">
    <em class="text-sm text-orange-600 opacity-75">{{ t('stopka') }}</em>
  </p>
</template>
