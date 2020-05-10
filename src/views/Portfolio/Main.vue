<template>
  <v-content>
    <v-row>
        <v-spacer />
        <v-col md="3">
          <Modal />
        </v-col>
        <v-col md="3">
          <v-card>
            <v-img width="100%" height="100%" src="@/assets/perfil.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card>
            <v-img width="100%" height="100%" src="@/assets/perfil.jpg"></v-img>
          </v-card>
        </v-col>
        <v-spacer />
    </v-row>

    <v-row>
        <v-spacer />
        <v-col md="3">
          <v-card>
            <v-img width="100%" height="100%" src="@/assets/perfil.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card>
            <v-img width="100%" height="100%" src="@/assets/perfil.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card>
            <v-img width="100%" height="100%" src="@/assets/perfil.jpg"></v-img>
          </v-card>
        </v-col>
        <v-spacer />
    </v-row>

  </v-content>
</template>

<script>

import Modal from './Modal'

export default {
  components: {
    Modal
  }
}
</script>

<style>

</style>