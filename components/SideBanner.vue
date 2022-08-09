<template>
  <v-card class="text-center v-card-border" :height="$vuetify.breakpoint.smAndUp ? '100%' : 'unset'">
    <v-card-title style="display: block;" class="text-h5">
      欢迎
    </v-card-title>

    <v-card-text class="text--primary">
      <div class="text-h2">
        {{ new Date().getDate() }}
      </div>
      <div class="text-body-1">
        {{ new Date().getFullYear() }} / {{ new Date().getMonth() + 1 }}
      </div>
      <!-- <div style="margin-bottom: 16px;" /> -->
      <div class="text-caption">
        美好的一天，从咕咕咕开始
      </div>
    </v-card-text>

    <v-card-actions :style="$vuetify.breakpoint.smAndUp ? 'position: absolute; bottom: 0; left: 0; right: 0; ' : 'unset'">
      <div class="d-flex flex-column" style="width: 100%;">
        <v-btn
          block
          depressed
          :disabled="dialogLoading"
          :loading="dialogLoading"
          rounded
          @click.stop="sign"
        >
          <v-icon left>
            mdi-check
          </v-icon>签到
        </v-btn>
        <v-btn
          block
          color="primary"
          to="/project/editor"
          class="mt-2"
          rounded
          depressed
        >
          <v-icon left>
            mdi-plus
          </v-icon>创建
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    dialogLoading: false
  }),

  methods: {
    async sign () {
      this.dialogLoading = true
      const hitokoto = await this.$axios.$get('https://v1.hitokoto.cn/')
      // console.log(hitokoto)
      if (hitokoto) {
        const result = await this.$dialog.info({
          text: hitokoto.hitokoto,
          title: '签到成功',
          actions: [{
            text: '查看', key: true
          },
          {
            text: '关闭', color: 'blue', key: false
          }]
        })
        if (result === true) {
          window.open('https://hitokoto.cn/?uuid=' + hitokoto.uuid, '_blank')
        }
      }
      this.dialogLoading = false
    }
  }
}

</script>
