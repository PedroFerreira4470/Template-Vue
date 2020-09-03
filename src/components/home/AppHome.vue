<template>
    <v-data-table
        v-if="loading"
        item-key="name"
        class="elevation-1"
        loading
        loading-text="Loading... Please wait"
    />
    <div
        v-else
        class="pa-2"
    >
        <v-data-table
            :headers="headers"
            :items="bookings"
            hide-default-footer
            class="elevation-1 mt-10"
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
                    <v-dialog
                        v-model="dialog"
                        max-width="500px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                New Booking
                            </v-btn>
                        </template>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
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
                    text: "Booking Id",
                    align: "start",
                    sortable: false,
                    value: "Id"
                },
                {
                    text: "Client Id",
                    align: "start",
                    sortable: false,
                    value: "ClientName"
                },
                {
                    text: 'Actions',
                    align: "center",
                    value: 'actions',
                    sortable: false
                },
            ],
            bookings: []
        };
    },
    created() {
        this.loading = true;
        this.getAllBookingsFromApi(this.pagination.itemsPerPage, this.pagination.page);
    },
    methods: {
        getAllBookingsFromApi(itemsPerPage, page) {
            bookingService
                .getAllBookingsAir(itemsPerPage, page)
                .then(response => {
                    this.bookings = response.data.Data;
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
        }
    }
};
</script>
