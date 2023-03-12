<template>
  <div class="wrapper">
    <span>Change color of rating: </span>
    <input type="color" v-model="dynamicRatingColor">
    <ColorfulRating :length="7" v-model="stars" :style="dynamicStyle"></ColorfulRating>
  </div>

</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref,computed} from 'vue'

const dynamicRatingColor = ref("#1fcae8");
const stars = ref(6);
const dynamicStyle = computed(() => {
  return {'--rate-color': dynamicRatingColor.value};
});

</script>

<style scoped>
  .wrapper {
    text-align: left;
  }
</style>
