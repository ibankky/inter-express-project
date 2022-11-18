<template>
  <div  class="bg-gray-2 bg-opacity-20 h-full w-full relative pb-[20px]">
     <HeaderWithStepper :title="'สร้างร้านค้า'"></HeaderWithStepper>
     <div class="container px-[15px] mt-[20px] min-h-[90vh] ">
      <div class="bg-white rounded-[6px] px-2 py-2 ">
         <p class="pl-2 my-2 text-[16px]">ข้อมูลวางบิล</p>
        <textarea
          type="text"
          rows="4"
          placeholder="ที่อยู่วางบิล"
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
        <input
          type="text"
          placeholder="วันและเวลาวางบิล"
          class="form-control w-full border-0 border-b border-gray bg-white py-4 focus:ring-0 focus:border-gray"
        />
         
      </div>
       
    </div>
    <div class="fixed bottom-0 w-full px-[15px]">
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
  import { defineComponent, useContext } from 'vue'
  export default defineComponent({
    setup() {
        function submitNewShop(){
         this.$router.push('/new-shop/paymentdetail')
      }
      return {
          submitNewShop
      }
    }
  })
</script>
