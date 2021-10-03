---
title: code
---


```js
<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import codeczek from './czyta.md'

const count = ref(10)
const num = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const colorh = ref('orange')

const inc = () => {
  count.value += 1
  num.push(count.value)
  whatColor()
}

const desc = () => {
  count.value -= 1
  num.pop(count.value)
  whatColor()
}
function whatColor() {
  if (isEven(count.value))
    colorh.value = 'blue'
  else
    colorh.value = 'red'
}

function isEven(element) {
  return (element % 2 === 0)
}

const evens = computed (() => num.filter(isEven))

</script>

<template>
  <div>
    <h1 class="text-5xl">
      Playing with VUE version 3.2
    </h1>
    <h1>script setup, style v-bind, computed</h1>
    <h1>Windi CSS styled</h1>

    <h1 class="m-3 text-5xl border border-gray-600 border-4 p-3">
      {{ count }}
    </h1>

    <div v-if="isEven(count)" class="text-3xl m-3 ">
      <h1>
        | EVEN (parzysta) |
      </h1>
    </div>
    <div v-else class="text-3xl m-3 ">
      <h1>
        | ODD (nieparzysta) |
      </h1>
    </div>

    <button class="text-3xl border border-gray-600 border-4 p-3 m-3 " @click="inc">
      ADD
    </button>

    <button class="text-3xl border border-gray-600 border-4 p-3 m-3 " @click="desc">
      SUBTRACT
    </button>

    <div class="grid grid-cols-2 my-4">
      <div>
        <div v-for="n in num">
          <div>
            <h1>
              {{ n }}
            </h1>
            <span v-if="isEven(n)">
              | EVEN (parzysta) |
            </span>
            <span v-else>
              | ODD (nieparzysta) |
            </span>
          </div>
        </div>
      </div>

      <div class="">
        <h1 class="m-1 text-4xl">
          EVEN only (tylko parzysta)
        </h1>

        <div v-for="even in evens" class="i">
          <div>
            <h1 class="text-4xl">
              | {{ even }} |
            </h1>
          </div>
        </div>
      </div>
    </div>
    <codeczek />
  </div>
</template>

<style scoped>
h1 {
  color: v-bind('colorh');
}
</style>
```