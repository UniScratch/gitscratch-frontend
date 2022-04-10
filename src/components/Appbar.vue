<template>
  <v-app-bar app>
    <div>
      <!-- <img src="../assets/GitScratch-icon-black.png" v-if="!dark_theme" width="40" /> -->
    </div>

    <v-spacer></v-spacer>

    <v-btn icon v-on:click="toggle_theme">
      <v-icon>mdi-brightness-6</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Appbar',

    data: () => ({
      dark_theme: false,
    }),

    methods: {
      toggle_theme: function() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.dark_theme = !this.dark_theme;
      },
    },
  }
</script>
