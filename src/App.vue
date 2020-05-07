<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <div class="title">
          Leonardo Caracho
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        to="/"
      >
        <span class="mr-2">HOME</span>
      </v-btn>
      <v-btn
        text
        to="/resume"
      >
        <span class="mr-2">RESUME</span>
      </v-btn>
      <v-btn
        text
        to="/portfolio"
      >
        <span class="mr-2">PORTFOLIO</span>
      </v-btn>
      <v-btn
        to="/contact"
        text
      >
        <span class="mr-2">CONTATO</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Leonardo Caracho</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
