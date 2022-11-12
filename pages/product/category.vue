<template>
  <div class="bg-gray-2 bg-opacity-20 h-screen w-full relative pb-[20px]">
    <HeaderDefault :title="'เลือกหมวดหมู่สินค้า'"></HeaderDefault>
    <div class="container px-[15px] bg-white pt-2 pb-[100px] min-h-[100vh]">
      <div v-if="!showSubcate">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="w-full flex py-6 px-2 border-b border-gray-4 items-center cursor-pointer"
          @click="clickMainCate(category.id)"
        >
          <div class="w-10/12">{{ category.name }}</div>
          <div class="w-2/12 flex justify-end">
            <img src="/icons/next-icons.svg" class="w-[12px]" />
          </div>
        </div>
      </div>
      <div v-else>
        <div
          v-for="(category, index) in subcateList"
          :key="index"
          class="w-full flex py-6 px-2 border-b border-gray-4 items-center cursor-pointer"
        >
          <div class="w-2/12 flex justify-center items-center">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-gray-600"
            />
          </div>
          <div class="w-10/12">{{ category.name }}</div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full px-[15px] bg-white" v-if="showSubcate">
      <div
        class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px]"
      >
        <span class="text-[16px]">ยืนยัน</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
import categoryData from "~/data/category.json";
export default defineComponent({
  setup() {
    const categories = categoryData.categories.items;
    const showSubcate = ref(false);
    const subcateList = ref([]);
    function clickMainCate(id) {
      showSubcate.value = true;
      const subSelect = categories.find((cate) => cate.id == id);
      subcateList.value = subSelect.children;
    }
    return {
      categories,
      clickMainCate,
      showSubcate,
      subcateList,
    };
  },
});
</script>
