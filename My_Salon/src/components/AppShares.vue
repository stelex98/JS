<template>
  <div>
    <v-container fluid ma-0 pa-0>
      <v-layout row wrap align-center>
        <h1>Акции</h1>
      </v-layout>
      <v-layout class="myLayout" row wrap align-center justify-space-around>
        <v-flex md3 xs7 d-flex v-for="(item, i) in dataShares" :key="`sharedId${i}`">
          <v-card color="white" class="cardShares text--black" hover v-on:click="a(i)">
            <v-card-title primary-title>
              <div>
                <div class="headline">{{item.title}}</div>
                <br>
                <span>{{item.describe}}</span>
                <!-- <v-btn @click="addShares">add</v-btn> -->
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn>Читать дальше</v-btn>
            </v-card-actions>
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
    ...mapState("shares", {
      dataShares: "dataShares"
    })
  },
  methods: { // добавление новых акций
    a(index){
      console.log(index);
    }
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}

.cardShares {
  border: solid 2px #f8eef3;
  border-radius: 40px;
  border-bottom-left-radius: 0;
  margin: 15px 0 20px 0;
  padding: 15px;
}

h1 {
  font-family: "Cormorant", serif;
  font-size: 3em;
  margin: 20px 0px 20px 60px;
}

.myLayout {
  margin-bottom: 80px;
}
</style>