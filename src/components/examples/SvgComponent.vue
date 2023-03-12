<template>
  <ColorfulRating class="biscuit-rating" v-model="rating" v-bind="rProps">
    <BiscuitIcon></BiscuitIcon>
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import BiscuitIcon from '../icons/IconBiscuit.vue';
import {ref} from 'vue'

const rating = ref(2);
const rProps = {
  length: 4,
  descriptions: ["not bad", "good", "tasty", "delicious"],
  multicolor: true
}
</script>

<style scoped>
  .biscuit-rating {
    --rate-spacing: 0.25em;
  }
</style>
