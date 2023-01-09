<template>
  <div>
    <div
      class="
        flex
        w-100
        bg-white
        justify-center
        items-center
        border-b border-gray-4
      "
    >
      <div class="ml-4" @click="goToPrev()">
        <img src="/icons/back-icon.svg" />
      </div>
      <div class="w-full flex justify-center items-center">
        <p class="text-center text-title py-2 font-bold">{{ title }}</p>
      </div>
    </div>
    <div class="w-full bg-white shadow-lg">
      <div class="flex overflow-x-auto space-x-8 py-4 px-2">
        <div class="flex-shrink-0 relative text-center" @click="changeActiveMenu('payment')">
          <span>รอชำระเงิน</span>
          <div v-if="activeMenu == 'payment'" class="w-full h-[3px] bg-blue absolute bottom-[-16px] left-0"></div>
        </div>
        <div class="flex-shrink-0 relative text-center"  @click="changeActiveMenu('label')">
          <span>ที่ต้องพิมพ์ลาเบล</span>
          <div v-if="activeMenu =='label'" class="w-full h-[3px] bg-blue absolute bottom-[-16px] left-0"></div>
        </div>
        <div class="flex-shrink-0 relative text-center" @click="changeActiveMenu('need-delivery')">
          <span>ที่ต้องจัดส่ง</span>
          <div v-if="activeMenu =='need-delivery'" class="w-full h-[3px] bg-blue absolute bottom-[-16px] left-0"></div>
        </div>
        <div class="flex-shrink-0 relative text-center"  @click="changeActiveMenu('wait-delivery')">
          <span>รอจัดส่ง</span>
          <div v-if="activeMenu=='waiting-delivery'" class="w-full h-[3px] bg-blue absolute bottom-[-16px] left-0"></div>
        </div>
        <div class="flex-shrink-0 relative text-center" @click="changeActiveMenu('delivery')">
          <span>กำลังจัดส่ง</span>
          <div v-if="activeMenu=='delivery'" class="w-full h-[3px] bg-blue absolute bottom-[-16px] left-0"></div>
        </div>
        <div class="flex-shrink-0 relative text-center" @click="changeActiveMenu('success')">
          <span>สำเร็จ</span>
          <div v-if="activeMenu=='success'" class="w-full h-[3px] bg-blue absolute bottom-[-16px] left-0"></div>
        </div>
        <div class="flex-shrink-0 relative text-center" @click="changeActiveMenu('cancel')">
          <span>ยกเลิก</span>
          <div v-if="activeMenu=='cancel'" class="w-full h-[3px] bg-blue absolute bottom-[-16px] left-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    function goToPrev() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
    function changeActiveMenu(menu) {
      activeMenu.value = menu
    }
    const activeMenu = ref('payment');
    return {
      goToPrev,
      changeActiveMenu,

      activeMenu
    };
  },
});
</script>

</script>
