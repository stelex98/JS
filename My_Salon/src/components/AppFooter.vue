<template>
  <div>
    <v-footer height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="grey lighten-2">
          <v-layout row wrap justify-center align-center>
            <v-flex d-flex md9 sm8 xs9>
              <strong class="subheading black--text">&copy; Косметический салон - Visavis</strong>
            </v-flex>
            <v-flex d-flex md3 sm4 xs12>
              <v-btn v-for="icon in icons" :key="icon" class="mx-3" light icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 —
          <strong>Visavis</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      icons: [
        "fa-facebook",
        "fa-twitter",
        "fa-google-plus",
        "fa-linkedin",
        "fa-instagram"
      ]
    };
  }
};
</script>

<style scoped>
</style>