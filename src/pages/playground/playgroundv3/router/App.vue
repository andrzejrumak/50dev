<template>
  <div class="text-orange-500 text-2xl m-4 items-center  divide-y divide-orange-400 md:divide-y-1">
    <div class="m-4">
      My App Routes
    </div>
    <div class="text-green-400 m-3">
      <router-link
        to="/playground/playgroundv3/router/hello"
        class="m-4"
      >
        Hello
      </router-link>
      <router-link
        to="/playground/playgroundv3/router/posts"
        class="m-4"
      >
        Posts
      </router-link>
    </div>
  </div>

  <router-view />
</template>

<script>
export default {

}
</script>

<style>

</style>
