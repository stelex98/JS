<template>
  <div>
    <v-container fluid ma-0 pa-0 grid-list-xl>
      <v-layout row wrap justify-space-around>
        <v-flex d-flex md3 sm7 xs10 style="height: 67vh" class="listServices">
          <v-layout column>
            <h1>Услуги нашего салона</h1>
            <v-flex v-for="(item, i) in servicesContent" :key="`services${i}`">
              <v-select
                :items="item.itemsServices"
                :id="`${i}`"
                :label="item.globalName"
                @change="returnDescribe($event)"
                v-model="selected"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex md8 sm12 xs12>
          <v-layout row justify-center >
            <v-flex md6 sm5 xs8 d-flex align-center>
              <v-card style="margin-top: 10%; margin-bottom: 10%;">
                <v-img
                  class="white--text"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">{{describe[0].Title}}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="grey--text">Описание выбранной услуги</span>
                    <br>
                    <span>
                      {{describe[0].describe}}
                    </span>
                    <br>
                    <span>Цена: {{describe[0].price}}</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      describe: [
        {
          title: '',
          describe: ''
        }
      ]
    };
  },
  computed: {
    servicesContent() {
      return this.$store.getters.returnServicesContent;
    }
  },
  mounted(event) {
    this.selected = this.$store.getters.returnServicesContent;

    console.log(event);
  },
  methods: {
    returnDescribe(ev) {
      console.log(ev);
      for (let i = 0; i < this.$store.getters.returnDescribe.length; i++) {
        if (ev == this.$store.getters.returnDescribe[i].Title) {
         this.describe.length = 0;
          this.describe.push(this.$store.getters.returnDescribe[i]);
          console.log(this.describe);
        }
      }

      //return this.$store.getters.returnDescribe;
    }
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}

.listServices {
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: 80px;
}

h1 {
  font-family: "Cormorant", serif;
  font-size: 2em;
  margin: 0 0px 0px 10px;
}
</style>