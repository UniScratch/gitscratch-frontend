<template>
  <div class="d-flex justify-center pt-16">
    <v-card style="width: 400px;" elevation="0">
      <v-lazy style="text-align: center;" transition="fade-transition" min-height="71">
        <img src="/GitScratch-icon-background-blue.svg" width="64">
      </v-lazy>
      <v-card-title style="display: block; text-align: center;" class="text-h5">
        登录 GitScratch 帐户
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" @keydown.enter.native="login()">
          <v-text-field
            v-model="form.email"
            label="电子邮箱"
            :rules="emailRules"
            required
          />
          <v-text-field
            v-model="form.password"
            label="密码"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-btn
            color="primary"
            depressed
            block
            rounded
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
    form: {
      email: '',
      password: ''
    },
    emailRules: [
      v => !!v || '电子邮箱地址不能为空',
      v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || '无效的电子邮箱地址'
    ],
    passwordRules: [
      v => !!v || '密码不能为空',
      v => /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Za-z])\S*$/.test(v) || '密码需要不少于 6 个字符，且必须包含字母和数字'
    ]
  }),
  head () {
    return {
      title: '登录'
    }
  },
  methods: {
    login () {
      if (this.valid) {
        this.loading = true
        this.$auth
          .loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          })
        this.loading = false
        // this.loading = true
        // this.$axios.$post('/auth/login', {
        //   email: this.form.email,
        //   password: this.form.password
        // }).then((res) => { // 获取session
        //   if (res.status === 'success') {
        //     const session = res.data.session
        //     this.$auth_updateSession(session)
        //     this.loading = false
        //     this.$router.push('/')
        //   } else {
        //     this.loading = false
        //     this.$dialog.error({
        //       text: res.message,
        //       title: '登录失败'
        //     })
        //   }
        // })
      }
    }
  }

}
</script>
