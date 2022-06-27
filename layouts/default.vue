<template>
  <v-app>
    <Appbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <SiteFooter />
  </v-app>
</template>
<script>
export default {
  transition: 'slide-top'
}
</script>

<style>
.slide-top-enter-active,
.slide-top-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-top-enter,
.slide-top-leave-to {
  opacity: 0;
  transform: translate3d(0, -15px, 0);
}

</style>
