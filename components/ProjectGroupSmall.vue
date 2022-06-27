<template>
  <div style="margin-bottom: 24px;">
    <p class="text-h5">
      {{ title }}
    </p>
    <v-row>
      <v-col v-for="i in 6" :key="i" cols="6" lg="2" sm="4">
        <v-card v-ripple :to="'/projects/' + project_id">
          <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="project_thumbnail" style="width: 100%;" />
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
      </v-col>
    </v-row>
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
    project_title: '标题',
    project_author: '作者',
    project_author_avatar: '/GitScratch-icon-background-blue.svg',
    project_thumbnail: 'https://sdfsdf.dev/480x360.jpg,E3F2FD,2196F3',
    project_id: 1
  })
}
</script>
