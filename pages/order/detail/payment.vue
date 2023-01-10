<template>
  <div>
    <HeaderOrder :title="'รายละเอียดคำสั่งซื้อ'"></HeaderOrder>
    <div class="container bg-white  px-[15px] py-2">
      <div class="mb-4 font-bold">Payment Proof</div>
      <img src="/images/slip-demo.png" alt="" class="w-1/2" />
      <div class="mt-4 font-bold">Amount</div>
      <div class="">120 ฿</div>
      <div class="flex my-4">
        <div class="w-1/2">
          <p class="font-bold">Date</p>
          <p>1/5/2023</p>
        </div>
        <div class="w-1/2">
          <p class="font-bold">Time</p>
          <p>15.00 น</p>
        </div>
      </div>
    </div>
    <div class="container bg-gray-2 bg-opacity-20 px-[15px] py-2">
      <div class="bg-white p-4 mt-4 mb-4 rounded-[6px]">
        <div class="flex items-center">
          <div>
            <img src="/icons/location.svg" />
          </div>
          <div>
            <span class="text-small pl-2">ที่อยู่จัดส่ง</span>
          </div>
        </div>
        <div class="flex">
          <div>John Doe</div>
          <div class="pl-4">081-234-5678</div>
        </div>
        <div class="text-gray-3 text-small mt-2 leading-[18px]">
          720/19-20 ถนน สุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพมหานคร, 10110
        </div>
      </div>
    </div>
    <div class="container bg-gray-2 bg-opacity-20 mb-24">
      <div class="bg-white w-full mb-4 p-4 mb-2">
        <div class="flex">
          <div class="w-1/12">
            <img src="/icons/avatar-icon.svg" alt="" class="w-full" />
          </div>
          <div class="w-5/12 pl-4 flex items-center">
            <p>ชื่อลูกค้า</p>
          </div>
          <div class="w-6/12 flex justify-end items-center">
            <p class="text-blue">Waiting for Payment</p>
          </div>
        </div>
        <div class="flex mt-4">
          <div class="w-1/6">
            <img src="/images/item-demo.png" alt="" class="w-full" />
          </div>
          <div class="w-4/6 pl-4">
            <p class="mb-2">Product Name</p>
            <p class="mb-0">x1</p>
          </div>
          <div class="w-1/6 flex justify-end items-end">
            <span>฿120</span>
          </div>
        </div>
      </div>
      <div class="bg-white px-[15px] py-4 mb-2">
        <div class="flex">
          <div class="w-1/2">รวมค่าสินค้า</div>
          <div class="w-1/2 flex justify-end">฿120</div>
        </div>
        <div class="flex mt-2 border-b border-gray-4 pb-4">
          <div class="w-1/2">ค่าจัดส่งที่กำหนดโดยผู้ขาย</div>
          <div class="w-1/2 flex justify-end">฿120</div>
        </div>
        <div class="flex items-center">
          <div class="w-1/2 text-title">Total</div>
          <div class="w-1/2 flex justify-end text-blue text-title">฿120</div>
        </div>
      </div>
      <div class="bg-white px-[15px] py-4 mb-2">
        <div class="flex">
          <div class="w-1/2">Order Number:</div>
          <div class="w-1/2 flex justify-end text-blue">12345678910</div>
        </div>
        <div class="flex mt-2">
          <div class="w-1/2">Order Placed On:</div>
          <div class="w-1/2 flex justify-end text-gray-2">
            15:15 15/02/20220
          </div>
        </div>
        <div class="flex mt-2">
          <div class="w-1/2">Paid on:</div>
          <div class="w-1/2 flex justify-end text-gray-2">15:15 15/02/2022</div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full shadow-lg py-2 bg-white">
      <div class="flex px-2">
        <div class="w-1/2 px-2">
          <button
            type="button"
            class="
              flex
              w-full
              border border-red
              text-red text-center
              justify-center
              items-center
              h-[48px]
              mb-[10px]
              rounded-[6px]
            "
          >
            <span class="text-[16px]">ไม่รับยอด</span>
          </button>
        </div>
        <div class="w-1/2 px-2">
          <button
            type="button"
            class="
              flex
              w-full
              bg-blue
              border-none
              text-white text-center
              justify-center
              items-center
              h-[48px]
              mb-[10px]
              rounded-[6px]
            "
          >
            <span class="text-[16px]">ยืนยันยอดเงิน</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, useContext } from "vue";
export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>
<style lang="css" scoped>
</style>
