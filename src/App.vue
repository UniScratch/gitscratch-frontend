<template>
    <v-app>
        <v-main>
            <Appbar />
            <v-container>
                <v-row style="margin-bottom: 8px;">
                    <v-col cols="9" height="350">
                        <Carousel style="height: 100% !important;"/>
                        <!-- <v-sheet rounded="lg" min-height="268"></v-sheet> -->
                    </v-col>

                    <v-col cols="3" height="350">
                        <SideBanner style="height: 100% !important;"/>
                        <!-- <v-sheet min-height="70vh" rounded="lg"></v-sheet> -->
                    </v-col>
                </v-row>
                <div style="margin-bottom: 24px;">
                    <p class="text-h5">精选作品</p>
                    <ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard /><ProjectCard />
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue'
import Carousel from './components/Carousel.vue'
import SideBanner from './components/SideBanner.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
    name: 'App',

    components: {
        Appbar,
        Carousel,
        SideBanner,
        ProjectCard,
    },

    data: () => ({
        //
    }),
};
</script>
