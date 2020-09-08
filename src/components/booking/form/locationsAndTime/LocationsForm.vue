<template>
    <div>
        <v-card class="overflow-hidden" color="secondary" dark>
            <v-toolbar flat color="secondary">
                <v-icon>mdi-account</v-icon>
                <v-toolbar-title class="font-weight-light">
                    Locations
                </v-toolbar-title>
            </v-toolbar>
            <!-- <v-card-text>
                <v-autocomplete
                    v-model="selectedClient"
                    :items="clients"
                    color="white"
                    item-text="ClientInfo"
                    item-value="Id"
                    return-object
                />
            </v-card-text> -->
            <v-divider />
        </v-card>
    </div>
</template>

<script>
import lookupDataService from "../../../../services/lookupDataService";

export default {
    created() {
        this.getAddresses();
    },
    methods: {
        getAddresses() {
            lookupDataService
                .getClientsLookup(12)
                .then(result => {
                    // eslint-disable-next-line no-console
                    console.log(result);
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        }
    }
}
</script>
