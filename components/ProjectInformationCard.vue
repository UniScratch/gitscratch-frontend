<template>
  <v-card class="d-flex">
    <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="projectThumbnail" style="max-width: 240px; border-radius: 20px;" />
    <div>
      <v-card-title style="padding-bottom: 0;">
        <router-link :to="'/users/' + projectAuthor">
          {{ projectAuthor }}
        </router-link>
        <span>&nbsp;/&nbsp;</span>
        <router-link :to="'/projects/' + projectId">
          {{ projectTitle }}
        </router-link>
      </v-card-title>
      <p style="margin-left: 8px;">
        <v-icon>mdi-history</v-icon>
        <span>{{ projectUpdateTime }}</span>
        <v-icon>mdi-eye-outline</v-icon>
        <span>{{ projectViews }}</span>
        <v-icon>mdi-star-outline</v-icon>
        <span>{{ projectStars }}</span>
        <v-icon>mdi-source-branch</v-icon>
        <span>{{ projectForks }}</span>
      </p>
      <v-card-text>
        {{ projectDesc }}
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    projectTitle: '标题',
    projectAuthor: '作者',
    projectThumbnail: '/480x360.jpg',
    projectId: 1,
    projectDesc: '作品描述',
    projectStars: 0,
    projectViews: 0,
    projectForks: 0,
    projectUpdateTime: '2020-05-28 14:39'
  })
}
</script>
