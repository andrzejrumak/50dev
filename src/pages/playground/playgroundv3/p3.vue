<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
</script>
<template>
  <div class="divide-y divide-orange-400 md:divide-y-1">
    <div class="m-4 p-2">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv3/composition/app" :title="t('button.Playground')">
        Vue 3 Composition Api ref, reactive, computed, v-model, watch, watchEffect, composable <map:playground />
      </router-link>
    </div>
    <div class="m-4">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv3/validation3" :title="t('button.Playground')">
        Simple input validation with error shown <map:playground />
      </router-link>
    </div>
    <div class="m-4 p-2">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv3/counterv3" :title="t('button.Playground')">
        Counter script setup, style v-bind, computed with Windi CSS styled <map:playground />
      </router-link>
    </div>
    <div class="m-4 p-2">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv3/validation31" :title="t('button.Playground')">
        Vue 3 form validation with components, props, emits <map:playground />
      </router-link>
    </div>
  </div>
</template>
