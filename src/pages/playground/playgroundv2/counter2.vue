<template>
  <div class="divide-y divide-orange-400 md:divide-y-1 dark:bg-gray-800 bg-white text-2xl p-1 mt-6">
    <div>
      <h1 class="text-4xl text-orange-600 m-5">
        Vue 2 v-model, @click, computed etc...
      </h1>
    </div>
    <div class="p-4">
      <p>First name: {{ firstName }}</p>
      <p>Last name: {{ lastName }}</p>
      <p class="text-3xl m-3">
        Generated username: {{ userName }}
      </p>
      <p>Min of scope: {{ scopeMin }}</p>
      <p>Max of scope: {{ scopeMax }}</p>
      <button class="border-emerald-400 bg-lime-100 dark:bg-lime-900 border-1 m-3 p-1 rounded-md" @click="change">
        Change the end
      </button>
      <h1>First Name</h1>
      <input
        v-model="firstName"
        class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md"
        type="text"
      > <h1>Last Name</h1>
      <input
        v-model="lastName"
        class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md"
        type="text"
      > <h1>Min of scope</h1>
      <input
        v-model="scopeMin"
        class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md"
        type="text"
      > <h1>Max of scope</h1>
      <input
        v-model="scopeMax"
        class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md"
        type="text"
      > <h1>Increment</h1>
      <button class="border-emerald-400 bg-lime-100 dark:bg-lime-900 border-1 m-3 p-1 rounded-md" @click="inc">
        Add
      </button>
      <h1>Discrement</h1>
      <button class="border-emerald-400 bg-lime-100 dark:bg-lime-900 border-1 m-3 p-1 rounded-md" @click="dic">
        Take
      </button>
    </div>
    <div class="p-4">
      <router-link class="icon-btn mx-2" to="/playground/playgroundv2/counter2md" :title="code">
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
      firstName: 'John',
      lastName: 'Doe',
      random: 1,
      scopeMin: 5,
      scopeMax: 15,
    }
  },
  computed: {
    userName() {
      return `${this.firstName}_${this.lastName}_${this.random}`
    },
  },
  methods: {
    change() {
      this.random = Math.floor(Math.random() * (this.scopeMax - this.scopeMin + 1) + this.scopeMin)
    },
    inc() {
      this.random++
    },
    dic() {
      this.random--
    },
  },

})

</script>
