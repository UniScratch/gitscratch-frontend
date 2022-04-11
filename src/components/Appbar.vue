<template>
  <v-app-bar app>
    <div style="padding-top: 6px; margin-right: 8px;">
      <img v-if="!dark_theme" src="../assets/GitScratch-icon-black.svg" width="40" />
      <img v-if="dark_theme" src="../assets/GitScratch-icon-white.svg" width="40" />
    </div>
    <h2>GitScratch</h2>

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
