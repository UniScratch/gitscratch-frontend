<template>
  <v-card :to="'/users/' + projectAuthor">
    <v-list-item three-line>
      <v-list-item-avatar
        size="80"
      >
        <v-avatar style="width: auto; height: auto; max-width: 200px;">
          <v-img :src="projectAuthorAvatar" size="80" />
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          {{ projectAuthor }}
          <v-tooltip v-if="projectAuthorIsVerified" bottom>
            <template #activator="{ on, attrs }">
              <v-icon style="margin-top: -5px;" :color="projectAuthorVerifyColor" v-bind="attrs" v-on="on">
                mdi-check-decagram-outline
              </v-icon>
            </template>
            <span>{{ projectAuthorVerifyCategories }}</span>
          </v-tooltip>
          <v-tooltip v-if="projectAuthorIsMuted" bottom>
            <template #activator="{ on, attrs }">
              <v-icon style="margin-top: -5px;" color="rgba(255, 87, 34)" v-bind="attrs" v-on="on">
                mdi-comment-remove-outline
              </v-icon>
            </template>
            <span>作者被禁言, 剩余 {{ projectAuthorMuteRemain }} 天解禁</span>
          </v-tooltip>
        </v-list-item-title>
        <span class="level-span">Lv. {{ projectAuthorLevel }}</span>
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
    projectAuthor: '作者',
    projectAuthorAvatar: '/GitScratch-icon-background-blue.svg',
    projectAuthorLevel: 1,
    projectAuthorIsVerified: true,
    projectAuthorVerifyCategories: '社区官方认证',
    projectAuthorVerifyColor: 'rgba(33, 150, 243)',
    projectAuthorIsMuted: true,
    projectAuthorMuteRemain: '-1'
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
