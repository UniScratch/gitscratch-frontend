<template>
  <div>
    <p class="text-h5">
      帐户
    </p>
    <p class="text-h6">
      个人资料
    </p>
    <Avatar :data="data" size="60" />
    <v-dialog v-model="changeAvatarModal" overlay-opacity="0.3" max-width="500">
      <template #activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
        >
          编辑头像
        </v-btn>
      </template>
      <v-card class="cardblur">
        <v-card-title class="text-h5">
          上传头像
        </v-card-title>

        <v-card-text>
          <v-file-input
            v-model="avatarUpload"
            show-size
            truncate-length="36"
            accept="image/png, image/jpeg, image/gif"
            placeholder="上传头像"
            @change="fileUpdate()"
          />
          <v-avatar v-if="fileBase64" size="100%">
            <v-img
              :src="fileBase64"
              aspect-ratio="1"
            />
          </v-avatar>
          <p>头像将被裁剪为正方形</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            rounded
            @click="changeAvatarModal = false"
          >
            取消
          </v-btn>
          <v-btn
            color="primary"
            text
            rounded
            @click="upload()"
          >
            上传
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      hint="使用一句话介绍你自己。留空不显示。"
      persistent-hint
    />
    <v-text-field
      v-model="data.website"
      label="URL"
      hint="你的个人网站或者博客。留空不显示。"
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
      删除帐户
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {},
    changeAvatarModal: false,
    avatarUpload: null,
    fileBase64: ''
  }),
  async mounted () {
    const userInfo = await this.$axios.$get('users/' + this.$auth.user.id + '/info')
    if (userInfo !== false) {
      this.data = userInfo.data
    }
  },
  methods: {
    fileUpdate () {
      if (this.avatarUpload) {
        console.log(this.avatarUpload)
        const reader = new FileReader()
        reader.onload = (e) => {
          this.fileBase64 = e.target.result
        }
        reader.readAsDataURL(this.avatarUpload)
      } else {
        this.fileBase64 = ''
      }
    },
    upload () {
      const formData = new FormData()
      formData.append('file', this.avatarUpload)
      this.$axios.$post('/assets/upload', formData)
        .then((res) => {
          this.changeAvatarModal = false
          console.log(res.data.filename)
          this.data.avatar = res.data.filename
          this.save()
          // console.log(this.$utils.getAssetUrl(this.data.avatar))
          // this.$toast.open({
          //   message: '上传成功',
          //   type: 'success'
          // });
        })
    },
    async save () {
      // console.log(this.data)
      const userInfo = await this.$axios.$post('users/' + this.$auth.user.id + '/info', {
        name: this.data.name,
        email: this.data.email,
        bio: this.data.bio,
        website: this.data.website,
        avatar: this.data.avatar
      })
      await this.$auth.fetchUser()
      if (userInfo !== false) {
        this.$dialog.message.info('保存成功', {
          position: 'bottom'
        })
      }
    },
    async delUser () {
      // TODO： use vuetify dialogs instead of this.$dialog
      const confirm1 = await this.$dialog.confirm({
        text: '你正在删除你的帐户<code>' + this.$auth.user.name + '</code><br>一旦删除，此帐户将永久失去，此操作不可逆<br>如果你确定删除你的帐户，请点击下一步',
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
