<template>
    <v-container style="max-width: 100vw;">
        <v-row>
            <v-col cols="12" xl="2" md="3" sm="4" style="padding-right: 20px;">
                <div style="text-align: center;">
                    <v-avatar style="width: 100%; height: auto; max-width: 200px;">
                        <v-img v-bind:src="avatar" lazy-src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjI5LjQgMjI5LjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyOS40IDIyOS40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojOUZBMEEwO30NCgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMTE0LjdDMCw1MS40LDUxLjQsMCwxMTQuNywwczExNC43LDUxLjQsMTE0LjcsMTE0LjdzLTUxLjQsMTE0LjctMTE0LjcsMTE0LjdTMCwxNzguMSwwLDExNC43eiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTExOC41LDEwMC44SDgxLjZjLTcuNywwLTEzLjksNi4xLTEzLjksMTMuOWMwLDcuNyw2LjIsMTMuOSwxMy45LDEzLjloMzYuOXYxOC42SDgxLjYNCgljLTE4LDAtMzIuNS0xNC41LTMyLjUtMzIuNXMxNC41LTMyLjUsMzIuNS0zMi41aDM2LjlMMTE4LjUsMTAwLjh6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQzLjYsOTIuNGMwLDQuMi0yLjUsNy43LTYsOS4zdjExLjFjMi4zLTEuNCw1LjItMi4yLDguMS0yLjJoMTIuMmM0LjQsMCw4LjEtMy43LDguMS04LjF2LTAuOQ0KCWMtMy42LTEuNy02LTUuMi02LTkuM2MwLTUuNiw0LjUtMTAuMiwxMC4yLTEwLjJjNS42LDAsMTAuMiw0LjUsMTAuMiwxMC4yYzAsNC4yLTIuNSw3LjctNiw5LjN2MC45YzAsOC45LTcuMiwxNi4zLTE2LjMsMTYuM2gtMTIuMg0KCWMtNC40LDAtOC4xLDMuNy04LjEsOC4xdjAuOWMzLjYsMS41LDYsNS4yLDYsOS4zYzAsNS42LTQuNSwxMC4yLTEwLjIsMTAuMmMtNS42LDAtMTAuMi00LjUtMTAuMi0xMC4yYzAtNC4yLDIuNS03LjgsNi05LjN2LTI2LjENCgljLTMuNi0xLjctNi01LjItNi05LjNjMC01LjYsNC41LTEwLjIsMTAuMi0xMC4yQzEzOSw4Mi4yLDE0My42LDg2LjcsMTQzLjYsOTIuNEwxNDMuNiw5Mi40eiBNMTMzLjQsOTUuNGMxLjcsMCwzLjEtMS40LDMuMS0zLjENCgljMC0xLjctMS40LTMuMS0zLjEtMy4xYy0xLjcsMC0zLjEsMS40LTMuMSwzLjFDMTMwLjMsOTQsMTMxLjcsOTUuNCwxMzMuNCw5NS40eiBNMTcwLDg5LjRjLTEuNywwLTMuMSwxLjQtMy4xLDMuMQ0KCWMwLDEuNywxLjQsMy4xLDMuMSwzLjFjMS43LDAsMy4xLTEuNCwzLjEtMy4xQzE3Myw5MC42LDE3MS43LDg5LjQsMTcwLDg5LjR6IE0xMzMuNCwxNDAuMWMxLjcsMCwzLjEtMS40LDMuMS0zLjENCgljMC0xLjctMS40LTMuMS0zLjEtMy4xYy0xLjcsMC0zLjEsMS40LTMuMSwzLjFDMTMwLjQsMTM4LjgsMTMxLjcsMTQwLjEsMTMzLjQsMTQwLjF6Ii8+DQo8L3N2Zz4NCg==" />
                    </v-avatar>
                </div><br>
                <p class="text-h4">{{ this.$route.params.username }}</p>
                <p class="text-body">{{ bio }}</p>
                <v-btn block color="accent" depressed>
                    <v-icon>mdi-plus</v-icon>
                    关注
                </v-btn><br>
                <v-icon>mdi-account-multiple-outline</v-icon>
                <router-link v-bind:to="'/users/' + this.$route.params.username + '/followers'">{{ follower }} 粉丝</router-link>
                <span> · </span>
                <router-link v-bind:to="'/users/' + this.$route.params.username + '/following'">{{ following }} 正在关注</router-link>
                <br>
                <v-icon>mdi-web</v-icon><a v-bind:href="website">{{ website }}</a>
            </v-col>
            <v-divider vertical class="hidden-xs-only"></v-divider>
            <v-col cols="12" xl="10" md="9" sm="8" style="padding-left: 20px;">
                <v-btn-toggle
                    v-model="toggle_tab"
                    group
                    mandatory
                    color="accent"
                >
                    <v-btn><v-icon>mdi-book-open-outline</v-icon><span>概览</span></v-btn>
                    <v-btn><v-icon>mdi-book-outline</v-icon><span>作品</span></v-btn>
                    <v-btn><v-icon>mdi-account-group-outline</v-icon><span>组织</span></v-btn>
                    <v-btn><v-icon>mdi-comment-text-multiple-outline</v-icon><span>留言</span></v-btn>
                </v-btn-toggle>
                <v-window
                    v-model="toggle_tab" style="display: block; padding: 8px 8px 16px 8px;"
                >
                    <!-- 概览 -->
                    <v-window-item>
                        <v-card>
                            <v-card-title>README.md</v-card-title>
                            <div v-html="renderMd()" style="padding: 16px;"></div>
                        </v-card>
                        <ProjectGroup title="置顶作品" style="margin-top: 8px;" />
                    </v-window-item>
                    <!-- 作品 -->
                    <v-window-item>
                        <div class="d-flex">
                            <p class="text-h5" style="margin: 0;">最近收藏的作品</p>
                            <v-spacer></v-spacer>
                            <router-link v-bind:to="'/users/' + this.$route.params.username + '/stars'">更多</router-link>
                        </div>
                        <ProjectGroup></ProjectGroup>
                    </v-window-item>
                    <!-- 组织 -->
                    <v-window-item>
                        <p>？？？？？</p>
                    </v-window-item>
                    <!-- 留言 -->
                    <v-window-item>
                        <CommentForm></CommentForm>
                        <Comment></Comment>
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
// import ProjectCard from '/src/components/ProjectCard.vue'
import ProjectGroup from '/src/components/ProjectGroup.vue'
import Comment from '/src/components/Comment.vue'
import CommentForm from '/src/components/CommentForm.vue'
const marked = require("marked");

export default {
    name: 'UserProfile',
    components: {
        // ProjectCard,
        ProjectGroup,
        Comment,
        CommentForm,
    },
    data: () => ({
        follower: 100,
        following: 200,
        website: "https://git.sc.cn",
        bio: "啊，好舒服",
        avatar: "/GitScratch-icon-background-blue.svg",
        toggle_tab: 0,
        README: `
# 啊，好舒服

昨天晚上跟 @作者 床♂战太爽了`,
    }),
    methods: {
        renderMd() {
            return marked.parse(this.README);
        }
    }
};
</script>
