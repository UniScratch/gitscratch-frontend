<template>
    <v-app>
        <v-main>
            <Appbar />
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
import Appbar from '/src/components/Appbar.vue'
export default {
  name: 'App',
  components: {
      Appbar
  }
}
</script>