<template>
  <Teleport to="body">
    <Transition name="fade" :duration="500" appear>
      <div class="modal-mask" v-show="isRevealed" ref="mask">

            <div class="modal" ref="modalWindow" v-bind="$attrs">
              <!--<UseFocusTrap :options="focusOptions"> -->
              <slot name="header">
                Default header
              </slot>
              <div class="modal__body">
                <slot name="body">
                  Default body
                </slot>
              </div>

              <button type="button" @click="cancel" class="modal__cancel-btn">Close</button>

              <!-- </UseFocusTrap> -->
            </div>

      </div>
    </Transition>
  </Teleport>
</template>

<script>
//class attributes need to be applied to modal not the root mask node
export default {
  inheritAttrs: false
}
</script>

<script setup>

import { useConfirmDialog, onClickOutside} from '@vueuse/core'
/*import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'*/
import { ref, reactive, computed } from 'vue'


const {
  isRevealed,
  reveal,
  cancel,
  onReveal
} = useConfirmDialog();


const focusOptions = reactive({
  clickOutsideDeactivates: true
});

const modalWindow = ref(null);

onClickOutside(modalWindow, cancel);  // hide modal on click outside

defineExpose({
  isRevealed,
  reveal,
  cancel
})


</script>

<style scoped>

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.35);
  transition: opacity 0.5s ease-in;
}

.modal {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2em;
  background-color: white;
  border-radius: 0.75em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.33);
  position: fixed;
  max-width: 70vw;
  max-height: 80vh;
  width: fit-content;
  height: fit-content;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.5s cubic-bezier(0.5, 0, 0.5, 1);
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* v-if necessary (does not scale out when leaving with v-show)*/
.fade-enter-from .modal,
.fade-leave-to .modal {
  transform: scale(0.5) translateY(-50%);
}

.modal__cancel-btn {
  background-color: #4b4b4b;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 0.5em;
  display:block;
  margin: 0 auto;
}
.modal__cancel-btn:hover {
  cursor: pointer;
  background-color: #1f1f1f;
}

</style>
