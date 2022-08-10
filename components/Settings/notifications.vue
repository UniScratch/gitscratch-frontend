<template>
  <div>
    <p class="text-h5">
      通知
    </p>
    <p class="text-h6">
      通知类型
    </p>
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">
              通知类型
            </th>
            <th class="text-left">
              名称
            </th>
            <th class="text-left">
              Web 通知
            </th>
            <th class="text-left">
              站内信
            </th>
            <th class="text-left">
              客户端通知
            </th>
            <th class="text-left">
              邮件通知
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in data.notificationTypes"
            :key="index"
          >
            <td>{{ index }}</td>
            <td>{{ item.name }}</td>
            <td>
              <v-switch
                v-model="data.notificationTypes[index].enabled.web"
              />
            </td>
            <td>
              <v-switch
                v-model="data.notificationTypes[index].enabled.site"
              />
            </td>
            <td>
              <v-switch
                v-model="data.notificationTypes[index].enabled.client"
              />
            </td>
            <td>
              <v-switch
                v-model="data.notificationTypes[index].enabled.email"
              />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn text @click="save()">
      保存
    </v-btn>
    <p class="text-h6">
      Web 通知设置
    </p>
    <v-btn text>
      申请通知权限
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {
      notificationTypes: {
        'project.star': {
          name: '项目被收藏',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'project.fork': {
          name: '项目被收藏',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'project.release': {
          name: '关注项目发布新版本',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'project.ban': {
          name: '作品被封禁',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'project.comment': {
          name: '作品评论',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'project.comment.mention': {
          name: '作品评论（被提及）',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.follow': {
          name: '用户被关注',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.levelUpgrade': {
          name: '等级升级',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.verify': {
          name: '社区认证状态更新',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.mute': {
          name: '用户被禁言',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.ban': {
          name: '用户被封禁',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.newProject': {
          name: '关注用户发布新作品',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.comment': {
          name: '用户评论',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'user.comment.mention': {
          name: '用户评论（被提及）',
          enabled: { web: true, site: true, client: true, email: true }
        },
        'system.birthday': {
          name: '社区生日祝福',
          enabled: { web: true, site: true, client: true, email: true }
        }
      },
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
