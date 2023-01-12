<template>
  <div class="bg-gray-2 bg-opacity-20 min-h-screen h-full w-full relative pb-[20px]">
    <HeaderDefault :title="'เลือก Service ขนส่ง'"></HeaderDefault>
    <div class="container px-[15px] mt-[20px]">
      <p class="text-title">สินค้าควบคุมอุณภูมิ 2-8 องศา</p>
      <div class="flex justify-between px-4 pt-4 mb-4">
        <div class="text-gray">ขนาดกล่อง</div>
        <div class="text-gray text-right">ค่าขนส่ง</div>
        
      </div>
      <div class="flex bg-white mb-4 p-4 rounded-[10px]" v-for="box in boxs" :key="box.index">
      <div class="flex w-full">
          <div class="w-1/6">
            <img src="/images/icon_box.png">
          </div>
          <div class="w-4/6 pl-2">
              <p>{{ box.name }}</p>
              <p class="text-small text-gray">{{box.detail}}</p>
          </div>
          <div  class="w-1/6 flex justify-end items-center">
              <p class="text-blue font-bold">{{box.price}}</p>
          </div>
            
          </div>
      </div>
      <div
        class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px] mt-[100px] "
      >
        <span class="text-[16px]">ถัดไป</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
export default defineComponent({
  setup() {
    const boxs = [
      {
        name: "size S",
        detail: "18cm x 27cm x 10cm not over 5 kg",
        price: "80฿",
      },
      {
        name: "size A",
        detail: "23cm x 30cm x 20cm not over 10 kg",
        price: "120฿",
      },
      {
        name: "size B1",
        detail: "27cm x 39cm x 20cm not over 20 kg",
        price: "200฿",
      },
    ];
    return {
      boxs,
    };
  },
});
</script>
