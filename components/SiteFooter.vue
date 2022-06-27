<template>
  <v-card height="auto" elevation="0">
    <v-footer
      v-bind="localAttrs"
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center grey-footer"
      >
        <v-card-text>
          <v-btn
            v-for="text in texts"
            :key="text"
            class="ml-2"
            rounded
            text
          >
            {{ text }}
          </v-btn>
        </v-card-text>

        <!--<v-divider />

        <v-card-text class="black--text">
          © {{ new Date().getFullYear() }} Hydrog. All rights reserved.
        </v-card-text>-->
      </v-card>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    texts: [
      '用户协议',
      '隐私条款',
      '社区守则',
      '关于'
    ],
    items: [
      'default',
      'absolute',
      'fixed'
    ],
    padless: false,
    variant: 'default'
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>
