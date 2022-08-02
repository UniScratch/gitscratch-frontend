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
            <v-form ref="emailForm" v-model="emailValid" lazy-validation>
              <v-text-field
                v-model="form.email"
                label="电子邮箱"
                :rules="emailRules"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              这个电子邮箱将用于登录 GitScratch。
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-form ref="nameForm" v-model="usernameValid" lazy-validation>
              <v-text-field
                v-model="form.username"
                label="用户名"
                :rules="nameRules"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              在 GitScratch 中显示的用户名。
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-card-text>
            <v-form ref="passwordForm" v-model="passwordValid" lazy-validation>
              <v-text-field
                v-model="form.password"
                label="密码"
                :type="password_visible ? 'text' : 'password'"
                :rules="passwordRules"
                :append-icon="password_visible ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="password_visible = !password_visible"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              为你的帐号设置一个密码。
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="4">
          <v-card-text>
            <v-form ref="captchaForm" v-model="captchaValid" lazy-validation>
              <img :src="captcha_base64" style="width: 100%;">
              <!-- <v-img contain :src="captcha_base64" /> -->
              <v-text-field
                v-model="form.captcha_value"
                append-icon="mdi-refresh"
                label="图中事件发生的年份，公元前加“-”"
                style="border-radius: 4px;"
                :rules="captchaRules"
                type="number"
                @click:append="reloadCaptcha()"
              />
            </v-form>
            <span class="text-caption grey--text text--darken-1">
              有效期15分钟
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
            v-if="step <= 4"
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
          :disabled="!(emailValid && usernameValid && passwordValid && captchaValid)"
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
    form: {
      name: '',
      password: '',
      email: '',
      captcha_uuid: '',
      captcha_value: ''
    },
    step: 1,
    steps: 6,
    loading: false,
    password_visible: false,
    captcha_base64: '',
    captcha_isLoading: true,
    emailValid: true,
    usernameValid: true,
    passwordValid: true,
    captchaValid: true,
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
  async fetch () {
    await this.$http.$get('/auth/captcha').then((res) => {
      if (res.status === 'success') {
        this.form.captcha_uuid = res.data.captcha_uuid
        this.captcha_base64 = res.data.captcha_base64
      } else {
        alert(res.message)
      }
      this.captcha_isLoading = false
    })
  },
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
    reloadCaptcha () {
      this.captcha_isLoading = true
      this.$fetch()
    },
    next () {
      if (this.step === 1) {
        this.emailValid = this.$refs.emailForm.validate()
        if (this.emailValid) {
          this.step++
        }
      } else if (this.step === 2) {
        this.usernameValid = this.$refs.nameForm.validate()
        if (this.usernameValid) {
          this.step++
        }
      } else if (this.step === 3) {
        this.passwordValid = this.$refs.passwordForm.validate()
        if (this.passwordValid) {
          this.step++
        }
      } else if (this.step === 4) {
        this.captchaValid = this.$refs.captchaForm.validate()
        if (this.captchaValid) {
          this.step++
        }
      }
      if (this.step === this.steps - 1) {
        this.register()
      }
    },
    register () {
      this.loading = true
      this.$http.$post('/auth/register', {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        captcha_uuid: this.form.captcha_uuid,
        captcha_value: this.form.captcha_value
      }).then((res) => {
        if (res.status === 'success') {
          this.step = this.steps
        } else {
          alert(res.message)
          this.step--
        }
        this.loading = false
      })
    }
  }
}
</script>
