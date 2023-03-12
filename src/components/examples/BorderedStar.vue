<template>
  <ColorfulRating :model-value="3" class="bordered-rating">
    <StarIcon></StarIcon>
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import StarIcon from '../icons/IconStar.vue'
</script>

<style scoped>
  .bordered-rating {
    --rate-border-color: #d94d00;
    --rate-color: #d94d00;
    --rate-inactive-color: hsl(50, 79%, 77%);
  }
</style>
