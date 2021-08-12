<template>
  <v-container>
    <v-row>
      <v-col md="2">
        <Card
          :cardName="grossProfitAll[0].value_name"
          :count="grossProfitAll[0].value_store"
        />
      </v-col>

      <v-col md="2">
        <Card
          :cardName="wialonObjects[0].value_name"
          :count="wialonObjects[0].value_store"
        />
      </v-col>

      <v-col md="2">
        <Card :cardName="orders[0].value_name" :count="orders[0].value_store" />
      </v-col>

      <v-col md="2">
        <Card
          :cardName="conversion[0].value_name"
          :count="conversion[0].value + ' %'"
        />
      </v-col>

      <v-col md="2">
        <Card
          :cardName="receivable[0].value_name"
          :count="receivable[0].value"
        />
      </v-col>

      <v-col md="2">
        <Card :cardName="deals[0].value_name" :count="deals[0].value_store" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <SimpleColumn :data="grossProfitAll" />
      </v-col>

      <v-col>
        <FunnelGraph :data="state" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Card from "./components/Card";
import SimpleColumn from "../graphs/SimpleColumnGraph.vue";
import FunnelGraph from "../graphs/FunnelGraph.vue";

export default {
  name: "Dashboard",
  components: {
    Card,
    SimpleColumn,
    FunnelGraph,
  },
  data() {
    return {
      grossProfitAll: [],
      wialonObjects: [],
      orders: [],
      conversion: [],
      receivable: [],
      deals: [],
      qualifiedLeads: [],
      convertLeads: [],
      sendOffers: [],
      newDeals: [],
      firtsDeals: [],
      secDeals: [],
      regDeals: [],
      state: [],
    };
  },
  created() {
    this.$http
      .get(`http://127.0.0.1:8000/api/state`)
      .then(response => {
        this.grossProfitAll = response.data.filter(element => element.value_name == "Общий вал");
        this.wialonObjects = response.data.filter(element => element.value_name == "Объекты");
        this.orders = response.data.filter(element => element.value_name == "Заявки");
        this.conversion = response.data.filter(element => element.value_name == "Конверсия");
        this.receivable = response.data.filter(element => element.value_name == "Постоплаты");
        this.deals = response.data.filter(element => element.value_name == "Сделки");
        this.qualifiedLeads = response.data.filter(element => element.value_name == "Кач лиды");
        this.convertLeads = response.data.filter(element => element.value_name == "Сконверт лиды");
        this.sendOffers = response.data.filter(element => element.value_name == "Отправлено КП");
        this.newDeals = response.data.filter(element => element.value_name == "Сделки выст");
        this.firtsDeals = response.data.filter(element => element.value_name == "Перв сделки");
        this.secDeals = response.data.filter(element => element.value_name == "Повт сделки");
        this.regDeals = response.data.filter(element => element.value_name == "Пост сделки");
        this.state = response.data;
   });
   },
};
</script>
