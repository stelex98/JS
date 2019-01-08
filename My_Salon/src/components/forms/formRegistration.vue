<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" class="transparent white--text" dark>Регистрация</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Регистрация</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Имя*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Фамилия*"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" hint="Например: stelex98@mail.ru" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Телефон*" hint="Например: +375291799811" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Password*"
                  hint="Используйте цифры и буквы разного регистра"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                <uploadButton></uploadButton>
              </v-flex>
              <v-flex xs12 sm12>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    label="Данные вашего дня рождения"
                    readonly
                  ></v-text-field>
                  <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Зарегистрироваться</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import uploadButton from "@/components/forms/fileUploadButton.vue";

export default {
  components: {
    uploadButton
  },
  data() {
    return {
      dialog: false,
      date: null,
      menu: false
    };
  },
  watch: {
    menu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
</style>