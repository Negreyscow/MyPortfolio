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
            'https://uploaddeimagens.com.br/images/002/656/895/full/vai.jpg?1589812818',
            'https://uploaddeimagens.com.br/images/002/656/900/original/vai.jpg?1589812972',
          ],
          techs: [
            { name: 'React', color: '#61dafb'}
          ]
        },
        {
          id: 2,
          title: 'DevFinder',
          view: 'https://github.com/Negreyscow/DevRadar',
          github: 'https://github.com/Negreyscow/DevRadar',
          thumbnail: 'https://raw.githubusercontent.com/Negreyscow/DevRadar/master/img/desktop.PNG',
          previews: [
            'https://uploaddeimagens.com.br/images/002/656/927/full/Sem_T%C3%ADtulo-2.jpg?1589813803',
            'https://uploaddeimagens.com.br/images/002/656/929/full/a.jpg?1589813852'
          ],
          techs: [
            { name: 'React', color: '#61dafb'}
          ]
        },
        {
          id: 2,
          title: 'Be the Hero',
          view: 'https://github.com/Negreyscow/BeTheHero',
          github: 'https://github.com/Negreyscow/BeTheHero',
          thumbnail: 'https://raw.githubusercontent.com/Negreyscow/BeTheHero/master/img/desktop1.PNG',
          previews: [
            'https://i.ibb.co/YcHbv9C/a.png',
            'https://i.ibb.co/mS3FWgh/a2.png'
          ],
          techs: [
            { name: 'React', color: '#61dafb'}
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