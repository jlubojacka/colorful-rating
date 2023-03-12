<template>
  <div>
    <ColorfulRating class="rating" multicolor v-model="rateValue" :animate-on-hover="false">
      <template #default="{ index }">
        <span class="rating__number">{{index + 1}}</span>
      </template>
    </ColorfulRating>
    <span>{{rateValue}} of 5</span>
  </div>
</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref} from 'vue'

const rateValue = ref(3);
</script>

<style scoped>
  .rating {
    --rate-spacing: 0.3em;
    display: inline-block;
    margin-right: 1.5em;
  }
  .rating__number {
    background-color: #7a2d15;
    border-radius: 50%;
    color: white;
    width: 2em;
    height: 2em;
    line-height: 2em;
    font-size: 1em;
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
