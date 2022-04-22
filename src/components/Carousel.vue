<template>
    <v-card>
        <v-window v-model="onboarding">
            <v-window-item v-for="n in length" :key="`card-${n}`">
                <v-card color="grey" height="300">
                    <v-row class="fill-height" align="center" justify="center">
                        <h1 style="font-size: 5rem;" class="white--text">Slide {{ n }}</h1>
                    </v-row>
                </v-card>
            </v-window-item>
        </v-window>

        <v-card-actions>
            <v-item-group v-model="onboarding" class mandatory>
                <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
                    <v-btn
                        v-if="active"
                        @click="toggle"
                        depressed
                        rounded
                        style="width: 32px; height: 16px; padding: 0px;"
                        class="ml-2"
                        color="accent"
                    ></v-btn>
                    <v-btn
                        v-else
                        active
                        @click="toggle"
                        depressed
                        rounded
                        style="min-width: 16px; width: 16px; height: 16px; padding: 0px;"
                        class="ml-2"
                        color="grey_background"
                    ></v-btn>
                </v-item>
            </v-item-group>

            <v-spacer />
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="prev" v-bind="attrs" v-on="on"><v-icon>mdi-chevron-left</v-icon></v-btn>
                </template>
                <span>上一个</span>
            </v-tooltip>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="next" v-bind="attrs" v-on="on"><v-icon>mdi-chevron-right</v-icon></v-btn>
                </template>
                <span>下一个</span>
            </v-tooltip>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        length: 5,
        onboarding: 0,
    }),

    methods: {
        next() {
            this.onboarding = this.onboarding + 1 === this.length
                ? 0
                : this.onboarding + 1
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0
                ? this.length - 1
                : this.onboarding - 1
        },
    },
}
</script>