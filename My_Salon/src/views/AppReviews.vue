<template>
    <v-app>
        <AppHeader></AppHeader>
        <mainContentReviews></mainContentReviews>
        <AppFooter></AppFooter>
    </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import mainContentReviews from "@/components/mainContentReviews.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    mainContentReviews
  }
};
</script>

<style scoped>

</style>