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
        <ProjectGroup title="精选作品" />
        <ProjectGroup title="热门作品" />
    </div>
</template>

<script>
import Carousel from '/src/components/Carousel.vue'
import SideBanner from '/src/components/SideBanner.vue'
import ProjectGroup from '/src/components/ProjectGroup.vue'

export default {
    name: 'App',
    components: {
        Carousel,
        SideBanner,
        ProjectGroup,
    },

    data: () => ({
        //
    }),
};
</script>
