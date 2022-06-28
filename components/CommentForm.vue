<template>
  <v-form ref="form" v-model="valid" style="margin-bottom: 16px;" lazy-validation>
    <v-textarea
      v-model="comment_content"
      :label="allow_comment ? '评论' : '评论区已关闭'"
      counter="1024"
      auto-grow
      rows="2"
      outlined
      style="border-radius: 4px;"
      :rules="[commentContentRules.comment]"
      :disabled="!allow_comment"
    />
    <v-btn
      :disabled="!valid||!allow_comment"
      color="primary"
      depressed
      rounded
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
  props: ['allow_comment'],
  data: () => ({
    valid: true,
    commentContentRules: {
      comment: v => !!v || '留言内容不能为空'
    },
    comment_content: ''
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
    }
  }
}
</script>
