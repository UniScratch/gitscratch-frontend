<template>
  <div>
    <v-switch
      v-if="isAuthor"
      v-model="allowComment"
      label="允许评论"
      @click="changeCommentAllow"
    />
    <v-form ref="form" v-model="valid" style="margin-bottom: 16px;" lazy-validation>
      <v-textarea
        v-model="comment_content"
        :label="allowComment ? '评论' : '评论区已关闭'"
        counter="1024"
        auto-grow
        rows="2"
        outlined
        style="border-radius: 4px;"
        :rules="[commentContentRules.comment]"
        :disabled="!allowComment"
      />
      <v-btn
        :disabled="!valid||!allowComment"
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
  </div>
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
    allowComment: false,
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
      // Send allow comment data to API
    }
  }
}
</script>
