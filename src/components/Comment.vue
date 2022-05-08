<template>
    <v-card style="padding: 16px;" class="d-flex">
        <v-avatar>
            <v-img v-bind:src="comment_author_avatar" lazy-src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjI5LjQgMjI5LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyOS40IDIyOS40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojOUZBMEEwO30NCgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMTE0LjdDMCw1MS40LDUxLjQsMCwxMTQuNywwczExNC43LDUxLjQsMTE0LjcsMTE0LjdzLTUxLjQsMTE0LjctMTE0LjcsMTE0LjdTMCwxNzguMSwwLDExNC43eiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTExOC41LDEwMC44SDgxLjZjLTcuNywwLTEzLjksNi4xLTEzLjksMTMuOWMwLDcuNyw2LjIsMTMuOSwxMy45LDEzLjloMzYuOXYxOC42SDgxLjYNCgljLTE4LDAtMzIuNS0xNC41LTMyLjUtMzIuNXMxNC41LTMyLjUsMzIuNS0zMi41aDM2LjlMMTE4LjUsMTAwLjh6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQzLjYsOTIuNGMwLDQuMi0yLjUsNy43LTYsOS4zdjExLjFjMi4zLTEuNCw1LjItMi4yLDguMS0yLjJoMTIuMmM0LjQsMCw4LjEtMy43LDguMS04LjF2LTAuOQ0KCWMtMy42LTEuNy02LTUuMi02LTkuM2MwLTUuNiw0LjUtMTAuMiwxMC4yLTEwLjJjNS42LDAsMTAuMiw0LjUsMTAuMiwxMC4yYzAsNC4yLTIuNSw3LjctNiw5LjN2MC45YzAsOC45LTcuMiwxNi4zLTE2LjMsMTYuM2gtMTIuMg0KCWMtNC40LDAtOC4xLDMuNy04LjEsOC4xdjAuOWMzLjYsMS41LDYsNS4yLDYsOS4zYzAsNS42LTQuNSwxMC4yLTEwLjIsMTAuMmMtNS42LDAtMTAuMi00LjUtMTAuMi0xMC4yYzAtNC4yLDIuNS03LjgsNi05LjN2LTI2LjENCgljLTMuNi0xLjctNi01LjItNi05LjNjMC01LjYsNC41LTEwLjIsMTAuMi0xMC4yQzEzOSw4Mi4yLDE0My42LDg2LjcsMTQzLjYsOTIuNEwxNDMuNiw5Mi40eiBNMTMzLjQsOTUuNGMxLjcsMCwzLjEtMS40LDMuMS0zLjENCgljMC0xLjctMS40LTMuMS0zLjEtMy4xYy0xLjcsMC0zLjEsMS40LTMuMSwzLjFDMTMwLjMsOTQsMTMxLjcsOTUuNCwxMzMuNCw5NS40eiBNMTcwLDg5LjRjLTEuNywwLTMuMSwxLjQtMy4xLDMuMQ0KCWMwLDEuNywxLjQsMy4xLDMuMSwzLjFjMS43LDAsMy4xLTEuNCwzLjEtMy4xQzE3Myw5MC42LDE3MS43LDg5LjQsMTcwLDg5LjR6IE0xMzMuNCwxNDAuMWMxLjcsMCwzLjEtMS40LDMuMS0zLjENCgljMC0xLjctMS40LTMuMS0zLjEtMy4xYy0xLjcsMC0zLjEsMS40LTMuMSwzLjFDMTMwLjQsMTM4LjgsMTMxLjcsMTQwLjEsMTMzLjQsMTQwLjF6Ii8+DQo8L3N2Zz4NCg==" />
        </v-avatar>
        <v-divider vertical style="margin: 0 8px;"></v-divider>
        <div class="flex-grow-1">
            <router-link v-bind:to="'/users/' + comment_author_name">{{ comment_author_name }}</router-link>
            <span style="margin-left: 8px; color: #888;">发布于 {{ comment_time }}</span>
            <v-divider style="margin: 8px 0;"></v-divider>
            <div v-html="renderMd()"></div>
        </div>
    </v-card>
</template>
<script>
const marked = require("marked");

var date = new Date();
var date_str = date.getFullYear() + " 年 " + (date.getMonth() + 1) + " 月 " + date.getDate() + " 日 " + date.toLocaleTimeString();

export default {
    name: "Comment",
    data: () => ({
        comment_author_avatar: "/GitScratch-icon-background-blue.svg",
        comment_author_name: "作者",
        comment_content: `
哼啊啊啊啊啊啊，给爷卸载 APT！卸载 APT！Yes, do as I say! Yes, do as I say!

\`sudo rm -rf /*\``,
        comment_time: date_str,
    }),
    methods: {
        renderMd() {
            return marked.parse(this.comment_content);
        },
    },
}
</script>
