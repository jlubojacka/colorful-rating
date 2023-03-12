<template>
  <div class="rate__wrapper" v-if="length > 0">
    <input type="hidden" v-model="rate">

      <div class="rate__buttons">
        <button v-for="n in length" :key="n" class="rate__button" type="button"
          :class="classObject"
          :style="iconFillStyle(n)"
          @mouseover="onOver(n)" @mouseout="onOut(n)"
          @keyup="onOver(n)" @keyup.enter="setRate(n)"
          @click="setRate(n)">
          <span class="rate__icon">
            <slot :index="n - 1">
              <svg viewBox="0 0 32 32">
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
              </svg>
            </slot>
          </span>

        </button>
      </div>
      <span class="rate__description" v-show="showDescription">{{descriptions[overIdx - 1] || descriptions[rate - 1]}}</span>

  </div>
</template>

<script setup>

import {ref, reactive, computed, watch} from 'vue'

const props = defineProps({
  modelValue: {type: Number},
  length: {type: Number, default: 5},
  descriptions: {type: Array, default: function (){ return [] }},
  readonly: {type: Boolean, default: false},
  animateOnHover: {type: Boolean, default: true},
  colorSteps: {type:Array},
  multicolor: {type: Boolean, default: false},
  inactiveOpacity: {type: Number, default: 0.7}, //takes effect only with multicolor prop set
  gradient: {
    type: Object,
    startLightness: {
      type: Number, default: 75
    },
    endLightness: {
      type: Number, default: 30
    },
    hue: {
      type: Number, default: 210
    }
  }

});

const emit = defineEmits(['update:modelValue'])

const isEmpty = computed(() => {
  return props.modelValue === undefined || props.modelValue === null || props.modelValue === 0;
});

const showDescription = computed(() => {
  return !isEmpty.value && props.descriptions.length > 0;
});

/* Input events */
const rate = ref(props.modelValue);
const overIdx = ref(0);

function onOver(index) {
  if (!props.readonly){
    overIdx.value = Number(index);
  }
}
function onOut() {
  if (!props.readonly) {
    overIdx.value = rate.value;
  }
}
function setRate(index) {
  if (!props.readonly) {
    rate.value = Number(index);
    emit('update:modelValue', rate.value);
  }
}

watch(() => props.modelValue, (newValue, oldValue) => {
  if (newValue !== rate.value){
    rate.value = newValue;
    overIdx.value = 0;
  }
});

/* Dynamic style */

const isFilled = computed( () => {
  return (index) => index <= overIdx.value;  //computed property with parameter
});

const classObject = computed(() => {
  return {
    'rate__button--disabled': props.readonly ,
    'rate__button--hoverable': props.animateOnHover && (!props.readonly)
  }
});

const iconFillStyle = computed(() => {
  return (index) => {
    if (index <= overIdx.value || index <= rate.value || isFilled.value(index)){
      if (props.gradient){
        return gradientStyle.value(index);
      } else if (props.colorSteps) {
        if (index <= props.colorSteps.length) {
          return {color: props.colorSteps[index - 1]}
        }
      }
      return {color: 'var(--rate-color)'}  //custom property from stylesheet
    } else if (props.multicolor) {
      //make unselected buttons grayscale and with decreased opacity
      return {filter: 'grayscale(100%)', opacity: props.inactiveOpacity};
    }
  }
});

/*  Gradient  */

const defaultGradient = {
  startLightness: 75,
  endLightness: 30,
  hue: 210
};

function isInBounds(value, start=0, end=100){
  return (value >= start) && (value <= end);
}
function getGradientValue(name,start,end){
  if (isInBounds(props.gradient[name], start, end)){
    return props.gradient[name];
  } else {
    return defaultGradient[name];
  }
}
const startLightness = computed(() => getGradientValue("startLightness",0,100));
const endLightness = computed(() => getGradientValue("endLightness",0,100));
const hue = computed(() => getGradientValue("hue",0,360));

const gradientStyle = computed( () => {
  return (index) => {
    let start = startLightness.value;
    let end = endLightness.value;
    let amount = end - start;
    let step = amount / (props.length - 1);
    let val = Math.floor(start + ((index - 1)*step));
    return {color: `hsl(${hue.value}, 100%, ${val}%)`}
  }
});


</script>



<style>

.rate__wrapper {
  --rate-color: hsl(45, 100%, 52%);
  --rate-inactive-color: #bdbaba;
  width: fit-content;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.rate__icon > *,
.rate__icon {
  display: inline-block;
  width: var(--rate-icon-size,2em);
  height: var(--rate-icon-size,2em);
  stroke: var(--rate-border-color, none);
  fill: currentColor;
  vertical-align: middle;
}

.rate__buttons {
  display: inline-block;
}
.rate__button{
  color: var(--rate-inactive-color,#dedbdb);
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  background: transparent none;
  padding: 0;
  border: 0;
  transition: scale 0.2s ease-out;
}

.rate__button:not(:last-child) {
  padding-right: var(--rate-spacing, 0px);
}
.rate__button--hoverable:hover {
  transform: scale(1.07,1.07);
  backface-visibility: hidden;
}
.rate__button--disabled{
  cursor: default;
}
.rate__button:focus {
  outline-color: var(--rate-inactive-color,#dedbdb);
}

.rate__button:hover,
.rate__button:focus {
  text-decoration: none;
}
.rate__button--disabled:focus {
  outline-color: var(--rate-inactive-color,#dedbdb);
}

.rate__description {
  display: inline-block;
  vertical-align: middle;
  color: var(--rate-description-color, #3b3d41);
}

</style>
