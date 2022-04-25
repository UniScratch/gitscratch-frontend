<template>
    <v-card class="text-center" min-height="350">
        <v-card-title style="display: block;" class="text-h5">欢迎</v-card-title>

        <v-card-text class="text--primary" align="center">
            <div class="text-h2">{{ new Date().getDate() }}</div>
            <span class="text-body-1">{{ new Date().getFullYear() }} / {{ new Date().getMonth() + 1 }}</span>
            <div style="margin-bottom: 16px;"></div>
            <span class="text-caption">美好的一天，从咕咕咕开始</span>
        </v-card-text>

        <v-card-actions style="position: absolute; bottom: 0; left: 0; right: 0;">
                <v-btn block depressed color="accent" to="/create">
                    <v-icon left>mdi-plus</v-icon>创建
                </v-btn>
        </v-card-actions>
    </v-card>
</template>
