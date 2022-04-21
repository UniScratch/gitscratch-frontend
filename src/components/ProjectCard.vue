<template>
    <v-card>
        <v-img lazy-src="/GitScratch-icon-white.svg" v-bind:src="project_thumbnail" style="width: 100%;"></v-img>
        <v-card-title style="padding-bottom: 0;">{{ project_title }}</v-card-title>
        <v-card-actions>
            <v-btn text v-bind:href="'/user/' + project_author">
                <v-avatar size="32">
                    <img v-bind:src="project_author_avatar" />
                </v-avatar>
                <span style="margin-left: 8px;">{{ project_author }}</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: 'ProjectCard',

    data: () => ({
        project_title: "标题",
        project_author: "作者",
        project_author_avatar: "/favicon.ico",
        project_thumbnail: "https://sdfsdf.dev/480x360.jpg,FFFFFF,000000",

    }),
}

</script>
