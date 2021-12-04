<template>
  <div class="divide-y divide-orange-400 md:divide-y-1 dark:bg-gray-800 bg-white text-2xl p-1 mt-6">
    <div>
      Counter Vue 2
    </div>
    <div class="text-orange-500 text-3xl">
      {{ counter }}
    </div>
    <div>
      <button class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md" @click="counter+=n">
        +
      </button>
      <button class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md" @click="counter-=n">
        -
      </button>
      <div>
        <label for="num">Enter how much you want to add to counter</label>
        <input v-model="num" type="number" class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md">
      </div>
    </div>
    <div class="p-4">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv2/counter21md">
        code <carbon:code />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  data() {
    return {
      counter: 0,
      num: 1,
    }
  },
  computed: {
    n() {
      return this.num
    },
  },
})
</script>
