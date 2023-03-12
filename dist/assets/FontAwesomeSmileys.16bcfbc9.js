const e=`<template>\r
  <div class="wrapper">\r
    <ColorfulRating :animate-on-hover="false" :colorSteps="smileyColors" class="fontawesome-smileys"\r
                    v-model="smiley" v-slot="{index}">\r
      <font-awesome-icon :icon="smileyIcons[index]"></font-awesome-icon>\r
    </ColorfulRating>\r
    <span>{{smiley}}</span>\r
  </div>\r
\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref} from 'vue'\r
\r
const smiley = ref(4);\r
let smileyColors = ['#dc1b1b','#f56212','#c09029','#5da918','#165d0a'];\r
let smileyIcons = ['frown', 'meh', 'smile', 'grin', 'laugh-beam'];\r
\r
/* index received from scoped slot starts from 0 */\r
\r
<\/script>\r
\r
<style scoped>\r
  .fontawesome-smileys {\r
    --rate-spacing: 1.2em;\r
    --rate-inactive-color: #7e7e7e;\r
  }\r
  .wrapper {\r
    display: flex;\r
    gap: 1em;\r
    align-items: center;\r
  }\r
</style>\r
`;export{e as default};
