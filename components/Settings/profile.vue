<template>
  <div>
    <p class="text-h5">
      账户
    </p>
    <p class="text-h6">
      个人资料
    </p>
    <v-text-field
      v-model="data.name"
      label="用户名"
      hint="在 GitScratch 中显示的用户名。"
      persistent-hint
    />
    <v-text-field
      v-model="data.email"
      label="电子邮箱"
      hint="这个电子邮箱将用于登录 GitScratch。"
      persistent-hint
    />
    <v-text-field
      v-model="data.bio"
      label="介绍"
      hint="使用一句话介绍你自己。"
      persistent-hint
    />
    <v-text-field
      v-model="data.website"
      label="URL"
      hint="你的个人网站或者博客。"
      persistent-hint
    />
    <v-btn text @click="save()">
      保存
    </v-btn>
    <p class="text-h6">
      安全
    </p>
    <v-btn text>
      修改密码
    </v-btn>
    <v-btn plain>
      忘记密码
    </v-btn>
    <p class="text-h6">
      危险区域
    </p>
    <v-btn text color="red">
      删除账号
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {}
  }),
  async mounted () {
    const userInfo = await this.$axios.$get('users/' + this.$auth.user.id + '/info')
    if (userInfo !== false) {
      this.data = userInfo.data
    }
  },
  methods: {
    async save () {
      console.log(this.data)
      const userInfo = await this.$axios.$post('users/' + this.$auth.user.id + '/info', {
        name: this.data.name,
        email: this.data.email,
        bio: this.data.bio,
        website: this.data.website
      })
      if (userInfo !== false) {
        this.$dialog.message.info('保存成功', {
          position: 'bottom'
        })
      }
    }
  }
}
</script>
