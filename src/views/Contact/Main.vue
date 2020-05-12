<template>
  <v-content class="content">
    <v-row>
      <v-col cols="6">
        <v-container class="mt-6">
          <v-row>
            <v-col>
              <div class="title">
                <v-icon color="third" small class="mb-3">fas fa-map-marked-alt</v-icon>
                Where i live?
              </div>
              <span class="subtitle-2">Cascavel - PR - Brazil</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div class="title">
                <v-icon color="third" small class="mb-3">far fa-envelope</v-icon>
                Email me
              </div>
              <span class="subtitle-2">leeo.apc@gmail.com</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div class="title">
                <v-icon color="third" small class="mb-3">fas fa-phone-volume</v-icon>
                Phone
              </div>
              <span class="subtitle-2">+55 44 99743-5350</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div class="title">
                <v-icon color="third" small class="mb-3">fas fa-briefcase</v-icon>
                Available for hire?
              </div>
              <span class="subtitle-2">Not this moment</span>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="6">
        <v-form class="d-flex flex-column">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  autocomplete="email"
                  label="Texto"
                />
              </v-col>
            </v-row>
          </v-container>
          <div class="d-flex justify-center">
            <v-btn color="third" class="white--text mx-2">
              Submit
            </v-btn>
            <v-btn color="third" class="white--text mx-2">
              Clear
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {

}
</script>

<style>

</style>