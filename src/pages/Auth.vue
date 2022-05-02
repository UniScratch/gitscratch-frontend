<template>
    <v-container class="d-flex justify-center">
        <v-card style="width: 400px; padding: 16px;" elevation="0">
            <div style="text-align: center;">
                <img v-if="!$vuetify.theme.dark" src="/GitScratch-icon-black.svg" width="64" />
                <img v-if="$vuetify.theme.dark" src="/GitScratch-icon-white.svg" width="64" />                    
            </div>
            <!-- <v-card-title v-text="(btn_toggle_value == 0 ? '登录' : '注册') + ' GitScratch 帐号'" style="display: block; text-align: center;" class="text-h5"></v-card-title> -->
            <v-card-title style="display: block; text-align: center;" class="text-h5">登录 GitScratch 帐号</v-card-title>

            <v-card-text>
                <v-text-field
                    label="用户名"
                    outlined
                    v-model="user_name"
                    type="text"
                    style="border-radius: 4px;"
                ></v-text-field>
                <v-text-field
                    label="密码"
                    outlined
                    v-model="user_password"
                    type="password"
                    style="border-radius: 4px;"
                ></v-text-field>
                <!-- <transition name="fade-transition">
                    <v-text-field
                        label="再次输入密码"
                        outlined
                        v-model="register_user_password_confirm"
                        v-if="btn_toggle_value == 1"
                        type="password"
                        style="border-radius: 4px;"
                    ></v-text-field>
                </transition>
                <transition name="fade-transition">
                    <v-text-field
                        label="电子邮箱"
                        outlined
                        v-model="register_user_email"
                        v-if="btn_toggle_value == 1"
                        type="email"
                        style="border-radius: 4px;"
                    ></v-text-field>
                </transition> -->
            </v-card-text>
            <div style="padding: 0 16px;">
                <!-- <v-btn-toggle v-model="btn_toggle_value" mandatory style="border-radius: 4px;">
                    <v-btn text>登录</v-btn>
                    <v-btn text>注册</v-btn>
                </v-btn-toggle>
                <v-btn color="accent" v-text="btn_toggle_value == 0 ? '登录' : '注册'" style="border-radius: 4px;" depressed block></v-btn> -->
                <v-btn color="accent" style="border-radius: 4px;" depressed block>登录</v-btn>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Auth',
    data: () => ({
        // btn_toggle_value: 0,
        user_name: '',
        user_password: '',
        register_user_name: '',
        register_user_password: '',
        register_user_password_confirm: '',
        register_user_email: '',
    }),
};
</script>
