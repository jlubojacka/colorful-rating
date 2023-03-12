<template>
  <ColorfulRating multicolor :model-value="2" class="heart-rating">
    <img src="@/assets/icons/romance.png" alt="Heart rating icon" class="icon">
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
</script>

<style scoped>
  .heart-rating {
    --rate-spacing: 0.3em;
  }
  .icon {
    width: 2em;
    height: 2em;
  }
</style>
