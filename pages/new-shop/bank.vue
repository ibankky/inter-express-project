<template>
  <div class="bg-gray-2 bg-opacity-20 h-screen w-full relative pb-[20px]">
    <HeaderDefault :title="'เลือกธนาคาร'"></HeaderDefault>
    <div class="container px-[15px] bg-white">
      <div
        v-for="(bank, index) in bankList"
        :key="index"
        class="w-full flex py-4 border-b border-gray-4 items-center"
      >
        <div>
          <img src="/icons/kbank.png" class="w-[24px] mr-4" />
        </div>
        <div>{{ bank.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, useContext } from "vue";
export default defineComponent({
  setup() {
    const bankList = [
      {
        name: "ธนาคารกสิกรไทย",
        icon: "",
      },
      {
        name: "ธนาคารไทยพาณิชย์",
        icon: "",
      },
      {
        name: "ธนาคารกรุงเทพ",
        icon: "",
      },
      {
        name: "ธนาคารทหารไทยธนชาติ",
        icon: "",
      },
      {
        name: "ธนาคารกรุงไทย",
        icon: "",
      },
      {
        name: "ธนาคารยูโอบี",
        icon: "",
      },
      {
        name: "ธนาคารกรุงศรี",
        icon: "",
      },
      {
        name: "ธนาคารออมสิน",
        icon: "",
      },
    ];
    return {
      bankList,
    };
  },
});
</script>
