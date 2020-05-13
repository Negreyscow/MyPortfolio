<template>
  <v-content class="content">
    <v-layout row wrap class="mx-0">
      <v-flex xs12 md6>
        <Timeline
          title="Education" 
          :items="educationItems" 
        />
      </v-flex>

      <v-flex xs12 md6>
        <Timeline
          title="Education" 
          :items="educationItems" 
        />
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mx-0">
      <v-flex xs12 md12 my-12>
        <div class="justify-center text-center title my-3 font-weight-medium">
          <span>Technologies</span>
        </div>
        <div class="d-flex justify-center">
          <v-chip
            v-for="tech in techs"
            :key="tech.name"
            class="ma-2"
            :color="tech.color"
            text-color="white"
          >
            <v-avatar left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            {{ tech.name }}
          </v-chip>
        </div>
      </v-flex>

      <v-flex xs12 md12>
        <div class="d-flex justify-center mt-12">
          <v-btn large color="third" class="white--text">
            DOWNLOAD RESUME <v-icon right>fas fa-arrow-down</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>

  </v-content>
</template>

<script>

import Timeline from './Timeline'

export default {
  data(){
    return {
      techs: [
        { name: 'Vue.js', color: 'green' }, 
        { name: 'React.js', color: 'indigo'},
        { name: 'Node.js', color: 'green'},
        { name: 'Javascript', color: 'green'},
        { name: 'Python', color: 'green'}
      ],
      educationItems: [
        {
            id: 0,
            start: 'JAN 2015',
            end: 'DEZ 2019',
            title: 'Bacharel em Ciência da Computação',
            location: 'UNIOESTE - Universidade do Oeste do Paraná'
        }
      ]
    }
  },
  components: {
    Timeline
  }
}
</script>

<style>

</style>