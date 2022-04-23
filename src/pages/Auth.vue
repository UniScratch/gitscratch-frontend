<template>
    <v-app>
        <v-main>
            <Appbar />
            <v-container>
                <v-card style="width: 500px; padding: 16px;">
                    <v-text-field label="用户名" outlined single-line></v-text-field>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Appbar from '/src/components/Appbar.vue'

export default {
    name: 'Auth',

    components: {
        Appbar,
    },

    data: () => ({
        //
    }),
};
</script>
