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
        <client-detail :client-details="clientDetails" :loading="loadingDetails" />
        <client-credit-control :client-details="clientDetails" :loading="loadingDetails" />
    </div>
</template>

<script>
import lookupDataService from "../../../../services/lookupDataService";
import clientDataService from "../../../../services/clientDataService";
import clientCreditControl from './ClientCreditControl.vue';
import clientDetail from './ClientDetail.vue';

export default {
    components:{
        clientCreditControl,
        clientDetail
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
                    this.$emit("update:clientName", newClient.ClientName);
                }).catch(() => {
                    this.loadingDetails = false;
                    this.clientDetails = null;
                    this.$emit("update:clientId", null);
                    this.$emit("update:clientName", null);
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
