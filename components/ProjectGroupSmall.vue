<template>
  <div style="margin-bottom: 24px;">
    <p class="text-h5">
      {{ title }}
    </p>
    <v-row>
      <v-col v-for="i in 6" :key="i" cols="6" lg="2" sm="4">
        <v-card v-ripple :to="'/projects/' + projectId">
          <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" :src="projectThumbnail" style="width: 100%;" />
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
                  <v-img :src="projectAuthor_avatar" />
                </v-avatar>
                {{ projectAuthor }}
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
    projectTitle: '标题',
    projectAuthor: '作者',
    projectAuthor_avatar: '/GitScratch-icon-background-blue.svg',
    projectThumbnail: 'https://sdfsdf.dev/480x360.jpg,E3F2FD,2196F3',
    projectId: 1
  })
}
</script>
