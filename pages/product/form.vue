<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative pb-[20px]">
    <HeaderDefault :title="'เพิ่มสินค้า'"></HeaderDefault>
    <div class="container px-[15px] mt-[20px]">
      <div class="bg-white rounded-[6px] px-2 py-2 mb-4">
        <p class="pl-4 my-2">ภาพสินค้า</p>

        <div class="px-4 pt-4">
          <p class="my-2 mb-2">ภาพปก(0/5)</p>
          <label for="file-upload" class="custom-file-upload">
            <div
              class="w-[100px] h-[100px] border border-dashed border-blue flex items-center justify-center rounded-[6px]"
            >
              <div class="text-center">
                <img
                  src="/icons/plus-icon.svg"
                  alt=""
                  class="w-[24px] mx-auto fill-blue"
                />
                <div class="text-blue mt-2">อัปโหลด</div>
              </div>
            </div>
          </label>
          <input id="file-upload" type="file" />
        </div>
        <p class="pl-4 my-2">ภาพด้านบนและด้านหน้าสินค้า (0/2)</p>

        <div class="px-4">
          <p class="my-2 mb-2 text-gray text-small">
            ใช้สำหรับตรวจสอบขนาดและปริมาตร
          </p>
          <label for="file-upload" class="custom-file-upload">
            <div
              class="w-[100px] h-[100px] border border-dashed border-blue flex items-center justify-center rounded-[6px]"
            >
              <div class="text-center">
                <img
                  src="/icons/plus-icon.svg"
                  alt=""
                  class="w-[24px] mx-auto fill-blue"
                />
                <div class="text-blue mt-2">อัปโหลด</div>
              </div>
            </div>
          </label>
          <input id="file-upload" type="file" />
        </div>
      </div>
      <div class="bg-white rounded-[6px] px-2 py-2">
        <p class="pl-4 my-2">ข้อมูลสินค้า</p>
        <input
          v-model="formData.name"
          type="text"
          placeholder="ชื่อสินค้า"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <nuxt-link :to="'/product/category'">
          <div
            class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
          >
            <div class="w-1/2 text-[14px]">หมวดหมู่สินค้า</div>
            <div class="w-1/2 text-gray justify-end items-center flex">
              <span class="mr-4 text-[12px]">กรุณาเลือก</span>
              <img src="/icons/next-icons.svg" class="w-[12px]" />
            </div>
          </div>
        </nuxt-link>
        <input
          type="number"
          min="0"
          step="1"
          placeholder="ราคา"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <nuxt-link :to="'/product/form'">
          <div
            class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
          >
            <div class="w-1/2 text-[14px]">หน่วย</div>
            <div class="w-1/2 text-gray justify-end items-center flex">
              <span class="mr-4 text-[12px]">กรุณาเลือก</span>
              <img src="/icons/next-icons.svg" class="w-[12px]" />
            </div>
          </div>
        </nuxt-link>
        <input
          type="text"
          placeholder="คลัง"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />

        <textarea
          v-model="formData.description"
          type="text"
          rows="4"
          placeholder="รายละเอียดสินค้า"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <div
          class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
        >
          <div class="w-1/2 text-[14px]">สถานะสินค้า</div>
          <div class="w-1/2 text-gray justify-end items-center flex">
            <div class="flex items-center justify-end">
              <label
                :for="'toggle-status'"
                class="flex items-center cursor-pointer"
              >
                <div class="relative">
                  <input
                    type="checkbox"
                    :id="'toggle-status'"
                    class="sr-only"
                    v-model="formData.status"
                    true-value=1
                     false-value=0
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
      <div class="bg-white rounded-[6px] px-2 py-2 mt-4">
        <p class="pl-4 my-2">ข้อมูลการจัดส่ง</p>
        <nuxt-link :to="'/product/shipping'">
          <div
            class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
          >
            <div class="w-1/2 text-[14px]">Service การขนส่ง</div>
            <div class="w-1/2 text-gray justify-end items-center flex">
              <span class="mr-4 text-[12px]">กรุณาเลือก</span>
              <img src="/icons/next-icons.svg" class="w-[12px]" />
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="'/product/form'">
          <div
            class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
          >
            <div class="w-1/2 text-[14px]">ค่าขนส่งที่คิดโดยบริษัทขนส่ง</div>
            <div class="w-1/2 text-gray justify-end items-center flex">
              <span class="mr-4 text-[12px]">เช็คค่าขนส่ง</span>
              <img src="/icons/next-icons.svg" class="w-[12px]" />
            </div>
          </div>
        </nuxt-link>
        <div
          class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
        >
          <div class="w-1/2 text-[14px]">ผู้ขายคิดค่าขนส่งเอง</div>
          <div class="w-1/2 text-gray justify-end items-center flex">
            <div class="flex items-center justify-end">
              <label
                :for="'toggle-shipping'"
                class="flex items-center cursor-pointer"
              >
                <div class="relative">
                  <input
                    type="checkbox"
                    :id="'toggle-shipping'"
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
      <div v-if="showError">
        <p class="text-red mt-4">กรุณากรอกข้อมูลให้ครบถ้วน</p>
      </div>
      <div
        class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px] mt-[100px]"
        @click="onSubmitProduct()"
      >
        <span class="text-[16px]">ลงขาย</span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  ref,
  useRoute,
  useRouter,
  computed
} from "@nuxtjs/composition-api";
import { productApi } from "@/api/product";
export default defineComponent({
  setup() {
    const { addProduct, fetchProduct } = productApi();
    const router = useRouter();
    const showError = ref(false);
    const formData = reactive({
      name: "",
      category_id: "1", // Fixed before check  ***Type String
      price: 60,
      unit: 1, // Fixed before check
      description: "",
      status: 1, // fixed 1 For active
      service: "",
      temperature: "",
      box: "",
      shipping_price: 50,
      self_shipping: 0, // 0 For not set / 1 For set Active
      self_shipping_price: 0,
      store_id: "",
      tumbnail_image: [],
      image: [],
    });

    const onSubmitProduct = async () => {
      // Validate Form example
      if (!formData.name || !formData.price) {
        console.log("error");
        showError.value = true;
      } else {
        const res = await addProduct({ formData });
        if (res.code === "success") {
          router.push({
            name: "product",
          });
        }
      }
    };
    return {
      formData,
      showError,

      onSubmitProduct,
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
