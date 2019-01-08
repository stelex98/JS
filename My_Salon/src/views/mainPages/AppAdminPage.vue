<template>
  <v-app>
    <v-container ma-0 pa-0 fluid>
      <v-layout style="height: 100%">
        <v-flex d-flex md4>
          <menuAdmin></menuAdmin>
        </v-flex>
        <v-flex d-flex md6 style="margin-top: 50px;">
            <listStockForCRUD></listStockForCRUD>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import menuAdmin from "@/components/adminConfiguration/menuAdmin.vue";
import listStockForCRUD from "@/components/adminConfiguration/listStockForCRUD.vue";

export default {
  components: {
    menuAdmin,
    listStockForCRUD

  },
  data() {
    return {
      check: true,
      check2: false
    };
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
</style>