---
title: Validation Vue 3
---

## CODE

```js
<script setup lang="ts">
import { ref, computed } from 'vue'

const value = ref('')
const error1 = ref('There is no user. Start to write')
const isChecked = ref(false)

const error2 = computed (() => {
  if (!value.value.length)
    return 'There is no user. Start to write'
  else if (value.value.length < 5)
    return 'Must be more than 5 letters'
  else
    return '√'
})
const getClass = computed (() => {
  if (error2.value === '√')
    return 'border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md'
  else
    return 'focus:border-red-500 border-red-400 text-red-700 dark:bg-red-200 border-1 m-3 p-1 rounded-md'
})
const checked = computed (() => {
  if (isChecked.value)
    return 'text-emerald-800'
  else
    return null
})
function input($event) {
  value.value = $event.target.value
  if (value.value.length < 5) {
    error1.value = 'Must be more than 5 letters'
    isChecked.value = false
  }
  else {
    error1.value = '√'
    isChecked.value = true
  }
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
        <label for="User">User</label>
        <input
          type="text"
          :value="value"
          :class="getClass"
          @input="input"
        >
      </div>
      <div class="text-red-500 text-sm" :class="checked">
        From methods: {{ error1 }}
      </div>
      <div class="text-red-500 text-sm" :class="checked">
        From computed: {{ error2 }}
      </div>
      <h1 class="text-3xl m-3">
        Your user name: {{ value }}
         <span v-if="isChecked" class="text-emerald-800"> √</span>
      </h1>
    </div>
</template>
