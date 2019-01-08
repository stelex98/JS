<template>
  <v-container ma-0 pa-0 fluid>
    <v-layout row justify-center>
      <v-flex md7 sm7 xs7 d-flex>
        <H1>Цены нашего салона</H1>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex md7 sm7 xs7 d-flex style="margin-top: 2%; margin-bottom: 5%;">
        <v-card>
          <v-card-title>Каталог цен на все усуги
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers[0]" :items="desserts[0]" :search="search">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.price }}</td>
            </template>
            <v-alert
              slot="no-results"
              :value="true"
              color="error"
              icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      search: "",
      headers: [],
      desserts: []
    };
  },
  computed: {
    ...mapState("price", {
      arrayPriceHeaders: "headers",
      arrayPriceDesserts: "desserts"
    })
  },
  mounted() {
    this.headers.push(this.arrayPriceHeaders);
    this.desserts.push(this.arrayPriceDesserts);
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
h1 {
  font-family: "Cormorant", serif;
  font-size: 3em;
}
</style>