<template>
    <div>
        <v-navigation-drawer v-model="sidebar" dark :clipped="$vuetify.breakpoint.lgAndUp" app>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-book-search</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Bookings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-garage</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Shipments</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group color="secondary">
                    <template v-slot:activator>
                        <v-list-item-title>Admin</v-list-item-title>
                    </template>

                    <v-list-group color="secondary" no-action sub-group>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Actions</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item link>
                            <v-list-item-title v-text="'Settings'" />
                            <v-list-item-icon>
                                <v-icon v-text="'mdi-cog-outline'" />
                            </v-list-item-icon>
                        </v-list-item>
                        <v-list-item link>
                            <v-list-item-title v-text="'Users'" />
                            <v-list-item-icon>
                                <v-icon v-text="'mdi-account-cog-outline'" />
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" dark>
            <v-app-bar-nav-icon @click.prevent.stop="onClick()" />
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <span class="hidden-sm-and-down">K2 Air</span>
            </v-toolbar-title>
            <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
                class="hidden-sm-and-down"
            />
            <v-spacer />

            <v-btn icon large>
                <v-avatar size="32px" item>
                    <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" />
                </v-avatar>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    props: {
        drawer: { type: Boolean, required: true }
    },
    data() {
        return {
            sidebar: null
        };
    },
    watch: {
        sidebar(newValue) {
            this.$emit("update:drawer", newValue);
        }
    },
    methods: {
        onClick() {
            this.sidebar = !this.drawer;
        }
    }
};
</script>
