<template>
    <v-row dense>
        <v-col>
            <v-card v-if="loading === true" :loading="loading">
                <v-card-title class="headline">Loading...</v-card-title>
            </v-card>
            <v-card v-else :loading="loading">
                <template v-if="loading === false && details !== null">
                    <v-card-title class="headline">
                        Info
                    </v-card-title>
                    <v-card-text>
                        <p>Rating:{{ clientRating }}</p>
                    </v-card-text>
                </template>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        clientDetails: { type: Object, default: null },
        loading: { type: Boolean, default: false }
    },
    data() {
        return {};
    },
    computed: {
        details(){
            return this.clientDetails;
        },
        clientRating(){
            return this.details.RatingDescription ? this.details.RatingDescription : "No Rating Available"
        }
    }
};
</script>
