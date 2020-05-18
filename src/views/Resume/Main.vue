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
          title="Experience" 
          :items="xpItems" 
        />
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mx-0">
      <v-col cols="12">
        <div class="justify-center text-center title my-3 font-weight-medium">
          <span>Skills</span>
        </div>
        <div class="d-flex justify-center flex-wrap">
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
      </v-col>

      <v-col cols="12">
        <div class="d-flex flex-wrap justify-center mt-12">
          <v-btn
            large
            color="third" 
            class="white--text"
            target="_blank"
            href="https://docs.google.com/document/d/1Y_8DaTQYXGPTrQCigGFtttSjXZgiYZw9dF_UvYs1oXk/edit"
          >
            DOWNLOAD RESUME <v-icon right>fas fa-arrow-down</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-layout>

  </v-content>
</template>

<script>

import Timeline from './Timeline'

export default {
  data(){
    return {
      techs: [
        { name: 'Vue.js', color: '#4fbc8d' }, 
        { name: 'React', color: '#61dafb'},
        { name: 'ReactNative', color: '#2c3e50'},
        { name: 'Node.js', color: '#026e00'},
        { name: 'Javascript', color: '#e67e22'},
        { name: 'C#', color: '#e74c3c'},
        { name: 'Python', color: '#8e44ad'}
      ],
      educationItems: [
        {
            id: 0,
            start: 'JAN 2015',
            end: 'DEZ 2019',
            title: 'Bacharel em Ciência da Computação',
            location: 'UNIOESTE - Universidade do Oeste do Paraná'
        }
      ],
      xpItems: [
        {
            id: 0,
            start: 'MAR 2019',
            end: 'CURRENT',
            title: 'Fullstack Developer',
            location: 'Datacoper'
        },
        
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