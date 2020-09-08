<template>
    <v-row dense>
        <v-col>
            <v-card :loading="loading">
                <template v-if="loading === false && clientDetails !== null">
                    <v-card-title class="headline">
                        Credit Control
                    </v-card-title>
                    <v-col v-for="(creditDetail, i) in creditControlList" :key="i">
                        <div v-if="creditDetail.recordType === 'UNLOCK_STATUS'">
                            <v-row class="ml-5 col-12 pt-2">
                                <div class="col-4 pa-0"><v-chip>Record Type: UNLOCK_STATUS</v-chip></div>
                                <div class="col-4 pa-0"><v-chip>Alert: {{ creditDetail.alertCode }}</v-chip></div>
                            </v-row>
                            <v-row class="ml-5 col-12">
                                <div class="pa-0"><v-chip>Alert Description: {{ creditDetail.alertDescription | valueIsEmpty }}</v-chip></div>
                            </v-row>
                        </div>
                        <div v-else>
                            <v-row class="ml-5 col-12 pt-2">
                                <div class="col-4 pa-0"><v-chip>Payment Condition: {{ creditDetail.alertDescription | valueIsEmpty }}</v-chip></div>
                                <div class="col-4 pa-0"><v-chip>Dates: {{ creditDetail.beginDate | date }} TO {{ creditDetail.endDate | date }} </v-chip></div>
                                <div class="col-4 pa-0"><v-chip>Currency: {{ creditDetail.moedaPlafond | valueIsEmpty }}</v-chip></div>
                            </v-row>
                            <v-row class="ml-5 col-12">
                                <div class="col-4 pa-0"><v-chip>Plafond: {{ creditDetail.plafond | currencyEur | valueIsEmpty }}</v-chip></div>
                                <div class="col-4 pa-0"><v-chip>Total Balance: {{ creditDetail.totalBalanceEur | currencyEur | valueIsEmpty }}</v-chip></div>
                                <div class="col-4 pa-0"><v-chip>OverDue Balance: {{ creditDetail.totalBalanceEur | currencyEur | valueIsEmpty }}</v-chip></div>
                            </v-row>
                            <v-expansion-panels>
                                <v-expansion-panel>
                                    <template v-if="creditDetail.message">
                                        <v-expansion-panel-header>
                                            <v-chip
                                                color="red"
                                                text-color="white"
                                            >
                                                Message {{ i + 1 }} :
                                                {{
                                                    creditDetail.message.substring(0, 20) + "..."
                                                }}
                                            </v-chip>
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            {{ creditDetail.message }}
                                        </v-expansion-panel-content>
                                    </template>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-col>
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
        creditControlList(){
            return this.clientDetails.CreditControlList;
        }
    },
};
</script>
