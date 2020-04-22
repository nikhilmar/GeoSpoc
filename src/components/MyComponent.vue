<template>
  <div>
    <div class="container" v-if="pin_loc === 'p'">
      <div class="row">
        <div class="box">
          <Report :pincode="pincode" :pin_loc="pin_loc" />
        </div>
        <div class="box"><strong>
          <font class=".font-weight-dark" color="#42A5F5" size="5pt">Space for Map</font>
        </strong></div>
      </div>
      <div>
        <strong>
          <font class=".font-weight-dark" color="#42A5F5" size="5pt">Demographics</font>
        </strong>
      </div>
      <div class="row">
        <div class="box">
          <center>
            <font style="font-weight: bold;color: #42A5F5;">
              <h2>No Data Available</h2>
              <div>
                <font style="line-spacing: 1px">Income</font>
              </div>
            </font>
          </center>
        </div>
        <div class="box">
          <Expenses :pincode="pincode" :pin_loc="pin_loc" />
        </div>
      </div>
    </div>
    <div class="container" v-if="pin_loc === 'l'">
      <div class="row">
        <div class="box">
          <Report :locality="locality" :pin_loc="pin_loc" />
        </div>
        <div class="box"><center><strong>
          <font class=".font-weight-dark" color="#42A5F5" size="5pt">Space for Map</font>
        </strong></center></div>
      </div>
      <div>
        <strong>
          <font class=".font-weight-dark" color="#42A5F5" size="5pt">Demographics</font>
        </strong>
      </div>
      <div class="row">
        <div class="box">
          <BarGraph :locality="locality" :pin_loc="pin_loc" />
        </div>
        <div class="box">
          <center>
            <font style="font-weight: bold;color: #42A5F5;">
              <h2>No Data Available</h2>
              <div>
                <font style="line-spacing: 1px">Expenditure</font>
              </div>
            </font>
          </center>
          <!-- <Expenses :locality="locality" :pin_loc="pin_loc" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import AppLayoutVue from '../layouts/AppLayout.vue'
import Report from "../components/Report.vue";
import BarGraph from "../components/BarGraph.vue";
import Expenses from "../components/Expenses.vue";
import Map from "../components/Map.vue";
import { store } from "../store/index.js";
export default {
  // methods: {
  //   setLayout (layout) {
  //     this.$store.commit('SET_LAYOUT', layout)
  //   }
  // },
  components: {
    Report,
    BarGraph,
    Map,
    Expenses
  },
  data() {
    // console.log(json)
    return {
      pin_loc: "",
      pincode: "",
      locality: ""
    };
  },
  created() {
    this.pin_loc = store.state.pin_loc;
    this.pincode = store.state.pincode;
    console.log("Pincode..", this.pincode);
    this.locality = store.state.locality;
    console.log("Locality..", this.locality);
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* overflow: hidden; */
}

.container {
  /* display: flex;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px; */
  /* overflow: hidden; */
  height: 75vh;
  width: 100vw;
}
.row {
  display: flex;
  height: 50%;
  /* flex-wrap: wrap; */
  flex-direction: row;
}
.box {
  /* min-width: 140px;
  height: 50vh; */
  /* width: 100%; */
  /* padding: 8px; */
  /* font-weight: bold; */
  /* font-size: 17px; */
  /* line-height: 24px; */
  /* border: 1px solid #589BFF; */
  /* border-radius: 12px; */
  /* display: flex;
  align-items: center;
  box-sizing: border-box; */
  flex: 1;
  flex-basis: 100%;
  align-items: center;
}
</style>

