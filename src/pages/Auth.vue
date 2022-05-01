<template>
    <v-app>
        <v-container class="d-flex justify-center">
            <center>
                <v-btn icon class="ml-2" v-bind="attrs" v-on="on" to="/" color="transparent">
                    <img v-if="!$vuetify.theme.dark" src="/GitScratch-icon-black.svg" width="36" />
                    <img v-if="$vuetify.theme.dark" src="/GitScratch-icon-white.svg" width="36" />
                    <p>登录，或注册</p>
                </v-btn>
            </center>
            <v-card style="width: 500px; padding: 16px;" elevation="0">
                <v-card-title v-text="btn_toggle_value == 0 ? '登录' : '注册'"></v-card-title>

                <v-card-text>
                    <v-text-field
                        label="用户名"
                        outlined
                        v-model="user_name"
                        v-if="btn_toggle_value == 0"
                        type="text"
                        style="border-radius: 4px;"
                    ></v-text-field>
                    <v-text-field
                        label="密码"
                        outlined
                        v-model="user_password"
                        v-if="btn_toggle_value == 0"
                        type="password"
                        style="border-radius: 4px;"
                    ></v-text-field>
                    <v-text-field
                        label="用户名"
                        outlined
                        v-model="user_name"
                        v-if="btn_toggle_value == 1"
                        type="text"
                        style="border-radius: 4px;"
                    ></v-text-field>
                    <v-text-field
                        label="密码"
                        outlined
                        v-model="user_password"
                        v-if="btn_toggle_value == 1"
                        type="password"
                        style="border-radius: 4px;"
                    ></v-text-field>
                    <v-text-field
                        label="再次输入密码"
                        outlined
                        v-model="register_user_password_confirm"
                        v-if="btn_toggle_value == 1"
                        type="password"
                        style="border-radius: 4px;"
                    ></v-text-field>
                    <v-text-field
                        label="电子邮箱"
                        outlined
                        v-model="register_user_email"
                        v-if="btn_toggle_value == 1"
                        type="email"
                        style="border-radius: 4px;"
                    ></v-text-field>
                </v-card-text>

                <v-card-actions style="padding: 0 16px 8px 16px;">
                    <v-btn-toggle v-model="btn_toggle_value" mandatory style="border-radius: 4px;">
                        <v-btn text>登录</v-btn>
                        <v-btn text>注册</v-btn>
                    </v-btn-toggle>

                    <v-spacer></v-spacer>

                    <v-btn color="accent" v-text="btn_toggle_value == 0 ? '登录' : '注册'" style="border-radius: 4px;" depressed></v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'Auth',
    data: () => ({
        btn_toggle_value: 0,
        user_name: '',
        user_password: '',
        register_user_name: '',
        register_user_password: '',
        register_user_password_confirm: '',
        register_user_email: '',
    }),
};
</script>
