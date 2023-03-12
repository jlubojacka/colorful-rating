<template>
  <ColorfulRating class="puzzle-rating" v-bind="ratingProps" v-model="rating">
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref} from 'vue'

const rating = ref(3);
const ratingProps = {
  length: 4,
  descriptions: ["easy","medium","hard","very hard"]
};
</script>

<style scoped>
  .puzzle-rating {
    --rate-color: green;
    --rate-inactive-color: #92e05d;
    --rate-spacing: 0.45em;
  }
</style>
