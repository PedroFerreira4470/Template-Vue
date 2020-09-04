<template>
    <div>
        <v-card class="overflow-hidden" color="secondary" dark>
            <v-toolbar flat color="secondary">
                <v-icon>mdi-account</v-icon>
                <v-toolbar-title class="font-weight-light">
                    Client
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-autocomplete
                    v-model="selectedClient"
                    :items="clients"
                    color="white"
                    item-text="ClientInfo"
                    item-value="Id"
                    return-object
                />
            </v-card-text>
            <v-divider />
        </v-card>
        <client-details :client-details="clientDetails" :loading="loadingDetails" />
    </div>
</template>

<script>
import lookupDataService from "../../../../services/lookupDataService";
import clientDataService from "../../../../services/clientDataService";
import clientDetails from './ClientDetails.vue'

export default {
    components:{
        clientDetails
    },
    data() {
        return {
            selectedClient: null,
            clientDetails:null,
            clients: [{ Id: null, ClientInfo: "Please Select Client" }],
            loadingDetails:false,
        };
    },
    watch: {
        selectedClient(newClient) {
            const {Id,ClientCurrencyID} = newClient;
            this.loadingDetails = true;
            clientDataService.getClient(Id,ClientCurrencyID,"").
                then((result) => {
                    this.clientDetails = result.data;
                    this.loadingDetails = false;
                    this.$emit("update:clientId", newClient.Id);
                }).catch(() => {
                    this.loadingDetails = false;
                    this.clientDetails = null;
                });
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            lookupDataService
                .getClientsLookup()
                .then(result => {
                    this.clients = [...this.clients, ...result.data];
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
        }
    }
};
</script>
