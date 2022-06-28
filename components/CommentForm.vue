<template>
  <v-form ref="form" v-model="valid" style="margin-bottom: 16px;" lazy-validation>
    <v-switch
      v-if="isAuthor"
      label="允许评论"
      @click="changeCommentAllow()"
    />
    <v-textarea
      v-model="comment_content"
      :label="allowComment ? '评论区已关闭' : '评论'"
      counter="1024"
      auto-grow
      rows="2"
      outlined
      style="border-radius: 4px;"
      :rules="[commentContentRules.comment]"
      :disabled="allowComment"
    />
    <v-btn
      :disabled="!valid||allowComment"
      color="primary"
      depressed
      rounded
      style="transition: background-color 0.5s;"
      @click="comment"
    >
      发布
    </v-btn>
    <transition name="slide-y-reverse-transition">
      <v-btn v-if="comment_content || !valid" text color="accent" rounded @click="reset">
        重置
      </v-btn>
    </transition>
  </v-form>
</template>
<script>
export default {
  props: {
  },
  data: () => ({
    valid: true,
    commentContentRules: {
      comment: v => !!v || '留言内容不能为空'
    },
    comment_content: '',
    allowComment: true,
    isAuthor: true
  }),
  methods: {
    comment () {
      this.validate()
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    changeCommentAllow () {
      this.allowComment = !this.allowComment
      // Send allow comment data to API
    }
  }
}
</script>
