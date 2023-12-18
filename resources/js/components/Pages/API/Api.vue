<template>
    <div>
        <v-row class="mt-12">
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur mt-n12"
                    height="80vh"
                    flat
                >
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="2" md="2" lg="2">
                                    <v-navigation-drawer permanent fixed>
                                        <v-list dense nav>
                                            <v-list-item
                                                v-for="item in items"
                                                :key="item.endpoint"
                                                link
                                                @click="
                                                    showResult(
                                                        item.method,
                                                        item.endpoint
                                                    )
                                                "
                                            >
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        <span
                                                            :class="
                                                                getTextColor(
                                                                    item.method
                                                                )
                                                            "
                                                            class="font-weight-bold"
                                                        >
                                                            {{ item.method }}
                                                        </span>
                                                        <span class="mx-2">
                                                            {{ item.endpoint }}
                                                        </span>
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-navigation-drawer>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="10"
                                    md="10"
                                    lg="10"
                                    style="overflow-y: scroll; height: 70vh"
                                >
                                    <v-skeleton-loader
                                        v-if="loading"
                                        v-bind="attrs"
                                        type="article"
                                    ></v-skeleton-loader>
                                    <span v-if="apiResponse != null">
                                        <v-col
                                            cols="12"
                                            sm="12"
                                            md="12"
                                            lg="12"
                                        >
                                            <span class="font-italic">
                                                <span
                                                    :class="
                                                        getTextColor(method)
                                                    "
                                                    class="font-weight-bold"
                                                    >{{ method }}</span
                                                >
                                                <span
                                                    >https://admin.geniustv.cz{{
                                                        currentEndPoint
                                                    }}</span
                                                >
                                            </span>
                                        </v-col>
                                        <v-divider class="mx-3"></v-divider>
                                        <VueJsonPretty
                                            class="mt-3"
                                            :data="apiResponse"
                                        />
                                        <!-- {{ apiResponse }} -->
                                    </span>
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
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

import axios from "axios";
export default {
    components: {
        VueJsonPretty,
    },

    data() {
        return {
            method: "",
            currentEndPoint: "",
            apiResponse: null,
            items: [],
            loading: false,
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("api-endpoints").then((response) => {
                this.items = response.data;
            });
        },

        getTextColor(method) {
            if (method == "GET") {
                return "green--text";
            }
        },

        showResult(method, endpoint) {
            this.method = method;
            this.currentEndPoint = endpoint;
            this.loading = true;
            if (method == "GET") {
                axios.get(endpoint).then((response) => {
                    this.apiResponse = response.data;
                    this.loading = false;
                });
            }
        },
    },
};
</script>
