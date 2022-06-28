<template>
  <v-card style="padding: 16px;border-radius: 10px !important;" class="d-flex">
    <v-avatar>
      <v-img :src="comment_author_avatar" />
    </v-avatar>
    <v-divider vertical style="margin: 0 8px;" />
    <div class="flex-grow-1 overflow-auto" style="border-radius: 0px;">
      <router-link :to="'/users/' + comment_author_name">
        {{ comment_author_name }}
      </router-link>
      <v-tooltip v-if="comment_author_is_verified" bottom>
        <template #activator="{ on, attrs }">
          <v-icon style="margin-top: -2px;" :color="comment_author_verify_color" v-bind="attrs" size="20" v-on="on">
            mdi-check-decagram-outline
          </v-icon>
        </template>
        <span>{{ comment_author_verify_categories }}</span>
      </v-tooltip>
      <span style="margin-left: 8px;" class="grey-text">{{ comment_time }}</span>
      <v-divider style="margin: 8px 0;" />
      <MarkdownRender />
    </div>
  </v-card>
</template>
<script>
import MarkdownRender from './MarkdownRender.vue'
const date = new Date()
const dateStr = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.toLocaleTimeString()
export default {
  components: {
    MarkdownRender
  },
  data: () => ({
    comment_author_avatar: '/GitScratch-icon-background-blue.svg',
    comment_author_name: '作者',
    comment_time: dateStr,
    comment_author_is_verified: true,
    comment_author_verify_categories: '社区官方认证',
    comment_author_verify_color: 'rgba(33,150,243)'
  }),
  methods: {
  }
}
</script>
