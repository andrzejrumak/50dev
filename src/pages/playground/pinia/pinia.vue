<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
</script>
<template>
  <div class="divide-y divide-orange-400 md:divide-y-1">
    <div class="m-4 p-2">
      <router-link class="icon-btn mx-2" to="/playground/pinia/shop/app" :title="t('button.Playground')">
        Shop with pinia store <map:playground />
      </router-link>
    </div>
  </div>
</template>
