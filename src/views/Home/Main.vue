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
        <div class="display-1 mb-10 secondary--text d-flex justify-center">
          Leonardo Caracho
        </div>
        <p class="subtitle text-justify mt-3">
          {{ profile.bio }}
          <span>&#128521;</span>
        </p>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="4">
        <div class="d-flex justify-space-around">
          <v-btn 
            v-for="network in profile.socialNetworks" 
            :key="network.id"
            icon
          >
            <v-icon color="third"> {{ network.icon }} </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-spacer />
    </v-row>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        socialNetworks: [
          { id: 1, icon: 'fab fa-facebook-f' },
          { id: 2, icon: 'fab fa-github' },
          { id: 3, icon: 'fab fa-instagram' },
          { id: 4, icon: 'fab fa-linkedin-in' }
        ],
        bio: `Hi! I'am Leonardo a Fullstack Developer with a passion for learn and discover new things, especially about tech;`
      }
    }
  }
}
</script>

<style>
  .img-perfil {
    border-radius: 50%;
    margin: 0 auto;
  }
</style>