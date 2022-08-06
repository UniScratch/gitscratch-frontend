<template>
  <div>
    <p class="text-h5">
      账户
    </p>
    <v-text-field
      label="用户名"
      :value="data.name"
      hint="在 GitScratch 中显示的用户名。"
      persistent-hint
    />
    <v-text-field
      label="电子邮箱"
      :value="data.email"
      hint="这个电子邮箱将用于登录 GitScratch。"
      persistent-hint
    />
    <v-text-field
      label="介绍"
      :value="data.bio"
      hint="使用一句话介绍你自己。"
      persistent-hint
    />
    <v-text-field
      label="URL"
      :value="data.website"
      hint="你的个人网站或者博客。"
      persistent-hint
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {}
  }),
  mounted () {
    this.$http.$get('/users/' + this.$store.state.auth.userInfo.id + '/info').then((res) => { // 获取用户信息
      if (res.status === 'success') {
        // console.log(res.data)
        this.data = res.data
      } else {
        this.$dialog.error({
          text: res.message,
          title: '登录失效'
        })
      }
    })
  }
}
</script>
