<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" class="transparent white--text" dark>Авторизоваться</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Вход</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md12>
                <v-text-field label="Имя*" hint="Введите ваше имя при регистрации" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Password*"
                  hint="Введите ваш пароль при регистрации"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
.container {
  background-image: none;
}
</style>