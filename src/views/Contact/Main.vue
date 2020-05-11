<template>
  <v-content class="content">
    <v-row>
      <v-col cols="6">
        <v-container>
          <v-row>
            <v-col>
              Localidade
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              Email
            </v-col>
          </v-row>
          <v-row>

            <v-col>
              Telefone
            </v-col>
          </v-row>
          <v-row>
            
            <v-col>
              Available for hire
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="6">
        <v-form>
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
          <v-btn>
            Submit
          </v-btn>
          <v-btn>
            Clear
          </v-btn>
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