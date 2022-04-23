<template>
    <v-app>
        <v-main>
            <Appbar />
            <v-container class="fill-height justify-center">
                <v-card style="width: 500px; padding: 16px;">
                    <v-card-title v-text="btn_toggle_value == 0 ? '登录' : '注册'"></v-card-title>

                    <v-card-text>
                        <v-text-field
                            label="用户名"
                            outlined
                            v-model="login_user_name"
                            v-if="btn_toggle_value == 0"
                            type="text"
                            style="border-radius: 4px;"
                        ></v-text-field>
                        <v-text-field
                            label="密码"
                            outlined
                            v-model="login_user_password"
                            v-if="btn_toggle_value == 0"
                            type="password"
                            style="border-radius: 4px;"
                        ></v-text-field>
                        <v-text-field
                            label="用户名"
                            outlined
                            v-model="register_user_name"
                            v-if="btn_toggle_value == 1"
                            type="text"
                            style="border-radius: 4px;"
                        ></v-text-field>
                        <v-text-field
                            label="密码"
                            outlined
                            v-model="register_user_password"
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

                        <v-btn color="accent" v-text="btn_toggle_value == 0 ? '登录' : '注册'" tile></v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Appbar from '/src/components/Appbar.vue'

export default {
    name: 'Auth',

    components: {
        Appbar,
    },

    data: () => ({
        btn_toggle_value: 0,
        login_user_name: '',
        login_user_password: '',
        register_user_name: '',
        register_user_password: '',
        register_user_password_confirm: '',
        register_user_email: '',
    }),
};
</script>
