<template>
    <div>
        <v-row>
            <v-col
                v-for="tutorial in tutorials"
                :key="tutorial.id"
                cols="12"
                sm="12"
                md="6"
                lg="6"
            >
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle
                        class="text-center font-weight-medium title"
                    >
                        <a :href="tutorial.video_url" target="_blank">{{
                            tutorial.title
                        }}</a>
                    </v-card-subtitle>
                    <v-card-text class="text--center">
                        <v-container fluid>
                            <v-row>
                                <div class="mx-auto">
                                    <iframe
                                        width="680"
                                        height="435"
                                        :src="tutorial.video_url"
                                        :title="tutorial.title"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <v-col
                                    cols="12"
                                    v-if="tutorial.description != null"
                                >
                                    <small class="blue--text font-italic">{{
                                        tutorial.description
                                    }}</small>
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
            search: "",
            tutorials: [],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("tutorials").then((response) => {
                this.tutorials = response.data.data;
            });
        },
    },
};
</script>
