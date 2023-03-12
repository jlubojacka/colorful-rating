const r=`<template>\r
  <ColorfulRating :model-value="3" :descriptions="sunDescriptions"\r
                  class="sun-rating" multicolor :inactive-opacity="0.9">\r
    <SunIcon></SunIcon>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
\r
import {ref} from 'vue'\r
import ColorfulRating from "../ColorfulRating.vue"\r
import SunIcon from "@/assets/icons/sun.svg"   /* SVG loader needed */\r
\r
const sunDescriptions = ref(["fairly hot", "rather hot", "hot", "very hot", "extremely hot"]);\r
\r
<\/script>\r
\r
<style scoped>\r
.sun-rating {\r
  --rate-icon-size: 2.7em;\r
}\r
</style>\r
`;export{r as default};
