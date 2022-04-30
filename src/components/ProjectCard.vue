<template>
        <v-card v-ripple v-bind:to="'/project/' + project_id">
            <v-img lazy-src="/GitScratch-project-thumbnail-grey.svg" v-bind:src="project_thumbnail" style="width: 100%;"></v-img>
            <v-card-title style="padding-bottom: 0;">{{ project_title }}</v-card-title>
            <v-card-actions>
                <v-btn text v-bind:to="'/user/' + project_author">
                    <v-avatar size="32">
                        <v-img lazy-src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjI5LjQgMjI5LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyOS40IDIyOS40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojOUZBMEEwO30NCgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMTE0LjdDMCw1MS40LDUxLjQsMCwxMTQuNywwczExNC43LDUxLjQsMTE0LjcsMTE0LjdzLTUxLjQsMTE0LjctMTE0LjcsMTE0LjdTMCwxNzguMSwwLDExNC43eiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTExOC41LDEwMC44SDgxLjZjLTcuNywwLTEzLjksNi4xLTEzLjksMTMuOWMwLDcuNyw2LjIsMTMuOSwxMy45LDEzLjloMzYuOXYxOC42SDgxLjYNCgljLTE4LDAtMzIuNS0xNC41LTMyLjUtMzIuNXMxNC41LTMyLjUsMzIuNS0zMi41aDM2LjlMMTE4LjUsMTAwLjh6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQzLjYsOTIuNGMwLDQuMi0yLjUsNy43LTYsOS4zdjExLjFjMi4zLTEuNCw1LjItMi4yLDguMS0yLjJoMTIuMmM0LjQsMCw4LjEtMy43LDguMS04LjF2LTAuOQ0KCWMtMy42LTEuNy02LTUuMi02LTkuM2MwLTUuNiw0LjUtMTAuMiwxMC4yLTEwLjJjNS42LDAsMTAuMiw0LjUsMTAuMiwxMC4yYzAsNC4yLTIuNSw3LjctNiw5LjN2MC45YzAsOC45LTcuMiwxNi4zLTE2LjMsMTYuM2gtMTIuMg0KCWMtNC40LDAtOC4xLDMuNy04LjEsOC4xdjAuOWMzLjYsMS41LDYsNS4yLDYsOS4zYzAsNS42LTQuNSwxMC4yLTEwLjIsMTAuMmMtNS42LDAtMTAuMi00LjUtMTAuMi0xMC4yYzAtNC4yLDIuNS03LjgsNi05LjN2LTI2LjENCgljLTMuNi0xLjctNi01LjItNi05LjNjMC01LjYsNC41LTEwLjIsMTAuMi0xMC4yQzEzOSw4Mi4yLDE0My42LDg2LjcsMTQzLjYsOTIuNEwxNDMuNiw5Mi40eiBNMTMzLjQsOTUuNGMxLjcsMCwzLjEtMS40LDMuMS0zLjENCgljMC0xLjctMS40LTMuMS0zLjEtMy4xYy0xLjcsMC0zLjEsMS40LTMuMSwzLjFDMTMwLjMsOTQsMTMxLjcsOTUuNCwxMzMuNCw5NS40eiBNMTcwLDg5LjRjLTEuNywwLTMuMSwxLjQtMy4xLDMuMQ0KCWMwLDEuNywxLjQsMy4xLDMuMSwzLjFjMS43LDAsMy4xLTEuNCwzLjEtMy4xQzE3Myw5MC42LDE3MS43LDg5LjQsMTcwLDg5LjR6IE0xMzMuNCwxNDAuMWMxLjcsMCwzLjEtMS40LDMuMS0zLjENCgljMC0xLjctMS40LTMuMS0zLjEtMy4xYy0xLjcsMC0zLjEsMS40LTMuMSwzLjFDMTMwLjQsMTM4LjgsMTMxLjcsMTQwLjEsMTMzLjQsMTQwLjF6Ii8+DQo8L3N2Zz4NCg==" v-bind:src="project_author_avatar" />
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
        project_author_avatar: "/GitScratch-icon-background-blue.svg",
        project_thumbnail: "https://sdfsdf.dev/480x360.jpg,E3F2FD,2196F3",
        project_id: 1,
    }),
}

</script>
