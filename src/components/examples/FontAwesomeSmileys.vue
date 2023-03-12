<template>
  <div class="wrapper">
    <ColorfulRating :animate-on-hover="false" :colorSteps="smileyColors" class="fontawesome-smileys"
                    v-model="smiley" v-slot="{index}">
      <font-awesome-icon :icon="smileyIcons[index]"></font-awesome-icon>
    </ColorfulRating>
    <span>{{smiley}}</span>
  </div>

</template>

<script setup>
import ColorfulRating from '../ColorfulRating.vue'
import {ref} from 'vue'

const smiley = ref(4);
let smileyColors = ['#dc1b1b','#f56212','#c09029','#5da918','#165d0a'];
let smileyIcons = ['frown', 'meh', 'smile', 'grin', 'laugh-beam'];

/* index received from scoped slot starts from 0 */

</script>

<style scoped>
  .fontawesome-smileys {
    --rate-spacing: 1.2em;
    --rate-inactive-color: #7e7e7e;
  }
  .wrapper {
    display: flex;
    gap: 1em;
    align-items: center;
  }
</style>
