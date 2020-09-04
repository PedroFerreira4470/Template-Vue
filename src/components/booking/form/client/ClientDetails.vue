<template>
    <v-row dense>
        <v-col>
            <v-card v-if="loading === true" :loading="loading">
                <v-card-title class="headline">Loading...</v-card-title>
            </v-card>
            <v-card v-else :loading="loading">
                <template v-if="loading === false && clientDetails !== null">
                    <v-card-title class="headline">
                        Credit Control
                    </v-card-title>
                    <div v-for="(creditDetail, i) in clientDetails.CreditControlList" :key="i">
                        <v-row class="ml-5 col-12 pt-2">
                            <div class="col-4 pa-0"><v-chip>Payment Condition: {{ creditDetail.alertDescription }}</v-chip></div>
                            <div class="col-4 pa-0"><v-chip>Dates: {{ creditDetail.beginDate | date }} TO {{ creditDetail.endDate | date }} </v-chip></div>
                            <div class="col-4 pa-0"><v-chip>Currency: {{ creditDetail.moedaPlafond }}</v-chip></div>
                        </v-row>
                        <v-row class="ml-5 col-12">
                            <div class="col-4 pa-0"><v-chip>Plafond: {{ creditDetail.plafond | currencyEur }}</v-chip></div>
                            <div class="col-4 pa-0"><v-chip>Total Balance: {{ creditDetail.totalBalanceEur | currencyEur }}</v-chip></div>
                            <div class="col-4 pa-0"><v-chip>OverDue Balance: {{ creditDetail.totalBalanceEur | currencyEur }}</v-chip></div>
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
    watch: {
        clientDetails() {

        }
    }
};
</script>
