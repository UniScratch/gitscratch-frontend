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
          <div style="margin-top: 12px; font-size: 10px;">
            © {{ new Date().getFullYear() }} GitScratch Team. Under the Apache License 2.0.
          </div>
        </v-col>

        <v-col
          :cols="6"
          class="text-center"
        >
          <v-btn
            v-for="link in links"
            :key="link[0]"
            text
            small
            class="my-2"
            :to="link[1]"
          >
            {{ link[0] }}
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    links: [
      ['服务条款', '/help/terms-of-service'],
      ['隐私政策', '/help/privacy'],
      ['DMCA', '/help/dmca'],
      ['社区守则', '/help/rules'],
      ['联系我们', '/help/contact-us'],
      ['服务状态', 'status'],
      ['API', 'api']
    ]
  }),
  computed: {
  }
}
</script>
