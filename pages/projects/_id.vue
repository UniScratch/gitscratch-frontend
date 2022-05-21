<template>
  <v-container style="max-width: 100vw;">
    <v-row>
      <v-col cols="12" xl="8" md="8" sm="12">
        <v-card>
          <v-card-text>
            <p class="text-h4 text--primary">
              Default Project
            </p>
            <ProjectPlayer />
            <br>
            <ProjectData />
          </v-card-text>
        </v-card>
        <br>
        <v-divider />
        <br>
        <CommentForm />
        <v-divider style="margin: 8px 0;" />
        <p class="text-h5">
          留言
        </p>
        <Comment
          content="Supports Markdown  "
        />
      </v-col>
      <v-col cols="12" xl="4" md="4" sm="12">
        <ProjectUserInfo />
        <br>
        <ProjectDesc />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import ProjectCard from '/src/components/ProjectCard.vue'
import Comment from '~/components/Comment.vue'
import CommentForm from '~/components/CommentForm.vue'
import ProjectPlayer from '~/components/ProjectPlayer.vue'
import ProjectUserInfo from '~/components/ProjectUserInfo.vue'
import ProjectDesc from '~/components/ProjectDesc.vue'
import ProjectData from '~/components/ProjectData.vue'
const marked = require('marked')

export default {
  name: 'UserProfile',
  components: {
    Comment,
    CommentForm,
    ProjectPlayer,
    ProjectUserInfo,
    ProjectDesc,
    ProjectData
  },
  data: () => ({
    bio: '啊，好舒服',
    avatar: '/GitScratch-icon-background-blue.svg',
    README: `
# 啊，好舒服

昨天晚上跟 @作者 床♂战太爽了`
  }),
  methods: {
    renderMd () {
      return marked.parse(this.README)
    }
  }
}
</script>
