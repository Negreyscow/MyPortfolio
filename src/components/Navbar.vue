<template>
  <v-app-bar
      app
      flat
      class="mx-auto"
    >
      <!-- <div class="d-flex align-center">
        <div class="title black--text font-weight-thin ml-12">
          Leonardo 
        </div>
        <div class="title font-weight-bold ml-2">
          Caracho
        </div>
      </div> -->

      <v-menu
        class="hidden-md-and-up"
        bottom
        left
      >
        <template v-slot:activator="{ on }">
          <v-btn
            class="hidden-md-and-up"
            icon
            color="third"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-btn
              text 
              width="100"
              :to="item.link"
            >
              {{ item.label }}
            </v-btn>
            <!-- <v-list-item-title>{{ link.label }}</v-list-item-title> -->
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer class="hidden-sm-and-down" />

      <v-btn
        to="/"
        flat
        text
        class="hidden-sm-and-down mx-4"
        active-class="third--text title"
      >
        <span>HOME</span>
      </v-btn>
      <v-btn
        text
        flat
        class="hidden-sm-and-down mx-4"
        active-class="third--text title"
        to="/resume"
      >
        <span>RESUME</span>
      </v-btn>
      <v-btn
        text
        flat
        class="hidden-sm-and-down mx-4"
        active-class="third--text title"
        to="/portfolio"
      >
        <span>PORTFOLIO</span>
      </v-btn>
      <v-btn
        to="/contact"
        text
        flat
        class="hidden-sm-and-down mx-4"
        active-class="third--text title"
      >
        <span>CONTACT</span>
      </v-btn>
       <v-spacer class="hidden-sm-and-down" />
    </v-app-bar>
</template>

<script>
export default {
  data(){
    return {
      items: [
        { link: '/', label: 'Home' },
        { link: '/resume', label: 'Resume' },
        { link: '/portfolio', label: 'Portfolio' },
        { link: '/contact', label: 'Contact' }
      ]
    }
  }
}
</script>

<style>

</style>