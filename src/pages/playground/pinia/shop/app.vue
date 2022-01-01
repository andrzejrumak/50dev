
<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from './store/index'

const store = useStore()
const amount = ref(0)

</script>
<template>
  <div class="container max-w-3xl mx-auto mt-5">
    <div class="text-3xl text-bold text-orange-500 mb-4">
      SPORT SHOP
    </div>
    <div
      class="border border-orange-500 rounded-xl shadow-xl p-4 mb-12 divide-x flex items-center"
    >
      <span class="pr-8">
        Available <span class="badge ">{{ store.available }}</span>
      </span>
      <span class="px-8">
        <span class="relative text-2xl">
          <carbon:shopping-cart />
          <span
            class="
              absolute
              text-xs
              flex
              justify-center
              bg-green-500
              text-white
              w-4
              h-4
              rounded-full
              -right-4
              top-0
            "
          >{{ store.cart }}</span>
        </span>
      </span>
    </div>
    <div class="grid md:grid-cols-3 gap-3">
      <div class=" border border-orange-500 shadow-lg rounded p-4 rounded-xl">
        <header class="mb-8">
          <span
            class="
          text-2xl text-green-400
          mr-8
          inline-flex
          p-4
          rounded-full
          shadow-lg
        "
          >
            <carbon:store />
          </span>
          <span class="font-extrabold">Market</span>
        </header>
        <div class="w-full grid grid-cols-6 gap-4 mb-8 text-orange-500 text-3xl pr-3">
          <carbon:basketball v-for="item in store.available" :key="item" />
        </div>
        <footer class="flex justify-end">
          <input v-model="amount" type="number" class="form-control mr-4 w-15" />
          <button class="btn btn-blue flex" @click="store.addToCart(amount)">
            Add to Cart
          </button>
        </footer>
      </div>
      <div class=" border border-orange-500 shadow-lg rounded p-4 rounded-xl">
        <header class="mb-8">
          <span
            class="
          text-2xl text-green-400
          mr-8
          inline-flex
          p-4
          rounded-full
          shadow-lg
        "
          >
            <carbon:shopping-cart />
          </span>
          <span class="font-extrabold">Your cart</span>
        </header>
        <div class="w-full grid grid-cols-6 gap-4 min-h-30 text-orange-500 text-3xl pr-3">
          <carbon:basketball v-for="item in store.cart" :key="item" />
        </div>
        <footer class="flex justify-end">
          <input v-model="amount" type="number" class="form-control mr-4 w-15" />
          <button class="btn btn-blue flex" @click="store.removeFromCart(amount)">
            Remove
          </button>
        </footer>
      </div>
      <div class="border border-orange-500 shadow-lg rounded p-4 rounded-xl pb-8">
        <header class="mb-8">
          <span
            class="
          text-2xl text-green-400
          mr-8
          inline-flex
          p-4
          rounded-full
          shadow-lg
        "
          >
            <carbon:money />
          </span>
          <span class="font-extrabold">Checkout</span>
        </header>
        <div class="divide-y">
          <p class="flex items-center py-4 ">
            <carbon:basketball class="mr-8 text-orange-500 text-3xl" /> <span class="badge">x {{ store.cart }}</span>
          </p>
          <p class="py-4">
            <span class="mr-8">Total:</span>{{ store.total }} €
          </p>
        </div>
        <footer class="flex justify-end">
          <button class="btn btn-blue" @click="store.procedeCheckout">
            Proceed
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
.badge {
  @apply text-xs font-bold rounded-lg px-2.5 bg-green-400 ;
}
</style>
