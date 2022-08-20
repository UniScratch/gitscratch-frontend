<template>
  <div style="margin-bottom: 24px;">
    <template v-for="(item, index) in data">
      <ProjectCardVertical :key="index" :project-data="item" />
    </template>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
  })
}
</script>
<style>
.v-chip-opacity {
  border: unset !important;
}
</style>
