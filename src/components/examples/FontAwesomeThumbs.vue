<template>
  <ColorfulRating v-model="rating" class="fontawesome-rating">
    <font-awesome-icon icon="thumbs-up"></font-awesome-icon>
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref} from 'vue'
const rating = ref(3);
</script>

<style scoped>
  .fontawesome-rating {
    --rate-spacing: 1.2em;
    --rate-color: #0f2d7a;
    --rate-inactive-color: rgba(87, 87, 87, 0.93);
  }
</style>
