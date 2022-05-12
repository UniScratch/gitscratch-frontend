<template>
    <v-container>
        <p class="text-h4">设置</p>

        <p class="text-h5">颜色主题</p>
        <v-radio-group
            v-model="settings_theme"
            row
            v-on:change="toggle_theme"
        >
            <v-radio
                label="浅色主题"
                value="light"
            ></v-radio>
            <v-radio
                label="深色主题"
                value="dark"
            ></v-radio>
        </v-radio-group>
    </v-container>
</template>

<script>
export default {
    name: "Settings",
    data: () => ({
        settings_theme: "light",
    }),
    methods: {
        toggle_theme: function () {
            if (this.settings_theme == "light") {
                this.$vuetify.theme.dark = false;
            } else {
                this.$vuetify.theme.dark = true;
            }
        },
    },
};
</script>
