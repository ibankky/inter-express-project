<template>
  <div class="fixed bottom-0 w-full bg-white shadow-lg">
    <div class="flex w-100 py-5 px-1 text-[12px]">
      <div class="w-1/6 text-center justify-center">
        <nuxt-link :to="'/'">
        <div class="flex text-center justify-center">
          <img src="/icons/home.svg"  class="w-[28px] h-[28px]"/>
        </div>
        <div class="mt-1">หน้าหลัก</div>
        </nuxt-link>
      </div>
     <div class="w-1/6 text-center justify-center">
       <nuxt-link :to="'/product'">
        <div class="flex text-center justify-center">
          <img src="/icons/box.svg" class="w-[28px] h-[28px]"/>
        </div>
        <div class="mt-1">สินค้า</div>
       </nuxt-link> 
      </div>
     <div class="w-1/6 text-center justify-center">
        <div class="flex text-center justify-center">
          <img src="/icons/megaphone.svg" class="w-[28px] h-[28px]"/>
        </div>
        <div class="mt-1">โฆษณา</div>
      </div>
      <div class="w-1/6 text-center justify-center">
        <div class="flex text-center justify-center">
          <img src="/icons/vuesax-linear-messages.svg" class="w-[28px] h-[28px]"/>
        </div>
        <div class="mt-1">ข้อความ</div>
      </div>
      <div class="w-1/6 text-center justify-center">
        <div class="flex text-center justify-center">
          <img src="/icons/vuesax-linear-notification.svg" class="w-[28px] h-[28px]"/>
        </div>
        <div class="mt-1">แจ้งเตือน</div>
      </div>
      <div class="w-1/6 text-center justify-center">
        <div class="flex text-center justify-center">
          <img src="/icons/product-icon.svg"  class="w-[28px] h-[28px]"/>
        </div>
        <div class="mt-1">เมนู</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {},
  setup() {
    return {
    };
  },
});
</script>
