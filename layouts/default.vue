<template>
  <v-app>
    <Appbar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <SiteFooter />
    <AlphaWatermark />
  </v-app>
</template>
<script>
export default {
  transition: 'slide-top',
  fetch () {
    // console.log('fetch')
    // console.log(this.$store.state.auth.userInfo.id)
  },
  mounted () {
    // console.log('mount')
    // console.log(this.$store.state.auth.userInfo.id)
    console.log(this.$http.getBaseURL())
    // const session = this.$cookies.get('session')
    // this.$auth_updateSession(session)
  }
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
