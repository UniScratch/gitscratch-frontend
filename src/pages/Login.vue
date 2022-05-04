<template>
    <v-container class="d-flex justify-center">
        <v-card style="width: 400px; padding: 16px;" elevation="0">
            <v-lazy style="text-align: center;" transition="fade-transition" min-height="71">
                <img src="/GitScratch-icon-background-blue.svg" width="64" />
            </v-lazy>
            <v-card-title style="display: block; text-align: center;" class="text-h5">登录 GitScratch 帐号</v-card-title>

            <v-card-text>
                <v-text-field
                    label="电子邮箱"
                    v-model="user_email"
                    type="email"
                    style="border-radius: 4px;"
                ></v-text-field>
                <v-text-field
                    label="密码"
                    v-model="user_password"
                    type="password"
                    style="border-radius: 4px;"
                ></v-text-field>
            </v-card-text>
            <div style="padding: 0 16px;">
                <v-btn color="accent" depressed block>登录</v-btn>
                <br>
                <router-link to="/auth/register">注册帐号</router-link>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Auth',
    data: () => ({
        user_email: '',
        user_password: '',
    }),
};
</script>
