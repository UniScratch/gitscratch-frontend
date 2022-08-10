<template>
  <v-row>
    <v-col cols="12" xl="2" md="3" sm="4" style="padding-right: 20px;">
      <div>
        <p class="text-h4">
          设置
        </p>
        <v-list
          dense
          nav
          color="transparent"
        >
          <v-list-item-group v-model="tab" color="primary" mandatory>
            <v-list-item link value="#profile">
              <v-list-item-icon>
                <v-icon>mdi-account-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>账户</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link value="#appearance">
              <v-list-item-icon>
                <v-icon>mdi-brush-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>个性化</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link value="#notifications">
              <v-list-item-icon>
                <v-icon>mdi-bell-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>通知</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link value="#projects">
              <v-list-item-icon>
                <v-icon>mdi-book-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>作品</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link value="#organizations">
              <v-list-item-icon>
                <v-icon>mdi-account-group-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>组织</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-col>
    <v-divider
      vertical
      class="
              hidden-xs-only"
    />
    <v-col cols="12" xl="10" md="9" sm="8">
      <v-tabs-items v-model="tab" vertical style="padding-left: 13px;">
        <v-tab-item value="#profile">
          <SettingsProfile />
        </v-tab-item>
        <v-tab-item value="#appearance">
          <SettingsAppearance />
        </v-tab-item>
        <v-tab-item value="#notifications">
          <SettingsNotifications />
        </v-tab-item>
        <v-tab-item value="#projects">
          <SettingsProjects />
        </v-tab-item>
        <v-tab-item value="#organizations">
          <SettingsOrganizations />
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    settingsTheme: 'light',
    tab: 0
  }),
  head () {
    return {
      title: '设置'
    }
  },
  watch: {
    tab (val) {
      location.hash = val
    }
  },
  mounted () {
    if (location.hash !== '') {
      this.tab = location.hash
    }
  },
  methods: {
    // toggle_theme () {
    //   if (this.settingsTheme === 'light') {
    //     this.$vuetify.theme.dark = false
    //   } else if (this.settingsTheme === 'dark') {
    //     this.$vuetify.theme.dark = true
    //   } else {
    //     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //       this.$vuetify.theme.dark = true
    //     } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    //       this.$vuetify.theme.dark = false
    //     }
    //     const listeners = {
    //       dark (mediaQueryList) {
    //         if (mediaQueryList.matches) {
    //           this.$vuetify.theme.dark = true
    //         }
    //       },
    //       light (mediaQueryList) {
    //         if (mediaQueryList.matches) {
    //           this.$vuetify.theme.dark = false
    //         }
    //       }
    //     }
    //     window.matchMedia('(prefers-color-scheme: dark)').addListener(listeners.dark)
    //     window.matchMedia('(prefers-color-scheme: light)').addListener(listeners.light)
    //   }
    // }
  }

}
</script>
