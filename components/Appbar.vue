<template>
  <v-app-bar app elevation="0">
    <v-menu offset-y transition="slide-y-transition">
      <template #activator="{ on, attrs }">
        <v-btn icon class="hidden-sm-and-up" v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card class="cardblur">
        <v-list min-width="200" color="transparent">
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
      <img
        v-if="!$vuetify.theme.dark"
        src="/GitScratch-icon-black.svg"
        width="36"
      >
      <img
        v-if="$vuetify.theme.dark"
        src="/GitScratch-icon-white.svg"
        width="36"
      >
    </v-btn>
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
      style="margin-top: unset !important;max-width: 250px; border-radius: 20px !important"
      @keyup.enter="search"
    />
    <div class="hidden-xs-only">
      <v-btn text to="/explore" rounded>
        发现
      </v-btn>
      <v-btn text to="/about" rounded>
        关于
      </v-btn>
      <v-btn text to="/help" rounded>
        帮助
      </v-btn>
    </div>

    <v-spacer />

    <template v-if="!$auth.loggedIn">
      <v-btn text to="/auth/login" rounded>
        登录
      </v-btn>
      <v-btn outlined to="/auth/register" rounded>
        注册
      </v-btn>
    </template>
    <template v-if="$auth.loggedIn">
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
          <v-btn icon v-bind="attrs" to="/projects/editor" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>创建</span>
      </v-tooltip>
      <v-menu bottom offset-y transition="slide-y-transition">
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <Avatar :data="$auth.user" size="40" />
          </v-btn>
        </template>
        <v-card class="cardblur">
          <v-list color="transparent">
            <v-list-item>
              <Avatar :data="$auth.user" size="48" />
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ $auth.user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{
                    $auth.user.email
                  }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-container
              v-if="$auth.user.muted !== 0"
              class="appbar-alert"
              style="background-color: rgba(251, 140, 0)"
            >
              <v-icon color="white" size="20">
                mdi-alert-minus-outline
              </v-icon>&nbsp;&nbsp; 你的帐户已被禁言，将在
              {{ $auth.user.muted }} 天后解除。
            </v-container>
            <v-container
              v-if="$auth.user.banned !== 0"
              class="appbar-alert"
              style="background-color: rgba(255, 109, 109)"
            >
              <v-icon color="white" size="20">
                mdi-alert-octagon-outline
              </v-icon>&nbsp;&nbsp; 你的帐户已被封禁，将在
              {{ $auth.user.banned }} 天后解除。<a
                style="caret-color: white !important"
                class="text-color"
                href="/help/rules"
              >了解更多</a>
            </v-container>
          </v-list>
          <v-divider style="margin-top: -8px" />
          <v-list dense color="transparent">
            <v-list-item link :to="'/users/' + $auth.user.id">
              <v-list-item-icon>
                <v-icon>mdi-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>主页</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/users/' + $auth.user.id + '/projects'">
              <v-list-item-icon>
                <v-icon>mdi-book-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>作品</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/users/' + $auth.user.id + '/organizations'">
              <v-list-item-icon>
                <v-icon>mdi-account-group-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>组织</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="'/users/' + $auth.user.id + '/stars'">
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
            <v-list dense color="transparent">
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
          <v-list dense color="transparent">
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
  mounted () {

  },
  methods: {
    toggle_theme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    async logout () {
      await this.$auth.logout(/* .... */)
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
.v-icon-alert {
  font-size: 19px !important;
}
.appbar-alert {
  width: 100%;
  color: white;
  font-size: 12px !important;
}
.v-menu__content {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 90%;
}
</style>
