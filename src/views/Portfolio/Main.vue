<template>
  <v-content class="content">
    <v-row>
        <v-spacer />
        <v-col md="4">
          <Modal />
        </v-col>
        <v-col md="4">
          <Modal />
        </v-col>
        <v-col md="4">
          <Modal />
        </v-col>
        <v-col md="4">
          <Modal />
        </v-col>
        <v-col md="4">
          <Modal />
        </v-col>
        <v-col md="4">
          <Modal />
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