<template>
  <div>
    <HeaderDefault></HeaderDefault>
    <section>
      <banner-slider></banner-slider>
    </section>
  </div>
</template>
<script>
  import { ref} from 'vue'
import BannerSlider from '../components/BannerSlider.vue'
import CategorySlider from '../components/CategorySlider.vue'
  export default {
  components: { BannerSlider, CategorySlider },
    setup() {
      return {
        message
      }
    }
  }
</script>
