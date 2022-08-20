<template>
  <v-card style="margin-bottom: 15px">
    <div class="d-flex flex-no-wrap">
      <v-avatar
        class="ma-2"
        size="134"
        rounded
        height="134"
        :width="134/3*4"
      >
        <v-img :src="$utils.getAssetUrl(projectData.head.thumbnail)" />
      </v-avatar>
      <div>
        <v-card-title
          class="text-h5"
        >
          <router-link :to="'/projects/' + projectData.id" class="project-title">
            {{ projectData.title }}
          </router-link>
        </v-card-title>

        <v-card-subtitle>
          {{ new Date(projectData.head.time * 1000).format("yyyy-MM-dd hh:mm:ss") }}
        </v-card-subtitle>
        <v-card-actions>
          <v-chip
            :to="'/users/' + projectData.author.id"
            outlined
            class="v-chip-opacity"
          >
            <v-avatar left>
              <v-img :src="$utils.getAssetUrl(projectData.author.avatar)" />
            </v-avatar>
            {{ projectData.author.name }}
          </v-chip>
          <br>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-project-card" left>
              mdi-eye-outline
            </v-icon>
            {{ projectData.view }}
          </v-chip>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-project-card" left>
              mdi-star-outline
            </v-icon>
            {{ projectData.star }}
          </v-chip>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-project-card" left>
              mdi-heart-outline
            </v-icon>
            {{ projectData.like }}
          </v-chip>
          <v-chip
            class="v-chip-opacity"
            outlined
          >
            <v-icon class="v-icon-project-card" left>
              mdi-source-branch
            </v-icon>
            567
          </v-chip>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    projectData: {
      type: Object,
      default: () => ({
      })
    }
  },
  data: () => ({
  }),
  mounted () {
    console.log(this.projectData)
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
