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
          view: '',
          github: 'https://github.com/Negreyscow/RocketGames',
          thumbnail: 'https://i.imgur.com/jxrZHYR.png',
          techs: [
            { name: 'React', color: '#61dafb'}
          ]
        },
        {
          id: 2,
          title: 'DevRadar',
          view: '',
          github: 'https://github.com/Negreyscow/DevRadar',
          thumbnail: 'https://i.imgur.com/GOzzdKN.png',
          techs: [
            { name: 'React', color: '#61dafb'},
            { name: 'NodeJS', color: '#026e00'},
            { name: 'ReactNative', color: '#2c3e50'}
          ]
        },
        {
          id: 2,
          title: 'Be the Hero',
          view: '',
          github: 'https://github.com/Negreyscow/BeTheHero',
          thumbnail: 'https://i.imgur.com/kvNEeQT.png',
          techs: [
            { name: 'React', color: '#61dafb'},
            { name: 'NodeJS', color: '#026e00'},
            { name: 'ReactNative', color: '#2c3e50'}
          ]
        },
        {
          id: 2,
          title: 'Ecoleta',
          view: '',
          github: 'https://github.com/LeonardoCaracho/NLW-Ecoleta',
          thumbnail: 'https://i.imgur.com/MHu8phU.png',
          previews: [
            'https://i.ibb.co/YcHbv9C/a.png',
            'https://i.ibb.co/mS3FWgh/a2.png'
          ],
          techs: [
            { name: 'React', color: '#61dafb'},
            { name: 'NodeJS', color: '#026e00'},
            { name: 'ReactNative', color: '#2c3e50'}
          ]
        },
        {
          id: 2,
          title: 'My Trash Movies',
          view: '',
          github: 'https://github.com/LeonardoCaracho/MyTrashFilms',
          thumbnail: 'https://raw.githubusercontent.com/LeonardoCaracho/MyTrashFilms/master/img/desktop-1.PNG',
          techs: [
            { name: 'Angular', color: '#b31b22'},
            { name: 'NestJS', color: '#ff776e'},
          ]
        },
        {
          id: 2,
          title: 'OB-01 Trading Bot',
          view: 'https://www.ob01.com.br/',
          github: '',
          thumbnail: 'https://i.imgur.com/rk6aQyh.png',
          techs: [
            { name: 'VueJS', color: '#4fbc8d'},
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