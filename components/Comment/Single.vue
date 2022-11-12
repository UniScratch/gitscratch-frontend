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
      <v-expansion-panels
        accordion
        :mandatory="commentData.status === 0"
        :disabled="commentData.status === 1"
        flat
      >
        <v-expansion-panel>
          <v-expansion-panel-header
            v-if="commentData.status !== 0"
            class="grey-text"
            style="min-height: unset !important; padding: 7px;"
          >
            {{ commentData.status === 2 ? '此评论已隐藏' : '此评论已删除' }}
          </v-expansion-panel-header>
          <v-expansion-panel-content v-if="commentData.status !== 1">
            <br v-if="commentData.status !== 0">
            <CommentSingleContent
              :comment-data="commentData"
              :is-reply-jump-target="isReplyJumpTarget"
              @reply="reply"
              @changeState="changeState"
              @replyJump="replyJump"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
    changeState (n) {
      this.$emit('changeState', n)
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
/*.v-expansion-panel-content__wrap {
  padding: unset !important;
  padding-top: 16px !important;
}*/
.card-highlight {
  border: 2px solid var(--primary-color);
  margin: -2px;
}
</style>
