<template>
  <div>
    <div
      class="
        flex
        w-100
        bg-white
        justify-center
        items-center
        border-b border-gray-4
      "
    >
      <div class="ml-4" @click="goToPrev()">
        <img src="/icons/back-icon.svg" />
      </div>
      <div class="w-full flex justify-center items-center">
        <p class="text-center text-title py-2 font-bold">{{ title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    function goToPrev() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
    return {
      goToPrev,
    };
  },
});
</script>

</script>
