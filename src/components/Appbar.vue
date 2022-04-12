<template>
  <v-app-bar app>
    <div style="padding-top: 6px; margin-right: 8px;">
      <img v-if="!dark_theme" src="../assets/GitScratch-icon-black.svg" width="40" />
      <img v-if="dark_theme" src="../assets/GitScratch-icon-white.svg" width="40" />
    </div>
    <h2 style="margin-right: 8px;">GitScratch</h2>
    <v-btn text color="blue" href="/">首页</v-btn>

    <v-spacer></v-spacer>

    <v-btn color="blue" dark style="margin-right: 8px;">注册</v-btn>
    <v-btn color="transparent" style="margin-right: 8px;">登录</v-btn>
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
