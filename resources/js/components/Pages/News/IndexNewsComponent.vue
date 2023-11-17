<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="4" lg="4">
                <ShareList card-title="Novinky" :news="news"></ShareList>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
                <ShareList
                    card-title="Plánované výpadky"
                    :news="maintenances"
                ></ShareList>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
                <ShareList
                    card-title="Nově nahrané aplikace"
                    :news="appNews"
                ></ShareList>
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
            appNews: [],
            benched: 0,
        };
    },

    created() {
        this.getNews();
        this.getMaintenances();
        this.getAppNews();
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
        },

        getAppNews() {
            axios.get("news/apps").then((response) => {
                this.appNews = response.data.data;
            });
        },
    },
};
</script>
