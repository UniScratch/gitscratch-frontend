<template>
    <v-card >
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
                        style="width: 32px;height:16px;padding:0px"
                        class="ml-2"
                        color="accent"
                    ></v-btn>
                    <v-btn
                        v-else
                        active
                        @click="toggle"
                        depressed
                        disabled
                        rounded
                        style="min-width: 16px; width:16px; height:16px;padding:0px"
                        class="ml-2"
                    ></v-btn>
                </v-item>
            </v-item-group>

            <v-spacer />
            <v-btn text @click="prev">Prev</v-btn>
            <v-btn text @click="next">Next</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        length: 10,
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