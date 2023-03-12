const r=`<template>\r
  <div class="wrapper">\r
    <span>Change color of rating: </span>\r
    <input type="color" v-model="dynamicRatingColor">\r
    <ColorfulRating :length="7" v-model="stars" :style="dynamicStyle"></ColorfulRating>\r
  </div>\r
\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref,computed} from 'vue'\r
\r
const dynamicRatingColor = ref("#1fcae8");\r
const stars = ref(6);\r
const dynamicStyle = computed(() => {\r
  return {'--rate-color': dynamicRatingColor.value};\r
});\r
\r
<\/script>\r
\r
<style scoped>\r
  .wrapper {\r
    text-align: left;\r
  }\r
</style>\r
`;export{r as default};
