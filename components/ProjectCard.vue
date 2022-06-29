<template>
  <v-card v-ripple :to="'/projects/' + project_id" @mouseenter="upHeight()" @mouseleave="downHeight()">
    <v-hover v-slot="{ hover }">
      <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="project_thumbnail" style="width: 100%;">
        <span ref="viewTimes" class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 5%; color: white; font-size: 10px; padding: 0 5px; transition: bottom 0.4s;">
          <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-eye-outline</v-icon>
          345
        </span>
        <v-fade-transition>
          <v-container v-if="hover" style="font-size: 1vw;">
            <span class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 5%; color: white; font-size: 10px; padding: 0 5px;">
              <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-history</v-icon>
              2022/5/28 14:39
            </span>
            <span class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 25%; color: white; font-size: 10px; padding: 0 5px;">
              <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-star-outline</v-icon>
              456
            </span>
            <span class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 45%; color: white; font-size: 10px; padding: 0 5px;">
              <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-source-branch</v-icon>
              567
            </span>

            <!--<v-icon>mdi-calendar-outline</v-icon>
            2022/5/28 14:39-->
          </v-container>
          <!-- <div
            v-if="hover"
            color="primary"
            style="height: 100%; background-color: #272727c8 !important;
    backdrop-filter: brightness(80%) blur(14px) !important;"
          >

          </div> -->
        </v-fade-transition>
      </v-img>
    </v-hover>
    <v-card-title style="padding-bottom: 0;">
      {{ project_title }}
    </v-card-title>
    <client-only>
      <v-card-actions>
        <v-chip
          link
          :to="'/users/' + project_author"
          color="transparent"
        >
          <v-avatar left>
            <v-img :src="project_author_avatar" />
          </v-avatar>
          {{ project_author }}
        </v-chip>
      </v-card-actions>
    </client-only>
  </v-card>
</template>
<script>
export default {

  data: () => ({
    project_title: '标题',
    project_author: '作者',
    project_author_avatar: '/GitScratch-icon-background-blue.svg',
    project_thumbnail: 'https://sdfsdf.dev/480x360.jpg,E3F2FD,2196F3',
    project_id: 1
  }),
  methods: {
    upHeight () {
      this.$refs.viewTimes.style.bottom = '65%'
    },
    downHeight () {
      this.$refs.viewTimes.style.bottom = '5%'
    }
  }
}
</script>
