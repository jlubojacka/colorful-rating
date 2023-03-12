const n=`<template>\r
  <div>\r
    <ColorfulRating class="rating" multicolor v-model="rateValue" :animate-on-hover="false">\r
      <template #default="{ index }">\r
        <span class="rating__number">{{index + 1}}</span>\r
      </template>\r
    </ColorfulRating>\r
    <span>{{rateValue}} of 5</span>\r
  </div>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref} from 'vue'\r
\r
const rateValue = ref(3);\r
<\/script>\r
\r
<style scoped>\r
  .rating {\r
    --rate-spacing: 0.3em;\r
    display: inline-block;\r
    margin-right: 1.5em;\r
  }\r
  .rating__number {\r
    background-color: #7a2d15;\r
    border-radius: 50%;\r
    color: white;\r
    width: 2em;\r
    height: 2em;\r
    line-height: 2em;\r
    font-size: 1em;\r
    font-weight: bold;\r
    display: inline-flex;\r
    justify-content: center;\r
    align-items: center;\r
  }\r
</style>\r
`;export{n as default};
