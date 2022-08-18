<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-avatar
        size="60"
      >
        <Avatar :data="userData" size="60" v-bind="attrs" v-on="on" />
        <!-- <v-avatar style="width: auto; height: auto; max-width: 200px;">
          <v-img :src="$utils.getAvatarUrl(userData.avatar)" size="60" />
        </v-avatar> -->
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          <nuxt-link :to="'/users/' + userData.id" class="project-title">
            {{ userData.name }}
          </nuxt-link>
          <v-tooltip v-if="userData.verified !== 0" bottom>
            <template #activator="{ on, attrs }">
              <v-icon color="rgba(33,150,243)" v-bind="attrs" v-on="on">
                mdi-check-decagram-outline
              </v-icon>
            </template>
            <span>社区官方认证</span>
          </v-tooltip>
          <v-tooltip v-if="userData.muted !== 0" bottom>
            <template #activator="{ on, attrs }">
              <v-icon color="rgb(255, 87, 34)" v-bind="attrs" v-on="on">
                mdi-comment-remove-outline
              </v-icon>
            </template>
            <span>账户被禁言，{{ userData.muted }} 天后解禁</span>
          </v-tooltip>
          <v-tooltip v-if="userData.banned !== 0" bottom>
            <template #activator="{ on, attrs }">
              <v-icon color="rgb(238, 54, 37)" v-bind="attrs" v-on="on">
                mdi-gavel
              </v-icon>
            </template>
            <span>帐户被封禁，{{ userData.banned }} 天后解禁</span>
          </v-tooltip>
        </v-list-item-title>
        <span class="level-span">Lv. {{ userData.level }}</span>
        <v-list-item-subtitle>{{ userData.bio }}</v-list-item-subtitle>
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
  props: {
    userData: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    projectAuthor: '作者',
    projectAuthorId: 1,
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
