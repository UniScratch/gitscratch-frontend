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
      label="[开发]帐户登录"
      @click="checkCommentPermission"
    />
    <v-switch
      v-if="development"
      v-model="localMuted"
      label="[开发]被禁言"
      @click="checkCommentPermission"
    />
    <v-form ref="form" v-model="valid" style="margin-bottom: 16px;" lazy-validation>
      <v-textarea
        v-model="commentContent"
        :label="placeHolder"
        counter="1024"
        auto-grow
        rows="2"
        outlined
        style="border-radius: 4px;"
        :rules="[commentContentRules.comment]"
        :disabled="textAreaDisabled"
      />
      <v-btn
        :disabled="!valid||!allowComment||!localLogin||localMuted"
        color="primary"
        depressed
        rounded
        style="transition: background-color 0.5s;"
        @click="comment"
      >
        发布
      </v-btn>
      <transition name="slide-y-reverse-transition">
        <v-btn v-if="commentContent || !valid" text color="accent" rounded @click="reset">
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
      },
    isMuted:
      {
        type: Boolean,
        default: false
      }
  },
  data: () => ({
    valid: true,
    commentContentRules: {
      comment: v => !!v || '留言内容不能为空'
    },
    commentContent: '',
    allowComment: true,
    isAuthor: true,
    localLogin: false,
    localMuted: false,
    textAreaDisabled: false,
    placeHolder: '评论'
  }),
  mounted () {
    this.localLogin = this.isLogin
    this.localMuted = this.isMuted
    this.checkCommentPermission()
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
      this.checkCommentPermission()
      // Send allow comment data to API
    },
    checkCommentPermission () {
      if (!this.localLogin) {
        this.textAreaDisabled = true
        this.placeHolder = '请登录后评论'
      } else if (this.localMuted) {
        this.textAreaDisabled = true
        this.placeHolder = '已被禁言'
      } else if (!this.allowComment) {
        this.textAreaDisabled = true
        this.placeHolder = '评论区已关闭'
      } else if (!this.localMuted && this.localLogin && this.allowComment) {
        this.textAreaDisabled = false
        this.placeHolder = '评论'
      }
    }
  }
}
</script>
