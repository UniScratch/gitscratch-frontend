<template>
  <div>
    <v-row style="margin-bottom: 8px;">
      <v-col cols="12" sm="9">
        <Carousel />
        <!-- <v-sheet rounded="lg" min-height="268"></v-sheet> -->
      </v-col>

      <v-col cols="12" sm="3">
        <SideBanner />
        <!-- <v-sheet min-height="70vh" rounded="lg"></v-sheet> -->
      </v-col>
    </v-row>
    <div class="d-flex">
      <p class="text-h5" style="margin: 0;">
        精选作品
      </p>
      <v-spacer />
      <v-btn to="/explore?type=selected" text rounded>
        更多
        <v-icon right>
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </div>
    <ProjectGroup />
    <div class="d-flex">
      <p class="text-h5" style="margin: 0;">
        热门作品
      </p>
      <v-spacer />
      <v-btn to="/explore?sort=views&from=30" text rounded>
        更多
        <v-icon right>
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </div>
    <ProjectGroup />
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  head () {
    return {
      titleTemplate: 'GitScratch'
    }
  }
}
</script>
