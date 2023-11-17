<template>
    <v-main>
        <!-- prostor na notifikace -->
        <div v-if="alert.length != 0" class="flex-row-reverse d-flex">
            <v-col
                class="mt-8"
                cols="12"
                sm="12"
                md="2"
                lg="2"
                style="position: fixed; z-index: 1"
            >
                <v-snackbar
                    transition="slide-x-reverse-transition"
                    :timeout="4000"
                    :value="true"
                    absolute
                    top
                    right
                    :color="alert.status"
                    elevation="24"
                >
                    <v-row>
                        <v-icon class="mx-3" small>
                            {{ iconFunction(alert.status) }}
                        </v-icon>
                        <v-spacer></v-spacer>
                        <span class="justify-end mx-6 body-2 font-weight-bold">
                            {{ alert.message }}
                        </span>
                    </v-row>
                </v-snackbar>
            </v-col>
        </div>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="4" lg="4">
                    <v-form @submit.prevent="login()">
                        <v-card
                            class="overflow-hidden rounded-xl blur shadow-blur"
                        >
                            <v-card-text>
                                <h1 class="mt-4 mb-4 text-center">
                                    <v-icon color="error" large>
                                        mdi-television-play
                                    </v-icon>
                                    <strong>Admin GeniusTV</strong>
                                </h1>

                                <v-text-field
                                    autofocus
                                    :error-messages="errors.email"
                                    v-model="email"
                                    label="Email"
                                    name="username"
                                    prepend-inner-icon="mdi-account"
                                    type="text"
                                ></v-text-field>

                                <v-text-field
                                    :error-messages="errors.password"
                                    v-model="password"
                                    label="Heslo"
                                    name="password"
                                    prepend-inner-icon="mdi-lock"
                                    type="password"
                                ></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    type="submit"
                                    color="success"
                                    class="rounded-lg"
                                    outlined
                                    >Přihlášení</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            email: null,
            password: null,
            alert: [],
        };
    },

    components: {},
    created() {
        this.getUser();
    },
    methods: {
        getUser() {
            axios
                .get("users/auth")
                .then((response) => {
                    if (response.data.status == "success") {
                        this.$store.state.user = response.data.data;
                        this.$router.push("/");
                    }
                })
                .catch((error) => {
                    if (error.response.status == "401") {
                        // unAuthorized
                    }
                });
        },
        login() {
            this.errors = [];
            axios
                .post("login", {
                    email: this.email,
                    password: this.password,
                })
                .then((response) => {
                    this.alert = response.data;
                    if (response.data.status === "success") {
                        this.$store.state.user = response.data.data;
                        setTimeout(function () {}, 2000);
                        this.$router.push("/");
                    } else {
                        this.email = null;
                        this.password = null;
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
        iconFunction(status) {
            if (status == "success") {
                return "mdi-check";
            }
            return "mdi-close";
        },
    },
    watch: {
        alert() {
            if (this.alert.length != 0) {
                setTimeout(
                    function () {
                        this.alert = [];
                    }.bind(this),
                    5000
                );
            } else {
                return;
            }
        },
    },
};
</script>
