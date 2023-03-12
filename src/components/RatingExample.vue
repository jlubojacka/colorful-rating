<template>
  <section class="example">
    <header class="example__header">
      <h2 :id="headingLink" class="example__title">
        <a :href="'#' + headingLink" class="example__link">
          <LinkIcon class="example__icon"></LinkIcon>
        </a>&nbsp;{{heading}}
      </h2>
      <TooltipButton @click="showCode"></TooltipButton>
    </header>
    <component :is="AsyncComp"></component>

    <VueUseModal class="example__modal" ref="modal">
      <template #header>
        <h3 class="modal__title">{{modalHeader}}</h3>
      </template>
      <template #body>
        <pre v-highlightjs="code" class="example__code"><code class="vue"></code></pre>
      </template>
    </VueUseModal>
  </section>
</template>

<script setup>
import VueUseModal from './VueUseModal.vue'
import TooltipButton from './TooltipButton.vue'
import LinkIcon from '@/assets/icons/link.svg'


import {ref,computed,onMounted,onBeforeMount,defineAsyncComponent} from 'vue'


const props = defineProps({
  heading: {type: String, default: "Rating Example"},
  componentName: {type: String, required: true},
})


const modalHeader = computed(() => {
  return props.heading + " - Source Code";
});

const headingLink = computed(() => {
  let link = props.componentName[0].toLowerCase() + props.componentName.slice(1);
  return link.replace(/[A-Z]/g, "-$&").toLowerCase();
});

const modal = ref(null);

const code = ref("");

const AsyncComp = defineAsyncComponent(() =>
    import(`./examples/${props.componentName}.vue`)
)

function showCode(){
  if (modal.value){
    modal.value.reveal();
  }
}

onBeforeMount(async () => {
  // get string content of vue file
  const module = await import(`./examples/${props.componentName}.vue?raw`);
  let exampleCode = String(module.default);
  const sourcePath = "../ColorfulRating.vue";
  if (exampleCode.includes(sourcePath)) {
    exampleCode = exampleCode.replaceAll(sourcePath, "colorful-rating");
  }
  code.value = exampleCode;
})




</script>

<style scoped>

.modal__title {
  margin: 0 auto;
  width: fit-content;
}

.example {
  --dark-tint: #232323;
  text-align: left;
  background-color: white;
  border-radius: 1em;
  padding: 1.2em 1.3em;
  box-shadow: 0 1px 1px rgba(0,0,0,0.06),
  0 0px 2px rgba(0,0,0,0.07),
  0 2px 4px rgba(0,0,0,0.08),
  0 4px 8px rgba(0,0,0,0.09);
}

.example__header {
  display: flex;
  gap: 1em;
  align-items: center;
  margin-bottom: 1.2em;
}

.example__title {
  font-size: 1em;
  margin: 0;
  text-align: left;
  color: var(--dark-tint);
  display: flex;
  align-items: center;
}
.example__link {
  color: inherit;
  text-decoration: none;
  height: 1em;
  margin-right: 0.3em;
}
.example__title:hover .example__icon{
  opacity: 1;
}

.example__icon {
  height: 1em;
  width: 1em;
  opacity: 0.3;
  vertical-align: top;
}

.example__code > code {
  border: 1px solid #c9c9c9;
  display: block;
  overflow-y: auto;
  max-height: calc(80vh - 100px);
}

/*scrollbar styling*/


.example__code > code::-webkit-scrollbar {
  height: 1em;
}
.example__code > code::-webkit-scrollbar-thumb {
  background: #b9b9b9;
  border: 2px solid #b9b9b9;
  border-radius: 1em;
  width: 5em;
}
.example__code > code::-webkit-scrollbar-track {
  background-color: #dedede;
}
/*
.example__code > code::-webkit-scrollbar-button {
  background-color: #ececec;
}
*/
</style>
