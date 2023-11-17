<template>
    <div>
        <v-row v-if="apps">
            <v-col
                v-for="(items, index) in apps.apps"
                :key="index"
                cols="12"
                sm="12"
                md="6"
                lg="6"
            >
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle>
                        <v-row class="justify-center">
                            <p
                                class="mt-3 text-center caption font-weight-bold"
                            >
                                {{ index }}
                            </p>
                        </v-row>
                    </v-card-subtitle>
                    <v-card-text class="text--center">
                        <v-container fluid>
                            <v-data-table :headers="headers" :items="items">
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
    components: {
        //
    },

    data() {
        return {
            apps: [],
            headers: [
                { text: "Název", value: "name" },
                { text: "Popis", value: "description" },
                { text: "", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("apps").then((response) => {
                this.apps = response.data.data;
            });
        },
    },
};
</script>
