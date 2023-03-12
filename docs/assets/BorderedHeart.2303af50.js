const r=`<template>\r
  <ColorfulRating :model-value="4" :length="7" class="bordered-heart">\r
    <GemstoneHeart></GemstoneHeart>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import GemstoneHeart from '@/assets/icons/gemstone.svg'   /* SVG loader needed */\r
<\/script>\r
\r
<style scoped>\r
  .bordered-heart {\r
    --rate-icon-size: 2.8em;\r
    --rate-inactive-color: pink;\r
    --rate-color: #fd4162;\r
    --rate-border-color: #49001a;\r
  }\r
</style>\r
`;export{r as default};
