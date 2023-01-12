<template>
  <div>
    <HeaderOrder :title="'ติดตามสถานะการจัดส่ง'"></HeaderOrder>
    <div class="container bg-gray-2 bg-opacity-20 px-[15px] py-2">
      <div class="bg-white p-4 mt-4 mb-4 rounded-[6px]">
        <div class="flex items-center">
          <div>จัดส่งโดย <span class="font-bold">Inter Express Logistics</span></div>
        </div>
        <div class="flex mt-2">
          <div class="text-gray">รหัสติดตามพัสดุ</div>
          <div class="pl-4 text-blue">1231232131</div>
        </div>
      </div>
      <div class="bg-white p-4 mt-4 mb-4 rounded-[6px]">
        <div style="margin-left:10px">
        <div class="mb-2">สถานะการจัดส่ง</div>
<div class="wrapper">
<ul class="StepProgress">
  <div class="StepProgress-item is-done"><strong>กำลังนะส่ง สินค้า</strong></div>
  <div class="StepProgress-item is-done"><strong>กำลังนำส่ง ถึงศูนย์ IEL</strong></div>
  <div class="StepProgress-item is-done"><strong>พนักงานเข้ารับสินค้า</strong></div>
  <div class="StepProgress-item "><strong>ผู้ขายเตรียม พัศดุ</strong></div>
</ul>
</div>
</div>
      </div>
      
    </div>
    <div class="fixed bottom-0 w-full shadow-lg py-2">
      <div class="flex px-2">
        <div class="w-1/2 px-2">
          <button
            type="button"
            class="
              flex
              w-full
              border
              border-blue
              text-blue text-center
              justify-center
              items-center
              h-[48px]
              mb-[10px]
              rounded-[6px]
            "
          >
            <span class="text-[16px]">QR code</span>
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
            <span class="text-[16px]">พิมพ์ลาเบล</span>
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
.wrapper {
	 width: 330px;
	 font-family: 'Helvetica';
	 font-size: 14px;
}
 .StepProgress {
	 position: relative;
	 padding-left: 45px;
	 list-style: none;
}
 .StepProgress::before {
	 display: inline-block;
	 content: '';
	 position: absolute;
	 top: 0;
	 left: 15px;
	 width: 10px;
	 height: 100%;
}
 .StepProgress-item {
	 position: relative;
	 counter-increment: list;
}
 .StepProgress-item:not(:last-child) {
	 padding-bottom: 20px;
}
 .StepProgress-item::before {
	 display: inline-block;
	 content: '';
	 position: absolute;
	 left: -30px;
	 height: 100%;
	 width: 10px;
}
 .StepProgress-item::after {
	 content: '';
	 display: inline-block;
	 position: absolute;
	 top: 0;
	 left: -37px;
	 width: 20px;
	 height: 20px;
	 border: 2px solid #CCC;
	 border-radius: 50%;
   padding: 1px;
	 background-color: #ccc;
}
 .StepProgress-item.is-done::before {
	 border-left: 2px solid green;
}
 .StepProgress-item.is-done::after {
	 font-size: 13px;
	 color: #FFF;
	 text-align: center;
	 border: 1px solid #0072BC;
	 background-color: #0072BC;
}
 .StepProgress-item.current::before {
	 border-left: 2px solid #0072BC;
}
 .StepProgress strong {
	 display: block;
}
</style>
