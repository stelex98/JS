<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <v-btn slot="activator" flat icon color="lighten-2" @click="resetData">
        <v-icon color="yellow darken-2">add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Добавление акции</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Заголовок акции"
                  hint="Используйте краткое описание"
                  v-model="newStockObg.title"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Тип услуги"
                  hint="Используйте краткое описание типа"
                  v-model="newStockObg.service"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Услуга"
                  hint="Название услуги должно быть на русском языке"
                  v-model="newStockObg.typeService"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <fileUploadButton></fileUploadButton>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  name="input-5-1"
                  label="Описание услуги"
                  v-model="newStockObg.describe"
                  hint="Описание должно быть не менее 50и символов. Ипользуйте русский язык"
                ></v-textarea>
              </v-flex>
              <v-flex xs12 sm6>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  :return-value.sync="newStockObg.date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="newStockObg.date"
                    label="Picker in menu"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="newStockObg.date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(newStockObg.date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  label="Цена"
                  hint="Используйте только цифровые значения"
                  v-model="newStockObg.price"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click="saveNewInf(newStockObg)">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import fileUploadButton from "@/components/forms/fileUploadButton.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      menu: false,

      newStockObg: {
        date: new Date().toISOString().substr(0, 10),
        describe: "",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        price: "",
        service: "",
        show: "flase",
        title: "",
        typeService: ""
      }
    };
  },
  components: {
    fileUploadButton
  },
  methods: {
    ...mapActions("stock", ["addNewStock"]),

    saveNewInf() {
      this.dialog = false;
      this.addNewStock(this.newStockObg);
    },

    resetData() {
      this.newStockObg.price = "";
      this.newStockObg.service = "";
      this.newStockObg.title = "";
      this.newStockObg.typeService = "";
      this.newStockObg.describe = "";
    }
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
</style>