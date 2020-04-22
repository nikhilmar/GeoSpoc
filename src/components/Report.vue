<template>
  <div id="grid">
    <div v-if="pin_loc === 'p'">
      <div id="content">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <div
                v-for="population in getData(pincode)"
                :key="population.attributes.FID"
              ><font id="text">{{ population.attributes.population }}</font></div>
            </b>
          </font>
        </center>
        <center>
          <font class=".font-weight-dark" color="black">Population</font>
        </center>
      </div>
      <div id="content">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <div
                v-for="population in getData(pincode)"
                :key="population.attributes.FID"
              ><font id="text">{{ population.attributes.households }}</font></div>
            </b>
          </font>
        </center>
        <center>
          <font class=".font-weight-dark" color="black">Households</font>
        </center>
      </div>
      <div id="parent">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">District</font>:
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <span
                v-for="population in getData(pincode)"
                :key="population.attributes.FID"
              >{{ population.attributes.district_n }}</span>
            </b>
          </font>
        </center>
      </div>
      <div id="parent">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">State</font>:
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <span
                v-for="population in getData(pincode)"
                :key="population.attributes.FID"
              >{{ population.attributes.state_name }}</span>
            </b>
          </font>
        </center>
      </div>
    </div>
    <div v-else>
      <div id="content">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <div
                v-for="population in getData(locality)"
                :key="population.attributes.FID"
              ><font id="text">{{ population.attributes.population }}</font></div>
            </b>
          </font>
        </center>
        <center>
          <font class=".font-weight-dark" color="black">Population</font>
        </center>
      </div>
      <div id="content">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <div
                v-for="population in getData(locality)"
                :key="population.attributes.FID"
              ><font id="text">{{ population.attributes.households }}</font></div>
            </b>
          </font>
        </center>
        <center>
          <font class=".font-weight-dark" color="black">Households</font>
        </center>
      </div>
      <div id="parent">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">Locality</font>:
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <span
                v-for="population in getData(locality)"
                :key="population.attributes.FID"
              >{{ population.attributes.locality }}</span>
            </b>
          </font>
        </center>
      </div>
      
      <div id="parent">
        <center>
          <font class=".font-weight-dark" color="#42A5F5">City</font>:
          <font class=".font-weight-dark" color="#42A5F5">
            <b>
              <span
                v-for="population in getData(locality)"
                :key="population.attributes.FID"
              >{{ population.attributes.city }}</span>
            </b>
          </font>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import locality_json from "./JSON/locality.json";
import pincode_json from "./JSON/pincode.json";

export default {
  props: {
    pincode: String,
    locality: String,
    pin_loc: String
  },
  data() {
    // console.log(json)
    return {
      locality_json: locality_json,
      pincode_json: pincode_json
      // pin_loc: '',
    };
  },
  methods: {
    getData(pincode) {
      var data;
      var arr;
      // console.log('Poducts are..', this.products.features)
      if (this.pin_loc === "p") {
        data = this.pincode_json.features;
        arr = data.filter(item => {
          // console.log(item)
          if (item.attributes.pincode === +pincode) {
            console.log(item);
          }
          return item.attributes.pincode === +pincode;
        });
      } else if (this.pin_loc === "l") {
        data = this.locality_json.features;
        arr = data.filter(item => {
          // console.log(item)
          if (item.attributes.locality_i === +pincode) {
            console.log(item);
          }
          return item.attributes.locality_i === +pincode;
        });
      }
      // let data = this.locality_json.features
      // return data.filter(item => {
      //  // console.log(item)
      //   if (item.attributes.locality_i === +pincode) {
      //     console.log(item)
      //   }
      //   return item.attributes.locality_i === +pincode
      // })
      return arr;
    }
  }
};
</script>
<style scoped>
div {
  background: #e3f2fd;
}
#grid {
  height: 100%;
  width: 100%;
}
#content {
  margin-top: 10px;
  width: 50%;
  height: 0%;
  float: left;
}
#parent {
  width: 50%;
  height: 100%;
  float: left;
  background: white;
}
#text {
  font-size: 20pt;
}
</style>