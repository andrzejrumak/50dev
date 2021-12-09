<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
</script>
<template>
  <div class="divide-y divide-orange-400 md:divide-y-1">
    <div class="m-4">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv2/cards/PokApp" :title="t('button.Playground')">
        PokeApp - slots, props, emit, components <map:playground />
      </router-link>
    </div>
    <div class="m-4">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv2/counter21" :title="t('button.Playground')">
        Simple Vue 2 Counter <map:playground />
      </router-link>
    </div>
    <div class="m-4 p-4">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv2/validation2" :title="t('button.Playground')">
        Simple Vue 2 input validation with error shown <map:playground />
      </router-link>
    </div>
    <div class="m-4 p-4">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv2/counter2" :title="t('button.Playground')">
        Counter Vue 2 v-model, @click, computed etc... with Windi CSS styled <map:playground />
      </router-link>
    </div>
  </div>
</template>
