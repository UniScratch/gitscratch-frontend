<template>
  <v-card>
    <v-window v-model="onboarding">
      <v-window-item v-for="n in length" :key="`card-${n}`">
        <v-img src="/GitScratch-carousel-21-9.svg" eager contain class="hidden-sm-and-down" />
        <v-img src="/GitScratch-carousel-16-9.svg" eager contain class="hidden-md-and-up" />
        <div class="banner-text">
          <v-list-item-title class="banner-text-title">
            GitScratch
          </v-list-item-title>
          <v-list-item-subtitle class="banner-text-subtitle">
            Endless Possiblities with GitScratch. <br>
            与 GitScratch 共赴诗和远方。
          </v-list-item-subtitle>
        </div>
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
<style>
.banner-text {
  position: absolute;
  bottom: 20px;
  margin-left: 20px;
}
.banner-text-title {
  font-size: 34px ;
  font-weight: bolder;
}
.banner-text-subtitle {
  font-size: 15px;
  color: #000A
}
</style>
