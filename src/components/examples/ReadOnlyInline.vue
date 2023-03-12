<template>
  <p>
    Your rating <ColorfulRating :model-value="5" readonly class="inline-rating"></ColorfulRating> was saved.
  </p>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
</script>

<style scoped>
  .inline-rating {
    display: inline-block;
    vertical-align: text-bottom;
  }
</style>
