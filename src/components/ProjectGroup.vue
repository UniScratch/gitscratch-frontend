<template>
    <div style="margin-bottom: 24px;">
        <p class="text-h5">{{ title }}</p>
        <v-row>
            <v-col cols="6" lg="2" sm="4" v-for="i in 6" :key="i"><ProjectCard /></v-col>
        </v-row>
    </div>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    name: 'ProjectGroup',
    props: ["title"],
    components: {
        ProjectCard,
    },
}
</script>
