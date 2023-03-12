const r=`<template>\r
  <ColorfulRating :length="5" :model-value="2" class="heart-rating">\r
    <svg viewBox="0 0 90 90">\r
      <path d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"/>\r
    </svg>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
<\/script>\r
\r
<style scoped>\r
  .heart-rating {\r
    --rate-color: #e1001b;\r
  }\r
</style>\r
`;export{r as default};
