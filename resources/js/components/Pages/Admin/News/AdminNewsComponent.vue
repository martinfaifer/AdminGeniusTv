<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle class="text-center font-weight-medium">
                        Novinky
                        <v-btn
                            @click="openCreateDialog('channels-info')"
                            style="position: fixed; right: 0px"
                            class="mr-3"
                            icon
                            color="green"
                            small
                        >
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </v-card-subtitle>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="news"
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-row>
                                                <v-icon
                                                    @click="
                                                        openEditDialog(
                                                            item,
                                                            'channels-info'
                                                        )
                                                    "
                                                    small
                                                    color="green"
                                                    >mdi-pencil</v-icon
                                                >
                                                <v-icon
                                                    @click="
                                                        openDeleteDialog(
                                                            item.id,
                                                            'channels-info'
                                                        )
                                                    "
                                                    small
                                                    color="red"
                                                    >mdi-delete</v-icon
                                                >
                                            </v-row>
                                        </template>
                                    </v-data-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle class="text-center font-weight-medium">
                        Plánované výpadky
                        <v-btn
                            @click="openCreateDialog('maintenances')"
                            style="position: fixed; right: 0px"
                            class="mr-3"
                            icon
                            color="green"
                            small
                        >
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </v-card-subtitle>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="maintenances"
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-row>
                                                <v-icon
                                                    @click="
                                                        openEditDialog(
                                                            item,
                                                            'maintenances'
                                                        )
                                                    "
                                                    small
                                                    color="green"
                                                    >mdi-pencil</v-icon
                                                >
                                                <v-icon
                                                    @click="
                                                        openDeleteDialog(
                                                            item.id,
                                                            'maintenances'
                                                        )
                                                    "
                                                    small
                                                    color="red"
                                                    >mdi-delete</v-icon
                                                >
                                            </v-row>
                                        </template>
                                    </v-data-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="center">
            <v-dialog v-model="deleteDialog" persistent max-width="400px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat článek?
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

            <v-dialog v-model="editDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <BaseInput
                                        v-model="formData.title"
                                        label="Titulek"
                                        type="text"
                                        :error="errors.title"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        v-model="formData.text"
                                        :error="errors.text"
                                        outlined
                                    >
                                    </v-textarea>
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

            <v-dialog v-model="createDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <BaseInput
                                        v-model="formData.title"
                                        label="Titulek"
                                        type="text"
                                        :error="errors.title"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        v-model="formData.text"
                                        :error="errors.text"
                                        outlined
                                    >
                                    </v-textarea>
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
                            Vytvořit
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
            editDialog: false,
            deleteDialog: false,
            createDialog: false,
            formData: [],
            news: [],
            maintenances: [],
            errors: [],
            benched: 0,
            headers: [
                { text: "Titulek", value: "title" },
                { text: "Obsah", value: "text" },
                { text: "", value: "actions" },
            ],
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
        },
        openCreateDialog(type) {
            this.formData.type = type;
            this.createDialog = true;
        },

        createItem() {
            axios
                .post("news/" + this.formData.type, {
                    title: this.formData.title,
                    text: this.formData.text,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.getNews();
                    this.getMaintenances();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openEditDialog(item, type) {
            this.formData = item;
            this.formData.type = type;
            this.editDialog = true;
        },

        openDeleteDialog(itemId, type) {
            this.formData.itemId = itemId;
            this.formData.type = type;
            this.deleteDialog = true;
        },

        deleteItem() {
            axios
                .delete(
                    "news/" + this.formData.type + "/" + this.formData.itemId
                )
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.getNews();
                    this.getMaintenances();
                });
        },

        editItem() {
            axios
                .patch("news/" + this.formData.type + "/" + this.formData.id, {
                    title: this.formData.title,
                    text: this.formData.text,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.getNews();
                    this.getMaintenances();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        closeDialog() {
            this.editDialog = false;
            this.deleteDialog = false;
            this.createDialog = false;
            this.formData = [];
        },
    },
};
</script>
