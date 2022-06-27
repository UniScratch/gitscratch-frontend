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
          >
            {{ link }}
          </v-btn>
        </v-col>

        <v-col
          :cols="3"
          class="text-right"
        >
          <div style="margin-top: 10px;">
            XICP备XXXXXXXX号-X
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
      '服务条款',
      '隐私政策',
      '服务状态',
      'API',
      '定价',
      '联系我们'
    ]
  }),
  computed: {
  }
}
</script>
