<template>
  <div>
    <HeaderOrder :title="'รายละเอียดบุ๊คกิ้ง'"></HeaderOrder>
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
      <div class="bg-white p-4 mt-4 mb-4 rounded-[6px]">
        <div class="flex py-4 border-b border-gray">
          <div class="w-1/2">วันที่ต้องการรถ:</div>
          <div class="w-1/2 flex justify-end">ศุกร์ 11 พ.ย. 2023</div>
        </div>
        <div class="flex py-4">
          <div class="w-1/2">วันที่เข้ารับ:</div>
          <div class="w-1/2 flex justify-end">9.00 - 12.00 น</div>
        </div>
      </div>
      <div class="my-4">รายการใบนำส่ง</div>
      <div class="bg-white p-4 mt-4 mb-4 rounded-[6px]">
        <div class="py-4 border-b border-gray">
          <div>1. M-G20001</div>
          <div class="flex my-2">
            <div class="w-1/12">
              <img src="/icons/avatar-icon.svg" alt="" class="w-full" />
            </div>
            <div class="w-11/12 pl-4 flex items-center">
              <p>ชื่อลูกค้า</p>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="w-4/12 text-center">
              <p class="text-blue text-small">สินค้าควบคุมอุณหภูมิ</p>
            </div>
            <div class="w-4/12 text-center">
              <p class="text-blue  text-small">จำนวนกล่อง : 1</p>
            </div>
            <div class="w-4/12 text-center">
              <p class="text-blue  text-small">ค่าขนส่ง 80฿</p>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div>2. M-G20002</div>
          <div class="flex my-2">
            <div class="w-1/12">
              <img src="/icons/avatar-icon.svg" alt="" class="w-full" />
            </div>
            <div class="w-11/12 pl-4 flex items-center">
              <p>ชื่อลูกค้า</p>
            </div>
          </div>
          <div class="flex mt-2">
            <div class="w-4/12 text-center">
              <p class="text-blue text-small">สินค้าควบคุมอุณหภูมิ</p>
            </div>
            <div class="w-4/12 text-center">
              <p class="text-blue  text-small">จำนวนกล่อง : 1</p>
            </div>
            <div class="w-4/12 text-center">
              <p class="text-blue  text-small">ค่าขนส่ง 80฿</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 w-full shadow-lg py-2">
      <div class="flex px-2">
        <div class="w-full px-2">
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
            @click="clickLabel()"
          >
            <span class="text-[16px]">จัดส่งแล้ว</span>
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
     function clickLabel (){
        this.$router.push('/order')
    }
    return {
      clickLabel
    };
  },
});
</script>
<style lang="css" scoped>
</style>
