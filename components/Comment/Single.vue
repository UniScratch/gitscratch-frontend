<template>
  <v-card style="padding: 16px;margin-bottom: 15px;" class="d-flex">
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
      <v-divider style="margin: 8px 0;" />
      <MarkdownRender :content="commentData.comment" />
    </div>
  </v-card>
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
