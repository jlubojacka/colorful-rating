const r=`<template>\r
  <ColorfulRating class="large" :length="5" v-model="rating">\r
  </ColorfulRating>\r
  <p class="description">You selected {{rating}} {{stars}}</p>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref,computed} from 'vue'\r
\r
const rating = ref(3);\r
const stars = computed(() => {\r
  return rating.value > 1 ? "stars" : "star";\r
})\r
\r
<\/script>\r
\r
<style scoped>\r
  .large {\r
    --rate-icon-size: 3em;\r
    --rate-color: #ff9c1a;\r
  }\r
  .description {\r
    margin-bottom: 0px;\r
  }\r
</style>\r
`;export{r as default};
