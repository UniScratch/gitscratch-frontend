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
          <v-subheader>Filters</v-subheader>
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
      <v-list three-line>
        <template v-for="(item, key) in data.notifications">
          <v-list-item
            :key="key"
          >
            <v-list-item-avatar>
              <v-img src="/GitScratch-icon-background-blue.svg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }} · {{ key }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.type }} · {{ item.url }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
const marked = require('marked')
export default {
  data: () => ({
    model: 1,
    data: {
      notifications: [
        {
          type: 'organization',
          status: 2,
          title: '就加整大对科热如听省特划层电口。',
          user: '顾娟',
          url: '/projects/1'
        },
        {
          type: 'user',
          status: 1,
          title: '美世直物做离青区划只来本矿经石基委。',
          user: '范娟',
          url: '/projects/1'
        },
        {
          type: 'project',
          status: 1,
          title: '天务通代因飞表场群车马话系求路表。',
          user: '郭平',
          url: '/projects/1'
        },
        {
          type: 'user',
          status: 2,
          title: '从决路同自产质日造给保些安。',
          user: '王霞',
          url: '/projects/1'
        }
      ]
    }

  }),
  async fetch () {
    this.data = await this.$http.$get('/notifications')
  },
  head () {
    return {
      title: '通知'
    }
  },
  methods: {
    renderMd () {
      return marked.parse(this.README)
    }
  }
}
</script>
<style>
.v-list--nav .v-list-item, .v-list--nav .v-list-item:before{
  border-radius: 20px !important;
}
</style>
