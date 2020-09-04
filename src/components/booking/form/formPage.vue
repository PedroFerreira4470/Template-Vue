<template>
    <v-container fluid>
        <v-stepper class="mb-2">
            <v-stepper-header>
                <v-stepper-step step="1">Client</v-stepper-step>

                <v-divider />

                <v-stepper-step step="2">Origin/Destination</v-stepper-step>

                <v-divider />

                <v-stepper-step step="3">Cargo</v-stepper-step>
                <v-divider />
                <v-stepper-step step="4">Shipments</v-stepper-step>
            </v-stepper-header>
        </v-stepper>
        <client-form @update:clientId="updateClientId" />
    </v-container>
</template>

<script>
import uppercase from "../../../filters/local/upperCase";
import clientForm from "./client/ClientForm.vue";

export default {
    components:{
        clientForm,
    },
    filters: {
        uppercase
    },
    data() {
        return {
            editing: false,
            form:{
                clientId:null,
            }
        };
    },
    computed: {
        title() {
            return this.editing ? "Edit" : "Create";
        }
    },
    watch: {
        $route: {
            async handler(to) {
                if ("id" in to.params) {
                    this.editing = true;
                } else {
                    this.editing = false;
                }
            },
            immediate: true
        }
    },
    methods: {
        updateClientId(newValue){
            this.form.clientId = newValue
        }
    },
};
</script>
