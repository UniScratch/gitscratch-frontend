<template>
  <v-card :to="'/users/' + project_author">
    <v-list-item three-line>
      <v-list-item-avatar
        size="80"
      >
        <v-avatar style="width: auto; height: auto; max-width: 200px;">
          <v-img :src="project_author_avatar" size="80" />
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ project_author }}
          <v-tooltip v-if="project_author_is_verified" bottom>
            <template #activator="{ on, attrs }">
              <v-icon style="margin-top: -5px;" :color="project_author_verify_color" v-bind="attrs" v-on="on">
                mdi-check-decagram-outline
              </v-icon>
            </template>
            <span>{{ project_author_verify_categories }}</span>
          </v-tooltip>
          <v-tooltip v-if="project_author_is_muted" bottom>
            <template #activator="{ on, attrs }">
              <v-icon style="margin-top: -5px;" color="rgba(255, 87, 34)" v-bind="attrs" v-on="on">
                mdi-comment-remove-outline
              </v-icon>
            </template>
            <span>作者被禁言, 剩余 {{ project_author_mute_remain }} 天解禁</span>
          </v-tooltip>
        </v-list-item-title>
        <span class="level-span">Lv. {{ project_author_level }}</span>
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
    project_author_avatar: '/GitScratch-icon-background-blue.svg',
    project_author_level: 1,
    project_author_is_verified: true,
    project_author_verify_categories: '社区官方认证',
    project_author_verify_color: 'rgba(33, 150, 243)',
    project_author_is_muted: true,
    project_author_mute_remain: '-1'
  })
}
</script>
<style>
.level-span{
  position: absolute;
  text-align: center;
  max-width: 52px;
  padding-right: 8px;
  padding-left: 8px;
  height: 20px;
  background-color: rgba(34, 149, 242);
  color: white;
  border-radius: 20px;
  font-size: 12px;
  padding-top: 3px;
  top: 20%;
  right: 5%;
}
</style>
