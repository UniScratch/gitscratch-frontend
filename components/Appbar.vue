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
        </v-list>
      </v-card>
    </v-menu>
    <v-btn icon class="ml-2" to="/" color="transparent">
      <img v-if="!$vuetify.theme.dark" src="/GitScratch-icon-black.svg" width="36">
      <img v-if="$vuetify.theme.dark" src="/GitScratch-icon-white.svg" width="36">
    </v-btn>

    <!-- <v-app-bar-title class="pl-1 hidden-sm-and-down">GitScratch</v-app-bar-title> -->
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      label="搜索"
      autocomplete="off"
      class="mx-2 mx-md-4 hidden-xs-only"
      dense
      hide-details
      outlined
      single-line
      style="max-width: 250px;"
    />
    <v-btn text class="hidden-xs-only" to="/explore">
      发现
    </v-btn>
    <v-btn text class="hidden-xs-only" to="/about">
      关于
    </v-btn>

    <v-spacer />
    <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on:click="toggle_theme" v-bind="attrs" v-on="on">
                    <v-icon>mdi-brightness-6</v-icon>
                </v-btn>
            </template>
            <span>切换主题</span>
        </v-tooltip> -->
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" to="/create" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>创建</span>
    </v-tooltip>
    <template v-if="token == ''">
      <v-btn text to="/auth/login">
        登录
      </v-btn>
      <v-btn outlined to="/auth/register">
        注册
      </v-btn>
    </template>
    <template v-else>
      <v-menu
        bottom
        offset-y
        transition="slide-y-transition"
      >
        <template #activator="{ on, attrs }">
          <v-avatar
            size="48px"
            v-bind="attrs"
            ripple
            v-on="on"
          >
            <v-img
              alt="Avatar"
              :src="userInfo.avatar"
            />
          </v-avatar>
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

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ userInfo.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ userInfo.email }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-list
            dense
            color="transparent"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>主页</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-book-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>作品</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-group-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>组织</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
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
          <v-divider />
          <v-list
            dense
            color="transparent"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>登出</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <!-- <v-btn icon v-on:click="toggle_theme"><v-icon>mdi-brightness-6</v-icon></v-btn> -->
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Appbar',

  data: () => ({
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
    }
  }
}

</script>
