<script setup lang="ts">
import { ref } from 'vue'
import codeczek from './validation31md.md'
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

<script lang="ts">
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
        Vue 3 form validation with components, props, emits 
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
       <codeczek />
  </div>
</template>
