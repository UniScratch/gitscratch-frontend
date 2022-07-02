<template>
  <v-card v-ripple :to="'/projects/' + projectId">
    <v-hover v-slot="{ hover }">
      <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="projectThumbnail" style="width: 100%;" class="img-hoverable">
        <v-slide-y-reverse-transition>
          <v-container
            v-if="hover"
            style="font-size: 1vw;"
          >
            <v-chip
              class="v-chip-opacity"
              small
              class="chip-with-background"
            >
              <v-icon class="v-icon-proj-card" left>
                mdi-history
              </v-icon>
              2022/5/28 14:39
            </v-chip>
            <v-chip
              class="v-chip-opacity"
              small
              class="chip-with-background"
            >
              <v-icon class="v-icon-proj-card" left>
                mdi-eye-outline
              </v-icon>
              345
            </v-chip>
            <v-chip
              class="v-chip-opacity"
              small
              class="chip-with-background"
            >
              <v-icon class="v-icon-proj-card" left>
                mdi-star-outline
              </v-icon>
              456
            </v-chip>
            <v-chip
              class="v-chip-opacity"
              small
              class="chip-with-background"
            >
              <v-icon class="v-icon-proj-card" left>
                mdi-source-branch
              </v-icon>
              567
            </v-chip>
            <!-- <span class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 5%; color: white; font-size: 10px; padding: 0 5px;">
              <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-history</v-icon>
              2022/5/28 14:39
            </span>
            <span class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 25%; color: white; font-size: 10px; padding: 0 5px;">
              <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-eye-outline</v-icon>
              345
            </span>
            <span class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 45%; color: white; font-size: 10px; padding: 0 5px;">
              <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-star-outline</v-icon>
              456
            </span>
            <span class="rounded-pill" style="left: 3%; position: absolute; background-color: #000000; opacity: .4; bottom: 65%; color: white; font-size: 10px; padding: 0 5px;">
              <v-icon style="font-size: 10px;color: white;margin-bottom: 1px;">mdi-source-branch</v-icon>
              567
            </span> -->

            <!-- <v-icon>mdi-calendar-outline</v-icon>
            2022/5/28 14:39 -->
          </v-container>
          <!-- <div
            v-if="hover"
            color="primary"
            style="height: 100%; background-color: #272727c8 !important;
    backdrop-filter: brightness(80%) blur(14px) !important;"
          >

          </div> -->
        </v-slide-y-reverse-transition>
      </v-img>
    </v-hover>
    <v-card-title style="padding-bottom: 0;">
      {{ projectTitle }}
    </v-card-title>
    <client-only>
      <v-card-actions>
        <v-chip
          link
          :to="'/users/' + projectAuthor"
          color="transparent"
        >
          <v-avatar left>
            <v-img :src="projectAuthorAvatar" />
          </v-avatar>
          {{ projectAuthor }}
        </v-chip>
      </v-card-actions>
    </client-only>
  </v-card>
</template>
<script>
export default {

  data: () => ({
    projectTitle: '标题',
    projectAuthor: '作者',
    projectAuthorAvatar: '/GitScratch-icon-background-blue.svg',
    projectThumbnail: '/480x360.jpg',
    projectId: 1
  }),
  methods: {
  }
}
</script>
<style>
  .v-icon-proj-card {
    font-size: 19px !important;
  }
</style>
