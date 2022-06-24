<template>
  <v-card v-ripple :to="'/projects/' + project_id">
    <v-hover v-slot="{ hover }">
      <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="project_thumbnail" style="width: 100%;">
        <v-fade-transition>
          <v-card
            v-if="hover"
            style="height: 100%; border-radius: 0px;"
            class="cardblur"
          >
            <v-container>
              <v-icon>mdi-eye-outline</v-icon>
              345
              <br>
              <v-icon>mdi-star-outline</v-icon>
              456
              <br>
              <v-icon>mdi-source-branch</v-icon>
              567
              <br>
              <v-icon>mdi-calendar-outline</v-icon>
              2022/5/28 14:39
            </v-container>
          </v-card>
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
  })
}
</script>
