<template>
  <ColorfulRating :model-value="4" :length="7" class="bordered-heart">
    <GemstoneHeart></GemstoneHeart>
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import GemstoneHeart from '@/assets/icons/gemstone.svg'   /* SVG loader needed */
</script>

<style scoped>
  .bordered-heart {
    --rate-icon-size: 2.8em;
    --rate-inactive-color: pink;
    --rate-color: #fd4162;
    --rate-border-color: #49001a;
  }
</style>
