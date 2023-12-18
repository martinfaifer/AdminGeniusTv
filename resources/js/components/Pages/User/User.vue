<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-avatar
                    size="128"
                    color="#1E293B"
                    fixed
                    style="z-index: 1"
                    class="mt-3"
                >
                    <!-- @click="openAvatarDialog()" -->
                    <span
                        v-if="user.avatar == null"
                        class="white--text text-h5"
                        >{{ user.name.substring(0, 1) }}</span
                    >
                    <img
                        v-if="user.avatar != null"
                        :src="user.avatar"
                        :lazy-src="user.avata"
                        contain
                        alt="avatar"
                    />
                </v-avatar>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur mt-n12"
                    flat
                >
                    <v-card-text class="text--center mt-4">
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <p class="subtitle-2">
                                        <span class="font-weight-medium mx-3"
                                            >Jméno:</span
                                        >{{ user.name }}
                                        <v-icon
                                            @click="openEditNameDialog()"
                                            small
                                            class="mx-3"
                                            color="green"
                                            >mdi-pencil</v-icon
                                        >
                                    </p>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <p v-if="user.nangu_isp" class="subtitle-2">
                                        <span class="font-weight-medium mx-3"
                                            >Společnost:</span
                                        >{{ user.nangu_isp.name }}
                                    </p>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <!-- empty space -->
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <p class="subtitle-2">
                                        <span class="font-weight-medium mx-3"
                                            >Email:</span
                                        >{{ user.email }}
                                    </p>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <v-btn
                                        @click="openPasswordDialog()"
                                        small
                                        outlined
                                        plain
                                        color="info"
                                        >Změnit heslo</v-btn
                                    >
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <!-- empty space -->
                                </v-col>
                                <!-- newsletter notification -->
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <p class="subtitle-2">
                                        <span class="font-weight-medium mx-3"
                                            >Upozornění na novinky:</span
                                        >
                                        <v-icon
                                            v-if="
                                                user.has_newsletter_notification ==
                                                true
                                            "
                                            small
                                            color="green"
                                            @click="
                                                changeNotification(
                                                    false,
                                                    'has_newsletter_notification'
                                                )
                                            "
                                            >mdi-check</v-icon
                                        >
                                        <v-icon
                                            v-else
                                            small
                                            color="red"
                                            @click="
                                                changeNotification(
                                                    true,
                                                    'has_newsletter_notification'
                                                )
                                            "
                                            >mdi-close</v-icon
                                        >
                                    </p>
                                </v-col>
                                <!-- maintenance notification -->
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <p class="subtitle-2">
                                        <span class="font-weight-medium mx-3"
                                            >Upozornění na plánované
                                            výpadky:</span
                                        >
                                        <v-icon
                                            v-if="
                                                user.has_maintenance_notification ==
                                                true
                                            "
                                            small
                                            color="green"
                                            @click="
                                                changeNotification(
                                                    false,
                                                    'has_maintenance_notification'
                                                )
                                            "
                                            >mdi-check</v-icon
                                        >
                                        <v-icon
                                            v-else
                                            small
                                            color="red"
                                            @click="
                                                changeNotification(
                                                    true,
                                                    'has_maintenance_notification'
                                                )
                                            "
                                            >mdi-close</v-icon
                                        >
                                    </p>
                                </v-col>
                                <!-- apps notification -->
                                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                                    <p class="subtitle-2">
                                        <span class="font-weight-medium mx-3"
                                            >Upozornění na nové aplikace:</span
                                        >
                                        <v-icon
                                            v-if="
                                                user.has_apps_notification ==
                                                true
                                            "
                                            small
                                            color="green"
                                            @click="
                                                changeNotification(
                                                    false,
                                                    'has_apps_notification'
                                                )
                                            "
                                            >mdi-check</v-icon
                                        >
                                        <v-icon
                                            v-else
                                            small
                                            color="red"
                                            @click="
                                                changeNotification(
                                                    true,
                                                    'has_apps_notification'
                                                )
                                            "
                                            >mdi-close</v-icon
                                        >
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="center">
            <v-dialog v-model="editNameDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <BaseInput
                                        v-model="formData.name"
                                        label="Jméno"
                                        type="text"
                                        :error="errors.name"
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
                            @click="editName()"
                            plain
                            outlined
                        >
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editPasswordDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <BaseInput
                                        v-model="formData.password"
                                        label="Nové heslo"
                                        type="text"
                                        :error="errors.password"
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
                            @click="editPassword()"
                            plain
                            outlined
                        >
                            Upravit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import axios from "axios";
import BaseInput from "../../Forms/BaseInput.vue";
export default {
    components: {
        BaseInput,
    },

    data() {
        return {
            user: [],
            editNameDialog: false,
            editPasswordDialog: false,
            formData: [],
            errors: [],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("users/auth").then((response) => {
                this.user = response.data.data;
            });
        },

        openEditNameDialog() {
            this.editNameDialog = true;
        },

        openPasswordDialog() {
            this.editPasswordDialog = true;
        },

        editPassword() {
            axios
                .patch("users/authentificate/password", {
                    password: this.formData.password,
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

        editName() {
            axios
                .patch("users/authentificate/name", {
                    name: this.formData.name,
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

        changeNotification(state, notificatinType) {
            axios
                .patch("users/authentificate/notification", {
                    state: state,
                    notificationType: notificatinType
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        closeDialog() {
            this.editNameDialog = false;
            this.editPasswordDialog = false;
            this.formData = [];
            this.errors = [];
        },
    },
};
</script>
