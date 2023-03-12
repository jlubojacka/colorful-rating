<template>
  <ColorfulRating class="large" :length="5" v-model="rating">
  </ColorfulRating>
  <p class="description">You selected {{rating}} {{stars}}</p>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref,computed} from 'vue'

const rating = ref(3);
const stars = computed(() => {
  return rating.value > 1 ? "stars" : "star";
})

</script>

<style scoped>
  .large {
    --rate-icon-size: 3em;
    --rate-color: #ff9c1a;
  }
  .description {
    margin-bottom: 0px;
  }
</style>
