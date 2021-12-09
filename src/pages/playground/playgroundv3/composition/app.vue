<template>
  <div
    class=" items-center text-orange-500 divide-y divide-orange-400 md:divide-y-1 dark:bg-gray-800 bg-white text-2xl p-1 mt-6"
  >
    <div class="frame">
      <div>{{ msg }}</div>
    </div>
    <div>
      <p class="text-orange-600 m-3 text-xl">
        Input
      </p>
      <input v-model="msg" class="frame-input" type="text" />
    </div>

    <div>
      <p class="text-orange-600 m-3 text-xl">
        Input value to be added
      </p>
      <input v-model="val" class=" frame-input " type="number" />
    </div>

    <div>
      <p class="text-orange-600 m-3 text-xl">
        Click to add {{ val }}
      </p>
      <button
        class="frame"
        @click="increment"
      >
        {{ count }}
      </button>
      <button
        class="frame"
        @click="incrementa('a')"
      >
        {{ numbers.a }}
      </button>
      <button
        class="frame"
        @click="incrementa('b')"
      >
        {{ numbers.b }}
      </button>
      <p class="text-orange-600 m-3 text-xl">
        Total
      </p>
      <div class=" frame ">
        {{ total }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  setup() {
    const msg = ref('Hello Composition Vue 3')
    const count = ref(0)
    const val = ref(1)
    const numbers = reactive(
      {
        a: 2,
        b: 4,
      },
    )
    const increment = () => {
      count.value += val.value
    }
    const incrementa = (n) => {
      return numbers[n] += val.value
    }
    const total = computed(() => {
      return count.value + numbers.a + numbers.b
    })

    return {
      msg,
      count,
      val,
      increment,
      incrementa,
      numbers,
      total,
    }
  },
}
</script>

<style>
.frame {
    @apply text-3xl m-6 border-yellow-200 dark:bg-yellow-100
     border-1 m-3 p-1 rounded-md
}
.frame-input {
    @apply p-1 rounded-md m-3 bg-cool-gray-100 dark:bg-gray-700
     border-dark-100 border-1
}
</style>
