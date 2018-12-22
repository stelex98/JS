// Component Header
<template>
<div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-tile v-for="(item, i) in menuItems" :key="`navDrawer${i}`">
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid ma-0 pa-0>
      <v-layout row align-center justify-center wrap>
        <v-flex md4 sm4>
          <p
            class="text-md-left white--text hidden-xs-only"
            v-for="(item, i) in listAdressPhone"
            :key="`indexPhoneAdress${i}`"
          >{{item}}</p>
        </v-flex>
        <v-flex md4 sm4 xs6 class="text-md-center">
          <router-link to="/">
            <img
              src="https://visavis.by/sites/default/files/logo3x.png"
              style="width: 220px; height: 120px;"
            >
          </router-link>
        </v-flex>
        <v-flex md4 sm4 xs6 align-center class="text-md-center" wrap>
          <v-btn class="transparent white--text">Авторизация</v-btn>
          <v-btn class="transparent white--text">Регистрация</v-btn>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-toolbar class="transparent">
          <v-toolbar-side-icon @click.stop="drawer=!drawer" class="white hidden-md-and-up"></v-toolbar-side-icon>
          <v-toolbar-items class="toolbar-items hidden-sm-and-down text-md-center">
            <v-btn
              class="white--text"
              flat
              v-for="(item, i) in menuItems"
              :key="`menuItems${i}`"
              :to="item.route"
            >{{item.title}}</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    menuItems() {
      return this.$store.getters.returnDataOfMenuItems;
    },
    listAdressPhone() {
       return this.$store.getters.returnDataOfAdressPhone;
    }
  }
};
</script>

<style>
.container {
  background-image: url(https://visavis.by/sites/all/themes/visavis2/images/top1.jpg);
  background-size: cover;
  background-position: center;
  max-width: 1300px;
}
.toolbar-items {
  margin-left: 31%;
}
p {
  margin: 0 0 5px 20%;
}
</style>