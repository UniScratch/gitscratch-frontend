<template>
  <v-card class="text-center" min-height="350">
    <v-card-title style="display: block;" class="text-h5">
      欢迎
    </v-card-title>

    <v-card-text class="text--primary" align="center">
      <div class="text-h2">
        {{ new Date().getDate() }}
      </div>
      <span class="text-body-1">{{ new Date().getFullYear() }} / {{ new Date().getMonth() + 1 }}</span>
      <div style="margin-bottom: 16px;" />
      <span class="text-caption">美好的一天，从咕咕咕开始</span>
    </v-card-text>

    <v-card-actions style="position: absolute; bottom: 0; left: 0; right: 0;">
      <div class="d-flex flex-column" style="width: 100%;">
        <v-btn
          block
          depressed
          :disabled="dialogLoading"
          :loading="dialogLoading"
          @click.stop="sign"
        >
          <v-icon left>
            mdi-check
          </v-icon>签到
        </v-btn>
        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card>
            <v-card-title class="text-h5">
              签到成功
            </v-card-title>

            <v-card-text>
              {{ hitokoto }}
            </v-card-text>

            <v-card-actions>
              <v-spacer />

              <v-btn
                text
                @click="dialog = false"
              >
                关闭
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn block color="primary" to="/create" class="mt-2">
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
    dialogLoading: false,
    dialog: false,
    hitokoto: ''
  }),

  methods: {
    sign () {
      this.dialogLoading = true
      this.$http.$get('https://v1.hitokoto.cn/').then((res) => {
        this.dialogLoading = false
        this.hitokoto = res.hitokoto
        this.dialog = true
      })
    }
  }
}

</script>
