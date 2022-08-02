<template>
  <v-card>
    <div v-if="$vuetify.breakpoint.xs">
      <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="projectThumbnail" style="border-radius: 20px;" contain eager />
      <div style="padding: 16px;">
        <p class="text-h5">
          <router-link :to="'/users/' + projectAuthor">
            {{ projectAuthor }}
          </router-link>
          <span>&nbsp;/&nbsp;</span>
          <router-link :to="'/projects/' + projectId">
            {{ projectTitle }}
          </router-link>
        </p>
        <p>
          <v-icon>mdi-history</v-icon>
          <span>{{ projectUpdateTime }}</span>
          <v-icon>mdi-eye-outline</v-icon>
          <span>{{ projectViews }}</span>
          <v-icon>mdi-star-outline</v-icon>
          <span>{{ projectStars }}</span>
          <v-icon>mdi-source-branch</v-icon>
          <span>{{ projectForks }}</span>
        </p>
        <p>{{ projectDesc }}</p>
      </div>
    </div>
    <div v-if="!$vuetify.breakpoint.xs" class="d-flex">
      <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="projectThumbnail" style="max-width: 240px; border-radius: 20px;" contain eager />
      <div style="padding: 16px;">
        <p class="text-h5">
          <router-link :to="'/users/' + projectAuthorId">
            {{ projectAuthor }}
          </router-link>
          <span>&nbsp;/&nbsp;</span>
          <router-link :to="'/projects/' + projectId">
            {{ projectTitle }}
          </router-link>
        </p>
        <p>
          <v-icon>mdi-history</v-icon>
          <span>{{ projectUpdateTime }}</span>
          <v-icon>mdi-eye-outline</v-icon>
          <span>{{ projectViews }}</span>
          <v-icon>mdi-star-outline</v-icon>
          <span>{{ projectStars }}</span>
          <v-icon>mdi-source-branch</v-icon>
          <span>{{ projectForks }}</span>
        </p>
        <p>{{ projectDesc }}</p>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    projectTitle: '标题',
    projectAuthor: '作者',
    projectAuthorId: 1,
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
