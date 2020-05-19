<template>
  <v-content class="content">
    <v-row>
      <v-col xs="12" md="6">
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

      <v-col xs="12" md="6">
        <v-form 
          action="https://formspree.io/myynkgbj"
          method="POST"
          class="d-flex flex-column"
          v-model="valid"
        >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                  v-model="form.name"
                  name="name"
                  :rules="nameRules"
                  color="third"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  color="third"
                  label="Email"
                  type="email"
                  v-model="form.email"
                  name="email"
                  :rules="emailRules"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  color="third"
                  autocomplete="email"
                  label="Texto"
                  v-model="form.text"
                  name="text"
                  :rules="textRules"
                />
              </v-col>
            </v-row>
          </v-container>
          <div class="d-flex justify-center">
            <v-btn
              :disabled="!valid"
              @click="submit" 
              type="submit"
              color="third" 
              class="white--text mx-2"
            >
              Submit
            </v-btn>
            <v-btn
              @click="clear"
              color="third" 
              class="white--text mx-2"
            >
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
  data(){
    return {
      valid: false,
      form: {
        name: '',
        email: '',
        text: ''
      },

      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must have at least 3 characters',
      ],
      emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      textRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 10) || 'Text must have more than 10 characters',
      ]
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset()
      this.name=''
      this.email=''
      this.text=''
    }
  }
}
</script>

<style>

</style>