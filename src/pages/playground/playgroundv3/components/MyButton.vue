<script setup lang="ts">
const props = defineProps({
  bs: String,
  disabled: Boolean,
})
</script>
<template>
  <div>
    <button
      :class="bs"
      :disabled="disabled"
    >
      Submit
    </button>
  </div>
</template>

<style scoped>
button:disabled {
    opacity: 0.5;
}
</style>
