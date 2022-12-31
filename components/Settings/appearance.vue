<template>
  <div>
    <p class="text-h4">
      个性化
    </p>
    <p class="text-h5">
      主题
    </p>
    <v-radio-group
      v-model="data.colorMode"
      column
    >
      <v-radio
        label="浅色"
        value="light"
      />
      <v-radio
        label="深色"
        value="dark"
      />
      <v-radio
        label="跟随系统"
        value="system"
      />
    </v-radio-group>
    <p class="text-h5">
      Markdown 编辑器
    </p>
    <v-switch
      v-model="data.mdFont"
      label="编辑时使用等宽字体"
    />
    <v-btn color="primary" @click="save()">
      保存
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {
      colorMode: 'system',
      mdFont: false
    }
  }),
  async mounted () {
    // const userInfo = await this.$axios.$get('users/' + this.$auth.user.id + '/info')
    // if (userInfo !== false) {
    //   this.data = userInfo.data
    // }
  },
  methods: {
    async save () {
    //   console.log(this.data)
    //   const userInfo = await this.$axios.$post('users/' + this.$auth.user.id + '/info', {
    //     name: this.data.name,
    //     email: this.data.email,
    //     bio: this.data.bio,
    //     website: this.data.website
    //   })
    //   if (userInfo !== false) {
    //     this.$dialog.message.info('保存成功', {
    //       position: 'bottom'
    //     })
    //   }
    }
  }
}
</script>
