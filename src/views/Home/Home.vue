<template>
  <v-content class="content">
    <v-row>
      <v-col md="12" sm="6" cols="12">
        <v-img
          class="img-perfil"
          height="300"
          width="300"
          src="@/assets/perfil.jpg" 
          gradient="to top right, rgba(255,255,255,.11), rgba(255,255,255,0.4)"
        />
      </v-col>
    </v-row>
    <v-row class="my-10">
      <v-spacer />
      <v-col sm="10" md="5" cols="10">
        <div class="display-1 font-weight-medium mb-10 secondary--text d-flex justify-center">
          Leonardo Caracho
        </div>
        <p class="subtitle text-justify mt-3">
          {{ profile.bio }}
          <span>❤️&#128521;</span>
        </p>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />
      <v-col md="4" sm="8" cols="12">
        <div class="d-flex justify-space-around">
          <v-tooltip
            v-for="network in profile.socialNetworks"
            :key="network.id"  
            bottom 
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon 
                color="third" 
                dark 
                v-on="on"
                target="_blank"
                :href="network.url"
              >
                <v-icon color="third"> {{ network.icon }} </v-icon>
              </v-btn>
            </template>
            <span>{{ network.tip }}</span>
          </v-tooltip>
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
          { id: 1, icon: 'fab fa-facebook-f', tip: 'Facebook', url: 'https://www.facebook.com/leonardo.caracho' },
          { id: 2, icon: 'fab fa-github', tip: 'Github', url: 'https://github.com/leonardocaracho' },
          { id: 3, icon: 'fab fa-instagram', tip: 'Instagram', url: 'https://www.instagram.com/leonardo_caracho/' },
          { id: 4, icon: 'fab fa-linkedin-in', tip: 'Linkedin', url: 'https://www.linkedin.com/in/leonardo-caracho-559513157/' }
        ],
        bio: `Hi! i'am Leonardo a Fullstack Developer with a passion to learn and discover new things, in love with the bests mobile and web technologies. `
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