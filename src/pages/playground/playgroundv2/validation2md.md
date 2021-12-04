---
title: Vue 2 counter
---

## Code

```js
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
</template>
<script >
    data() {
    return {
      value: '',
      error1: 'There is no user. Start to write',
    }
  },
  computed: {
    error2() {
      if (!this.value.length)
        return 'There is no user. Start to write'
      else if
      (this.value.length < 5)
        return 'Must be more than 5 letters'
      else
        return '√'
    },
    getClass() {
      if (this.error2 === '√')
        return 'border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md'
      else
        return 'focus:border-red-500 border-red-400 text-red-700 dark:bg-red-200 border-1 m-3 p-1 rounded-md'
    },
  },
  methods: {
    input($event) {
      this.value = $event.target.value
      if (this.value.length < 5)
        this.error1 = 'Must be more than 5 letters'
      else
        this.error1 = '√'
    },
  },
</script>
