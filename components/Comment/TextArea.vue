<template>
  <div>
    <v-card>
      <v-card-title class="textarea_title">
        <div>
          <v-tabs v-model="tab">
            <v-tab>Write</v-tab>
            <v-tab>Preview</v-tab>
          </v-tabs>
        </div>
        <v-spacer />
        <div v-show="tab === 0">
          <v-btn icon plain small>
            <v-icon>mdi-format-header-pound</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-format-bold</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-format-italic</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-image-outline</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-format-quote-open</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-code-tags</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-link-variant</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-format-list-numbered</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-checkbox-marked-outline</v-icon>
          </v-btn>
          <v-btn icon plain small>
            <v-icon>mdi-at</v-icon>
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text v-show="tab === 0" style="padding-bottom: 0px;">
        <v-textarea
          v-model="markdown"
          outlined
          label="留言"
          auto-grow
          placeholder="Leave a comment"
          rows="3"
        />
      </v-card-text>
      <div v-show="tab === 1" style="padding:0 16px;">
        <MarkdownRender :content="markdown" />
      </div>
      <v-card-actions style="padding-top: 0px;">
        <v-btn
          text
          icon
        >
          <v-icon>mdi-language-markdown-outline</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn
          width="120px"
          rounded
          color="primary"
        >
          发射
          <v-icon right>
            mdi-send
          </v-icon>
        </v-btn>
      </v-card-actions>
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
