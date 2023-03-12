const r=`<template>\r
  <ColorfulRating :model-value="3" class="bordered-rating">\r
    <StarIcon></StarIcon>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import StarIcon from '../icons/IconStar.vue'\r
<\/script>\r
\r
<style scoped>\r
  .bordered-rating {\r
    --rate-border-color: #d94d00;\r
    --rate-color: #d94d00;\r
    --rate-inactive-color: hsl(50, 79%, 77%);\r
  }\r
</style>\r
`;export{r as default};
