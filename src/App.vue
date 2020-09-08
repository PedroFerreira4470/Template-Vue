<template>
    <v-app id="inspire">
        <v-app id="inspire">
            <app-header :drawer="drawer" @update:drawer="updateDrawer" />

            <v-main>
                <router-view />
            </v-main>

            <feedback />
        </v-app>
    </v-app>
</template>

<script>
import AppHeader from "./components/header/AppHeader.vue";
import Feedback from "./components/feedback/Feedback.vue";
// import bookingService from "./services/bookingDataService";

export default {
    name: "App",
    components: { AppHeader, Feedback },
    data() {
        return {
            drawer: false
        };
    },
    methods: {
        updateDrawer(newValue) {
            this.drawer = newValue;
        }
    }
};
</script>
