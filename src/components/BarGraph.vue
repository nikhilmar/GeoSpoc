<template>
  <div>
    <div v-if="flag===1">
      <center>
        <font style="font-weight: bold;color: #42A5F5;">
          <h2>No Data Available</h2>
          <div>
            <font style="line-spacing: 1px">Income</font>
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
import { Chart } from "highcharts-vue";
import income_json from "./JSON/income.json";
import locality_json from "./JSON/locality.json";
import { color } from "highcharts";
export default {
  // extends: Bar,
  components: {
    highcharts: Chart
    //income: json
  },
  props: {
    //pincode: String,
    locality: String,
    pin_loc: String
  },
  data() {
    return {
      arr: [],
      chartOptions: {
        title: {
          text: "Monthly Income Distibution",
          style: { "font-weight": "bold", color: "#42A5F5" }
        },
        legend: {
          enabled: true,
          itemWidth: 200,
          labelFormatter: function() {
            return "Income";
          }
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
                minWidth: 100
              },
              chartOptions: {
                legend: {
                  enabled: true
                }
              }
            }
          ]
        },
        plotOptions: {
          // series: {
          //     // general options for all series
          // },
          pie: {
            innerSize: 50,
            depth: 45
          }
        },
        series: [
          {
            data: [],
            type: "pie",
            showInLegend: true,
            name: "Income",
            dataLabels: true
          }
        ]
      },
      income: income_json,
      locality_json: locality_json,
      flag: 0
    };
  },
  methods: {
    output(id) {
      let loc = this.locality_json.features;
      let data = this.income;
      var loc_id;
      let loc_name = loc.filter(item => {
        if (item.attributes.locality_i === +id)
          loc_id = item.attributes.locality;
        return loc_id;
      });
      if (loc_name.length != 0) {
        // console.log("Name is ",loc_name[0].attributes.locality)
        return data.filter(item => {
          // console.log(item)
          if (item.locality === loc_name[0].attributes.locality) {
            console.log(item);
          }
          return item.locality === loc_name[0].attributes.locality;
        });
      }

      return [];
    }
  },
  created() {
    //console.log(this.income);
    let arr = this.output(this.locality);
    console.log("arr is ", arr);
    if (arr.length != 0) {
      this.chartOptions.series[0].data = [arr[0].income];
    } else {
      this.flag = 1;
    }
  }
};
</script>
<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>