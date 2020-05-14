<template>
  <v-app-bar
      app
      flat
    >
      <!-- <div class="d-flex align-center">
        <div class="title black--text font-weight-thin ml-12">
          Leonardo 
        </div>
        <div class="title font-weight-bold ml-2">
          Caracho
        </div>
      </div> -->

      <v-spacer></v-spacer>

      <v-btn
        to="/"
        flat
        class="mx-4"
        text
        active-class="third--text title"
      >
        <span>HOME</span>
      </v-btn>
      <v-btn
        text
        flat
        class="mx-4"
        active-class="third--text title"
        to="/resume"
      >
        <span>RESUME</span>
      </v-btn>
      <v-btn
        text
        flat
        class="mx-4"
        active-class="third--text title"
        to="/portfolio"
      >
        <span>PORTFOLIO</span>
      </v-btn>
      <v-btn
        to="/contact"
        text
        flat
        class="mx-4"
        active-class="third--text title"
      >
        <span>CONTATO</span>
      </v-btn>
       <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
  
}
</script>

<style>

</style>