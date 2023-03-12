const r=`<template>\r
  <ColorfulRating v-model="ratingValue"></ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref} from 'vue'\r
\r
const ratingValue = ref(2);\r
<\/script>\r
`;export{r as default};
