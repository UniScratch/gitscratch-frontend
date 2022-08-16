<template>
  <div style="margin-bottom: 24px;">
    <p class="text-h5">
      {{ title }}
    </p>
    <v-card>
      <div class="d-flex flex-no-wrap">
        <v-avatar
          class="ma-2"
          size="134"
          rounded
          height="134"
          :width="134/3*4"
        >
          <v-img :src="projectThumbnail" />
        </v-avatar>
        <div>
          <v-card-title
            class="text-h5"
          >
            <router-link :to="'/projects/' + projectId" class="project-title">
              Title
            </router-link>
          </v-card-title>

          <v-card-subtitle>
            2022/5/28 14:39
          </v-card-subtitle>
          <v-card-actions>
            <v-chip
              link
              :to="'/users/' + projectAuthorId"
              color="transparent"
            >
              <v-avatar left>
                <v-img :src="projectAuthor_avatar" />
              </v-avatar>
              {{ projectAuthor }}
            </v-chip>
            <br>
            <!-- <v-icon>mdi-eye-outline</v-icon>
            <span>123</span>
            <v-icon>mdi-star-outline</v-icon>
            <span>123</span>
            <v-icon>mdi-source-branch</v-icon>
            <span>123</span> -->
            <v-chip
              class="v-chip-opacity"
              outlined
            >
              <v-icon class="v-icon-project-card" left>
                mdi-eye-outline
              </v-icon>
              345
            </v-chip>
            <v-chip
              class="v-chip-opacity"
              outlined
            >
              <v-icon class="v-icon-project-card" left>
                mdi-star-outline
              </v-icon>
              456
            </v-chip>
            <v-chip
              class="v-chip-opacity"
              outlined
            >
              <v-icon class="v-icon-project-card" left>
                mdi-source-branch
              </v-icon>
              567
            </v-chip>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  },
  data: () => ({
    projectTitle: '标题',
    projectAuthor: '作者',
    projectAuthorId: 1,
    projectAuthor_avatar: '/GitScratch-icon-background-blue.svg',
    projectThumbnail: '/480x360.jpg',
    projectId: 1
  })
}
</script>
<style>
.v-chip-opacity {
  border: unset !important;
}
</style>
