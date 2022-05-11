<template>
    <v-container class="d-flex justify-center">
        <v-card style="width: 400px; padding: 16px;" elevation="0" color="transparent">
            <v-lazy style="text-align: center;" transition="fade-transition" min-height="71">
                <img src="/GitScratch-icon-background-blue.svg" width="64" />
            </v-lazy>
            <v-card-title style="display: block; text-align: center;" class="text-h5">登录 GitScratch 帐号</v-card-title>

            <v-card-text>
                <v-form ref="form" lazy-validation v-model="valid">
                    <v-text-field
                        label="电子邮箱"
                        v-model="user_email"
                        style="border-radius: 4px;"
                        :rules="emailRules"
                    ></v-text-field>
                    <v-text-field
                        label="密码"
                        v-model="user_password"
                        type="password"
                        style="border-radius: 4px;"
                        :rules="passwordRules"
                    ></v-text-field>
                    <v-btn color="accent" depressed block :disabled="!valid" @click="login">登录</v-btn>
                </v-form>
            </v-card-text>
            <div style="padding: 0 16px;">
                <router-link to="/auth/register">注册帐号</router-link>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Auth',
    data: () => ({
        valid: true,
        user_email: "",
        user_password: "",
        emailRules: [
            v => !!v || "电子邮箱不能为空",
            v => v && /.+@.+\..+/.test(v) || "电子邮箱无效",
            v => v.length <= 2 || "电子邮箱不能超过 2 个字符",
        ],
        passwordRules: [
            v => !!v || "密码不能为空",
            v => v && v.length >= 6 || "密码不少于 6 个字符",
            v => v && v.length < 6 || "密码必须少于 6 个字符",
        ]
    }),
    methods: () => ({
        login() {
            this.validate();
        },
        validate() {
            this.$refs.form.validate();
        },
    })
};
</script>
