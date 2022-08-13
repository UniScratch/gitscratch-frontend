<template>
  <v-card style="padding: 16px;margin-bottom: 15px;" class="d-flex">
    <div class="flex-grow-1 overflow-auto" style="border-radius: 0px;">
      <template v-if="commentData.status === 0">
        <CommentSingleContent :comment-data="commentData" />
      </template>
      <template v-if="commentData.status === 1">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header class="grey-text" style="min-height: unset !important;padding: 4px;">
              此评论已隐藏
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <CommentSingleContent :comment-data="commentData" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    commentData: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
  }),
  methods: {
  }
}
</script>
<style>
.v-expansion-panel-content__wrap {
  padding: unset !important;
  padding-top: 16px !important;
}
</style>
