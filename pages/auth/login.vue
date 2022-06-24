<template>
  <div class="d-flex justify-center">
    <v-card style="width: 400px; padding: 16px;" elevation="0" color="transparent">
      <v-lazy style="text-align: center;" transition="fade-transition" min-height="71">
        <img src="/GitScratch-icon-background-blue.svg" width="64">
      </v-lazy>
      <v-card-title style="display: block; text-align: center;" class="text-h5">
        登录 GitScratch 帐号
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user_email"
            label="电子邮箱"
            style="border-radius: 4px;"
            :rules="emailRules"
          />
          <v-text-field
            v-model="user_password"
            label="密码"
            type="password"
            style="border-radius: 4px;"
            :rules="passwordRules"
          />
          <v-btn
            color="primary"
            depressed
            block
            :disabled="!valid"
            :loading="loading"
            @click="login"
          >
            登录
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    loading: false,
    user_email: '',
    user_password: '',
    emailRules: [
      v => !!v || '电子邮箱不能为空',
      v => (v && /.+@.+\..+/.test(v)) || '电子邮箱无效'
    ],
    passwordRules: [
      v => !!v || '密码不能为空'
    ]
  }),
  head () {
    return {
      title: '登录'
    }
  },
  methods: {
    login () {
      this.validate()
      this.loading = true
      this.$http.$post('/auth/login').then((res) => { // 获取session
        // console.log(res)
        this.$http.$get('/auth/session').then((res) => { // 获取用户信息
          // console.log(res)
          this.$store.commit('auth/updateInfo', res.data)
        })
        this.$store.commit('auth/updateToken', res.session)
        this.loading = false
        this.$router.push('/')
      })
    },
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>
