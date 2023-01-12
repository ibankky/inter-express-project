<template>
  <div>
    <div class="container bg-light-blue h-[180px] relative">
      <div class="flex py-10 px-4 items-center">
        <div class="w-1/5">
          <div class="bg-gray rounded-[6px] px-2 py-2">
            <img src="/icons/avatar-icon.svg" alt="" class="w-full" />
          </div>
        </div>
        <div class="w-4/5 pl-6">
          <h1 class="text-title">ชื่อร้าน</h1>
          <p class="text-gray-3">ย่านกิ่งแก้ว</p>
        </div>
      </div>
    </div>
    <div
      class="container bg-gray-2 bg-opacity-20 py-10 h-full px-[15px] mb-[70px]"
    >
      <div class="flex justify-center">
        <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
          <h5 class="text-gray mb-4">สถานะคำสั่งซื้อ</h5>
          <div class="flex justify-center items-center">
            <div class="w-1/4">
              <p class="text-small text-center">ที่ต้องเรียกเก็บ</p>
            </div>
            <div class="w-1/4">
              <p class="text-small text-center">ที่ต้องจัดส่ง</p>
            </div>
            <div class="w-1/4">
              <p class="text-small text-center">คืนเงิน/คืนสินค้า</p>
            </div>
            <div class="w-1/4">
              <p class="text-small text-center">Complete</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
          <h5 class="text-gray mb-4">ยอดขายรายสัปดาห์</h5>
          <div class="flex justify-center items-center px-2">
            <GraphLine />
          </div>
        </div>
      </div>
      <h5 class="mb-4 mt-4">สินค้าขายดีประจำสัปดาห์</h5>
      <div
        v-for="(product, index) in Products"
        :key="index"
        class="flex justify-center mt-4"
      >
        <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
          <div class="flex items-top">
            <div class="w-1/12">
              {{ index + 1 }}
            </div>
            <div class="w-3/12">
              <img
                :src="product.image.url"
                alt=""
                class="w-full rounded-[6px]"
              />
            </div>
            <div class="w-8/12 pl-4">
              <p class="min-h-[2.5em]">{{ product.name }}</p>
              <p class="text-blue">฿ {{ product.price }}</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="text-gray text-small-2">
              ขายแล้ว {{ product.count }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <share-mobile-menu></share-mobile-menu>
  </div>
</template>
<script>
import { defineComponent, useContext , useStore } from "@nuxtjs/composition-api";
import CreateshopModal from "../components/modal/CreateshopModal.vue";
import GraphLine from "../components/GraphLine.vue";
import ProductData from "~/data/product.json";
export default defineComponent({
  components: { CreateshopModal, GraphLine },
  setup() {
    const Products = ProductData.products.items;
    return {
      Products,
    };
  },
});
</script>
