<template>
    <v-app>
        <AppHeader></AppHeader>
        <mainContentPrices></mainContentPrices>
        <AppFooter></AppFooter>
    </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import mainContentPrices from "@/components/mainContentPrices.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    mainContentPrices
  }
};
</script>

<style scoped>

</style>