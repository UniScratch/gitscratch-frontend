<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="7" md="8">
        <v-card>
          <v-card-text>
            <p class="text-h4 text--primary">
              Default Project
            </p>
            <v-icon>mdi-eye-outline</v-icon>
            345
            <v-icon>mdi-calendar-outline</v-icon>
            2022/5/28 14:39:58
            <v-icon>mdi-update</v-icon>
            <nuxt-link to="/projects/1/commit/170ed1c/">
            170ed1c
            </nuxt-link>
            <ProjectPlayer />
            <br>
            <ProjectData />
          </v-card-text>
        </v-card>

        <div class="hidden-sm-and-down">
          <v-divider style="margin: 16px 0;" />
          <CommentForm />
          <v-divider style="margin: 8px 0;" />
          <p class="text-h5">
            留言
          </p>
          <Comment
            content="Supports Markdown  "
          />
        </div>
      </v-col>
      <v-col cols="12" xl="5" md="4">
        <ProjectUserInfo />
        <br>
        <ProjectDesc />
      </v-col>
    </v-row>
    <div class="hidden-md-and-up">
      <v-divider style="margin: 16px 0;" />
      <CommentForm />
      <v-divider style="margin: 8px 0;" />
      <p class="text-h5">
        留言
      </p>
      <Comment
        content="Supports Markdown  "
      />
    </div>
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
    project_title: 'Default Project'
  }),
  head () {
    return {
      title: this.project_title
    }
  },
  methods: {
    renderMd () {
      return marked.parse(this.README)
    }
  }
}
</script>
