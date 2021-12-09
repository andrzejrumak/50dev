<template>
  <div class="flex">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      class=" card "
      :class="{opa: selectedid && pokemon.id !== selectedid}"
      @click="click(pokemon)"
    >
      <template #title>
        {{ pokemon.name }}
      </template>
      <template #content>
        <img :src="pokemon.sprite" alt="pokemon.name">
      </template>
      <template #description>
        <div
          v-for="type in pokemon.types"
          :key="type"
        >
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script lang="ts">
import Card from './Card.vue'

export default {
  components: {
    Card,
  },
  props: {
    selectedid: {
      type: Number,
      required: false,
      default: 0,
    },
    pokemons: {
      type: Array,
      default: [],
    },
  },
  methods: {
    click(pokemon) {
      this.$emit('chosen', pokemon)
    },
  },
}
</script>

<style>

.opa {
  opacity: 0.5;
}
.card:hover {
   opacity: 1;
}
</style>
