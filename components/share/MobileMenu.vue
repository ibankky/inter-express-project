<template>
    <div class="fixed bottom-0 w-full  bg-white shadow-lg">
        <div class="flex w-100 py-5 px-1">
            <div class="w-1/4 text-center justify-center">Shop</div>
            <div class="w-1/4 text-center justify-center">Compunity</div>
            <div class="w-1/4 text-center justify-center">Notification</div>
            <div class="w-1/4 text-center justify-center">Account</div>
        </div>
    </div>
</template>
<script>
import { defineComponent ,ref } from 'vue'
export default defineComponent({
    props: {
    },
  setup() {
      const message = ref('INTER EXPRESS Vue.js')
      return {
        message
      }
  },
})
</script>

</script>
