<template>
  <v-app-bar
      app
      color="secondary"
    >
      <div class="d-flex align-center">
        <div class="title black--text font-weight-thin ml-12">
          Leonardo 
        </div>
        <div class="title font-weight-bold ml-2">
          Caracho
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/"
        flat
        text
        active-class="third--text title"
      >
        <span class="mr-2">HOME</span>
      </v-btn>
      <v-btn
        text
        flat
        active-class="third--text title"
        to="/resume"
      >
        <span class="mr-2">RESUME</span>
      </v-btn>
      <v-btn
        text
        flat
        active-class="third--text title"
        to="/portfolio"
      >
        <span class="mr-2">PORTFOLIO</span>
      </v-btn>
      <v-btn
        to="/contact"
        text
        flat
        active-class="third--text title"
        class="mr-12"
      >
        <span class="mr-2">CONTATO</span>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  
}
</script>

<style>

</style>