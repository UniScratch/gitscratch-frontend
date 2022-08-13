<template>
  <div class="d-flex">
    <v-avatar>
      <v-img :src="commentData.user.avatar" />
    </v-avatar>
    <v-divider vertical style="margin: 0 8px;" />
    <div class="flex-grow-1 overflow-auto" style="border-radius: 0px;">
      <router-link :to="'/users/' + commentData.user.id">
        {{ commentData.user.name }}
      </router-link>
      <!-- <v-tooltip v-if="comment_list[4]" bottom>
        <template #activator="{ on, attrs }">
          <v-icon style="margin-top: -2px;" :color="comment_list[6]" v-bind="attrs" size="20" v-on="on">
            mdi-check-decagram-outline
          </v-icon>
        </template>
        <span>{{ comment_list[5] }}</span>
      </v-tooltip>
      <v-tooltip v-if="comment_list[7]" bottom>
        <template #activator="{ on, attrs }">
          <v-icon style="margin-top: -2px;" color="rgba(255, 87, 34)" v-bind="attrs" size="20" v-on="on">
            mdi-comment-remove-outline
          </v-icon>
        </template>
        <span>剩余 {{ comment_list[8] }} 天解禁</span>
      </v-tooltip> -->
      <span style="margin-left: 8px;" class="grey-text">{{ new Date(commentData.time * 1000).format("yyyy-MM-dd hh:mm:ss") }}</span>
      <span style="margin-left: 8px;" class="grey-text">{{ commentData.region }}</span>
      <!-- <v-spacer /> -->
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
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-reply-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>回复</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-link-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>复制链接</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>编辑</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-eye-off-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>隐藏</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-delete-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>删除</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
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
  methods: {
  }
}
</script>
