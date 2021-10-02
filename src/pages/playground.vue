<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import codeczek from './czyta.md'

const count = ref(10)
const num = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const inc = () => {
  count.value += 1
  num.push(count.value)
  if (isParz())
    colorh.value = 'blue'

  else
    colorh.value = 'red'
}
const colorh = ref('orange')

function isParz() {
  return count.value % 2 === 0
}
function isPara(element) {
  return (element % 2 === 0)
}

const parzyste = computed (() => num.filter(isPara))

console.log(parzyste.value)

</script>

<template>
  <div>
    <h1 class="m-3 text-2xl">
      {{ count }}
    </h1>

    <div v-if="isParz()" class="text-3xl m-3 ">
      <h1>
        | Parzysta |
      </h1>
    </div>
    <div v-else class="text-3xl m-3 ">
      <h1>
        | Nieparzysta |
      </h1>
    </div>

    <button class="code" @click="inc">
      dodaj
    </button>

    <div v-for="n in num">
      <div>
        <h1>
          {{ n }}
        </h1>
        <span v-if="isPara(n)">
          | Parzysta |
        </span>
        <span v-else>
          | Nieparzysta |
        </span>
      </div>
    </div>
    <h1 class="m-1 text-2xl">
      TYLKO PARZYSTE
    </h1>

    <div v-for="n in parzyste" class="inline-flex">
      <div>
        <h1>
          | {{ n }} |
        </h1>
      <!-- <span v-if="isPara(n)">
    Parzysta
  </span>
  <span v-else>
    Nieparzysta
  </span> -->
      </div>
    </div>

    <codeczek />
  </div>
</template>

<style scoped>
h1 {
  color: v-bind('colorh');
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

.code {
  background-color: rgb(189, 196, 94);
  padding: 2px 4px;
  border-radius: 4px;
  color: #3913a1;
}

</style>
