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
          title: 'First project here',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
          previews: [
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg'
          ],
          techs: [
            { name: 'Vue', color: 'green'},
            { name: 'Vuetify', color: 'indigo'}
          ]
        },
        {
          id: 2,
          title: 'First project here',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
          previews: [
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg'
          ],
          techs: [
            { name: 'Vue', color: 'green'},
            { name: 'Vuetify', color: 'indigo'}
          ]
        },
        {
          id: 3,
          title: 'First project here',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
          previews: [
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Cskamu_17.jpg'
          ],
          techs: [
            { name: 'Vue', color: 'green'},
            { name: 'Vuetify', color: 'indigo'}
          ]
        }
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