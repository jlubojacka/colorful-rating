<template>
  <ColorfulRating v-model="ratingValue"></ColorfulRating>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref} from 'vue'

const ratingValue = ref(2);
</script>
