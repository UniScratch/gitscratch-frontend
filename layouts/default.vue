<template>
  <v-app>
    <Appbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Appbar from '~/components/Appbar.vue'
export default {
  name: 'App',
  components: {
    Appbar
  }
}
</script>
