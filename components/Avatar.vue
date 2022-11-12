<template>
  <v-avatar v-if="!$utils.isObjectEmpty(data)" :size="size" color="primary">
    <v-img v-if="data.avatar" :src="$utils.getAssetUrl(data.avatar)" :aspect-ratio="1" />
    <span v-else class="white--text text-h5" :style="'font-size: ' + Number(size) * 0.4 + 'px !important;'">{{ data.name[0].toUpperCase() }}</span>
  </v-avatar>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    size: {
      type: String,
      default: '60'
    }
  },
  mounted () {
    // console.log(this.data)
  }
}
</script>
