<template>
  <v-content class="content">
    <v-row>
      <v-col cols="12">
        <v-img
          class="img-perfil"
          height="300"
          width="300"
          src="@/assets/perfil.jpg" 
        />
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-spacer />
      <v-col cols="5">
        <div class="title d-flex">
          About<div class="third--text">Me</div>
        </div>
        <div class="subtitle text-justify mt-3">
          Hello! I’m Eldin Zaimovic. I'm a front-end developer who is passionate about VUE, 
          building great user experiences, fighting for simplicity over complexity and constantly 
          learning. When I'm not coding or making videos, you'll find me traveling across Europe.
        </div>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="4">
        <div class="d-flex justify-space-around">
          <v-btn icon>
            <v-icon color="third">fab fa-facebook-f</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="third">fab fa-github</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="third">fab fa-instagram</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="third">fab fa-linkedin-in</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-spacer />
    </v-row>
  </v-content>
</template>

<script>
export default {

}
</script>

<style>
  .img-perfil {
    border-radius: 50%;
    margin: 0 auto;
  }
</style>