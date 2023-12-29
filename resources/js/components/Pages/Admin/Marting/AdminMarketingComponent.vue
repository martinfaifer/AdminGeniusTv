<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle class="text-center font-weight-medium">
                        Nahrané soubory
                        <v-btn
                            @click="openUploadAppDialog()"
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
                                    <v-text-field
                                        v-model="search"
                                        preppend-inner-icon="mdi-magnify"
                                        label="Vyhledat ..."
                                        single-line
                                        hide-details
                                        autofocus
                                    ></v-text-field>
                                    <v-spacer></v-spacer>
                                </v-col>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headersApps"
                                        :items="apps"
                                        :search="search"
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-row>
                                                <v-icon
                                                    @click="
                                                        openDeleteAppDialog(
                                                            item.id
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
            <v-dialog v-model="uploadDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-file-input
                                        outlined
                                        dense
                                        label="Nahrajte soubor"
                                        @change="selectFile"
                                        :error="errors.file"
                                        show-size
                                        clearable
                                    ></v-file-input>
                                </v-col>

                                <v-col cols="12">
                                    <BaseInput
                                        v-model="formData.title"
                                        label="Popis"
                                        type="text"
                                        :error="errors.title"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-textarea
                                        prepend-inner-icon="mdi-comment-text"
                                        outlined
                                        label="Popis aplikace"
                                        v-model="formData.text"
                                        :error="errors.text"
                                        counter="250"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            plain
                            outlined
                            color="blue darken-1"
                            @click="closeDialog()"
                        >
                            <v-icon class="mr-3"> mdi-close </v-icon>
                            Zavřít
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            :loading="fileUploadLoader"
                            :disabled="!formData.title || file.length == 0"
                            plain
                            outlined
                            color="green darken-1"
                            @click="uploadFile()"
                        >
                            <v-icon class="mr-3">mdi-plus</v-icon>
                            Nahrát
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="deleteAppDialog" persistent max-width="400px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat soubor?
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
                            @click="deleteApp()"
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
            fileUploadLoader: false,
            deleteAppDialog: false,
            uploadDialog: false,
            formData: [],
            errors: [],
            apps: [],
            file: [],
            search: "",

            headersApps: [
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
                this.apps = response.data.data;
            });
        },

        selectFile(event) {
            this.file = event;
        },

        openUploadAppDialog() {
            this.fileUploadLoader = false;
            this.uploadDialog = true;
        },

        uploadFile() {
            this.fileUploadLoader = true;
            const formUploadData = new FormData();
            formUploadData.append("file", this.file, this.file.name);
            formUploadData.append("title", this.formData.title);
            formUploadData.append("text", this.formData.text);
            axios
                .post("marketing", formUploadData)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                })
                .catch((error) => {
                    this.fileUploadLoader = false;
                    this.errors = error.response.data.errors;
                });
        },

        openDeleteAppDialog(appId) {
            this.formData.id = appId;
            this.deleteAppDialog = true;
        },

        deleteApp() {
            axios.delete("marketing/" + this.formData.id).then((response) => {
                this.$store.state.alerts = response.data;
                this.closeDialog();
            });
        },

        closeDialog() {
            this.index();
            this.uploadDialog = false;
            this.fileUploadLoader = true;
            this.deleteAppDialog = false;
            this.formData = [];
            this.errors = [];
            this.file = [];
        },
    },
};
</script>
