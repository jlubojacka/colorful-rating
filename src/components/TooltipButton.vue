<template>
  <div class="btn" @mouseover="showTooltip=true" @mouseout="showTooltip=false">
    <button type="button" @click="$emit('click',$event)" class="btn__icon">
      <slot name="icon">
        <CodeIcon></CodeIcon>
      </slot>
    </button>
    <span class="btn__tooltip" :class="{'btn__tooltip--visible': showTooltip}">
      <slot name="hint">
        View source
      </slot>
    </span>
  </div>
</template>

<script setup>
import CodeIcon from '@/assets/icons/code-icon.svg'
import {ref} from 'vue'

const showTooltip = ref(false);

</script>

<style scoped>
.btn {
  position: relative;
  margin-left: auto;
  --dark-tint: #333333;
  --icon-size: 1.9em;
}
.btn__tooltip {
  pointer-events: none;
  position: absolute;
  width: max-content;
  opacity: 0;
  padding: 0.5em 0.7em;
  z-index: 99999;
  border-radius: 0.3em;
  left: 50%;
  transform: translate(-50%, -115%);
  background-color: var(--dark-tint);
  color: white;
  font-size: 0.8em;
  transition: opacity 1s ease;
}

.btn__tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid var(--dark-tint);
  border-color: var(--dark-tint) transparent transparent transparent;
}

.btn__tooltip--visible {
  opacity: 1;
}

.btn__icon {
  width: var(--icon-size);
  height: var(--icon-size);
  padding: 0.3em;
  cursor: pointer;
  fill: var(--dark-tint);
  background-color: white;
  border: 1px solid var(--dark-tint);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.btn__icon:hover {
  background-color: var(--dark-tint);
  fill: white;
}

</style>
