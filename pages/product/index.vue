<template>
  <div>
    <HeaderDefault :title="'สินค้า'"></HeaderDefault>
    <div class="container px-[15px] mb-[100px]">
      <div
        v-for="(product, index) in Products"
        :key="index"
        class="flex justify-center mt-4"
      >
        <div class="block p-4 rounded-lg shadow-lg bg-white w-full">
          <div class="flex items-top">
            <div class="w-3/12">
              <img
                :src="product.image.url"
                alt=""
                class="w-full rounded-[6px]"
              />
            </div>
            <div class="w-9/12 pl-4">
              <p class="min-h-[2.5em]">{{ product.name }}</p>
              <p class="text-blue">฿ {{ product.price }}</p>
            </div>
          </div>
          <div class="flex mt-4 pb-2 border-b border-gray-4">
            <div class="w-1/3 text-gray text-small-2">ค่าจัดส่ง ฿50</div>
            <div class="w-1/3 text-gray text-small-2 text-center">คลัง 75</div>
            <div class="w-1/3 text-gray text-small-2 text-right">
              ขายแล้ว {{ product.count }}
            </div>
          </div>
          <div class="flex items-center justify-end mt-4">
            <div class="text-gray mr-2">สถานะสินค้า</div>
            <label
              :for="'toggle-' + index"
              class="flex items-center cursor-pointer"
            >
              <div class="relative">
                <input
                  type="checkbox"
                  :id="'toggle-' + index"
                  class="sr-only"
                />
                <div class="bg-check block w-14 h-8 rounded-full"></div>
                <div
                  class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link :to="'/product/add'">
    <div
      class="fixed bottom-[15%] right-[20px] w-[60px] h-[60px] bg-blue flex items-center rounded-full"
    >
      <img src="/icons/plus-icon-white.svg" alt="" class="w-[24px] mx-auto" />
    </div>
    </nuxt-link>
    <share-mobile-menu></share-mobile-menu>
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
import ProductData from "~/data/product.json";
export default defineComponent({
  setup() {
    const Products = ProductData.products.items;
    function addProduct() {
      this.$router.push("/product/add");
    }
    return {
      Products,

      addProduct,
    };
  },
});
</script>
<style lang="css" scoped>
/* Toggle B */
input:not(:checked) ~ .bg-check {
  background: #ccc;
}
input:checked ~ .bg-check {
  background: #48bb78;
}
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #fff;
}
</style>
