<template>
    <v-app-bar app>
        <v-menu offset-y transition="scale-transition" :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="hidden-sm-and-up" v-bind="attrs" v-on="on">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </template>
            <v-list min-width="200">
                <router-link to="/explore">
                    <v-list-item v-ripple>
                        <v-list-item-title>发现</v-list-item-title>
                    </v-list-item>
                </router-link>
                <router-link to="/about">
                    <v-list-item v-ripple>
                        <v-list-item-title>关于</v-list-item-title>
                    </v-list-item>                    
                </router-link>
            </v-list>
        </v-menu>
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <router-link to="/">
                    <v-btn icon class="ml-2" v-bind="attrs" v-on="on">
                        <img v-if="!dark_theme" src="/GitScratch-icon-black.svg" width="36" />
                        <img v-if="dark_theme" src="/GitScratch-icon-white.svg" width="36" />
                    </v-btn>
                </router-link>
            </template>
            <span>GitScratch</span>
        </v-tooltip>

        <!-- <v-app-bar-title class="pl-1 hidden-sm-and-down">GitScratch</v-app-bar-title> -->
        <v-text-field prepend-inner-icon="mdi-magnify" label="搜索" autocomplete="off" class="mx-2 mx-md-4 hidden-xs-only"
            dense hide-details outlined single-line style="max-width: 250px;"></v-text-field>
        <router-link to="/explore">
            <v-btn text class="hidden-xs-only">发现</v-btn>
        </router-link>
        <router-link to="/about">
            <v-btn text class="hidden-xs-only">关于</v-btn>
        </router-link>

        <v-spacer></v-spacer>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <router-link to="/scratch-gui" v-bind="attrs" v-on="on">
                    <v-btn icon>
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </router-link>
            </template>
            <span>创建</span>
        </v-tooltip>
        <router-link to="/auth">
            <v-btn text>登录 / 注册</v-btn>
        </router-link>
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
