<template>
  <div class="modal-overlay">
    <div class="modal">
      <div
        class="flex w-full bg-white border-b border-gray text-center justify-center items-center h-[60px] rounded-[6px]"
      >
        <span class="text-[16px]">บุคคลธรรมดา</span>
      </div>
      <div
        class="flex w-full bg-white border-0 border-gray text-center justify-center items-center h-[60px]  mb-[10px] rounded-[6px]"
      >
        <span class="text-[16px]">นิติบุคคล</span>
      </div>
       <div
        class="flex w-full bg-white text-red border-0 border-gray text-center justify-center items-center h-[60px] mb-[10px] rounded-[6px]"
      >
        <span class="text-[16px]">ยกเลิก</span>
      </div>
    </div>
  </div>
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
}

.modal {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 10%;
  padding: 0 10px;
}
</style>
