<template>
  <v-card v-ripple :to="'/projects/' + project_id">
    <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="project_thumbnail" style="width: 100%;" />
    <v-card-title style="padding-bottom: 0;">
      {{ project_title }}
    </v-card-title>
    <client-only>
      <v-card-actions>
        <v-chip
          link
          ripple
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
  name: 'ProjectCard',

  data: () => ({
    project_title: '标题',
    project_author: '作者',
    project_author_avatar: '/GitScratch-icon-background-blue.svg',
    project_thumbnail: 'https://sdfsdf.dev/480x360.jpg,E3F2FD,2196F3',
    project_id: 1
  })
}
</script>
