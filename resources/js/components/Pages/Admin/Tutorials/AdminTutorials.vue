<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-btn
                    @click="openCreateDialog()"
                    color="green"
                    class="white--text"
                    >Přidat další video</v-btn
                >
            </v-col>
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
                        <v-icon
                            @click="openEditDialog(tutorial)"
                            small
                            style="position: fixed; right: 0; cursor: pointer"
                            class="mx-9"
                            color="green"
                            >mdi-pencil</v-icon
                        >
                        <v-icon
                            @click="openDeleteDialog(tutorial.id)"
                            small
                            color="red"
                            class="mx-3"
                            style="position: fixed; right: 0; cursor: pointer"
                            >mdi-delete</v-icon
                        >
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

        <v-row class="center">
            <v-dialog v-model="createDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.title"
                                        autofocus
                                        label="Titulek"
                                        type="text"
                                        :error="errors.title"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.video_url"
                                        label="Url YouTube videa"
                                        type="text"
                                        :error="errors.video_url"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-textarea
                                        v-model="formData.description"
                                        label="Popis"
                                        outlined
                                        :error="errors.description"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            @click="createItem()"
                            plain
                            outlined
                        >
                            Přidat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.title"
                                        autofocus
                                        label="Titulek"
                                        type="text"
                                        :error="errors.title"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.video_url"
                                        label="Url YouTube videa"
                                        type="text"
                                        :error="errors.video_url"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-textarea
                                        v-model="formData.description"
                                        label="Popis"
                                        outlined
                                        :error="errors.description"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            @click="editItem()"
                            plain
                            outlined
                        >
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="deleteDialog" persistent max-width="400px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat video?
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            @click="deleteItem()"
                            plain
                            outlined
                        >
                            Odebrat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import axios from "axios";
import BaseInput from "../../../Forms/BaseInput.vue";
export default {
    components: {
        BaseInput,
    },

    data() {
        return {
            search: "",
            tutorials: [],
            createDialog: false,
            editDialog: false,
            deleteDialog: false,
            formData: [],
            errors: [],
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

        openCreateDialog() {
            this.createDialog = true;
        },

        createItem() {
            axios
                .post("tutorials", {
                    title: this.formData.title,
                    video_url: this.formData.video_url,
                    description: this.formData.description,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openEditDialog(tutorial) {
            this.formData = tutorial;
            this.editDialog = true;
        },

        editItem() {
            axios
                .patch("tutorials/" + this.formData.id, {
                    title: this.formData.title,
                    video_url: this.formData.video_url,
                    description: this.formData.description,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openDeleteDialog(tutorialId) {
            this.formData.tutorialId = tutorialId;
            this.deleteDialog = true;
        },

        deleteItem() {
            axios
                .delete("tutorials/" + this.formData.tutorialId)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                });
        },

        closeDialog() {
            this.createDialog = false;
            this.editDialog = false;
            this.deleteDialog = false;
            this.formData = [];
            this.errors = [];
            this.index();
        },
    },
};
</script>
