<template>
  <ColorfulRating :model-value="3" :descriptions="sunDescriptions"
                  class="sun-rating" multicolor :inactive-opacity="0.9">
    <SunIcon></SunIcon>
  </ColorfulRating>
</template>

<script setup>

import {ref} from 'vue'
import ColorfulRating from "../ColorfulRating.vue"
import SunIcon from "@/assets/icons/sun.svg"   /* SVG loader needed */

const sunDescriptions = ref(["fairly hot", "rather hot", "hot", "very hot", "extremely hot"]);

</script>

<style scoped>
.sun-rating {
  --rate-icon-size: 2.7em;
}
</style>
