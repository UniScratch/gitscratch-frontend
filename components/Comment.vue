<template>
  <v-card style="padding: 16px;" class="d-flex">
    <v-avatar>
      <v-img :src="comment_author_avatar" />
    </v-avatar>
    <v-divider vertical style="margin: 0 8px;" />
    <div class="flex-grow-1">
      <router-link :to="'/users/' + comment_author_name">
        {{ comment_author_name }}
      </router-link>
      <span style="margin-left: 8px;" class="grey-text">{{ comment_time }}</span>
      <v-divider style="margin: 8px 0;" />
      <div v-html="renderMd()" />
    </div>
  </v-card>
</template>
<script>
const marked = require('marked')
const date = new Date()
const dateStr = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + date.toLocaleTimeString()
export default {
  name: 'Comment',
  props: ['content'],
  data: () => ({
    comment_author_avatar: '/GitScratch-icon-background-blue.svg',
    comment_author_name: '作者',
    comment_time: dateStr
  }),
  methods: {
    renderMd () {
      return marked.parse(this.content)
    }
  }
}
</script>
