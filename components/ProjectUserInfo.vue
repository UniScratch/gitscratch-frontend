<template>
  <v-card>
    <v-list-item three-line :to="'/users/' + project_author">
      <v-list-item-avatar
        size="80"
      >
        <v-avatar :src="project_author_avatar" size="80" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h4 text--primary">
          {{ project_author }}
        </v-list-item-title>
        <v-list-item-subtitle>Lorem sit deserunt adipisicing anim cupidatat mollit exercitation non mollit voluptate. Ad esse non veniam Lorem sint et. </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn block color="primary" depressed>
        <v-icon>mdi-plus</v-icon>
        关注
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',

  data: () => ({
    project_author: '作者',
    project_author_avatar: '/GitScratch-icon-background-blue.svg'
  })
}
</script>
