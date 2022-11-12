<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative pb-[20px]">
    <HeaderWithStepper :title="'สร้างร้านค้า'"></HeaderWithStepper>
    <div class="container px-[15px] mt-[20px] min-h-[90vh]">
      <div class="bg-white rounded-[6px] px-2 py-2">
        <p class="pl-2 my-2 text-[16px]">ข้อมูลชำระเงิน</p>
        <textarea
          type="text"
          rows="4"
          placeholder="ที่อยู่ผู่เข้ารับเงิน"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="ชื่อผู้ติดต่อ"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="เบอร์โทรศัพท์"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <input
          type="text"
          placeholder="อีเมล์"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
        <nuxt-link :to="'/new-shop/paymentcondition'">
          <div
            class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
          >
            <div class="w-1/2 text-[14px]">เงือนไขการชำระเงิน</div>
            <div class="w-1/2 text-gray justify-end items-center flex">
              <span class="mr-4 text-[12px]">กรุณาเลือก</span>
              <img src="/icons/next-icons.svg" class="w-[12px]" />
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="'/new-shop/category'">
          <div
            class="flex w-100 border-0 border-b border-gray bg-white py-4 px-3"
          >
            <div class="w-1/2 text-[14px]">วันและเวลาชำระเงิน</div>
            <div class="w-1/2 text-gray justify-end items-center flex">
              <span class="mr-4 text-[12px]">กรุณาเลือก</span>
              <img src="/icons/next-icons.svg" class="w-[12px]" />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="fixed bottom-0 w-full px-[15px] bg-white">
      <div
        class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[20px] rounded-[6px]"
        @click="submitNewShop()"
      >
        <span class="text-[16px]">ถัดไป</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, useContext } from "vue";
export default defineComponent({
  setup() {
    function submitNewShop() {
      this.$router.push("/new-shop/payment");
    }
    return {
      submitNewShop,
    };
  },
});
</script>
