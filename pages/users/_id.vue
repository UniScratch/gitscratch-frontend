<template>
  <v-row>
    <v-col cols="12" xl="2" md="3" sm="4" style="padding-right: 20px;">
      <div style="text-align: center;">
        <v-avatar style="width: 100%; height: auto; max-width: 200px;">
          <v-img :src="avatar" />
        </v-avatar>
      </div><br>
      <p class="text-h4">
        {{ username }}
      </p>
      <p class="text-body">
        {{ bio }}
      </p>
      <v-btn block color="primary" depressed>
        <v-icon>mdi-plus</v-icon>
        关注
      </v-btn><br>
      <v-icon>mdi-account-multiple-outline</v-icon>
      <router-link :to="'/users/' + $route.params.username + '/followers'">
        {{ follower }} 粉丝
      </router-link>
      <span> · </span>
      <router-link :to="'/users/' + $route.params.username + '/following'">
        {{ following }} 正在关注
      </router-link>
      <br>
      <v-icon>mdi-web</v-icon>
      <a :href="website">{{ website }}</a>
    </v-col>
    <v-divider vertical class="hidden-xs-only" />
    <v-col cols="12" xl="10" md="9" sm="8" style="padding-left: 20px;">
      <v-btn-toggle
        v-model="toggle_tab"
        group
        mandatory
        color="primary"
      >
        <v-btn style="border-radius: 24px;">
          <v-icon>mdi-book-open-outline</v-icon><span>概览</span>
        </v-btn>
        <v-btn style="border-radius: 24px;">
          <v-icon>mdi-book-outline</v-icon><span>作品</span>
        </v-btn>
        <v-btn style="border-radius: 24px;">
          <v-icon>mdi-account-group-outline</v-icon><span>组织</span>
        </v-btn>
        <v-btn style="border-radius: 24px;">
          <v-icon>mdi-comment-text-multiple-outline</v-icon><span>留言</span>
        </v-btn>
      </v-btn-toggle>
      <v-window
        v-model="toggle_tab"
        style="display: block; padding: 16px;"
      >
        <!-- 概览 -->
        <v-window-item>
          <v-card>
            <v-card-title class="text-h5">
              <span>README</span><span class="grey-text">.md</span>
            </v-card-title>
            <v-divider />
            <MarkdownRender style="padding: 16px;" />
          </v-card>
          <ProjectGroup title="置顶作品" style="margin-top: 8px;" />
        </v-window-item>
        <!-- 作品 -->
        <v-window-item>
          <div class="d-flex">
            <p class="text-h5" style="margin: 0;">
              最近收藏的作品
            </p>
            <v-spacer />
            <router-link :to="'/users/' + $route.params.username + '/stars'">
              更多
            </router-link>
          </div>
          <ProjectGroup />
        </v-window-item>
        <!-- 组织 -->
        <v-window-item>
          <p>？？？？？</p>
        </v-window-item>
        <!-- 留言 -->
        <v-window-item>
          <CommentForm />
          <v-divider style="margin: 8px 0;" />
          <p class="text-h5">
            留言
          </p>
          <Comment
            content="Supports Markdown  "
          />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>
<script>
const marked = require('marked')
export default {
  data: () => ({
    username: '作者',
    follower: 100,
    following: 200,
    website: 'https://git.sc.cn',
    bio: '啊，好舒服',
    avatar: '/GitScratch-icon-background-blue.svg',
    toggle_tab: 0,
    README: `
# 啊，好舒服
昨天晚上跟 [@作者](/users/作者) 床♂战太爽了
\`\`\` js
console.log('Hello, world!')
\`\`\``
  }),
  head () {
    return {
      title: this.username
    }
  },
  methods: {
    renderMd () {
      return marked.parse(this.README)
    }
  }
}
</script>
