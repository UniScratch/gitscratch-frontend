<template>
  <div class="d-flex justify-center">
    <v-card style="width: 400px; padding: 16px;" elevation="0" color="transparent">
      <v-lazy style="text-align: center;" transition="fade-transition" min-height="71">
        <img src="/GitScratch-icon-background-blue.svg" width="64">
      </v-lazy>
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          v-if="step <= 3"
          color="primary"
          class="subheading white--text"
          size="24"
        >
          {{ step }}
        </v-avatar>
      </v-card-title>

      <v-window v-model="step" touchless>
        <v-window-item :value="1">
          <v-card-text>
            <v-form ref="email_form" v-model="email_valid" lazy-validation>
              <v-text-field
                v-model="user_email"
                label="电子邮箱"
                :rules="emailRules"
                @keyup.enter="next"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              这个电子邮箱将用于登录 GitScratch。
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-form ref="name_form" v-model="name_valid" lazy-validation>
              <v-text-field
                v-model="user_name"
                label="用户名"
                :rules="nameRules"
                @keyup.enter="next"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              在 GitScratch 中显示的用户名。
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-card-text>
            <v-form ref="password_form" v-model="password_valid" lazy-validation>
              <v-text-field
                v-model="user_password"
                label="密码"
                :type="password_visible ? 'text' : 'password'"
                :rules="passwordRules"
                :append-icon="password_visible ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="password_visible = !password_visible"
                @keyup.enter="next"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              为你的帐号设置一个密码。
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="4">
          <v-card-text>
            <v-form ref="captchaform" v-model="captcha_valid" lazy-validation>
              <v-img src="/captcha.png" />
              <v-text-field
                v-model="captcha"
                label="验证码"
                style="border-radius: 4px;"
                :rules="captchaRules"
                type="number"
                @keyup.enter="next"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              输入验证码（图中事件发生的年份，公元前加“-”）
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="5">
          <v-card-text>
            <h3 class="text-h6 font-weight-light">
              与君初相识，犹如故人归。
            </h3>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="6">
          <div class="pa-4 text-center">
            <v-img
              v-if="!$vuetify.theme.dark"
              class="mb-4"
              contain
              height="128"
              src="/GitScratch-icon-black.svg"
            />
            <v-img
              v-if="$vuetify.theme.dark"
              class="mb-4"
              contain
              height="128"
              src="/GitScratch-icon-white.svg"
            />
            <h3 class="text-h6">
              欢迎加入 GitScratch！
            </h3>
            <span class="text-caption grey--text text--darken-1">
              现在，你可以<router-link to="/scratch-gui">开始创作</router-link>，或者<router-link to="/">回到首页</router-link>。
            </span>
          </div>
        </v-window-item>
      </v-window>

      <v-divider />

      <v-card-actions>
        <transition name="slide-y-reverse-transition">
          <v-btn
            v-if="!(step === 1 || step >= 4)"
            outlined
            rounded
            color="primary"
            @click="step--"
          >
            上一步
          </v-btn>
        </transition>

        <v-spacer />

        <v-btn
          :loading="loading"
          :disabled="!(email_valid && name_valid && password_valid && captcha_valid)"
          color="primary"
          depressed
          rounded
          :to="step === steps ? '/' : ''"
          @click="next()"
        >
          {{ step === steps ? "完成" : "下一步" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    steps: 6,
    loading: false,
    password_visible: false,
    user_email: '',
    user_name: '',
    user_password: '',
    user_password_confirm: '',
    captcha: '',
    email_valid: true,
    name_valid: true,
    password_valid: true,
    captcha_valid: true,
    emailRules: [
      v => !!v || '电子邮箱不能为空',
      v => (v && /.+@.+\..+/.test(v)) || '电子邮箱无效'
    ],
    passwordRules: [
      v => !!v || '密码不能为空',
      v => (v && v.length >= 6) || '密码不少于 6 个字符'
    ],
    nameRules: [
      v => !!v || '用户名不能为空'
    ],
    captchaRules: [
      v => !!v || '验证码不能为空'
    ]
  }),
  head () {
    return {
      title: '注册'
    }
  },
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return '注册'
        case 2: return '设置用户名'
        case 3: return '设置密码'
        case 4: return '输入验证码'
        case 5: return '正在注册'
        default: return '已注册'
      }
    }
  },
  methods: {
    next () {
      if (this.step === 1) {
        this.email_valid = this.$refs.email_form.validate()
        if (this.email_valid) {
          this.step++
        }
      } else if (this.step === 2) {
        this.name_valid = this.$refs.name_form.validate()
        if (this.name_valid) {
          this.step++
        }
      } else if (this.step === 3) {
        this.password_valid = this.$refs.password_form.validate()
        if (this.password_valid) {
          this.step++
        }
      } else if (this.step === 4) {
        this.captcha_valid = this.$refs.captchaform.validate()
        if (this.captcha_valid) {
          this.step++
        }
      }
      if (this.step === this.steps - 1) {
        this.register()
      }
    },
    register () {
      this.loading = true
      this.$http.$post('/auth/register').then((res) => {
        console.log(res)
        this.loading = false
        this.step = this.steps
      })
      // setTimeout(() => {
      //   this.loading = false
      //   this.step = this.steps
      // }, 3000)
    }
  }
}
</script>
