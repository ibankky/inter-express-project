<template>
  <div>
    {{ message }}
  </div>
</template>
<script>
  import { ref} from 'vue'
  export default {
    setup() {
      const message = ref('INTER EXPRESS Vue.js')
      return {
        message
      }
    }
  }
</script>
