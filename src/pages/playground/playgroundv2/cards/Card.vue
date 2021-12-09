<template>
  <div>
    <div
      class=" items-center text-orange-500 divide-y divide-orange-400 md:divide-y-1 dark:bg-gray-800 bg-white text-2xl p-1 mt-6"
    >
      <div class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md">
        <slot name="title" />
      </div>
      <div class="">
        <div class=" mx-auto border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md">
          <slot name="content" />
        </div>
      </div>

      <div class="border-emerald-400 dark:bg-lime-700 border-1 m-3 p-1 rounded-md">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
