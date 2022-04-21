<template>
    <v-app>
        <v-main>
            <Appbar />
            <v-container>
                <v-row style="margin-bottom: 8px;">
                    <v-col cols="12" sm="9" height="350">
                        <Carousel style="height: 100% !important;"/>
                        <!-- <v-sheet rounded="lg" min-height="268"></v-sheet> -->
                    </v-col>

                    <v-col cols="12" sm="3" height="350">
                        <SideBanner style="height: 100% !important;"/>
                        <!-- <v-sheet min-height="70vh" rounded="lg"></v-sheet> -->
                    </v-col>
                </v-row>
                <ProjectGroup title="精选作品" />
                <ProjectGroup title="热门作品" />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue'
import Carousel from './components/Carousel.vue'
import SideBanner from './components/SideBanner.vue'
import ProjectGroup from './components/ProjectGroup.vue'

export default {
    name: 'App',

    components: {
        Appbar,
        Carousel,
        SideBanner,
        ProjectGroup,
    },

    data: () => ({
        //
    }),
};
</script>
