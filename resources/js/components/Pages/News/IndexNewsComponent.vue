<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="4" lg="4">
                <ShareList
                    card-title="Novinky"
                    :news="news"
                ></ShareList>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
                <ShareList
                    card-title="Plánované výpadky"
                    :news="maintenances"
                ></ShareList>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                    height="80vh"
                >
                    <v-card-subtitle>
                        <v-row class="justify-center">
                            <p
                                class="mt-3 text-center caption font-weight-bold"
                            >
                                Nově nahrané aplikace
                            </p>
                        </v-row>
                    </v-card-subtitle>
                    <v-card-text class="text--center">
                        <v-container fluid>
                            <v-row>
                                <!--  -->
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
import ShareList from "./_shareListComponent.vue";

export default {
    components: {
        ShareList,
    },

    data() {
        return {
            news: [],
            maintenances: [],
            benched: 0,
        };
    },

    created() {
        this.getNews();
        this.getMaintenances();
    },
    methods: {
        getNews() {
            axios.get("news/channels-info").then((response) => {
                this.news = response.data.data;
            });
        },

        getMaintenances() {
            axios.get("news/maintenances").then((response) => {
                this.maintenances = response.data.data;
            });
        }
    },
};
</script>
