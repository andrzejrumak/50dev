<template>
  <input
    type="text"
    :value="value"
    :class="getClass"
    @input="input"
  >
  <div class="text-red-500 text-sm">
    From methods: {{ error1 }}
  </div>
  <div class="text-red-500 text-sm">
    From computed: {{ error2 }}
  </div>
  <h1 class="text-3xl m-3">
    {{ value }}
  </h1>
  <router-link class="icon-btn mx-2" to="/playground/p/playgroundv2/validation2md" :title="code">
    <carbon:code />
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
  data() {
    return {
      value: 'user',
      error1: '',
    }
  },
  computed: {
    error2() {
      if (this.value.length < 5)
        return 'Must be more than 5 letters'
      else
        return null
    },
    getClass() {
      if (this.error2)
        return 'focus:border-red-500 border-red-400 text-red-700 dark:bg-red-200 border-1 m-3 p-1 rounded-md'
      else
        return 'border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md'
    },
  },
  methods: {
    input($event) {
      this.value = $event.target.value
      if (this.value.length < 5)
        this.error1 = 'Must be more than 5 letters'
      else
        this.error1 = '0 errors'
    },
  },
})
</script>
