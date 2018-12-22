// Default page (main)
<template>
  <v-app>
    <AppHeader class="appHeader"></AppHeader>
    <AppHomeServices class="appHomeServices"></AppHomeServices>
    <AppReviewsSlider></AppReviewsSlider>
    <AppShares></AppShares>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHomeServices from "@/components/AppHomeServices.vue";
import AppReviewsSlider from "@/components/AppReviewsSlider.vue"
import AppShares from "@/components/AppShares"

export default {
  components: {
    AppHeader,
    AppFooter,
    AppHomeServices,
    AppReviewsSlider,
    AppShares
  }
};
</script>

<style>
.appHeader .container {
  height: 100vh;
}
.appHomeServices .container{
  background-color: #fff;
  background-image: none;
}

.appHomeServices .container .flex{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

