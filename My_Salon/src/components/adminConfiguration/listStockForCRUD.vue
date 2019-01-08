<template>
  <div>
    <v-container ma-0 pa-0 fluid grid-list-md>
      <v-layout row justify-space-between>
        <v-flex xs12 sm8 offset-sm3>
          <v-card>
            <v-toolbar color="pink" dark>
              <v-toolbar-title>Все акции</v-toolbar-title>
              <v-spacer></v-spacer>
              <span>Добавить акцию</span>
              <formAddNewStock></formAddNewStock>
            </v-toolbar>

            <v-list two-line>
              <template v-for="(item, index) in arrayOfStock">
                <v-list-tile :key="item.title" avatar ripple>
                  <v-flex d-flex md10 sm6 xs6>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      <v-list-tile-sub-title class="text--primary">{{ item.typeService }}</v-list-tile-sub-title>
                      <v-list-tile-sub-title v-html="item.describe.slice(0, 50) + '...'"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-flex>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>

                    <v-layout align-end row justify-space-around>
                      <v-flex
                        d-flex
                        style="margin-right: 5px"
                        @mouseover="addIndexCurrentStock(index)"
                      >
                        <formEditForStock></formEditForStock>
                      </v-flex>
                      <v-flex d-flex>
                        <v-btn flat icon color="lighten-2" @click="deleteCurrentStockLocal(index)">
                          <v-icon color="yellow darken-2">delete</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < arrayOfStock.length" :key="index"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import formEditForStock from "@/components/forms/formEditForStock.vue";
import formAddNewStock from "@/components/forms/formAddNewStock.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    formEditForStock,
    formAddNewStock
  },

  data() {
    return {};
  },
  computed: {
    ...mapState("stock", {
      arrayOfStock: "stock"
    })
  },
  methods: {
     ...mapActions("stock", ["deleteCurrentStock", "addNewCurrentStockAdmin"]),

    deleteCurrentStockLocal(index) {
      this.deleteCurrentStock(index);
    },
    addIndexCurrentStock(index) {
      this.addNewCurrentStockAdmin(index);
    }
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
</style>