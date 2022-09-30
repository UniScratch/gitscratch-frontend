<template>
  <div class="d-flex">
    <Avatar :data="commentData.user" size="45" />
    <v-divider vertical style="margin: 0 8px;" />
    <div class="flex-grow-1 overflow-auto" style="border-radius: 0px;">
      <v-chip
        color="primary"
        outlined
        ripple
        small
      >
        吉祥物
      </v-chip>
      <router-link :to="'/users/' + commentData.user.id">
        {{ commentData.user.name }}
      </router-link>
      <v-tooltip v-if="commentData.user.verified !== 0" bottom>
        <template #activator="{ on, attrs }">
          <v-icon color="rgba(33,150,243)" v-bind="attrs" v-on="on">
            mdi-check-decagram-outline
          </v-icon>
        </template>
        <span>社区官方认证</span>
      </v-tooltip>
      <v-tooltip v-if="commentData.user.muted !== 0" bottom>
        <template #activator="{ on, attrs }">
          <v-icon color="rgb(255, 87, 34)" v-bind="attrs" v-on="on">
            mdi-comment-remove-outline
          </v-icon>
        </template>
        <span>帐户被禁言，{{ commentData.user.muted }} 天后解除</span>
      </v-tooltip>
      <v-tooltip v-if="commentData.user.banned !== 0" bottom>
        <template #activator="{ on, attrs }">
          <v-icon color="rgb(238, 54, 37)" v-bind="attrs" v-on="on">
            mdi-gavel
          </v-icon>
        </template>
        <span>帐户被封禁，{{ commentData.user.banned }} 天后解除</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <span
            style="margin-left: 8px;"
            class="grey-text"
            v-bind="attrs"
            v-on="on"
          >{{ new Date(commentData.time * 1000).fromNow() }}</span>
        </template>
        <span>{{ new Date(commentData.time * 1000).format("yyyy-MM-dd hh:mm:ss") }}</span>
      </v-tooltip>
      <span style="margin-left: 8px;" class="grey-text">{{ commentData.region }}</span>
      <v-menu bottom offset-y transition="slide-y-transition">
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            plain
            small
            class="d-flex float-right mr-1"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <v-card class="cardblur">
          <v-list dense color="transparent">
            <v-list-item link @click="reply()">
              <v-list-item-icon>
                <v-icon>mdi-reply-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>回复</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="copylink()">
              <v-list-item-icon>
                <v-icon>mdi-link-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>复制链接</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- <v-list-item v-if="$permission.canEditComment(commentData).status" link @click="edit()"> // 太难了不想做
              <v-list-item-icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>编辑</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
            <v-list-item v-if="$permission.canHideComment(commentData).status && commentData.status !== 2" link @click="changeState(2,null)">
              <v-list-item-icon>
                <v-icon>mdi-eye-off-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>隐藏</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="$permission.canHideComment(commentData).status && commentData.status === 2" link @click="changeState(0,null)">
              <v-list-item-icon>
                <v-icon>mdi-eye-off-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>取消隐藏</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="$permission.canDeleteComment(commentData).status" link @click="changeState(1,null)">
              <v-list-item-icon>
                <v-icon>mdi-delete-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>删除</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="report()">
              <v-list-item-icon>
                <v-icon>mdi-alert-octagon-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>举报</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-divider style="margin: 8px 0;" />
      <v-banner v-if="commentData.reply != null" single-line rounded outlined>
        <span class="grey-text">
          回复
        </span>
        <span>
          {{ commentData.reply.user.name }}
        </span>
        <span class="grey-text">
          :
        </span>
        <br>
        <template #actions>
          <v-btn text @click="replyJump()">
            查看原文
          </v-btn>
        </template>
      </v-banner>
      <MarkdownRender :content="commentData.comment" />
    </div>
  </div>
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
  computed: {
  },
  methods: {
    reply () {
      this.$emit('reply', this.commentData)
    },
    replyJump () {
      this.$emit('replyJump', this.commentData)
    },
    async copylink () {
      const url = location.origin + this.$route.path + '?comment=' + this.commentData.id + '&page=' + this.commentData.page_id
      await navigator.clipboard.writeText(url)
      this.$dialog.message.info('已复制', {
        position: 'bottom'
      })
    },
    changeState (status, comment) {
      const commentDataNew = JSON.parse(JSON.stringify(this.commentData)) // deep copy
      commentDataNew.status = status !== null ? status : this.commentData.status
      commentDataNew.comment = comment !== null ? comment : this.commentData.comment
      // console.log(commentDataNew)
      this.$emit('changeState', { origin: this.commentData, current: commentDataNew })
    },
    report () {
      alert('这是一个按钮，但你不能点')
      // this.$emit('report', this.commentData)
    }
  }
}
</script>
