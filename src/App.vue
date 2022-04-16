<template>
  <v-app>
    <v-main>
      <Appbar />
      <v-container>
        <v-row>
          <v-col cols="9" >
            <Carousel/>
            <!-- <v-sheet rounded="lg" min-height="268"></v-sheet> -->
          </v-col>

          <v-col cols="3" >
            <SideBanner/>
            <!-- <v-sheet min-height="70vh" rounded="lg"></v-sheet> -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue'
import Carousel from './components/Carousel.vue'
import SideBanner from './components/SideBanner.vue'

export default {
  name: 'App',

  components: {
    Appbar,
    Carousel,
    SideBanner
  },

  data: () => ({
    //
  }),
};
</script>
