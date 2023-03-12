const r=`<template>\r
  <ColorfulRating :model-value="4" :length="6" :color-steps="colorSteps">\r
    <svg viewBox="0 0 24 24">\r
      <path :d="pathVar"></path>\r
    </svg>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
\r
const colorSteps = ["#5FB93D","#00A764","#00917B","#007980","#006073", "#2F4858"];\r
const pathVar = "M12,2A10,10,0,1,0,22,12,10.016,10.016,0,0,0,12,2Zm4.71,8.71-5,5a1.014,1.014,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z";\r
<\/script>\r
\r
`;export{r as default};
