/* eslint-disable vue/attribute-hyphenation */
<template>
  <poke-cards
    :pokemons="pokemons"
    :selectedid="selectedid"
    @chosen="fetchGroup"
  />
  <poke-cards
    :pokemons="group"
  />
  <!-- <div class="flex">
    <card
      v-for="pokemon in group"
      :key="pokemon.id"
      @click="fetchGroup(pokemon)"
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
  </div> -->
</template>

<script lang="ts">

import PokeCards from './PokeCards.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 3, 8]

export default {
  components: {
    PokeCards,
  },
  data() {
    return {
      pokemons: [],
      group: [],
      selectedid: 0,

    }
  },
  async created() {
    this.pokemons = await this.fetchData(IDS)
  },
  methods: {
    async fetchGroup(pokemon) {
      this.group = await this.fetchData(
        [pokemon.id + 1, pokemon.id + 3],
        this.selectedid = pokemon.id,
      )
    },
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map(id => window.fetch(`${api}/${id}`)),
      )
      const json = await Promise.all(
        responses.map(data => data.json()),
      )
      return json.map(datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name),
      }))
    },
  },
}

</script>

<style scoped>

</style>
