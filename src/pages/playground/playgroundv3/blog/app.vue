<template>
  <div class="text-3xl text-bold text-orange-500 m-4">
    BLOG
  </div>
  <div>
    Find with Tag
    <input
      list="tags"
      :value="currentTag"
      class="border-emerald-400 dark:bg-dark-500 border-1 m-3 p-1 rounded-md"
      @input="setHashtag"
    />
    <datalist id="tags">
      <option value="vue" />
      <option value="nuxt" />
      <option value="silvers" />
    </datalist>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3">
    <card
      v-for="post in filteredPosts"
      :key="post.id"
    >
      <template #title>
        {{ post.title }}
      </template>
      <template #content>
        {{ post.content }}
      </template>
      <template #description>
        <controls :post="post" />
      </template>
    </card>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { store } from './store.js'
import Card from './components/Card.vue'
import Controls from './components/Controls.vue'

export default {
  components: {
    Card,
    Controls,
  },
  setup() {
    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }

    return {
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag,
      ),
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
