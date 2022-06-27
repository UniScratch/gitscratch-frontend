<template>
  <v-container>
    <v-divider />
    <v-footer
      padless
      color="transparent"
    >
      <v-row no-gutters>
        <v-col
          :cols="3"
        >
          <div style="margin-top: 10px;">
            © {{ new Date().getFullYear() }} UniScratch. Under the Apache License 2.0.
          </div>
        </v-col>

        <v-col
          :cols="6"
          class="text-center"
        >
          <v-btn
            v-for="link in links"
            :key="link"
            text
            small
            class="my-2"
            :to="link[1]"
          >
            {{ link[0] }}
          </v-btn>
        </v-col>

        <v-col
          :cols="3"
          class="text-right"
        >
          <div style="margin-top: 10px;">
            ×ICP备××××××××号-×
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    links: [
      ['服务条款', '啊，好舒服'],
      ['隐私政策', '啊，好舒服'],
      ['服务状态', '啊，好舒服'],
      ['API', '啊，好舒服'],
      ['联系我们', '啊，好舒服']
    ]
  }),
  computed: {
  }
}
</script>
