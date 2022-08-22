<template>
  <v-card style="margin-bottom: 15px">
    <div class="d-flex flex-no-wrap">
      <!-- <v-avatar
        class="ma-2"
        size="134"
        rounded
        height="134"
        :width="134/3*4"
      >
        <v-img :src="$utils.getAssetUrl(postData.head.thumbnail)" />
      </v-avatar> -->
      <div>
        <v-card-title
          class="text-h5"
        >
          <router-link :to="'/forum/' + postData.id" class="project-title">
            {{ postData.title }}
          </router-link>
        </v-card-title>

        <v-card-subtitle>
          帖子内容
        </v-card-subtitle>
        <v-card-actions>
          <v-chip
            :to="'/users/' + postData.author.id"
            outlined
            class="v-chip-opacity"
          >
            <v-avatar left>
              <v-img :src="$utils.getAssetUrl(postData.author.avatar)" />
            </v-avatar>
            {{ postData.author.name }}
          </v-chip>
          <br>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            {{ new Date(postData.head.time * 1000).format("yyyy-MM-dd hh:mm:ss") }}
          </v-chip>
          <!-- <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-post-card" left>
              mdi-eye-outline
            </v-icon>
            {{ postData.view }}
          </v-chip>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-post-card" left>
              mdi-star-outline
            </v-icon>
            {{ postData.star }}
          </v-chip>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-post-card" left>
              mdi-heart-outline
            </v-icon>
            {{ postData.like }}
          </v-chip>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-post-card" left>
              mdi-source-branch
            </v-icon>
            567
          </v-chip> -->
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    postData: {
      type: Object,
      default: () => ({
      })
    }
  },
  data: () => ({
  }),
  mounted () {
    console.log(this.postData)
  }
}
</script>
<style>
.v-chip-opacity {
  border: unset !important;
}
.v-chip--active:hover::before,
.v-chip--active::before {
  opacity: 0 !important;
}
</style>
