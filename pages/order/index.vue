<template>
  <div>
    <HeaderWithOrderMenu :title="'คำสั่งซื่อ'" @activeMenuChange='activeMenuChange'></HeaderWithOrderMenu>
    <div class="container bg-gray-2 bg-opacity-20  min-h-screen px-[15px]">
      <div class="flex space-x-4 py-4">
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
      <div>
        order type : {{showOrderType}}
      </div>
        <div
        v-for="(order, index) in orderLists"
        :key="index"
        class=""
      >
        <div class="bg-white w-full mb-4 p-4 rounded-[6px]">
          <div class="flex">
            <div class="w-1/12">
              <img src="/icons/avatar-icon.svg" alt="" class="w-full" />
            </div>
            <div class="w-5/12 pl-4 flex items-center">
              <p>{{order.customer}}</p>
            </div>
            <div class="w-6/12 flex justify-end items-center">
              <p class="text-blue" v-if="showOrderType == 'payment'">รอชำระเงิน</p>
              <p class="text-blue" v-else-if="showOrderType == 'label'">ที่ต้องพิมพ์ลาเบล</p>
              <p class="text-blue" v-else-if="showOrderType == 'need-delivery'">ที่ต้องพิมพ์ใบรายการนำส่ง</p>
              <p class="text-blue" v-else-if="showOrderType == 'waiting-delivery'">รอจัดส่ง</p>
              <p class="text-blue" v-else-if="showOrderType == 'delivery'">เตรียมจัดส่ง</p>
              <p class="text-blue" v-else-if="showOrderType == 'success'">สำเร็จ</p>
              <p class="text-blue" v-else-if="showOrderType == 'cancel'">ยกเลิก</p>
            </div>
          </div>
          <div v-for="(product, index) in order.products" :key="index" class="flex mt-4">
            <div class="w-1/6">
              <img src="/images/item-demo.png" alt="" class="w-full" />
            </div>
            <div class="w-4/6 pl-4">
              <p class="mb-2">{{product.name}}</p>
              <p class="mb-0">x {{product.quantity}}</p>
            </div>
            <div class="w-1/6 flex justify-end items-end">
              <span>฿ {{product.price}}</span>
            </div>
          </div>
          <div class="flex mt-4 border-b border-gray-4 pb-4">
            <div class="w-1/2 flex items-center">
              <span class="text-blue">จำนวนกล่อง: {{order.boxNumber}} </span>
            </div>
            <div class="w-1/2 flex justify-end items-center">
              <span class="text-blue">{{order.type}}</span>
            </div>
          </div>
          <div class="flex mt-4">
            <div class="w-1/2">
              <p>Total <span class="text-blue">฿{{order.price}}</span></p>
            </div>
            
            <div class="w-1/2 flex justify-end items-center" v-if="showOrderType == 'label'">
              <button
                type="button"
                class="flex bg-blue border-none text-white text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-2"
              >
                <span class="text-[14px]">Generate QR</span>
              </button>
            </div>
            <div class="w-1/2 flex justify-end items-center" v-if="showOrderType == 'payment'">
              <button
                type="button"
                class="flex border text-red text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-4"
                @click="clickCancel()"
              >
                <span class="text-[14px]">ยกเลิก</span>
              </button>
            </div>
            <div class="w-1/2 flex justify-end items-center" v-if="showOrderType == 'waiting-delivery'">
              <button
                type="button"
                class="flex bg-blue border-none text-white text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-"
              >
                <span class="text-[14px]">จัดส่งแล้ว</span>
              </button>
            </div>
            <div class="w-1/2 flex justify-end items-center" v-if="showOrderType == 'cancel'">
              <button
                type="button"
                class="flex bg-blue border-none text-white text-center justify-center items-center h-[30px] mb-[10px] rounded-[6px] px-2"
              >
                <span class="text-[14px]">ดูรายละเอียด</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <order-footer-order-label v-if="showOrderType == 'label'"></order-footer-order-label>
    <order-footer-order-delivery v-if="showOrderType == 'need-delivery'"></order-footer-order-delivery>
  </div>
</template>
<script>
import { defineComponent, ref,  useContext } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const showOrderType = ref('payment');
    const orderLists = ref([]);
    const order1 = [
        {
          customer : 'ชื่อลูกค้า1',
          price : '120',
          boxNumber : '1',
          type: 'สินค้าควบคุมอุณหภูมิ',
          products : [
            {
              image: '/images/item-demo.png',
              name : 'product name',
              quantity : '1',
              price : '120'
            },
            {
              image: '/images/item-demo.png',
              name : 'product name 2',
              quantity : '2',
              price : '120'
            }
          ] 
        }
    ]
    const order2 = [
        {
          customer : 'ชื่อลูกค้า',
          price : '120',
          boxNumber : '1',
          type: 'สินค้าควบคุมอุณหภูมิ',
          products : [
            {
              image: '/images/item-demo.png',
              name : 'product name',
              quantity : '1',
              price : '120'
            },
            {
              image: '/images/item-demo.png',
              name : 'product name 2',
              quantity : '2',
              price : '120'
            }
          ] 
        },
        {
          customer : 'ชื่อลูกค้า',
          price : '120',
          boxNumber : '1',
          type: 'สินค้าควบคุมอุณหภูมิ',
          products : [
            {
              image: '/images/item-demo.png',
              name : 'product name',
              quantity : '1',
              price : '120'
            },
          ] 
        }
    ]
    const order3 = [
        {
          customer : 'ชื่อลูกค้า',
          price : '120',
          boxNumber : '1',
          type: 'สินค้าควบคุมอุณหภูมิ',
          products : [
            {
              image: '/images/item-demo.png',
              name : 'product name',
              quantity : '1',
              price : '120'
            },
          ] 
        }
    ]
    orderLists.value = order1
    function activeMenuChange(menu){
      showOrderType.value = menu
      if( menu == 'label') {
        console.log('set 2')
        orderLists.value = order2
      }else if(menu == 'waiting-delivery'){
        console.log('set 2')
        orderLists.value = order2
      }else if(menu == 'cancel'){
          orderLists.value = order3
      }else{
         orderLists.value = order1
      }
    }
    function clickCancel(){
      this.$router.push('/order/detail/cancel')
    }
    return {
      activeMenuChange,

      showOrderType,
      orderLists,

      clickCancel
    };
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
