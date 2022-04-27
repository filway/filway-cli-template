<template>
  <div id="app">
    <div class="page">
      <div class="page-title-box">
        <h3 class="page-title">Test Pin</h3>
      </div>
      <div class="page-sn">SN: 1234567890</div>
      <div class="page-gift-img">
        <img src="../assets/img/news2.jpg" alt="">
      </div>
      <div class="page-use-btn">USE</div>
      <div class="page-expiry">EXPIRY: 31/12/2021</div>
      <div class="page-line"></div>
      <div class="page-tc">T&C</div>
    </div>
    <partition-js :srcArr="srcArr" @scriptLoad="callbackFn"></partition-js>
  </div>
</template>

<script>
import { MONITOR_SRC, NPN_GIFT_ADJUST_SRC} from '../common/constant'
export default {
  name: "white",
  data() {
    return {
      srcArr: [
        MONITOR_SRC,
        NPN_GIFT_ADJUST_SRC
      ]
    }
  },
  methods: {
    callbackFn() {
      console.log(111)
    }
  }
}
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/white.css";
</style>