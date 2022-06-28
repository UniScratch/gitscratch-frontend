<template>
  <v-card :to="'/users/' + project_author">
    <v-list-item three-line>
      <v-list-item-avatar
        size="80"
      >
        <v-avatar style="width: 100%; height: auto; max-width: 200px;">
          <v-img :src="project_author_avatar" size="80" />
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ project_author }}
        </v-list-item-title>
        <v-list-item-subtitle>Lorem sit deserunt adipisicing anim cupidatat mollit exercitation non mollit voluptate. Ad esse non veniam Lorem sint et. </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn block color="primary" depressed rounded>
        <v-icon>mdi-plus</v-icon>
        关注
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

  data: () => ({
    project_author: '作者',
    project_author_avatar: '/GitScratch-icon-background-blue.svg'
  })
}
</script>
