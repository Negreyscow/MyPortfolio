<template>
  <v-content class="content">
    <v-row>
        <v-col 
          v-for="project in projects"
          :key="project.id"
          md="4"
        >
          <Modal :project="project" />
        </v-col>
    </v-row>
  </v-content>
</template>

<script>

import Modal from './Modal'

export default {
  data(){
    return {
      projects: [
        {
          id: 1,
          title: 'RocketGames',
          view: 'https://github.com/Negreyscow/RocketGames',
          github: 'https://github.com/Negreyscow/RocketGames',
          thumbnail: 'https://raw.githubusercontent.com/Negreyscow/RocketGames/master/img/rocket1.png',
          previews: [
            'https://i.ibb.co/qpXNgKK/rocketgames1.png',
            '@/assets/rocketgames2.png',
          ],
          techs: [
            { name: 'Vue', color: 'green'},
            { name: 'Vuetify', color: 'indigo'}
          ]
        },
      ]
    }
  },
  components: {
    Modal
  }
}
</script>

<style>

</style>