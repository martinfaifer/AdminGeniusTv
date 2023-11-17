<template>
    <div>
        <div class="justify-start mr-3 d-flex">
            <v-app-bar-nav-icon
                class="hidden-lg-and-up mt-16"
                color="#1E293B"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </div>
        <v-row no-gutters>
            <v-navigation-drawer
                v-model="drawer"
                fixed
                app
                class="flex fill-height d-flex justify-items-center"
                color="#0f0f0f"
                src="/images/cervene_pozadi-p-500.jpeg"
                style="filter: grayscale(0%)"
            >
                <v-list>
                    <v-list-item two-line>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-list-item-content v-bind="attrs" v-on="on">
                                    <v-list-item-title
                                        class="white--text font-weight-medium"
                                    >
                                        {{ user.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="white--text">
                                        {{ user.email }}
                                        <v-icon color="white"
                                            >mdi-menu-down</v-icon
                                        >
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </template>
                            <v-list color="#F8F9FA">
                                <v-list-item dense @click="userZone()">
                                    <v-list-item-icon>
                                        <v-img
                                            max-height="26"
                                            max-width="26"
                                            class="mx-auto"
                                        >
                                            <v-icon color="info" small>
                                                mdi-account
                                            </v-icon>
                                        </v-img>
                                    </v-list-item-icon>
                                    <v-list-item-title>
                                        Nastavení
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item dense @click="logout()">
                                    <v-list-item-icon>
                                        <v-img
                                            max-height="26"
                                            max-width="26"
                                            class="mx-auto"
                                        >
                                            <v-icon color="red" small>
                                                mdi-logout
                                            </v-icon>
                                        </v-img>
                                    </v-list-item-icon>
                                    <v-list-item-title>
                                        Odhlásit se
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>
                <MainSideBarItems
                    v-if="$route.params.component != 'admin'"
                ></MainSideBarItems>
                <AdminSideBarItemsVue
                    v-if="
                        user.is_admin == true &&
                        $route.params.component == 'admin'
                    "
                ></AdminSideBarItemsVue>
            </v-navigation-drawer>
        </v-row>
    </div>
</template>
<script>
import axios from "axios";
import MainSideBarItems from "./_mainSideBarItems.vue";
import AdminSideBarItemsVue from "./_adminSideBarItems.vue";
export default {
    data() {
        return {
            user: [],
            drawer: true,
        };
    },
    components: {
        MainSideBarItems,
        AdminSideBarItemsVue,
    },

    created() {
        this.index();
    },
    methods: {
        async index() {
            await axios
                .get("users/auth")
                .then((response) => {
                    this.user = response.data.data;
                })
                .catch((error) => {
                    if (error.response.status == "401") {
                        this.$router.push("/login");
                    }
                });
        },

        userZone() {
            if (this.$route.params.component != "user") {
                this.$router.push("/user");
            }
        },

        logout() {
            axios.post("logout").then((response) => {
                this.$router.push("/login");
            });
        },
    },
};
</script>
