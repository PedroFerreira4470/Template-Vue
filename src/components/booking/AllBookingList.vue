<template>
    <div class="pa-1">
        <v-data-table
            height="45vh"
            :headers="headers"
            :items="bookings"
            hide-default-footer
            class="elevation-1 pa-5"
            :loading="loading"
            loading-text="Loading Bookings... Please wait"
        >
            <template v-slot:top>
                <v-toolbar
                    flat
                    color="white"
                >
                    <v-toolbar-title>Bookings Air</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    />
                    <v-spacer />

                    <v-btn
                        color="secondary"
                        dark
                        @click.prevent="onNewBooking"
                    >
                        New Booking
                    </v-btn>
                </v-toolbar>
            </template>
            <template v-slot:[`item.CreatedDate`]="{ item }">
                <span>{{ new Date(item.CreatedDate).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }}</span>
            </template>
            <template v-slot:[`item.PickUpDate`]="{ item }">
                <span>{{ new Date(item.CreatedDate).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }}</span>
            </template>
            <template v-slot:[`item.DeliveryDate`]="{ item }">
                <span>{{ new Date(item.CreatedDate).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}) }}</span>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click.prevent="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click.prevent="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn
                    color="primary"
                    @click.prevent="initialize"
                >
                    Refresh
                </v-btn>
            </template>
        </v-data-table>
        <p class="text-center pt-1">Total Bookings: {{ pagination.totalRecords }}</p>
        <div
            class=" elevation-1 text-center pt-1 d-flex flex-row mb-6"
        >
            <v-select
                v-model="pagination.itemsPerPage"
                :items="pagination.availablePageSize"
                :value="pagination.itemsPerPage"
                class="mr-1"
                label="Items per page"
                type="number"
                min="1"
                max="10"
                @input="increaseItemsPerPage"
            />
            <v-spacer />
            <v-pagination
                v-model="pagination.page"
                circle
                :length="pagination.pages"
                :total-visible="pagination.visible"
                @input="selectedPage"
            />
        </div>
    </div>
</template>

<script>
import bookingService from "../../services/bookingDataService";

export default {
    data() {
        return {
            loading: false,
            pagination: {
                page: 1,
                availablePageSize: [5,8,10],
                itemsPerPage: 5,
                pages: 0,
                visible: 10,
                totalRecords:0
            },
            headers: [
                {
                    text: "Booking",
                    align: "start",
                    sortable: false,
                    value: "BookingNumber",
                },
                {
                    text: "Client",
                    align: "start",
                    sortable: false,
                    value: "ClientName"
                },
                {
                    text: "PickUp Date",
                    align: "start",
                    sortable: false,
                    value: "PickUpDate"
                },
                {
                    text: "Delivery Date",
                    align: "start",
                    sortable: false,
                    value: "DeliveryDate"
                },
                {
                    text: "Booking Status",
                    align: "start",
                    sortable: false,
                    value: "BookingStatus"
                },
                {
                    text: "Origin Location",
                    align: "start",
                    sortable: false,
                    value: "OriginLocation"
                },
                {
                    text: "Destination Location",
                    align: "start",
                    sortable: false,
                    value: "DestinationLocation"
                },
                {
                    text: "Shipments In TMS",
                    align: "start",
                    sortable: false,
                    value: "ShipmentsInTMS"
                },
                {
                    text: "Shipments In K2",
                    align: "start",
                    sortable: false,
                    value: "ShipmentsInK2"
                },
                {
                    text: "Created By",
                    align: "start",
                    sortable: false,
                    value: "CreatedBy"
                },
                {
                    text: "Created Date",
                    align: "start",
                    sortable: false,
                    format: "date",
                    value: "CreatedDate"
                },
                {
                    text: "EDI",
                    align: "start",
                    sortable: false,
                    value: "IsEDI"
                },
                {
                    text: "Incoterm",
                    align: "start",
                    sortable: false,
                    value: "Incoterm"
                },
                {
                    text: "Agent Ref",
                    align: "start",
                    sortable: false,
                    value: "AgentRef"
                },
                {
                    text: "Load",
                    align: "start",
                    sortable: false,
                    value: "Load"
                },
                {
                    text: "Shipper",
                    align: "start",
                    sortable: false,
                    value: "Shipper"
                },
                {
                    text: "Exporter",
                    align: "start",
                    sortable: false,
                    value: "Exporter"
                },
                {
                    text: "Receiver",
                    align: "start",
                    sortable: false,
                    value: "Receiver"
                },
                {
                    text: "Consignee",
                    align: "start",
                    sortable: false,
                    value: "Consignee"
                },
                {
                    text: "Customer Ref",
                    align: "start",
                    sortable: false,
                    value: "CustomerRef"
                },
                {
                    text: "Taxable Weight",
                    align: "start",
                    sortable: false,
                    value: "TaxableWeight"
                },
                {
                    text: "Weight",
                    align: "start",
                    sortable: false,
                    value: "TotalWeight"
                },
                {
                    text: "Volume",
                    align: "start",
                    sortable: false,
                    value: "TotalVolume"
                },
                {
                    text: "LDM",
                    align: "start",
                    sortable: false,
                    value: "TotalLDM"
                },
                {
                    text: 'Actions',
                    divider: true,
                    align: "center",
                    value: 'actions',
                    sortable: false
                },
            ],
            bookings: []
        };
    },
    created() {
        this.getAllBookingsFromApi(this.pagination.itemsPerPage, this.pagination.page);
    },
    methods: {
        getAllBookingsFromApi(itemsPerPage, page) {
            this.loading = true;
            bookingService
                .getAllBookingsAir(itemsPerPage, page)
                .then(response => {
                    this.bookings = [...response.data.Data];
                    this.pagination.pages = response.data.TotalPages;
                    this.pagination.totalRecords = response.data.TotalRecords
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error);
                }).finally(() => {
                    this.loading = false;
                });
        },
        selectedPage(newPage) {
            this.getAllBookingsFromApi(this.pagination.itemsPerPage, newPage);
        },
        increaseItemsPerPage(newPageSize){
            this.getAllBookingsFromApi(newPageSize, this.pagination.page);
        },
        onNewBooking(){
            this.$router.push(`booking/create`)
        },
        initialize(){
            this.loading = true;
            this.getAllBookingsFromApi(this.pagination.itemsPerPage, this.pagination.page);
        }
    }
};
</script>
