<template>
  <v-app>
    <AppHeader class="appHeaderServices"></AppHeader>
    <mainContentContacts></mainContentContacts>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import mainContentContacts from "@/components/mainContent/mainContentContacts.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    mainContentContacts
  }
};
</script>

<style scoped>
.appHeaderServices .container {
  max-height: 225px;
  background-image: url(https://visavis.by/sites/all/themes/visavis2/images/top-no1.jpg) !important;
  background-position: center 80%;
}
</style>