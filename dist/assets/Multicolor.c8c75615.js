const n=`<template>\r
  <ColorfulRating v-bind="ratingProps" v-model="value" class="multicolor">\r
    <svg viewBox="0 0 399.428 399.428">\r
      <g>\r
        <polygon style="fill:#933EC5;" points="299.564,252.223 299.265,252.125 299.541,252.245  "/>\r
        <polygon style="fill:#933EC5;" points="245.842,234.765 246.058,234.822 245.852,234.755  "/>\r
        <polygon style="fill:#933EC5;" points="228.182,180.519 291.912,189.779 399.428,154.877 261.385,134.818    228.172,180.499  "/>\r
        <polygon style="fill:#00D7DF;" points="299.541,252.245 299.265,252.125 299.263,252.124 246.058,234.822    246.058,234.822 245.842,234.765 245.817,234.789 256.715,298.33 256.656,298.299 323.061,389.698  "/>\r
        <polygon style="fill:#64C37D;" points="142.587,298.329 142.6,298.252 76.215,389.622 199.65,324.818    199.65,324.817 199.65,268.329  "/>\r
        <polygon style="fill:#FF9811;" points="99.797,252.137 153.427,234.731 107.32,189.789 107.447,189.77 0,154.858    99.761,252.245 99.779,252.239  "/>\r
        <polygon style="fill:#EA348B;" points="171.145,180.468 199.65,122.708 199.65,9.729 137.934,134.783    137.972,134.777  "/>\r
        <polygon style="fill:#F7AED1;" points="228.172,180.499 261.385,134.818 199.65,9.729 199.65,122.708  "/>\r
        <polygon style="fill:#FFDA44;" points="171.12,180.519 171.145,180.468 137.972,134.777 137.934,134.783    0,154.858 107.447,189.77  "/>\r
        <polygon style="fill:#91DC5A;" points="153.427,234.731 99.797,252.137 99.779,252.239 76.215,389.622    142.6,298.252 153.485,234.789  "/>\r
        <polygon style="fill:#99EFF2;" points="199.65,268.329 199.65,324.817 323.061,389.698 256.656,298.299  "/>\r
        <polygon style="fill:#7C84E8;" points="291.982,189.789 245.852,234.755 246.058,234.822 299.564,252.223    399.428,154.877 291.912,189.779  "/>\r
      </g>\r
    </svg>\r
  </ColorfulRating>\r
</template>\r
\r
<script setup>\r
import ColorfulRating from '../ColorfulRating.vue'\r
import {ref} from 'vue'\r
\r
const value = ref(3);\r
const ratingProps = ref({\r
  inactiveOpacity: 0.9,\r
  multicolor: true,\r
  length: 7,\r
});\r
\r
<\/script>\r
\r
<style scoped>\r
  .multicolor {\r
    --rate-icon-size: 2.5em;\r
  }\r
</style>\r
`;export{n as default};
