<template>
    <div>
        <v-card
            class="overflow-hidden rounded-xl blur shadow-blur"
            flat
            height="80vh"
        >
            <v-card-subtitle>
                <v-row class="justify-center">
                    <p class="mt-3 text-center caption font-weight-bold">
                        {{ cardTitle }}
                    </p>
                </v-row>
            </v-card-subtitle>
            <v-card-text class="text--center">
                <v-container v-if="news.length > 0" fluid>
                    <v-virtual-scroll
                        :bench="benched"
                        :items="news"
                        height="900px"
                        max-height="800px"
                        item-height="78"
                    >
                        <template v-slot:default="{ item }">
                            <v-list-item
                                :key="item.id"
                                @click="openNewsDetail(item)"
                            >
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="font-weight-medium"
                                    >
                                        {{ item.title }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{
                                        item.text
                                    }}</v-list-item-subtitle>
                                    <v-list-item-subtitle class="font-italic text-end mt-1">
                                        {{ item.created_at }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider></v-divider>
                        </template>
                    </v-virtual-scroll>
                </v-container>
                <v-container v-else fluid>
                    <v-col cols="12">
                        <InfoAlert
                            alertText="Zatím nejsou žádná data."
                        ></InfoAlert>
                    </v-col>
                </v-container>
            </v-card-text>
        </v-card>
        <v-row justify="center">
            <v-dialog v-model="newsDetailDialog" scrollable max-width="900px">
                <v-card>
                    <v-card-title class="black--text">{{
                        detail.title
                    }}</v-card-title>
                    <v-card-text style="height: 300px">
                        {{ detail.text }}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1 white--text rounded-lg"
                            @click="closeDialog()"
                        >
                            Zavřít
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
let InfoAlert = () => import("../../Notifications/_infoAlert.vue");
export default {
    props: ["cardTitle", "news"],
    components: {
        InfoAlert,
    },

    data() {
        return {
            benched: 0,
            newsDetailDialog: false,
            detail: [],
        };
    },

    created() {},
    methods: {
        openNewsDetail(item) {
            this.newsDetailDialog = true;
            this.detail = item;
        },
        closeDialog() {
            this.newsDetailDialog = false;
            this.detail = [];
        },
    },
};
</script>
