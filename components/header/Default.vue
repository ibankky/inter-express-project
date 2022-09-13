<template>
    <div>
        <div class="flex w-100 bg-white h-[46px] mb-[40px] drop-shadow-[0_2px_6px_rgba(255,255,255,1)]">
            <div class="w-full flex justify-center items-center">
                <p class="text-center text-18">{{title}}</p>
            </div>

        </div>
    </div>
</template>
<script>
import { defineComponent ,ref } from 'vue'
export default defineComponent({
    props: {
    },
  setup() {
      const title = ref('Login')
      return {
        title
      }
  },
})
</script>

</script>
