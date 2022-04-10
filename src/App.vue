<template>
  <v-app>
    <v-main>
      <Appbar />
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue'

export default {
  name: 'App',

  components: {
    Appbar
  },

  data: () => ({
    //
  }),
};
</script>
