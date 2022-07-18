<template>
  <v-app-bar app elevation="0">
    <v-menu offset-y transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-btn icon class="hidden-sm-and-up" v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card
        class="cardblur"
      >
        <v-list
          min-width="200"
          color="transparent"
        >
          <v-list-item v-ripple to="/explore">
            <v-list-item-title>发现</v-list-item-title>
          </v-list-item>
          <v-list-item v-ripple to="/about">
            <v-list-item-title>关于</v-list-item-title>
          </v-list-item>
          <v-list-item v-ripple to="/help">
            <v-list-item-title>帮助</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn icon class="ml-2" to="/" color="transparent">
      <img v-if="!$vuetify.theme.dark" src="/GitScratch-icon-black.svg" width="36">
      <img v-if="$vuetify.theme.dark" src="/GitScratch-icon-white.svg" width="36">
    </v-btn>

    <!-- <v-app-bar-title class="pl-1 hidden-sm-and-down">GitScratch</v-app-bar-title> -->
    <v-text-field
      v-model="searchKeyword"
      prepend-inner-icon="mdi-magnify"
      label="搜索"
      autocomplete="off"
      class="mx-2 mx-md-4 hidden-xs-only"
      dense
      hide-details
      outlined
      single-line
      style="max-width: 250px; border-radius: 20px !important;"
      @keyup.enter="search"
    />
    <v-btn text class="hidden-xs-only" to="/explore" rounded>
      发现
    </v-btn>
    <v-btn text class="hidden-xs-only" to="/about" rounded>
      关于
    </v-btn>
    <v-btn text class="hidden-xs-only" to="/help" rounded>
      帮助
    </v-btn>

    <v-spacer />

    <template v-if="!token">
      <v-btn text to="/auth/login" rounded>
        登录
      </v-btn>
      <v-btn outlined to="/auth/register" rounded>
        注册
      </v-btn>
    </template>
    <template v-else>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" to="/notifications" v-on="on">
            <v-icon>mdi-bell-outline</v-icon>
          </v-btn>
        </template>
        <span>通知</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" to="/projects/1/editor" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>创建</span>
      </v-tooltip>
      <v-menu
        bottom
        offset-y
        transition="slide-y-transition"
      >
        <template #activator="{ on, attrs }">
          <v-btn icon>
            <v-avatar
              size="40px"
              v-bind="attrs"
              ripple
              v-on="on"
            >
              <v-img
                alt="Avatar"
                :src="userInfo.avatar"
              />
            </v-avatar>
          </v-btn>
        </template>
        <v-card class="cardblur">
          <v-list color="transparent">
            <v-list-item>
              <v-avatar
                size="48px"
                ripple
              >
                <v-img
                  alt="Avatar"
                  :src="userInfo.avatar"
                />
              </v-avatar>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ userInfo.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ userInfo.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-container v-if="isMute" class="appbar-alert" style="background-color: rgba(251,140,0);">
              <v-icon color="white" size="20">
                mdi-alert-minus-outline
              </v-icon>&nbsp;&nbsp;
              你的帐户已被禁言，将在 {{ muteRemainDate }} 天后解除。
            </v-container>
            <v-container v-if="isBanned && !isPermanentlyBanned" class="appbar-alert" style="background-color: rgba(255, 109, 109);">
              <v-icon color="white" size="20">
                mdi-alert-octagon-outline
              </v-icon>&nbsp;&nbsp;
              你的帐户已被封禁，将在 {{ banRemainDate }} 天后解除。<a style="caret-color: white !important;" class="text-color" href="/help/rules">了解更多</a>
            </v-container>
            <v-container v-if="isBanned && isPermanentlyBanned" class="appbar-alert" style="background-color: rgba(255, 109, 109);">
              <v-icon color="white" size="20">
                mdi-delete-alert-outline
              </v-icon>&nbsp;&nbsp;
              你的帐户已被永久封禁，如有疑义，请联系社区管理员。
            </v-container>
            <v-container v-if="isBanned && isPermanentlyBanned" class="appbar-alert" style="background-color: rgba(255, 82, 82);">
              <v-icon color="white" size="20">
                mdi-car-tire-alert
              </v-icon>&nbsp;&nbsp;
              你的账户将在 {{ deletingRemainHours }} 小时后被删除，如有疑义，请尽快联系管理员。
            </v-container>
          </v-list>
          <v-divider style="margin-top: -8px" />
          <v-list
            dense
            color="transparent"
          >
            <v-list-item link :to="'/users/' + userInfo.name">
              <v-list-item-icon>
                <v-icon>mdi-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>主页</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/users/' + userInfo.name + '/projects'">
              <v-list-item-icon>
                <v-icon>mdi-book-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>作品</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/users/' + userInfo.name + '/organizations'">
              <v-list-item-icon>
                <v-icon>mdi-account-group-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>组织</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/users/' + userInfo.name + '/stars'">
              <v-list-item-icon>
                <v-icon>mdi-star-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>星标</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/settings">
              <v-list-item-icon>
                <v-icon>mdi-cog-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>设置</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <template v-if="isAdmin">
            <v-divider />
            <v-list
              dense
              color="transparent"
            >
              <v-list-item link to="/admin">
                <v-list-item-icon>
                  <v-icon>mdi-view-dashboard-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>管理面板</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </template>
          <v-divider />
          <v-list
            dense
            color="transparent"
          >
            <v-list-item link @click="logout()">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>注销</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </template>
    <div class="mr-2" />
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    isMute: true,
    muteRemainDate: -1,
    isBanned: true,
    banRemainDate: -1,
    isPermanentlyBanned: true,
    isDeleting: true,
    deletingRemainHours: -72,
    isAdmin: true,
    searchKeyword: ''
  }),

  computed: {
    token () {
      return this.$store.state.auth.token
    },
    userInfo () {
      return this.$store.state.auth.userInfo
    }
  },
  methods: {
    toggle_theme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    logout () {
      this.$store.commit('auth/logout')
      this.$router.push('/')
    },
    search () {
      if (this.searchKeyword.trim().length > 0) {
        this.$router.push('/explore?q=' + this.searchKeyword)
      }
    }
  }
}
</script>
<style>
  .v-icon-alert{
    font-size: 19px !important;
  }
  .appbar-alert{
    width: 100%;
    color: white;
    font-size: 12px !important
  }
</style>
