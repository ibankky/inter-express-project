<template>
    <div class="p-2">
        <h2 class="text-heading-1 pb-5 px-0">Product</h2> 
        <div class="mx-2 grid grid-cols-2 gap-4">
            <div   v-for="(item, index) in Products" :key="`product${index}`" class="">
                 <div class="bg-gray h-[150px]"></div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { defineComponent , ref } from 'vue'
export default defineComponent({
    setup() {
      const Products = ref([
          {name:"product1"},
          {name:"product2"},
          {name:"product3"},
          {name:"product4"},
          {name:"product5"},
          {name:"product6"},
      ])
      return {
       Products,
  }
    }
    
})
</script>