const r=`<template>\r
  <ColorfulRating class="biscuit-rating" v-model="rating" v-bind="rProps">\r
    <BiscuitIcon></BiscuitIcon>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import BiscuitIcon from '../icons/IconBiscuit.vue';\r
import {ref} from 'vue'\r
\r
const rating = ref(2);\r
const rProps = {\r
  length: 4,\r
  descriptions: ["not bad", "good", "tasty", "delicious"],\r
  multicolor: true\r
}\r
<\/script>\r
\r
<style scoped>\r
  .biscuit-rating {\r
    --rate-spacing: 0.25em;\r
  }\r
</style>\r
`;export{r as default};
