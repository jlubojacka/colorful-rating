const r=`<template>\r
  <ColorfulRating multicolor :model-value="2" class="heart-rating">\r
    <img src="@/assets/icons/romance.png" alt="Heart rating icon" class="icon">\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
<\/script>\r
\r
<style scoped>\r
  .heart-rating {\r
    --rate-spacing: 0.3em;\r
  }\r
  .icon {\r
    width: 2em;\r
    height: 2em;\r
  }\r
</style>\r
`;export{r as default};
