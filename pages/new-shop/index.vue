<template>
  <div>
    <HeaderDefault :title="'สร้างร้านค้า'"></HeaderDefault>
    <div class="container px-[15px]">
      <div class="flex justify-center w-3/4 mx-auto mt-[150px]">
        <img src="icons/store.png" class="w-[100px]" />
      </div>
      <div class="flex my-10 justify-center w-3/4 mx-auto">
        <p class="text-gray text-center">
          คุณยังไม่มีร้านค้า <br />
          สร้างร้านง่ายๆ แล้วเริ่มขายเลย
        </p>
      </div>
      <div class="flex justify-center w-3/4 mx-auto">
        <button
          type="button"
          class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
          @click="showModalShop()"
        >
          <span class="text-[16px]">สร้างร้าน</span>
        </button>
      </div>
    </div>
    <share-mobile-menu></share-mobile-menu>
    <createshop-modal
      v-if="showModal"
      @close-modal="showModal = false"
    ></createshop-modal>
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
import CreateshopModal from "~/components/modal/CreateshopModal.vue";
export default defineComponent({
  components: { CreateshopModal },
  setup() {
    const showModal = ref(false);
    function showModalShop() {
      showModal.value = true;
    }
    return {
      showModalShop,
      showModal,
    };
  },
});
</script>
<style lang="css" scoped>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
