<template>
    <v-app-bar app>
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
        <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon href="/explore" v-bind="attrs" v-on="on">
                    <v-icon>mdi-compass-outline</v-icon>
                </v-btn>
            </template>
            <span>发现</span>
        </v-tooltip> -->
        <v-btn text href="/explore">发现</v-btn>
        <v-btn text href="/about">关于</v-btn>

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
