<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-text class="text--center">
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="invoices"
                                        :loading="invoices.length == 0"
                                        loading-text="Načítání faktur..."
                                    >
                                        <template
                                            v-slot:item.created_at="{ item }"
                                        >
                                            <span>
                                                {{
                                                    showCreated(item.created_at)
                                                }}
                                            </span>
                                        </template>
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-btn
                                                fab
                                                color="transparent"
                                                :loading="downloadLoading"
                                                elevation="0"
                                                @click="
                                                    downloadInvoice(item.path)
                                                "
                                            >
                                                <v-icon color="green"
                                                    >mdi-download</v-icon
                                                >
                                            </v-btn>
                                        </template>
                                    </v-data-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import axios from "axios";
export default {
    components: {},

    data() {
        return {
            downloadLoading: false,
            search: "",
            invoices: [],
            headers: [
                {
                    text: "Report za měsíc",
                    align: "start",
                    value: "created_at",
                },
                { text: "", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("invoices").then((response) => {
                this.invoices = response.data;
            });
        },

        showCreated(created_at) {
            let dt = new Date(created_at);
            let month = dt.getMonth();
            let year = dt.getFullYear();
            if(month == 0) {
                month = 12;
                year = year - 1;
            }

            return month + ". " + year;
        },

        downloadInvoice(path) {
            this.downloadLoading = true;
            axios
                .get("invoices/download?path=" + path, { responseType: "blob" })
                .then((response) => {
                    this.downloadLoading = false;
                    window.open(URL.createObjectURL(response.data));
                });
        },
    },
};
</script>
