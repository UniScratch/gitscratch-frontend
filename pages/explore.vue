<template>
  <v-row>
    <v-col cols="12" xl="2" md="3" sm="4" style="padding-right: 20px;">
      <div v-if="token">
        <div style="text-align: center;">
          <v-avatar style="width: 100%; height: auto; max-width: 100px;">
            <v-img :src="userInfo.avatar" />
          </v-avatar>
          <br><br>
          <p class="text-h5">
            {{ userInfo.name }}
          </p>
        </div>

        <v-list>
          <v-list-item-group>
            <v-list-item link :to="'/users/' + userInfo.name + '/stars/topics'">
              <v-list-item-content>
                <v-list-item-title>{{ starredTopics }} 个星标话题</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/users/' + userInfo.name + '/stars'">
              <v-list-item-content>
                <v-list-item-title>{{ starredProjects }} 个星标作品</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-col>
    <v-divider vertical class="hidden-xs-only" />
    <v-col cols="12" xl="10" md="9" sm="8" style="padding-left: 20px;">
      <v-tabs
        v-model="toggleTab"
        group
        mandatory
        color="primary"
      >
        <v-tab>搜索</v-tab>
        <v-tab>发现</v-tab>
        <v-tab>话题</v-tab>
        <v-tab>趋势</v-tab>
        <v-tab>精选</v-tab>
        <v-tab>事件</v-tab>
        <v-tab>赞助</v-tab>
      </v-tabs>
      <v-window
        v-model="toggleTab"
        style="display: block; padding: 16px;"
      >
        <!-- 搜索 -->
        <v-window-item>
          <div class="d-flex">
            <v-text-field
              v-model="searchKeyword"
              label="搜索"
              style="border-radius: 4px;"
              prepend-icon="mdi-magnify"
              @keyup.enter="search"
            />
            <v-btn rounded depressed color="primary" @click="search">
              搜索
            </v-btn>
          </div>
        </v-window-item>
        <!-- 发现 -->
        <v-window-item>
          <p v-if="token" class="text-h6">
            以下是我们根据你的兴趣找到的内容……
          </p>
          <p v-else>
            以下是最近 GitScratch 较热门的内容……
          </p>
          <ProjectInformationCard />
        </v-window-item>
        <!-- 话题 -->
        <v-window-item>
          这是话题
        </v-window-item>
        <!-- 趋势 -->
        <v-window-item>
          这是趋势
        </v-window-item>
        <!-- 精选 -->
        <v-window-item>
          这是精选
        </v-window-item>
        <!-- 事件 -->
        <v-window-item>
          这是事件
        </v-window-item>
        <!-- 赞助 -->
        <v-window-item>
          这是赞助
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>
<script>
import ProjectInformationCard from '../components/ProjectInformationCard.vue'
export default {
  components: {
    ProjectInformationCard
  },
  data: () => ({
    starredTopics: 0,
    starredProjects: 0,
    toggleTab: 1,
    searchKeyword: ''
  }),
  head () {
    this.toggleTab = this.$route.query.q ? 0 : 1
    if (this.$route.query.q) {
      this.searchKeyword = this.$route.query.q
    }
    return {
      title: '发现'
    }
  },
  computed: {
    token () {
      return this.$store.state.auth.token
    },
    userInfo () {
      return this.$store.state.auth.userInfo
    }
  },
  methods: {
    search () {
      this.$router.push('/explore?q=' + this.searchKeyword)
    }
  }
}
</script>
