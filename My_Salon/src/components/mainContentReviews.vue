<template>
  <div>
    <v-container fluid pa-0 ma-0>
      <v-layout row style="margin: 25px 0 0 5%;">
        <v-flex>
          <h1>Отзывы наших любимых клиентов</h1>
          <v-dialog
            v-model="dialog"
            :disabled="returnDataCheckAuthorization"
            persistent
            max-width="600px"
          >
            <v-btn
              slot="activator"
              :disabled="returnDataCheckAuthorization"
              class="white black--text"
            >Добавить отзыв</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Оставить отзыв</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-textarea
                        name="input-7-1"
                        box
                        label="Ваш отзыв"
                        auto-grow
                        value
                        v-model="textReviews"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="darken-1" flat @click="dialog = false">Закрыть</v-btn>
                <v-btn color="darken-1" flat @click="addReviews">Добавить отзыв</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-between style="margin: 5%;">
        <v-flex
          md5
          sm10
          xs10
          d-flex
          v-for="(item, i) in returnDataReviewsSlider"
          :key="`reviews${i}`"
        >
          <v-card
            hover
            color="white"
            class="black--text"
            style="padding: 20px; margin-bottom: 20px;"
          >
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
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      textReviews: null
    };
  },
  methods: {
    ...mapActions("reviewsSlider",['addNewReviews']),

    addReviews() {
      this.dialog = false;
      let myReviews = {
        reviewsText: this.textReviews,
        namePearson: "Адамович Артур",
        src: "https://visavis.by/sites/all/themes/visavis2/images/forms.jpg"
      };
      this.addNewReviews(myReviews);
      this.textReviews = null;
    }
  },
  computed: {
    ...mapState("reviewsSlider",{
      arrayRivews: "dataReviewsSlider",
      checkAthorization: "checkAuth"
    }),
    returnDataReviewsSlider() {
      return this.arrayRivews;
    },

    returnDataCheckAuthorization() {
      return this.checkAthorization;
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