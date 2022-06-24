<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="7" md="8">
        <v-card>
          <v-card-title class="text-h5">
            Default Project
          </v-card-title>
          <v-card-text>
            <v-icon>mdi-eye-outline</v-icon>
            345
            <v-icon>mdi-calendar-outline</v-icon>
            2022/5/28 14:39:58
            <v-icon>mdi-update</v-icon>
            <nuxt-link to="/projects/1/commit/170ed1c/" class="text-color">
              170ed1c
            </nuxt-link>
            <br>

            <v-responsive v-if="!loadPlayer" :aspect-ratio="4/3" content-class="rounded">
              <v-img
                lazy-src="/64025bdca5db4938f65597e3682fddcf.svg"
                src="/64025bdca5db4938f65597e3682fddcf.svg"
                style="width:100%;height:100%"
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    />
                  </v-row>
                </template>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-btn v-if="!loadPlayer" x-large @click="loadPlayer = true">
                    <v-icon>
                      mdi-reload
                    </v-icon>
                    加载播放器
                  </v-btn>
                  <v-btn v-if="loadPlayer" x-large>
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    />
                  </v-btn>
                </v-row>
              </v-img>
            </v-responsive>
            <LazyProjectPlayer v-if="loadPlayer" />
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
const marked = require('marked')

export default {
  name: 'UserProfile',
  data: () => ({
    loadPlayer: false,
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
