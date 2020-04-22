<template>
  <div>
    <div v-if="flag===1">
      <center>
        <font style="font-weight: bold;color: #42A5F5;">
          <h2>No Data Available</h2>
          <div>
            <font style="line-spacing: 1px">Expenditure</font>
          </div>
        </font>
      </center>
    </div>
    <div v-else>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// import { Bar } from 'vue-chartjs'
import { Chart } from "highcharts-vue"; // // eslint-disable-next-line
import expenditure from "./JSON/expenditure.json";
import pincode_json from "./JSON/pincode.json";

export default {
  // extends: Bar,
  components: {
    highcharts: Chart
  },
  props: {
    pincode: String,
    //locality: String,
    pin_loc: String
  },
  data() {
    return {
      expenditure: expenditure,
      pincode_json: pincode_json,
      flag: 0,
      chartOptions: {
        title: {
          text: "Expenditure",
          style: { "font-weight": "bold", color: "#42A5F5" }
        },
        xAxis: {
          categories: [
            "Apparel",
            "Education",
            "Entertainment",
            "Finance",
            "Food",
            "Health",
            "House",
            "Other",
            "Transport"
          ]
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  enabled: false
                }
              }
            }
          ]
        },
        legend: {
          enabled: true,
          itemWidth: 200,
          labelFormatter: function() {
            return "Expenditure";
          }
        },
        series: [
          {
            data: [],
            showInLegend: true,
            type: "column"
          }
        ]
      }
    };
  },
  methods: {
    output(id) {
      // console.log('Poducts are..', this.products.features)
      let data = this.expenditure;
      return data.filter(item => {
        // console.log(item)
        if (item.pincode === +id) {
          console.log(item);
        }
        return item.pincode === +id;
      });
    }
  },
  created() {
    let arr = this.output(this.pincode);
    //console.log(this.output(this.pincode));
    // console.log(this.expenditure[0].other);
    // this.data=this.expenditure[0].other;
    console.log(arr);
    if (arr.length != 0) {
      this.chartOptions.series[0].data = [
        arr[0].apparel,
        arr[0].education,
        arr[0].entertainment,
        arr[0].finance,
        arr[0].food,
        arr[0].health,
        arr[0].house,
        arr[0].other,
        arr[0].teansport
      ];
    } else this.flag = 1;
  }
};
</script>
<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>