<template>
    <v-container fluid>
        <v-stepper v-model="step" class="mb-2">
            <v-stepper-header>
                <v-stepper-step :editable="step >= 1" :complete="step > 1" step="1">{{ selectedClientName || "Client" }}</v-stepper-step>

                <v-divider />

                <v-stepper-step :editable="step >= 2" :complete="step > 2" step="2">Origin/Destination</v-stepper-step>

                <v-divider />

                <v-stepper-step :editable="step >= 3" :complete="step > 3" step="3">Cargo</v-stepper-step>

                <v-divider />

                <v-stepper-step :editable="step >= 4" step="4">Shipments</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card-title>
                        <v-spacer />
                        <v-btn
                            color="primary"
                            :disabled="form.clientId === null"
                            @click="step = 2"
                        >
                            Continue
                        </v-btn>
                    </v-card-title>
                    <client-form @update:clientId="updateClientId" @update:clientName="updateClientName" />
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card-title>
                        <v-spacer />
                        <v-btn text @click="step = 1">Back</v-btn>
                        <v-btn
                            color="primary"
                            @click="step = 3"
                        >
                            Continue
                        </v-btn>
                    </v-card-title>
                    <locations-form />
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card-title>
                        <v-spacer />
                        <v-btn text @click="step = 2">Back</v-btn>
                        <v-btn
                            color="primary"
                            @click="step = 4"
                        >
                            Continue
                        </v-btn>
                    </v-card-title>
                    <v-card
                        class="mb-12"
                        color="grey lighten-1"
                        height="200px"
                    />
                </v-stepper-content>
                <v-stepper-content step="4">
                    <v-card-title>
                        <v-spacer />
                        <v-btn text @click="step = 3">Back</v-btn>
                        <v-btn
                            color="green"
                        >
                            Submit
                        </v-btn>
                    </v-card-title>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>
import uppercase from "../../../filters/local/upperCase";
import clientForm from "./client/ClientForm.vue";
import locationsForm from "./locationsAndTime/LocationsForm.vue";

export default {
    components: {
        clientForm,
        locationsForm,
    },
    filters: {
        uppercase
    },
    data() {
        return {
            step: 1,
            editing: false,
            form: {
                clientId: null
            },
            selectedClientName: null,
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
        updateClientId(newValue) {
            this.form.clientId = newValue;
        },
        updateClientName(newValue) {
            this.selectedClientName = newValue;
        }
    }
};
</script>
