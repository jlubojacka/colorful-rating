const r=`<template>\r
  <ColorfulRating v-model="rating" class="fontawesome-rating">\r
    <font-awesome-icon icon="thumbs-up"></font-awesome-icon>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref} from 'vue'\r
const rating = ref(3);\r
<\/script>\r
\r
<style scoped>\r
  .fontawesome-rating {\r
    --rate-spacing: 1.2em;\r
    --rate-color: #0f2d7a;\r
    --rate-inactive-color: rgba(87, 87, 87, 0.93);\r
  }\r
</style>\r
`;export{r as default};
