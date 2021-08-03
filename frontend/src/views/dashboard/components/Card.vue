<template>
  <v-card>
    <v-card-title class="headline">
	  {{ count }}
    </v-card-title>
    <v-card-subtitle>{{ cardName }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: ["cardName", "count"],
};
</script>

<style>
</style>