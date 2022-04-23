<template>
    <v-card class="text-center" min-height="350">
        <v-card-title style="display: block;">欢迎</v-card-title>

        <v-card-text class="text--primary" align="center">
            <div class="text-h2">{{ new Date().getDate() }}</div>
            {{ new Date().getFullYear() }} / {{ new Date().getMonth() }}
            <br />
            美好的一天，从咕咕咕开始
        </v-card-text>

        <v-card-actions style="position: absolute; bottom: 0; left: 0; right: 0;">
            <v-btn block depressed color="accent" href="/scratch-gui">
                <v-icon left>mdi-plus</v-icon>创建
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
