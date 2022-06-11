<template>
  <v-app>
    <Appbar />
    <v-main>
      <v-container>
        <Nuxt />
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
  },
  transition: 'slide-bottom'
}
</script>

<style>
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

</style>
