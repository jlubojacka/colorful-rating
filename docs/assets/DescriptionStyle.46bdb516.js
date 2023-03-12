const r=`<template>\r
  <ColorfulRating :length="4" v-model="data.rateValue" :descriptions="data.descriptions" class="custom-descriptions">\r
\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {reactive} from 'vue'\r
const data = reactive({\r
  rateValue: 3,\r
  descriptions: ["poor","average","good","excellent"]\r
})\r
<\/script>\r
\r
<style scoped>\r
  .custom-descriptions {\r
    /* for simple change of description color */\r
    --rate-description-color: #fff;\r
  }\r
\r
  /*\r
   With special deep selector you can affect children inside ColorfulRating component\r
   https://vuejs.org/api/sfc-css-features.html#deep-selectors\r
   */\r
  .custom-descriptions :deep(.rate__description) {\r
    text-align: center;\r
    min-width: 5em;\r
    background-color: #019196;\r
    border-radius: 0.3em;\r
    padding: 0.35em 1em;\r
    font-size: 0.9em;\r
  }\r
\r
</style>\r
`;export{r as default};
