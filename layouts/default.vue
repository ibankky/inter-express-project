<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-1">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Default',
})
</script>