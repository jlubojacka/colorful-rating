<template>
  <ColorfulRating :length="4" v-model="data.rateValue" :descriptions="data.descriptions" class="custom-descriptions">

  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {reactive} from 'vue'
const data = reactive({
  rateValue: 3,
  descriptions: ["poor","average","good","excellent"]
})
</script>

<style scoped>
  .custom-descriptions {
    /* for simple change of description color */
    --rate-description-color: #fff;
  }

  /*
   With special deep selector you can affect children inside ColorfulRating component
   https://vuejs.org/api/sfc-css-features.html#deep-selectors
   */
  .custom-descriptions :deep(.rate__description) {
    text-align: center;
    min-width: 5em;
    background-color: #019196;
    border-radius: 0.3em;
    padding: 0.35em 1em;
    font-size: 0.9em;
  }

</style>
