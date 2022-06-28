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
            © {{ new Date().getFullYear() }} UniScratch. Under the Apache License 2.0.
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
      ['服务条款', 'agreement'],
      ['隐私政策', 'privacy'],
      ['服务状态', 'status'],
      ['API', 'api'],
      ['联系我们', 'contactus'],
      ['社区守则', 'rule']
    ]
  }),
  computed: {
  }
}
</script>
