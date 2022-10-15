<template>
  <div class="bg-gray-2 bg-opacity-20 h-full w-full relative  min-h-screen">
    <HeaderDefault :title="'Log in'"></HeaderDefault>
    <div class="container px-[15px] min-h-[90vh]">
      <div class="bg-white rounded-[6px] px-2 py-2">
        <div class="text-black flex border-0 border-b border-gray px-2">
          <div class="w-1/3 flex items-center">
            <label for="forms-logintel">เบอร์โทรศัพท์</label>
          </div>
          <div class="w-2/3 flex-grow">
            <input class="w-full border-0  bg-white py-4 focus:ring-0 focus:border-gray text-right" type="text" placeholder="eg.0812345678" id="forms-logintel"/>
          </div>
        </div>
        
       <div class="text-black flex border-0  px-2">
          <div class="w-1/3 flex items-center">
            <label for="forms-loginPassword">รหัสผ่าน</label>
          </div>
          <div class="w-2/3 flex-grow">
            <input class="w-full border-0  bg-white py-4 focus:ring-0 focus:border-gray text-right" type="password" placeholder="Password" id="forms-loginPassword"/>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="pt-[17px]">
          <nuxt-link :to="'/reset-password'">
          <span class="text-blue">ลืมรหัสผ่าน</span>
          </nuxt-link>
        </div>
      </div>
      <div class="sticky top-[100vh] pb-4">
         <nuxt-link :to="'/'">
        <div
          class="flex w-full bg-blue border-none text-white text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
        >
          <span class="text-[16px]">เข้าสู่ระบบ</span>
        </div>
         </nuxt-link>
        <div class="relative flex py-2 items-center mb-[10px]">
          <div class="flex-grow border-t border-gray"></div>
          <span class="flex-shrink mx-4 text-gray-400">หรือ</span>
          <div class="flex-grow border-t border-gray"></div>
        </div>
        <div
          class="flex w-full bg-fb border-none text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
        >
          <div class="text-[16px] flex justify-center items-center">
            <img src="icons/facebook.svg" />
            <span class="text-white">Log in With Facebook</span>
          </div>
        </div>
        <div
          class="flex w-full border border-gray bg-white text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
        >
          <div class="text-[16px] flex justify-center items-center">
            <img src="icons/google.svg" />
            <span class="text-gray ml-2">Log in With Google</span>
          </div>
        </div>
        <div
          class="flex w-full bg-linecolor border-none text-white text-center justify-center items-center h-[48px] mb-[10px] rounded-[6px]"
        >
          <img src="icons/line-icon.svg" />
          <span class="text-[16px] ml-2">Log in With Line</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {},
};
</script>
