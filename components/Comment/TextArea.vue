<template>
  <div>
    <v-card>
      <MarkdownEditor
        content="123"
        textarea-label="留言"
        textarea-placeholder="Leave a comment"
        action-icon="mdi-send"
        action-text="发送"
      />
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
  },
  data: () => ({
    tab: 0,
    markdown: ''
  }),
  mounted () {
  },
  methods: {
  }
}
</script>
<style>
textarea {
  margin-right: 6px !important;
  margin-bottom: 6px;
}
.textarea_title {
  padding-top: 4px;
}
</style>
