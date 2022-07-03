<template>
  <div style="margin-bottom: 24px; margin-top: 8px;">
    <v-row>
      <v-col v-for="i in 6" :key="i" cols="6" lg="2" sm="4">
        <ProjectCard />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue'

export default {
  components: {
    ProjectCard
  }
}
</script>
