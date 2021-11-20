<script setup lang="ts">
import { ref, computed } from 'vue'
import codeczek from './validation3md.md'

const value = ref('user')
const error1 = ref('')

const error2 = computed (() => {
  if (value.value.length < 5)
    return 'Must be more than 5 letters'
  else
    return null
})
const getClass = computed (() => {
  if (error2.value)
    return 'focus:border-red-500 border-red-400 text-red-700 dark:bg-red-200 border-1 m-3 p-1 rounded-md'
  else
    return 'border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md'
})

function input($event) {
  value.value = $event.target.value
  if (value.value.length < 5)
    error1.value = 'Must be more than 5 letters'
  else
    error1.value = '0 errors'
}
</script>

<template>
  <div class="divide-y divide-orange-400 md:divide-y-1">
    <div>
      <h1 class="text-2xl m-4">
        Simple input validation with error shown
      </h1>
    </div>
    <div class="mb-4">
      <div class="m-4">
        <input
          type="text"
          :value="value"
          :class="getClass"
          @input="input"
        >
      </div>
      <div class="text-red-500 text-sm">
        From methods: {{ error1 }}
      </div>
      <div class="text-red-500 text-sm">
        From computed: {{ error2 }}
      </div>
      <h1 class="text-3xl m-3">
        {{ value }}
      </h1>
    </div>

    <codeczek />
  </div>
</template>
