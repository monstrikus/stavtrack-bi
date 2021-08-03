<template>
  <div class="FunnelGraph" ref="FunnelGraph"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "FunnelGraph",
  props: ["data"],
  data() {
    return {
      orders: [],
      qualifiedLeads: [],
      convertLeads: [],
      sendOffers: [],
      newDeals: [],
      firstDeals: [],
      secDeals: [],
      regDeals: [],
    };
  },
  mounted() {
    function toChartData(array) {
      chart.data.push({
        name: array.reverse()[0].value_name,
        value: array.reverse()[0].value_store,
      });
    }
    function filterData(data, array, find) {
      array = data.filter(el => el.value_name === find);
      toChartData(array);
    }
    let chart = am4core.create(this.$refs.FunnelGraph, am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0;

    filterData(this.data, this.orders, "Заявки");
    filterData(this.data, this.qualifiedLeads, "Кач лиды");
    filterData(this.data, this.convertLeads, "Сконверт лиды");
    filterData(this.data, this.sendOffers, "Сконверт лиды");
    filterData(this.data, this.newDeals, "Отправлено КП");
    filterData(this.data, this.firstDeals, "Сделки выст");
    filterData(this.data, this.secDeals, "Перв сделки");
    filterData(this.data, this.regDeals, "Повт сделки");

    let series = chart.series.push(new am4charts.FunnelSeries());
    series.colors.step = 2;
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;

    series.labelsContainer.paddingLeft = 15;
    series.labelsContainer.width = 200;

    //series.orientation = "horizontal";
    //series.bottomRatio = 1;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "left";
    chart.legend.valign = "bottom";
    chart.legend.margin(5, 5, 20, 5);
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style>
.FunnelGraph {
  width: 100%;
  height: 400px;
}
</style>