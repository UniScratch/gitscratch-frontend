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
      <v-btn-toggle
        v-model="toggleTab"
        group
        mandatory
        color="primary"
      >
        <v-btn style="border-radius: 24px;">
          发现
        </v-btn>
        <v-btn style="border-radius: 24px;">
          话题
        </v-btn>
        <v-btn style="border-radius: 24px;">
          趋势
        </v-btn>
        <v-btn style="border-radius: 24px;">
          精选
        </v-btn>
        <v-btn style="border-radius: 24px;">
          事件
        </v-btn>
        <v-btn style="border-radius: 24px;">
          赞助
        </v-btn>
      </v-btn-toggle>
      <v-window
        v-model="toggleTab"
        style="display: block; padding: 16px;"
      >
        <!-- 发现 -->
        <v-window-item>
          这是发现
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
export default {
  data: () => ({
    starredTopics: 0,
    starredProjects: 0,
    toggleTab: 0
  }),
  head () {
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
  }
}
</script>
