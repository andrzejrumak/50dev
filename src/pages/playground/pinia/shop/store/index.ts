import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('shop', {
  state: () => ({
    shop: 32,
    cart: 0,
    price: 230,
  }),
  getters: {
    available(state) {
      return state.shop - state.cart
    },
    total(state) {
      return state.cart * state.price
    },
  },
  actions: {
    addToCart(amount: number) {
      this.cart += amount
    },
    removeFromCart(amount: number) {
      if (amount > this.cart)
        this.cart = 0

      else
        this.cart -= amount
    },
    procedeCheckout() {
      this.shop -= this.cart
      this.cart = 0
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
