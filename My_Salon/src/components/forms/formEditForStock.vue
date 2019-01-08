<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <v-btn slot="activator" flat icon color="lighten-2" @click="editInformationStock">
        <v-icon color="yellow darken-2">edit</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Редактирование акций</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Заголовок акции"
                  hint="Используйте краткое описание"
                  v-model="currentStock[0].titleStock"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Тип услуги"
                  hint="Используйте краткое описание типа"
                  v-model="currentStock[0].service"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Услуга"
                  hint="Название услуги должно быть на русском языке"
                  v-model="currentStock[0].typeService"
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
                  v-model="currentStock[0].describe"
                  hint="Описание должно быть не менее 50и символов. Ипользуйте русский язык"
                ></v-textarea>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  label="Цена"
                  hint="Используйте только цифровые значения"
                  v-model="currentStock[0].price"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click="saveEditedInf">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import fileUploadButton from "@/components/forms/fileUploadButton.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      currentStock: [{}]
    };
  },
  components: {
    fileUploadButton
  },
  computed: {
    ...mapState("stock", {
      DataOfCurrentStockForAdmin: "currentStockForAdmin"
    })
  },
  methods: {
    ...mapActions("stock",["editStockArray"]),

    editInformationStock() {
      this.currentStock = this.DataOfCurrentStockForAdmin;
      this.currentStock[0].titleStock = this.DataOfCurrentStockForAdmin[0].title;
    },

    saveEditedInf() {
      this.currentStock[0].title = this.currentStock[0].titleStock;

      delete this.currentStock[0].titleStock;

      this.editStockArray(this.currentStock);
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
</style>