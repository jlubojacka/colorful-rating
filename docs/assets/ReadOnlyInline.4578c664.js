const n=`<template>\r
  <p>\r
    Your rating <ColorfulRating :model-value="5" readonly class="inline-rating"></ColorfulRating> was saved.\r
  </p>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
<\/script>\r
\r
<style scoped>\r
  .inline-rating {\r
    display: inline-block;\r
    vertical-align: text-bottom;\r
  }\r
</style>\r
`;export{n as default};
