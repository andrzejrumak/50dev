---
title: Validation Vue 3
---

## CODE

### validation31.vue

```js
<script setup>
import { ref } from 'vue'

import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'

const username = ref({
  value: '',
  valid: false,
})

const password = ref({
  value: '',
  valid: false,
},
)
const bs = ref('m-4 border-emerald-400 bg-lime-100 dark:bg-lime-900 border-1 m-3 p-1 rounded-md')

const valid = computed(() => {
  return username.value.valid && password.value.valid
})

function submit() {
  console.log('Submit')
}
</script>

<script>
export default {
  methods: {
    update(payload) {
      this[payload.name] = {
        value: payload.value,
        valid: payload.valid,
      }
    },    
  }
  
}
</script>

<template>
  <div class="divide-y divide-orange-400 md:divide-y-1">
    <div>
      <h1 class="text-2xl m-4">
        Vue 3 form validation with components, props, emites 
      </h1>
    </div>
    <form @submit.prevent="submit">
      <my-input
        name="Username"
        :rules="{ required: true, min: 5}"
        :value="username.value"
        type="text"
        @update="update"
      />
      <my-input
        name="Password"
        :rules="{ required: true, min: 7}"
        :value="password.value"
        type="password"
        @update="update"
      />
      <my-button
      :bs="bs"
      :disabled="!valid"
      />    
    </form>
  </div>
</template>

```

### MyInput.vue

```js
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'text' },
  value: { type: String, required: true },
  name: { type: String, required: true },
  rules: { type: Object, default: {} },
})

const error = computed(() => {
  return validate(props.value)
})

const getClass = computed (() => {
  if (error.value !== '√')
    return 'focus:border-red-500 border-red-400 text-red-700 dark:bg-red-200 border-1 m-3 p-1 rounded-md'
  else
    return 'border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md'
})

function validate(value) {
  if (props.rules.required && value.length === 0)
    return 'This value is required.'
  else if (props.rules.min && value.length < props.rules.min)
    return `The minimum length ${props.rules.min}.`
}

</script>
<script lang="ts">

export default {
  emits: ['update'],  
  methods: {
    input($event) {
      this.$emit('update', {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        valid: !this.validate($event.target.value),
      })
    },    
  }
}
</script>
<template>
  <div class="flex inline-flex">
    <label :for="name">{{ name }}</label>
    <p class="text-pink-600 mx-4 text-sm opacity-70">
      {{ error }}
    </p>
  </div>
  <div>
    <Input
      :id="name"
      :type="type"
      :value="value"
      @input="input"
    />
  </div>
</template>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 100%;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 50%;
  cursor: pointer;
}
</style>
```

### MyButton

```js
<script setup lang="ts">
const props = defineProps({
  bs: String,
  disabled: Boolean,
})
</script>
<template>
  <div>
    <button
      :class="bs"
      :disabled="disabled"
    >
      Submit
    </button>
  </div>
</template>

<style scoped>
button:disabled {
    opacity: 0.5;
}
</style>
```
