<template>
  <ColorfulRating v-bind="ratingProps" v-model="value" class="multicolor">
    <svg viewBox="0 0 399.428 399.428">
      <g>
        <polygon style="fill:#933EC5;" points="299.564,252.223 299.265,252.125 299.541,252.245  "/>
        <polygon style="fill:#933EC5;" points="245.842,234.765 246.058,234.822 245.852,234.755  "/>
        <polygon style="fill:#933EC5;" points="228.182,180.519 291.912,189.779 399.428,154.877 261.385,134.818    228.172,180.499  "/>
        <polygon style="fill:#00D7DF;" points="299.541,252.245 299.265,252.125 299.263,252.124 246.058,234.822    246.058,234.822 245.842,234.765 245.817,234.789 256.715,298.33 256.656,298.299 323.061,389.698  "/>
        <polygon style="fill:#64C37D;" points="142.587,298.329 142.6,298.252 76.215,389.622 199.65,324.818    199.65,324.817 199.65,268.329  "/>
        <polygon style="fill:#FF9811;" points="99.797,252.137 153.427,234.731 107.32,189.789 107.447,189.77 0,154.858    99.761,252.245 99.779,252.239  "/>
        <polygon style="fill:#EA348B;" points="171.145,180.468 199.65,122.708 199.65,9.729 137.934,134.783    137.972,134.777  "/>
        <polygon style="fill:#F7AED1;" points="228.172,180.499 261.385,134.818 199.65,9.729 199.65,122.708  "/>
        <polygon style="fill:#FFDA44;" points="171.12,180.519 171.145,180.468 137.972,134.777 137.934,134.783    0,154.858 107.447,189.77  "/>
        <polygon style="fill:#91DC5A;" points="153.427,234.731 99.797,252.137 99.779,252.239 76.215,389.622    142.6,298.252 153.485,234.789  "/>
        <polygon style="fill:#99EFF2;" points="199.65,268.329 199.65,324.817 323.061,389.698 256.656,298.299  "/>
        <polygon style="fill:#7C84E8;" points="291.982,189.789 245.852,234.755 246.058,234.822 299.564,252.223    399.428,154.877 291.912,189.779  "/>
      </g>
    </svg>
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref} from 'vue'

const value = ref(3);
const ratingProps = ref({
  inactiveOpacity: 0.9,
  multicolor: true,
  length: 7,
});

</script>

<style scoped>
  .multicolor {
    --rate-icon-size: 2.5em;
  }
</style>
