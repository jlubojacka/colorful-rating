<template>
  <ColorfulRating :length="6" multicolor readonly v-model="value">
    <svg viewBox="0 0 256 256">
      <g>
        <path d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z" fill="#41B883"/>
        <path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" fill="#41B883"/>
        <path d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z" fill="#35495E"/>
      </g>
    </svg>
  </ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref} from 'vue'

const value = ref(3);
</script>
