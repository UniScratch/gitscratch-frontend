<template>
  <div>
    <v-switch
      v-if="isAuthor"
      v-model="allowComment"
      label="允许评论"
      @click="changeCommentAllow"
    />
    <v-switch
      v-if="development"
      v-model="localLogin"
      label="[开发]账户登录"
    />
    <v-form ref="form" v-model="valid" style="margin-bottom: 16px;" lazy-validation>
      <v-textarea
        v-if="!allowComment && localLogin"
        v-model="comment_content"
        label="评论区已关闭"
        counter="1024"
        auto-grow
        rows="2"
        outlined
        style="border-radius: 4px;"
        :rules="[commentContentRules.comment]"
        disabled
      />
      <v-textarea
        v-else-if="allowComment && localLogin"
        v-model="comment_content"
        label="评论"
        counter="1024"
        auto-grow
        rows="2"
        outlined
        style="border-radius: 4px;"
        :rules="[commentContentRules.comment]"
      />
      <v-textarea
        v-else-if="allowComment && !localLogin"
        v-model="comment_content"
        label="请登录后评论"
        counter="1024"
        auto-grow
        rows="2"
        outlined
        style="border-radius: 4px;"
        :rules="[commentContentRules.comment]"
        disabled
      />
      <v-textarea
        v-else-if="!allowComment && !localLogin"
        v-model="comment_content"
        label="请登录后评论"
        counter="1024"
        auto-grow
        rows="2"
        outlined
        style="border-radius: 4px;"
        :rules="[commentContentRules.comment]"
        disabled
      />
      <v-btn
        :disabled="!valid||!allowComment||!localLogin"
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
    isLogin:
      {
        type: Boolean,
        default: true
      },
    development:
      {
        type: Boolean,
        default: true
      }
  },
  data: () => ({
    valid: true,
    commentContentRules: {
      comment: v => !!v || '留言内容不能为空'
    },
    comment_content: '',
    allowComment: true,
    isAuthor: true,
    localLogin: false
  }),
  mounted () {
    this.localLogin = this.isLogin
  },
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
