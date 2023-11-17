<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle class="text-center font-weight-medium">
                        Kategorie
                        <v-btn
                            @click="openCreateCategoryDialog()"
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
                                        :headers="headersAppCategories"
                                        :items="categories"
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-row>
                                                <v-icon
                                                    @click="
                                                        openEditCategoryDialog(
                                                            item
                                                        )
                                                    "
                                                    small
                                                    color="green"
                                                    >mdi-pencil</v-icon
                                                >
                                                <v-icon
                                                    @click="
                                                        openDeleteCategoryDialog(
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
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle class="text-center font-weight-medium">
                        Nahrané aplikace
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
                                    <v-data-table
                                        :headers="headersApps"
                                        :items="apps"
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-row>
                                                <v-icon
                                                    @click="
                                                        openEditAppDialog(item)
                                                    "
                                                    small
                                                    color="green"
                                                    >mdi-pencil</v-icon
                                                >
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
            <!-- CATEGORIES -->
            <v-dialog
                v-model="deleteCategoryDialog"
                persistent
                max-width="400px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat kategorii?
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
                            @click="deleteCategory()"
                            plain
                            outlined
                        >
                            Odebrat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editCategoryDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <BaseInput
                                        v-model="formData.category"
                                        label="Kategorie"
                                        type="text"
                                        :error="errors.category"
                                    ></BaseInput>
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
                            @click="editCategory()"
                            plain
                            outlined
                        >
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog
                v-model="createCategoryDialog"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <BaseInput
                                        v-model="formData.category"
                                        label="Kategorie"
                                        type="text"
                                        :error="errors.category"
                                    ></BaseInput>
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
                            @click="createCategory()"
                            plain
                            outlined
                        >
                            Vytvořit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- APPS -->
            <v-dialog v-model="uploadDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
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

                                <v-col cols="12" sm="6" md="6">
                                    <v-combobox
                                        prepend-inner-icon="mdi-file-tree"
                                        :items="categories"
                                        item-text="category"
                                        item-value="id"
                                        outlined
                                        dense
                                        label="Vyberte kategorii"
                                        v-model="formData.category"
                                        :error="errors.category"
                                    ></v-combobox>
                                </v-col>
                                <v-col>
                                    <v-textarea
                                        prepend-inner-icon="mdi-comment-text"
                                        outlined
                                        label="Popis aplikace"
                                        v-model="formData.description"
                                        :error="errors.description"
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
                            :disabled="!formData.category || file.length == 0"
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

            <v-dialog v-model="editAppDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col>
                                    <v-textarea
                                        prepend-inner-icon="mdi-comment-text"
                                        outlined
                                        label="Popis aplikace"
                                        v-model="formData.description"
                                        :error="errors.description"
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
                            plain
                            outlined
                            color="green darken-1"
                            @click="editApp()"
                        >
                            Upravit
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
            editAppDialog: false,
            fileUploadLoader: false,
            createCategoryDialog: false,
            editCategoryDialog: false,
            deleteCategoryDialog: false,
            deleteAppDialog: false,
            uploadDialog: false,
            categories: [],
            formData: [],
            errors: [],
            apps: [],
            file: [],
            headersAppCategories: [
                { text: "Kategorie", value: "category" },
                { text: "", value: "actions" },
            ],

            headersApps: [
                { text: "Název", value: "name" },
                { text: "Popis", value: "description" },
                { text: "Kategorie", value: "category.category" },
                { text: "", value: "actions" },
            ],
        };
    },

    created() {
        this.getAppsCategories();
        this.getApps();
    },
    methods: {
        getAppsCategories() {
            axios.get("apps/categories").then((response) => {
                this.categories = response.data.data;
            });
        },

        selectFile(event) {
            this.file = event;
        },

        getApps() {
            axios.get("apps?unsorted=true").then((response) => {
                this.apps = response.data.data.apps;
            });
        },

        openUploadAppDialog() {
            this.fileUploadLoader = false;
            this.uploadDialog = true;
        },

        uploadFile() {
            this.fileUploadLoader = true;
            const formUploadData = new FormData();
            formUploadData.append("file", this.file, this.file.name);
            formUploadData.append("category", this.formData.category.id);
            if (this.formData.description) {
                formUploadData.append("description", this.formData.description);
            }
            axios
                .post("apps", formUploadData)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                })
                .catch((error) => {
                    this.fileUploadLoader = false;
                    this.errors = error.response.data.errors;
                });
        },

        openEditAppDialog(data) {
            this.formData = data;
            this.editAppDialog = true;
        },

        editApp() {
            axios
                .patch("apps/" + this.formData.id, {
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

        openDeleteAppDialog(appId) {
            this.formData.id = appId;
            this.deleteAppDialog = true;
        },

        deleteApp() {
            axios.delete("apps/" + this.formData.id).then((response) => {
                this.$store.state.alerts = response.data;
                this.closeDialog();
            });
        },

        openCreateCategoryDialog() {
            this.createCategoryDialog = true;
        },

        createCategory() {
            axios
                .post("apps/categories", {
                    category: this.formData.category,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openEditCategoryDialog(category) {
            this.editCategoryDialog = true;
            this.formData = category;
        },

        editCategory() {
            axios
                .patch("apps/categories/" + this.formData.id, {
                    category: this.formData.category,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openDeleteCategoryDialog(categoryId) {
            this.deleteCategoryDialog = true;
            this.formData.categoryId = categoryId;
        },

        deleteCategory() {
            axios
                .delete("apps/categories/" + this.formData.categoryId)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                });
        },

        closeDialog() {
            this.getAppsCategories();
            this.getApps();
            this.editCategoryDialog = false;
            this.deleteCategoryDialog = false;
            this.createCategoryDialog = false;
            this.uploadDialog = false;
            this.fileUploadLoader = true;
            this.editAppDialog = false;
            this.deleteAppDialog = false;
            this.formData = [];
            this.errors = [];
            this.file = [];
        },
    },
};
</script>
