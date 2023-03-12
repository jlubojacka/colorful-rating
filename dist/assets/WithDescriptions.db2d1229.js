const r=`<template>\r
  <ColorfulRating class="puzzle-rating" v-bind="ratingProps" v-model="rating">\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref} from 'vue'\r
\r
const rating = ref(3);\r
const ratingProps = {\r
  length: 4,\r
  descriptions: ["easy","medium","hard","very hard"]\r
};\r
<\/script>\r
\r
<style scoped>\r
  .puzzle-rating {\r
    --rate-color: green;\r
    --rate-inactive-color: #92e05d;\r
    --rate-spacing: 0.45em;\r
  }\r
</style>\r
`;export{r as default};
