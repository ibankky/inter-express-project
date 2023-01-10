<template>
  <div class="fixed bottom-0 w-full bg-white py-2 shadow-[0_-3px_5px_0_rgba(0,0,0,0.3)]">
    <div class="flex px-2">
      <div class="w-2/6 flex item-center justify-center">
          <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700">ทั้งหมด</span>
            </label>
      </div>
      <div class="w-4/6">
           <button type="button" class="flex w-full bg-blue border-none text-white  text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]">
                <span class="text-[16px]">Generate QR Code</span>
           </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {},
  setup() {
    return {
    };
  },
});
</script>
