<template>
  <ColorfulRating :length="5" :model-value="2" class="heart-rating">
    <svg viewBox="0 0 90 90">
      <path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"/>
    </svg>
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
</script>

<style scoped>
  .heart-rating {
    --rate-color: #e1001b;
  }
</style>
