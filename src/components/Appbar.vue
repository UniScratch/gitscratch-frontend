<template>
    <v-app-bar app>
        <v-menu offset-y transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="hidden-sm-and-up" v-bind="attrs" v-on="on">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </template>
            <v-list min-width="200">
                <v-list-item>
                    <router-link to="/explore">
                        <v-list-item-title>发现</v-list-item-title>
                    </router-link>

                </v-list-item>
                <v-list-item>
                    <router-link to="/about">
                        <v-list-item-title>关于</v-list-item-title>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn icon href="/" class="ml-2">
            <img v-if="!dark_theme" src="/GitScratch-icon-black.svg" width="36" />
            <img v-if="dark_theme" src="/GitScratch-icon-white.svg" width="36" />
        </v-btn>
        <v-app-bar-title class="pl-1 hidden-sm-and-down">GitScratch</v-app-bar-title>
        <v-text-field prepend-inner-icon="mdi-magnify" label="搜索" autocomplete="off" class="mx-2 mx-md-4 hidden-xs-only"
            dense hide-details outlined single-line style="max-width: 250px;"></v-text-field>
        <v-btn text href="/explore" class="hidden-xs-only">发现</v-btn>
        <v-btn text href="/about" class="hidden-xs-only">关于</v-btn>

        <v-spacer></v-spacer>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon href="/scratch-gui" v-bind="attrs" v-on="on">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
            <span>创建</span>
        </v-tooltip>
        <v-btn text href="/auth">登录 / 注册</v-btn>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on:click="toggle_theme" v-bind="attrs" v-on="on">
                    <v-icon>mdi-brightness-6</v-icon>
                </v-btn>
            </template>
            <span>切换主题</span>
        </v-tooltip>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Appbar',

    data: () => ({
        dark_theme: false,
    }),

    methods: {
        toggle_theme: function () {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            this.dark_theme = !this.dark_theme;
        },
    },
}

</script>
