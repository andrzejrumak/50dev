<template>
  <div class="text-3xl p-2 border-orange-500 border-1 ">
    <button class="p-1 border-orange-500 border-1 rounded-md" @click="click">
      Like
    </button> {{ post.likes }}
  </div>
  <div>
    <hashtag
      v-for="hashtag in post.hashtags"
      :key="hashtag"
      :hashtag="hashtag"
      class="p-3"
    />
  </div>
</template>

<script lang="ts">
import { store } from '../store.js'
import Hashtag from './Hashtag.vue'

export default {
  components: { Hashtag },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const click = () => {
      store.incrementLike(props.post)
    }
    return {
      click,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
