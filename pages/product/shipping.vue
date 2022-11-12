<template>
  <div
    class="bg-gray-2 bg-opacity-20 min-h-screen h-full w-full relative pb-[20px]"
  >
    <HeaderDefault :title="'เลือก Service ขนส่ง'"></HeaderDefault>
    <div class="container px-[15px] mt-[20px]">
      <p class="text-title mb-4">สินค้าทั่วไป</p>
      <div
        class="flex bg-white mb-4 p-4 rounded-[10px]"
        v-for="item in general"
        :key="item.index"
      >
        <div class="flex w-full py-2 items-center justify-between" @click="selectService()">
          <div>
            <p>{{ item.name }}</p>
          </div>
          <div>
            <img src="/icons/next-icons.svg" class="w-[12px]" />
          </div>
        </div>
      </div>
      <p class="text-title mb-4">สินค้าแช่เย็นอุณหภูมิ 2-8 องศา</p>
      <div
        class="flex bg-white mb-4 p-4 rounded-[10px]"
        v-for="item in frozen"
        :key="item.index"
      >
        <div class="flex w-full py-2 items-center justify-between" @click="selectService()">
          <div>
            <p>{{ item.name }}</p>
          </div>
          <div>
            <img src="/icons/next-icons.svg" class="w-[12px]" />
          </div>
        </div>
      </div>
      <p class="text-title mb-4">สินค้าแช่แข็งอุณหภูมิต่ำกว่า -15 องศา</p>
      <div
        class="flex bg-white mb-4 p-4 rounded-[10px]"
        v-for="item in frozen"
        :key="item.index"
      >
        <div class="flex w-full py-2 items-center justify-between" @click="selectService()">
          <div>
            <p>{{ item.name }}</p>
          </div>
          <div>
            <img src="/icons/next-icons.svg" class="w-[12px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
export default defineComponent({
  setup() {
    const general = [
      {
        name: "สินค้าทั่วไป (ธรรมดา)",
      },
      {
        name: "ส่งด่วน",
      },
      {
        name: "ผลไม้",
      },
    ];
    const frozen = [
      {
        name: "กล่องโฟม",
      },
      {
        name: "แพ็คพร้อมส่ง",
      },
      {
        name: "กล่องกระดาษเย็น",
      },
    ];
    function selectService (){
          this.$router.push('/product/size')
      }
    return {
      general,
      frozen,

      selectService
    };
  },
});
</script>
