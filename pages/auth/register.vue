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
            <v-form ref="emailForm" v-model="emailValid" @submit.native.prevent @keydown.enter.native="next()">
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
            <v-form ref="nameForm" v-model="usernameValid" @submit.native.prevent @keydown.enter.native="next()">
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
            <v-form ref="passwordForm" v-model="passwordValid" @submit.native.prevent @keydown.enter.native="next()">
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
            <v-form ref="captchaForm" v-model="captchaValid" @submit.native.prevent @keydown.enter.native="next()">
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
            <!-- <v-img
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
            /> -->
            <h3 class="text-h6">
              欢迎加入 GitScratch！
            </h3>
            <span class="text-caption grey--text text--darken-1">
              现在，你可以<router-link to="/scratch-gui">开始创作</router-link>，或者<router-link to="/">回到首页</router-link>。
            </span>
          </div>
        </v-window-item>
      </v-window>

      <v-card-actions>
        <transition name="slide-y-reverse-transition">
          <v-btn
            v-if="!(step>4 || step==1)"
            outlined
            rounded
            color="primary"
            @click="step--"
          >
            上一步
          </v-btn>
        </transition>

        <v-spacer />
        <transition name="slide-y-reverse-transition">
          <v-btn
            v-if="!(step==5)"
            :loading="loading"
            :disabled="!currentValid"
            color="primary"
            depressed
            rounded
            :to="step === 6 ? '/' : ''"
            @click="next()"
          >
            {{ step === 6 ? "完成" : "下一步" }}
          </v-btn>
        </transition>
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
    loading: false,
    password_visible: false,
    captcha_base64: '',
    captcha_isLoading: true,
    emailValid: true,
    usernameValid: true,
    passwordValid: true,
    captchaValid: true,
    emailRules: [
      v => !!v || '电子邮箱地址不能为空',
      v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || '无效的电子邮箱地址'
    ],
    passwordRules: [
      v => !!v || '密码不能为空',
      v => /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Za-z])\S*$/.test(v) || '密码需要不少于六个字符, 必须包含字母和数字'
    ],
    nameRules: [
      v => !!v || '用户名不能为空'
    ],
    captchaRules: [
      v => !!v || '验证码不能为空',
      v => /^-?\d{0,4}$/.test(v) || '无效的验证码'
    ]
  }),
  async fetch () {
    await this.$axios.$get('/auth/captcha').then((res) => {
      if (res.status === 'success') {
        this.form.captcha_uuid = res.data.captcha_uuid
        this.captcha_base64 = res.data.captcha_base64
      } else {
        this.$dialog.error({
          text: res.message,
          title: '无法获取验证码'
        })
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
    },
    currentValid () {
      switch (this.step) {
        case 1: return this.emailValid
        case 2: return this.usernameValid
        case 3: return this.passwordValid
        case 4: return this.captchaValid
        default: return true
      }
    }
  },
  methods: {
    reloadCaptcha () {
      this.captcha_isLoading = true
      this.$fetch()
    },
    next () {
      if (this.step >= 1 && this.step <= 4) {
        this.step++
      }
      if (this.step === 5) {
        this.register()
      }
    },
    async register () {
      this.loading = true
      const regRes = await this.$axios.$post('/auth/register', {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        captcha_uuid: this.form.captcha_uuid,
        captcha_value: this.form.captcha_value
      })
      if (regRes) {
        this.$auth
          .loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          })
      } else {
        this.step--
      }
      this.loading = false
    }
  }

}
</script>
