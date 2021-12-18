<template>
  <div
    class="hover:text-amber-400"
    @click="setHashtag"
  >
    #{{ hashtag }}
  </div>
</template>

<script lang="ts">
import { store } from '../store'

export default {
  props: {
    hashtag: {
      type: String,
      required: true,
    },
  },
  emits: ['setHashtag'],
  setup(props, ctx) {
    const setHashtag = () => {
      store.setHashtag(props.hashtag)
    }
    return {
      setHashtag,
    }
  },

}
</script>

<style>

</style>
