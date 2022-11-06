<template>
  <div>
    <HeaderWithOrderMenu :title="'คำสั่งซื่อ'"></HeaderWithOrderMenu>
    <div class="container bg-gray-2 bg-opacity-20  min-h-screen px-[15px]">
      <div class="flex space-x-4 py-4">
        <div class="flex-shrink-0">
          <button
            type="button"
            class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-2"
          >
            <span class="text-[14px]">ทั้งหมด</span>
          </button>
        </div>
        <div class="flex-shrink-0">
          <button
            type="button"
            class="flex w-full bg-white border-none text-gray-3 text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-2"
          >
            <span class="text-[14px]">สินค้าทั่วไป</span>
          </button>
        </div>
        <div class="flex-shrink-0">
          <button
            type="button"
            class="flex w-full bg-white border-none text-gray-3 text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-2"
          >
            <span class="text-[14px]">สินค้าควบคุมอุณหภูมิ</span>
          </button>
        </div>
      </div>
      <div class="">
        <div class="bg-white w-full mb-4 p-4 rounded-[6px]">
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
          <div class="flex mt-4 border-b border-gray-4 pb-4">
            <div class="w-1/2 flex items-center">
              <span class="text-blue">จำนวนกล่อง: 1 </span>
            </div>
            <div class="w-1/2 flex justify-end items-center">
              <span class="text-blue">สินค้าควบคุมอุณหภูมิ</span>
            </div>
          </div>
          <div class="flex mt-4">
            <div class="w-1/2">
              <p>Total <span class="text-blue">฿120</span></p>
            </div>
            <div class="w-1/2 flex justify-end items-center">
              <button
                type="button"
                class="flex bg-blue border-none text-white text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-2"
              >
                <span class="text-[14px]">Generate QR</span>
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white w-full mb-4 p-4 rounded-[6px]">
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
          <div class="flex mt-4 border-b border-gray-4 pb-4">
            <div class="w-1/2 flex items-center">
              <span class="text-blue">จำนวนกล่อง: 1 </span>
            </div>
            <div class="w-1/2 flex justify-end items-center">
              <span class="text-blue">สินค้าควบคุมอุณหภูมิ</span>
            </div>
          </div>
          <div class="flex mt-4">
            <div class="w-1/2">
              <p>Total <span class="text-blue">฿120</span></p>
            </div>
            <div class="w-1/2 flex justify-end items-center">
              <button
                type="button"
                class="flex bg-blue border-none text-white text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-2"
              >
                <span class="text-[14px]">Generate QR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <order-footer-order></order-footer-order>
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
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
