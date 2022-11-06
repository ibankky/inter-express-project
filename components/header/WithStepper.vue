<template>
  <div>
      <div class="drop-shadow-lg">
        <div class="flex w-100 bg-white justify-center items-center">
        <div class="ml-4" @click="goToPrev()">
            <img src="icons/back-icon.svg" />
        </div>
        <div class="w-full flex justify-center items-center">
            <p class="text-center text-title py-2 font-bold">{{ title }}</p>
        </div>
        </div>
        <div class="flex w-100 bg-white justify-center items-center ">
        <div class="stepper-wrapper w-1/2">
            <div class="stepper-item completed">
            <div class="step-counter">1</div>
            </div>
            <div class="stepper-item">
            <div class="step-counter">2</div>
            </div>
            <div class="stepper-item">
            <div class="step-counter">3</div>
            </div>
            <div class="stepper-item">
            <div class="step-counter">4</div>
            </div>
            <div class="stepper-item">
            <div class="step-counter">5</div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    title: String,
    step:String
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

<style scoped>
.stepper-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #0072BC;
  width: 100%;
  top: 10px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #0072BC;
  width: 100%;
  top: 10px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  margin-bottom: 6px;
  border: solid 2px #0072BC;
  color: #0072BC;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: #0072BC;
  color:#fff;
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #0072BC;
  width: 100%;
  top: 10px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}
</style>
