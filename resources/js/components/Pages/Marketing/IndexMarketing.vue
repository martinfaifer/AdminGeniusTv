<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle>
                        <v-row class="justify-center">
                            <p
                                class="mt-3 text-center caption font-weight-bold"
                            >
                                Propagační materiály
                            </p>
                        </v-row>
                    </v-card-subtitle>
                    <v-card-text class="text--center">
                        <v-container fluid>
                            <v-data-table
                                :headers="headers"
                                :items="marketingMaterials"
                            >
                                <template v-slot:item.actions="{ item }">
                                    <v-row>
                                        <a
                                            style="text-decoration: none"
                                            target="_blank"
                                            :href="item.path"
                                        >
                                            <v-icon color="green"
                                                >mdi-download</v-icon
                                            >
                                        </a>
                                    </v-row>
                                </template>
                            </v-data-table>
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
            marketingMaterials: [],
            benched: 0,
            headers: [
                { text: "Název", value: "title" },
                { text: "Popis", value: "text" },
                { text: "", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("marketing").then((response) => {
                this.marketingMaterials = response.data.data;
            });
        },
    },
};
</script>
