<template>
  <v-app-bar app color="primary">
    <v-btn icon href="/" class="ml-2">
      <img v-if="!dark_theme" src="/GitScratch-icon-black.svg" width="36" />
      <img v-if="dark_theme" src="/GitScratch-icon-white.svg" width="36" />
    </v-btn>
    <v-app-bar-title class="pl-1">GitScratch</v-app-bar-title>
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      label="搜索"
      autocomplete="off"
      class="mx-2 mx-md-4"
      dense
      hide-details
      outlined
      single-line
      style="max-width: 250px;"
    ></v-text-field>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon href="/" v-bind="attrs" v-on="on">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
      </template>
      <span>首页</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon href="/explore" v-bind="attrs" v-on="on">
          <v-icon>mdi-compass-outline</v-icon>
        </v-btn>
      </template>
      <span>发现</span>
    </v-tooltip>

    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon href="/project/editor" v-bind="attrs" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>创建</span>
    </v-tooltip>
    <v-btn text href="/auth">登录 / 注册</v-btn>
    <!-- <v-dialog v-model="login_dialog" width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="transparent"
          style="margin-right: 8px;"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >登录</v-btn>
      </template>
      <v-card>
        <v-card-title>登录</v-card-title>
        <v-card-text>
          <v-text-field label="用户名" outlined></v-text-field>
          <v-text-field label="密码" outlined type="password"></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue"
            text
            elevation="0"
            v-on:click="login_dialog = false; register_dialog = true;"
          >没有帐号</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue" dark elevation="0">登录</v-btn>
          <v-btn color="blue" text elevation="0" v-on:click="login_dialog = false;">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="register_dialog" width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue"
          dark
          style="margin-right: 8px;"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >注册</v-btn>
      </template>
      <v-card>
        <v-card-title>注册</v-card-title>
        <v-card-text>
          <v-text-field label="用户名" outlined></v-text-field>
          <v-text-field label="密码" outlined type="password"></v-text-field>
          <v-text-field label="确认密码" outlined type="password"></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue"
            text
            elevation="0"
            v-on:click="register_dialog = false; login_dialog = true;"
          >已有帐号</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue" dark elevation="0">注册</v-btn>
          <v-btn color="blue" text elevation="0" v-on:click="register_dialog = false;">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>-->
    <v-btn icon v-on:click="toggle_theme">
      <v-icon>mdi-brightness-6</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Appbar',

  data: () => ({
    dark_theme: false,
    // login_dialog: false,
    // register_dialog: false,
  }),

  methods: {
    toggle_theme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.dark_theme = !this.dark_theme;
    },
  },
}

</script>
