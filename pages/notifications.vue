<template>
  <v-row>
    <v-col cols="12" xl="2" md="3" sm="4" style="padding-right: 20px;">
      <v-list
        dense
        nav
        color="transparent"
      >
        <v-list-item-group v-model="model" color="primary" mandatory>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-inbox-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>收件箱</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-bookmark-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>已保存</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>已完成</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-subheader>筛选</v-subheader>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-comment-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>评论</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-book-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>作品</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>组织</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-subheader
                v-bind="attrs"
                v-on="on"
              >
                管理通知
              </v-subheader>
            </template>
            <v-list
              dense
            >
              <v-list-item link to="/settings">
                <v-list-item-title>通知设置</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/settings">
                <v-list-item-title>监视的作品</v-list-item-title>
              </v-list-item>
              <v-list-item link to="/settings">
                <v-list-item-title>订阅</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-group>
      </v-list>
    </v-col>
    <v-divider vertical class="hidden-xs-only" />
    <v-col cols="12" xl="10" md="9" sm="8" style="padding-left: 20px;">
      <v-list two-line>
        <v-list-item-group
          v-model="notiModel"
          multiple
        >
          <template v-for="(item, key) in data.notifications">
            <v-hover
              v-slot="{ hover }"
              :key="key"
            >
              <v-list-item>
                <template #default="{ active }">
                  <v-checkbox
                    :input-value="active"
                  />
                  <v-menu
                    open-on-hover
                    bottom
                    offset-y
                    open-delay="250"
                  >
                    <template #activator="{ on, attrs }">
                      <v-list-item-avatar
                        class="ml-2 mr-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-img :src="getAvatar(item)" />
                      </v-list-item-avatar>
                    </template>
                    <v-card class="cardblur">
                      <v-list color="transparent">
                        <v-list-item>
                          <v-avatar
                            size="48px"
                            ripple
                          >
                            <v-img
                              :src="getAvatar(item)"
                            />
                          </v-avatar>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title class="text-h6">
                              {{ item.userName }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{ item.userName }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-menu>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon :color="getIconColor(item)">
                        {{ getIcon(item ) }}
                      </v-icon>
                      {{ getTitle(item) }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ getSubtitle(item) }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <span v-if="!hover">{{ getTimePast(item.time) }}</span>
                  <template v-if="hover">
                    <v-btn icon :to="'/projects/'+item.targetId">
                      <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-bookmark-outline</v-icon>
                    </v-btn>
                  </template>
                </template>
              </v-list-item>
            </v-hover>
          </template>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
const marked = require('marked')
export default {
  data: () => ({
    model: 0,
    data: {
      notifications: [
        // status中0:unread 1:saved 2:done
        // time使用ISO 8601
        {
          type: 'project.star', // 作品被星标
          status: 2,
          targetName: 'Example Project', // 作品名
          targetId: 1, // 作品id
          targetStar: 256, // 作品星标数
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'project.fork', // 作品被改编
          status: 2,
          targetName: 'Example Project', // 作品名
          targetId: 1, // 作品id
          targetFork: 512, // 作品改编数
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'project.release', // star的作品发release了
          status: 2,
          targetName: 'Example Project', // 作品名
          targetId: 1, // 作品id
          releaseVer: '1.0.0', // 作品版本
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'project.ban', // 作品被封禁 (admin)
          status: 2,
          targetName: 'Example Project', // 作品名
          targetId: 1, // 作品id
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'project.comment', // 作品被评论
          status: 2,
          targetName: 'Example Project', // 作品名
          targetId: 1, // 作品id
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          commentPreview: '这是评论内容, 听我说谢谢你, 因为有你, 温暖了四季。', // 评论内容
          commentId: 1, // 评论id
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'project.comment.mention', // 作品评论中提及了你
          status: 2,
          targetName: 'Example Project', // 作品名
          targetId: 1, // 作品id
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          commentPreview: '这是评论内容, 听我说谢谢你, 因为有你, 温暖了四季。', // 评论内容
          commentId: 1, // 评论id
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.follow', // 用户被关注
          status: 2,
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          followers: 256, // 粉丝数
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.levelUpgrade', // 用户等级升级
          status: 2,
          level: 2, // 等级
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.verify', // 用户社区认证状态 (admin)
          status: 2,
          verifyStat: 1, // 1: pass 2: reject 3: pending
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.mute', // 用户被禁言 (admin)
          status: 2,
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          muteTime: 100000, // 单位: min
          muteReason: '违规行为', // 禁言原因
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.ban', // 用户被封禁 (admin)
          status: 2,
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          banTime: 100000, // 单位: min
          banReason: '违规行为', // 封禁原因
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.newProject', // 关注用户发布新作品
          status: 2,
          targetName: 'Example Project', // 作品名
          targetId: 1, // 作品id
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.comment', // 用户被评论
          status: 2,
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          commentPreview: '这是评论内容, 听我说谢谢你, 因为有你, 温暖了四季。', // 评论内容
          commentId: 1, // 评论id
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'user.comment.mention', // 用户评论中提及了你
          status: 2,
          targetName: '用户', // 用户名
          targetId: 1, // 用户id
          userName: '顾娟', // 用户名
          userId: 1, // 用户id
          userAvatar: '/GitScratch-icon-background-blue.svg', // 用户头像
          commentPreview: '这是评论内容, 听我说谢谢你, 因为有你, 温暖了四季。', // 评论内容
          commentId: 1, // 评论id
          time: '2022-07-02T15:13:21+08:00' // 时间
        },
        {
          type: 'system.birthday', // 生日祝福 (由系统发送)
          status: 2,
          content: '旅行者, 生日快乐! 请在附件中收取我们给您准备的礼物。\n感谢您一直以来的支持, 愿您无论在哪片大地上, 都能有所收获。\n[附件]\n给旅行者的小蛋糕', // 内容
          exp: 100, // 增加的经验值
          time: '2022-07-02T15:13:21+08:00' // 时间
        }
      ]
    },
    notiModel: []

  }),
  async fetch () {
    // this.data = await this.$http.$get('/notifications')
  },
  head () {
    return {
      title: '通知'
    }
  },
  methods: {
    renderMd () {
      return marked.parse(this.README)
    },
    getTitle (item) {
      if (item.type === 'project.star') {
        return item.userName + ' 星标了你的作品 ' + item.targetName
      } else if (item.type === 'project.fork') {
        return item.userName + ' 改编了你的作品 ' + item.targetName
      } else if (item.type === 'project.release') {
        return item.userName + ' 发布了作品 ' + item.targetName + ' 的新版本'
      } else if (item.type === 'project.ban') {
        return '你的作品 ' + item.targetName + ' 被 ' + item.userName + ' 封禁'
      } else if (item.type === 'project.comment') {
        return item.userName + ' 评论了你的作品 ' + item.targetName
      } else if (item.type === 'project.comment.mention') {
        return item.userName + ' 在作品 ' + item.targetName + ' 中提到了你'
      } else if (item.type === 'user.follow') {
        return item.userName + ' 关注了你 '
      } else if (item.type === 'user.levelUpgrade') {
        return '你的社区等级已升级到 Lv.' + item.level
      } else if (item.type === 'user.verify') {
        return '你的社区认证' + (item.verifyStat === 1 ? '已通过' : '被拒绝')
      } else if (item.type === 'user.mute') {
        return '你被 ' + item.userName + ' 禁言 ' + item.muteTime + ' 分钟'
      } else if (item.type === 'user.ban') {
        return '你被 ' + item.userName + ' 封禁 ' + item.banTime + ' 分钟'
      } else if (item.type === 'user.newProject') {
        return item.userName + ' 发布了作品 ' + item.targetName
      } else if (item.type === 'user.comment') {
        return item.userName + ' 评论了你的主页'
      } else if (item.type === 'user.comment.mention') {
        return item.userName + ' 在 ' + item.targetName + ' 的主页中提到了你'
      } else if (item.type === 'system.birthday') {
        return 'GitScratch · 生日祝福'
      }
    },
    getSubtitle (item) {
      if (item.type === 'project.star') {
        return '共收到 ' + item.targetStar + ' 个星标'
      } else if (item.type === 'project.fork') {
        return '共被改编 ' + item.targetFork + ' 次'
      } else if (item.type === 'project.release') {
        return '当前版本: ' + item.releaseVer
      } else if (item.type === 'project.ban') {
        return '封禁原因: xxx , 解封时间: 2077'
      } else if (item.type === 'project.comment') {
        return item.commentPreview
      } else if (item.type === 'project.comment.mention') {
        return item.commentPreview
      } else if (item.type === 'user.follow') {
        return '共 ' + item.followers + ' 只粉丝'
      } else if (item.type === 'user.levelUpgrade') {
        return 'Exp ++'
      } else if (item.type === 'user.verify') {
        return ''
      } else if (item.type === 'user.mute') {
        return '禁言原因: ' + item.muteReason + ' , 解禁时间: 2077'
      } else if (item.type === 'user.ban') {
        return '封禁原因: ' + item.banReason + ' , 解封时间: 2077'
      } else if (item.type === 'user.newProject') {
        return '作品卡片'
      } else if (item.type === 'user.comment') {
        return item.commentPreview
      } else if (item.type === 'user.comment.mention') {
        return item.commentPreview
      } else if (item.type === 'system.birthday') {
        return item.content
      }
    },
    getIcon (item) {
      if (item.type === 'project.star') {
        return 'mdi-star-outline'
      } else if (item.type === 'project.fork') {
        return 'mdi-source-branch'
      } else if (item.type === 'project.release') {
        return 'mdi-book-outline'
      } else if (item.type === 'project.ban') {
        return 'mdi-alert-outline'
      } else if (item.type === 'project.comment') {
        return 'mdi-comment-outline'
      } else if (item.type === 'project.comment.mention') {
        return 'mdi-comment-outline'
      } else if (item.type === 'user.follow') {
        return 'mdi-account-outline'
      } else if (item.type === 'user.levelUpgrade') {
        return 'mdi-arrow-up'
      } else if (item.type === 'user.verify') {
        return 'mdi-check-decagram-outline'
      } else if (item.type === 'user.mute') {
        return 'mdi-comment-remove-outline'
      } else if (item.type === 'user.ban') {
        return 'mdi-alert-outline'
      } else if (item.type === 'user.newProject') {
        return 'mdi-book-outline'
      } else if (item.type === 'user.comment') {
        return 'mdi-comment-outline'
      } else if (item.type === 'user.comment.mention') {
        return 'mdi-comment-outline'
      } else if (item.type === 'system.birthday') {
        return 'mdi-cake'
      }
    },
    getIconColor (item) {
      if (item.type === 'project.star') {
        return 'yellow'
      } else if (item.type === 'project.fork') {
        return 'purple'
      } else if (item.type === 'project.release') {
        return ''
      } else if (item.type === 'project.ban') {
        return 'rgba(238, 54, 37)'
      } else if (item.type === 'project.comment') {
        return ''
      } else if (item.type === 'project.comment.mention') {
        return ''
      } else if (item.type === 'user.follow') {
        return ''
      } else if (item.type === 'user.levelUpgrade') {
        return 'green'
      } else if (item.type === 'user.verify') {
        return 'blue'
      } else if (item.type === 'user.mute') {
        return 'rgba(255, 87, 34)'
      } else if (item.type === 'user.ban') {
        return 'rgba(238, 54, 37)'
      } else if (item.type === 'user.newProject') {
        return ''
      } else if (item.type === 'user.comment') {
        return ''
      } else if (item.type === 'user.comment.mention') {
        return ''
      } else if (item.type === 'system.birthday') {
        return 'orange'
      }
    },
    getAvatar (item) {
      if (item.type === 'project.star') {
        return item.userAvatar
      }
    },
    getTimePast (ISOTime) {
      // return ((new Date() - new Date(ISOTime)) / 1000) + ' 秒前'
      return ('几秒前')
    }
  }
}
</script>
<style>
.v-list--nav .v-list-item, .v-list--nav .v-list-item:before {
  border-radius: 20px !important;
}
</style>
