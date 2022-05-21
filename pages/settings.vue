<template>
  <v-container>
    <p class="text-h4">
      设置
    </p>

    <p class="text-h5">
      颜色主题
    </p>
    <v-radio-group
      v-model="settings_theme"
      row
      @change="toggle_theme"
    >
      <v-radio
        label="浅色主题"
        value="light"
      />
      <v-radio
        label="深色主题"
        value="dark"
      />
      <v-radio
        label="同步系统"
        value="sync_with_system"
      />
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  name: 'Settings',
  data: () => ({
    settings_theme: 'light'
  }),
  methods: {
    toggle_theme () {
      if (this.settings_theme === 'light') {
        this.$vuetify.theme.dark = false
      } else if (this.settings_theme === 'dark') {
        this.$vuetify.theme.dark = true
      } else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.$vuetify.theme.dark = true
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          this.$vuetify.theme.dark = false
        }
        const listeners = {
          dark (mediaQueryList) {
            if (mediaQueryList.matches) {
              this.$vuetify.theme.dark = true
            }
          },
          light (mediaQueryList) {
            if (mediaQueryList.matches) {
              this.$vuetify.theme.dark = false
            }
          }
        }
        window.matchMedia('(prefers-color-scheme: dark)').addListener(listeners.dark)
        window.matchMedia('(prefers-color-scheme: light)').addListener(listeners.light)
      }
    }
  }
}
</script>
