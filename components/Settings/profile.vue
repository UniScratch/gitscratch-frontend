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
    <v-btn text color="red" @click="delUser()">
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
    },
    async delUser () {
      // TODO： use vuetify dialogs instead of this.$dialog
      const confirm1 = await this.$dialog.confirm({
        text: '你正在删除你的账号<code>' + this.$auth.user.name + '</code><br>一旦删除，此账号将永久失去，此操作不可逆<br>如果你确定删除你的账号，请点击下一步',
        title: '警告',
        actions: [{
          text: '取消', color: 'blue', key: false
        }, {
          text: '下一步', key: true
        }]
      })
      const confirm2 = await this.$dialog.prompt({
        text: '输入“Yes, do as I say!”进入下一步',
        label: '111',
        title: '确认',
        actions: [{
          text: '取消', color: 'blue', key: false
        }, {
          text: '下一步', key: true
        }]
      })
      const confirm3 = await this.$dialog.prompt({
        text: '输入 ' + this.$auth.user.name + ' 的密码以执行删除操作',
        label: '111',
        title: '确认',
        actions: [{
          text: '取消', color: 'blue', key: false
        }, {
          text: '删除', color: 'red', key: true
        }]
      })
      console.log(confirm1, confirm2, confirm3)
    }
  }
}
</script>
