<template>
      <div class="hello" ref="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "SimpleColumnChart",
  props: ["data"],
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    // Add data
  
    this.data.forEach((element) => {
      chart.data.push({
        month: element.month,
        value: element.value_store,
      });
    });
    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if (target.dataItem && target.dataItem.index & (2 == 2)) {
          return dy + 25;
        }
        return dy;
      }
    );

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "month";
    series.name = "Value";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style>
.hello {
  width: 100%;
  height: 400px;
}
</style>