<template>
  <v-card
    style="padding: 16px; margin-bottom: 15px"
    :class="'d-flex '"
  >
    <v-overlay
      absolute
      :value="isReplyJumpTarget"
      :class="isReplyJumpTarget ? 'card-highlight' : null"
      opacity="0"
      @click="clearReplyJumpTargetHighlight()"
    />
    <div class="flex-grow-1 overflow-auto" style="border-radius: 0px">
      <template v-if="commentData.status === 0">
        <CommentSingleContent
          :comment-data="commentData"
          :is-reply-jump-target="isReplyJumpTarget"
          @reply="reply"
          @replyJump="replyJump"
        />
      </template>
      <template v-if="commentData.status === 1">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header
              class="grey-text"
              style="min-height: unset !important; padding: 4px"
            >
              此评论已隐藏
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <CommentSingleContent
                :comment-data="commentData"
                :is-reply-jump-target="isReplyJumpTarget"
                @reply="reply"
              />
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
    },
    isReplyJumpTarget: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  methods: {
    reply (n) {
      this.$emit('reply', n)
    },
    replyJump (n) {
      this.$emit('replyJump', n)
    },
    clearReplyJumpTargetHighlight () {
      this.$emit('clearReplyJumpTargetHighlight')
    }
  }
}
</script>
<style>
.v-expansion-panel-content__wrap {
  padding: unset !important;
  padding-top: 16px !important;
}
.card-highlight {
  border: 2px solid var(--primary-color);
  margin: -2px;
}
</style>
