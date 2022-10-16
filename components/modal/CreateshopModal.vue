<template>
  <transition name="modal-fade">
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <nuxt-link :to="'/new-shop'">
          
      <div
        class="flex w-full bg-white border-b border-gray text-center justify-center items-center h-[60px] rounded-[6px] mb-2"
      >
        <span class="text-[16px]">บุคคลธรรมดา</span>
      </div>
      </nuxt-link>
      <nuxt-link :to="'/new-shop'">
      <div
        class="flex w-full bg-white border-0 border-gray text-center justify-center items-center h-[60px]  mb-6 rounded-[6px]"
      >
        <span class="text-[16px]">นิติบุคคล</span>
      </div>
      </nuxt-link>
       <div
        class="flex w-full bg-white text-red border-0 border-gray text-center justify-center items-center h-[60px] rounded-[6px]"
      @click="$emit('close-modal')">
        <span class="text-[16px]">ยกเลิก</span>
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "CreateshopModal",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 10;
}

.modal {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 20%;
  padding: 0 10px;
  z-index: 20;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
