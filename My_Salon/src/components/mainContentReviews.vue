<template>
  <div>
    <v-container fluid pa-0 ma-0>
      <v-layout row style="margin: 25px 0 0 5%;">
        <v-flex>
          <h1>Отзывы наших любимых клиентов</h1>
          <v-btn>Оставить отзыв</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-between style="margin: 5%;">
        <v-flex md5 sm10 xs10 d-flex v-for="(item, i) in returnDataReviewsSlider" :key="`reviews${i}`">
          <v-card hover color="white" class="black--text" style="padding: 20px; margin-bottom: 20px;">
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Отзыв</div>
                    <br>
                    <div>{{item.reviewsText}}</div>
                    <br>
                    <div>{{item.namePearson}}</div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-img :src="item.src" height="125px" contain></v-img>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    returnDataReviewsSlider() {
      return this.$store.getters.returnDataReviewsSlider;
    }
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