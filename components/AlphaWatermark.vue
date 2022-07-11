<template>
  <v-container>
    <span class="fixed-watermark">
      <!-- <v-icon size="12">mdi-star-four-points-outline</v-icon> -->
      开发中版本, 不代表最终使用体验与品质
    </span>
  </v-container>
</template>
<style>
.fixed-watermark{
    /* width: 230px; */
    font-size: 10px;
    height: auto;
    position: fixed !important;
    bottom: 5px;
    left: 5px;
    opacity: 0.5;
    z-index: 1;
    pointer-events: none;
}
</style>
