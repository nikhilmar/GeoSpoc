<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-title>
        <v-icon>home</v-icon>Report
        <br />
        <h6>
          Individual
          <span v-if="pin_loc === 'p'">Pincode</span>
          <span v-else>Locality</span>
          report for
          <span v-if="pin_loc === 'p'">
            <input
              ref="text"
              type="text"
              name="text"
              placeholder="Pincode"
              v-model="pincode"
              @blur="setValues()"
            />
          </span>
          <span v-else>
            <input
              ref="text"
              type="text"
              name="text"
              placeholder="Locality"
              v-model="locality"
              @blur="setValues()"
            />
          </span>
        </h6>
      </v-toolbar-title>
      <!-- <span>
           <v-text-field
            v-model="label"
            label="Label"
      ></v-text-field></span>-->
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <!-- <v-radio-group v-model="row" row>
        <v-radio label="Option 1" value="radio-1"></v-radio>
        <v-radio label="Option 2" value="radio-2"></v-radio>
      </v-radio-group>-->
      <!-- <v-radio-group v-model="row" row>
      <v-radio label="Option 1" value="radio-1"></v-radio>
      <v-radio label="Option 2" value="radio-2"></v-radio>
      </v-radio-group>-->
      <v-btn color="blue-grey" class="white--text" v-on:click="myFunc()">
        Pincode/Locality
      </v-btn>
      <!-- <span>
            <v-text-field
            v-model="label"
            id="text"
            placeholder="pincode"
      ></v-text-field></span>-->

      <!-- <span id="right">Right</span> -->
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view :key="count"></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; Nik's World</span>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import { store } from "../store/index.js";
export default {
  data: () => ({
    pin_loc: "l",
    pincode: "",
    locality: "",
    count: 0
  }),
  methods: {
    myFunc() {
      //alert("Clicked")
      if (this.pin_loc === "l") this.pin_loc = "p";
      else if (this.pin_loc === "p") this.pin_loc = "l";
      this.$refs.text.focus();
    },
    setValues() {
      console.log(
        "Pin_Loc ",
        this.pin_loc,
        "Pincode ",
        this.pincode,
        "Locality ",
        this.locality
      );
      store.state.pin_loc = this.pin_loc;
      if (this.pin_loc === "p") store.state.pincode = this.pincode;
      else if (this.pin_loc === "l") store.state.locality = this.locality;
      console.log(
        "From Store:Pin_Loc ",
        store.state.pin_loc,
        "Pincode ",
        store.state.pincode,
        "Locality ",
        store.state.locality
      );
      this.count += 1;
    }
  }
};
</script>

<style scoped>
#text {
  padding: 300px;
  width: 30px;
  line-height: 100px;
}
#right {
  float: right;
}

input {
  -moz-border-radius: 15px;
  border-radius: 15px;
  border: 1px;
  padding: 5px;
}

v-content {
  padding: 0px;
  margin: 0px;
  height:400px
}
</style>