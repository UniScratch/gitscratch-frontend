<template>
  <v-container>
    <v-img src="/alpha.svg" class="fixed-watermark" />
  </v-container>
</template>
<style>
.fixed-watermark{
    width: 230px;
    height: auto;
    position: fixed !important;
    bottom: 5px;
    left: 5px;
    opacity: 1;
    z-index: 1;
    pointer-events: none;
}
</style>
