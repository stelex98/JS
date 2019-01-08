<template>
  <div>
    <v-container fluid>
      <v-layout row wrap class="myLayout">
        <v-flex justify-start v-for="(item, i) in mainServices" :key="`mainServices${i}`">
          <v-card hover height="450px" width="240px">
            <v-img height="200px" :src="item.src" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline">{{item.title}}</h3>
                <span
                  v-for="(item, i) in mainServices[i].servicesArr"
                  :key="`asd${i}`"
                  class="grey--text"
                >
                  <br>
                  &mdash; {{item}}
                </span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("homeServices", {
      mainServices: "dataHomeServices"
    })
  }
};
</script>

<style>
.containerServices {
  margin: 20px;
}
.myLayout {
  padding-left: 5%;
}
</style>