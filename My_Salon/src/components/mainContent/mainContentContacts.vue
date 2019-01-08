<template>
  <div>
    <v-container pa-0 ma-0 fluid>
      <v-layout row justify-space-around wrap>
        <v-flex md5 xs12 d-flex>
          <v-layout column>
            <h1>Контакты</h1>
            <v-flex md8 d-flex>
              <v-list two-line style="margin-bottom: 0%">
                <v-list-tile @click>
                  <v-list-tile-action>
                    <v-icon color="indigo">phone</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>+375(25) 741-06-84</v-list-tile-title>
                    <v-list-tile-sub-title>Телефон стойки регистрации</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click>
                  <v-list-tile-action></v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>+375(29) 179-98-11</v-list-tile-title>
                    <v-list-tile-sub-title>Телефон главного офиса</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile @click>
                  <v-list-tile-action>
                    <v-icon color="indigo">mail</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>stelex98@mail.ru</v-list-tile-title>
                    <v-list-tile-sub-title>Почта салона</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click>
                  <v-list-tile-action></v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>stelex98@mail.ru</v-list-tile-title>
                    <v-list-tile-sub-title>Почта салона</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile @click>
                  <v-list-tile-action>
                    <v-icon color="indigo">location_on</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>ул.Лынькова 99В</v-list-tile-title>
                    <v-list-tile-sub-title>Р-н Масюковщина</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md5 xs12 d-flex>
          <yandex-map
            zoom="15.5"
            class="ymap"
            style="width: 30%; height: 400px; margin: 100px 5% 100px 5%;"
            :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
            :coords="coords"
          >
            <ymap-marker
              marker-id="1"
              marker-type="placemark"
              :coords="[53.9266839, 27.4708199]"
              hint-content="Hint content 1"
              :balloon="{header: 'header', body: 'body', footer: 'footer'}"
              :icon="{color: 'gray', glyph: 'person'}"
              cluster-name="1"
            ></ymap-marker>
          </yandex-map>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container ma-0 pa-o fluid class="imgTaxi">
      <v-layout>
        <v-flex class="numberOfTaxi"></v-flex>
      </v-layout>
    </v-container>
    <AppReviewsSlider class="sliderReviews"></AppReviewsSlider>
  </div>
</template>

<script>
import AppReviewsSlider from "@/components/AppReviewsSlider.vue"
export default {
  data() {
    return {
      coords: [53.9266839, 27.4708199]
    };
  },
  components: {
    AppReviewsSlider
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
.imgTaxi {
  height: 450px;
  background-image: url(https://visavis.by/sites/all/themes/visavis2/images/taxi.jpg);
  background-size: cover;
  background-position: center;
}
.numberOfTaxi {
  height: 300px;
  background-image: url("../../assets/numberOfTaxi.png");
  background-size: contain;
  background-position: left;
  margin: 50px 0 0 2%;
}
.sliderReviews{
    margin: 5% 0 0 0;
}
h1 {
  font-family: "Cormorant", serif;
  font-size: 3em;
  margin: 20px 0px 20px 20%;
}
</style>