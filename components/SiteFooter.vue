<template>
  <v-card height="auto">
    <v-footer
      v-bind="localAttrs"
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="white lighten-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider />

        <v-card-text class="black--text">
          © {{ new Date().getFullYear() }} Hydrog. All rights reserved.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-text-account',
      'mdi-clipboard-text-outline',
      'mdi-cube',
      'mdi-information-outline'
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
