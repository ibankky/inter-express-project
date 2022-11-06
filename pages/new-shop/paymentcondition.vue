<template>
  <div class="bg-gray-2 bg-opacity-20 h-screen w-full relative pb-[20px]">
    <HeaderDefault :title="'เงื่อนไขการชำระเงิน'"></HeaderDefault>
    <div class="container px-[15px] mt-10">
      <div
        v-for="(condition, index) in conditionList"
        :key="index"
        class="w-full flex py-6 items-center bg-white px-4 my-4 rounded-[6px]"
      >
        <div class="pl-2">{{ condition.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, useContext } from "vue";
export default defineComponent({
  setup() {
    const conditionList = [
      {
        name: "เงินสด",
        icon: "",
      },
      {
        name: "เครดิต 7 วัน",
        icon: "",
      },
      {
        name: "เครดิต 15 วัน",
        icon: "",
      },
      {
        name: "เครดิต 30 วัน",
        icon: "",
      },
    ];
    return {
      conditionList,
    };
  },
});
</script>
