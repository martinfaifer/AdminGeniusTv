<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            preppend-inner-icon="mdi-magnify"
                            label="Vyhledat ..."
                            single-line
                            hide-details
                            autofocus
                        ></v-text-field>
                        <v-spacer></v-spacer>

                        <v-btn
                            @click="openCreateDialog()"
                            class="mr-3"
                            icon
                            color="green"
                            small
                        >
                            <v-icon small>mdi-plus</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="users"
                                        :search="search"
                                    >
                                        <template
                                            v-slot:item.is_admin="{ item }"
                                        >
                                            <v-icon
                                                v-if="item.is_admin == true"
                                                color="green"
                                                small
                                                >mdi-check</v-icon
                                            >
                                            <v-icon v-else color="red" small
                                                >mdi-close</v-icon
                                            >
                                        </template>
                                        <template
                                            v-slot:item.permisions="{ item }"
                                        >
                                            <!-- <v-container fluid>
                                                <v-row no-gutters>
                                                    <v-col
                                                        v-for="permision in item.permisions"
                                                        :key="permision.id"
                                                        cols="12"
                                                        sm="12"
                                                        md="4"
                                                        lg="4"
                                                        class="my-1"
                                                    >
                                                        <v-chip
                                                            label
                                                            color="blue"
                                                            class="white--text"
                                                            small
                                                        >
                                                            {{
                                                                permision
                                                                    .permision
                                                                    .permision
                                                            }}
                                                        </v-chip>
                                                    </v-col>
                                                </v-row>
                                            </v-container> -->
                                        </template>
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-row>
                                                <v-icon
                                                    @click="
                                                        openEditDialog(item)
                                                    "
                                                    small
                                                    color="green"
                                                    >mdi-pencil</v-icon
                                                >
                                                <v-icon
                                                    @click="
                                                        openResetPasswordDialog(
                                                            item.id
                                                        )
                                                    "
                                                    small
                                                    color="info"
                                                    >mdi-lock-reset</v-icon
                                                >
                                                <v-icon
                                                    @click="
                                                        openDeleteDialog(
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
            <v-dialog v-model="deleteDialog" persistent max-width="400px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat uživatele?
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

            <v-dialog
                v-model="resetPasswordDialog"
                persistent
                max-width="400px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si změnit heslo a zaslat jej
                                        uživately do emailu?
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
                            @click="changePassword()"
                            plain
                            outlined
                        >
                            Změnit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text v-if="formData.id">
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <BaseInput
                                        v-model="formData.email"
                                        label="Email"
                                        type="text"
                                        :error="errors.crm_id"
                                        readonly
                                        disabled
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-autocomplete
                                        v-model="formData.nangu_isp_id"
                                        label="ISP"
                                        :items="isps"
                                        outlined
                                        dense
                                        item-value="id"
                                        item-text="name"
                                        :error="errors.nangu_isp_id"
                                    ></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.crm_id"
                                        label="CRM ID "
                                        type="text"
                                        :error="errors.crm_id"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12">
                                    <v-row>
                                        <v-divider class="mx-3"></v-divider>
                                        <span class="mt-n2 caption">
                                            Práva
                                        </span>
                                        <v-divider class="mx-3"></v-divider>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-checkbox
                                        v-model="formData.is_admin"
                                        label="Admin"
                                        :error="errors.is_admin"
                                    ></v-checkbox>
                                </v-col>

                                <!-- <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-checkbox
                                        v-model="formData.permisions.show_news"
                                        label="Zobrazit Novinky"
                                        :error="errors.show_news"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-checkbox
                                        v-model="formData.permisions.show_apps"
                                        label="Zobrazit aplikace"
                                        :error="errors.show_apps"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-checkbox
                                        v-model="
                                            formData.permisions.show_invoices
                                        "
                                        label="Zobrazit faktury"
                                        :error="errors.show_invoices"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-checkbox
                                        v-model="formData.permisions.tutorials"
                                        label="Zobrazit návody"
                                        :error="errors.tutorials"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-checkbox
                                        v-model="formData.permisions.show_nangu"
                                        label="Zobrazit správu zákazníků"
                                        :error="errors.show_nangu"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-checkbox
                                        v-model="
                                            formData.permisions.show_tickets
                                        "
                                        label="Zobrazit tikety"
                                        :error="errors.show_tickets"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-checkbox
                                        v-model="formData.permisions.show_api"
                                        label="Zobrazit API"
                                        :error="errors.show_api"
                                    ></v-checkbox>
                                </v-col> -->
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
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.name"
                                        label="Jméno"
                                        type="text"
                                        :error="errors.name"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.email"
                                        label="Email"
                                        type="text"
                                        :error="errors.email"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-autocomplete
                                        v-model="formData.nangu_isp_id"
                                        label="ISP"
                                        :items="isps"
                                        outlined
                                        dense
                                        item-value="id"
                                        item-text="name"
                                        :error="errors.nangu_isp_id"
                                    ></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        v-model="formData.crm_id"
                                        label="CRM ID "
                                        type="text"
                                        :error="errors.crm_id"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-checkbox
                                        v-model="formData.is_admin"
                                        label="Admin"
                                        :error="errors.is_admin"
                                    ></v-checkbox>
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
            resetPasswordDialog: false,
            formData: [],
            users: [],
            isps: [],
            errors: [],
            search: "",
            headers: [
                { text: "jméno", value: "name" },
                { text: "Email", value: "email" },
                { text: "Nangu ISP", value: "nangu_isp.name" },
                { text: "CRM ID", value: "crm_id" },
                { text: "Admin", value: "is_admin" },
                // { text: "Práva", value: "permisions" },
                { text: "", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
        this.getIsps();
    },
    methods: {
        index() {
            axios.get("users").then((response) => {
                this.users = response.data.data;
            });
        },

        getIsps() {
            axios.get("nangu/isps").then((response) => {
                this.isps = response.data.data;
            });
        },

        openResetPasswordDialog(userId) {
            this.formData.userId = userId;
            this.resetPasswordDialog = true;
        },

        changePassword() {
            axios
                .patch("users/" + this.formData.userId + "/password")
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                });
        },

        openCreateDialog() {
            this.createDialog = true;
        },

        createItem() {
            axios
                .post("users", {
                    name: this.formData.name,
                    email: this.formData.email,
                    nangu_isp_id: this.formData.nangu_isp_id,
                    crm_id: this.formData.crm_id,
                    is_admin: this.formData.is_admin,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openEditDialog(item) {
            axios.get("users/" + item.id).then((response) => {
                this.formData = response.data.data;
                this.editDialog = true;
            });
        },

        openDeleteDialog(itemId) {
            this.formData.userId = itemId;
            this.deleteDialog = true;
        },

        deleteItem() {
            axios.delete("users/" + this.formData.userId).then((response) => {
                this.$store.state.alerts = response.data;
                this.closeDialog();
                this.index();
            });
        },

        editItem() {
            axios
                .patch("users/" + this.formData.id, {
                    nangu_isp_id: this.formData.nangu_isp_id,
                    crm_id: this.formData.crm_id,
                    is_admin: this.formData.is_admin,
                    // show_news: this.formData.permisions.show_news,
                    // show_apps: this.formData.permisions.show_apps,
                    // show_invoices: this.formData.permisions.show_invoices,
                    // show_tutorials: this.formData.permisions.show_tutorials,
                    // show_nangu: this.formData.permisions.show_nangu,
                    // show_api: this.formData.permisions.show_api,
                    // show_tickets: this.formData.permisions.show_tickets,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        closeDialog() {
            this.editDialog = false;
            this.deleteDialog = false;
            this.createDialog = false;
            this.resetPasswordDialog = false;
            this.formData = [];
        },

        hasPermision(itemPermision, userPermisions) {
            let output = false;

            userPermisions.forEach((element) => {
                if (element.permision.permision === itemPermision) {
                    output = true;
                }
            });
            return output;
        },
    },
};
</script>
