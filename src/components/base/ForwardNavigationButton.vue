<template>
    <v-btn
        text
        small
        color="primary"
        @click="goToDetails"
    >
        {{ text }}
    </v-btn>
</template>

<script>
export default {
    name: 'ForwardNavigationButton',
    props: {
        text:  { type: String, required: true },
        url: { type: String, required: true },
    },
    methods: {
        goToDetails() {
            this.$router.push(this.url).catch(()=>{});
        },
    },
};
</script>

<style scoped>

</style>
