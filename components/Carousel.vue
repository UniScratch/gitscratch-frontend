<template>
  <v-card min-height="350">
    <v-window v-model="onboarding">
      <v-window-item v-for="n in length" :key="`card-${n}`">
        <v-img src="/GitScratch-thumbnail.jpg" height="294" />
      </v-window-item>
    </v-window>

    <v-card-actions>
      <v-item-group v-model="onboarding" class mandatory>
        <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
          <v-btn
            :color="active ? 'primary' : 'grey_background'"
            depressed
            rounded
            :style="active ? 'width: 32px; height: 16px; padding: 0px; transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);' : 'min-width: 16px; width: 16px; height: 16px; padding: 0px; transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);'"
            class="ml-2"
            @click="toggle"
          />
        </v-item>
      </v-item-group>

      <v-spacer />
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" @click="prev" v-on="on">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <span>上一页</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" @click="next" v-on="on">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </template>
        <span>下一页</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    length: 5,
    onboarding: 0
  }),

  methods: {
    next () {
      this.onboarding = this.onboarding + 1 === this.length
        ? 0
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0
        ? this.length - 1
        : this.onboarding - 1
    }
  }
}
</script>
