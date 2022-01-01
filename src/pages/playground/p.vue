<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="text-green-500">
    <p class="mb-8 text-2xl">
      <em class="text-md opacity-75">{{ t('intro.playground') }}</em>
    </p>
    <router-link
      class="icon-btn mx-2"
      to="/playground/playgroundv3/p3"
      :title="t('button.Playgroundv3')"
    >
      {{ t('button.Playgroundv3') }} <map:playground />
    </router-link>

    <router-link
      class="icon-btn mx-2"
      to="/playground/playgroundv2/p2"
      :title="t('button.Playgroundv2')"
    >
      {{ t('button.Playgroundv2') }} <map:playground />
    </router-link>
    <router-link
      class="icon-btn mx-2"
      to="/playground/pinia/pinia"
      :title="t('button.Playgroundv2')"
    >
      {{ t('button.pinia') }} <map:playground />
    </router-link>
  </div>
</template>
