<template>
    <v-container class="d-flex justify-center">
        <v-card style="width: 400px; padding: 16px;" elevation="0">
            <div style="text-align: center;">
                <img src="/GitScratch-icon-background-blue.svg" width="64" />
            </div>
            <v-card-title class="text-h6 font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar
                color="primary lighten-2"
                class="subheading white--text"
                size="24"
                v-text="step"
            ></v-avatar>
            </v-card-title>

            <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                    <v-text-field
                        label="电子邮箱"
                    ></v-text-field>
                    <span class="text-caption grey--text text--darken-1">
                        这个电子邮箱将用于登录 GitScratch。
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text>
                    <v-text-field
                        label="用户名"
                    ></v-text-field>
                    <span class="text-caption grey--text text--darken-1">
                        在 GitScratch 中显示的用户名。
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <v-card-text>
                    <v-text-field
                        label="密码"
                        type="password"
                    ></v-text-field>
                    <v-text-field
                        label="再次输入密码"
                        type="password"
                    ></v-text-field>
                    <span class="text-caption grey--text text--darken-1">
                        为你的帐号设置一个密码。
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="4">
                    <div class="pa-4 text-center">
                    <v-img
                        class="mb-4"
                        contain
                        height="128"
                        src="/GitScratch-icon-black.svg"
                        v-if="!$vuetify.theme.dark"
                    ></v-img>
                    <v-img
                        class="mb-4"
                        contain
                        height="128"
                        src="/GitScratch-icon-white.svg"
                        v-if="$vuetify.theme.dark"
                    ></v-img>
                    <h3 class="text-h6 font-weight-light mb-2">
                        欢迎加入 GitScratch！
                    </h3>
                    <span class="text-caption grey--text text--darken-1">
                        现在，你可以<router-link to="/scratch-gui">开始创作</router-link>，或者<router-link to="/">回到首页</router-link>。
                    </span>
                    </div>
                </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn
                    :disabled="step === 1 || step === 4"
                    text
                    @click="step--"
                >
                    上一步
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="step === 4"
                    :loading="loading"
                    color="primary"
                    depressed
                    @click="next()"
                >下一步</v-btn>
            </v-card-actions>

            <br>
            <router-link to="/auth/login">登录</router-link>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Auth',
    data: () => ({
        step: 1,
        loading: false,
    }),

    computed: {
        currentTitle () {
            switch (this.step) {
                case 1: return '注册'
                case 2: return '设置用户名'
                case 3: return '设置密码'
                default: return '已注册'
            }
        },
    },

    methods: {
        next () {
            if (this.step < 3) {
                this.step++;
            } else {
                this.register();
            }
        },
        register () {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.step = 4;
            }, 2000);
        },
    },
};
</script>
