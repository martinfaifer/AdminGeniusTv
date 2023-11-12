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
            >
                <v-list>
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">
                                {{ user.name }}
                            </v-list-item-title >
                            <v-list-item-subtitle class="white--text">
                                {{ user.email }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>
                <v-list>
                    <v-list-item
                        link
                        nav
                        v-for="item in items"
                        :key="item.title"
                        :to="item.link"
                        class="white--text"
                    >
                        <v-list-item-icon>
                            <v-img
                                max-height="26"
                                max-width="26"
                                class="mx-auto"
                            >
                                <v-icon color="white"> {{ item.icon }} </v-icon>
                            </v-img>
                        </v-list-item-icon>
                        <v-list-item-title class="ml-6 subtitle-1">
                            {{ item.title }}</v-list-item-title
                        >
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-item
                        link
                        nav
                        v-for="item in nanguCustomerMenuPart"
                        :key="item.title"
                        :to="item.link"
                        class="white--text"
                    >
                        <v-list-item-icon>
                            <v-img
                                max-height="26"
                                max-width="26"
                                class="mx-auto"
                            >
                                <v-icon color="white"> {{ item.icon }} </v-icon>
                            </v-img>
                        </v-list-item-icon>
                        <v-list-item-title class="ml-6 subtitle-1">
                            {{ item.title }}</v-list-item-title
                        >
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-row>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            user: [],
            drawer: true,
            items: [
                {
                    title: "Novinky",
                    icon: "mdi-newspaper",
                    link: "/news",
                },
                {
                    title: "Aplikace",
                    icon: "mdi-devices",
                    link: "/apps",
                },
                {
                    title: "Tikety",
                    icon: "mdi-checkbox-marked-circle-plus-outline",
                    link: "/tikets",
                },
                {
                    title: "Fakturace",
                    icon: "mdi-currency-usd",
                    link: "/invoices",
                },
                {
                    title: "Návody",
                    icon: "mdi-help",
                    link: "/help",
                },
            ],
            nanguCustomerMenuPart: [
                {
                    title: "Založení zákazníka",
                    icon: "mdi-account-multiple",
                    link: "/customers/create",
                },
                {
                    title: "Vyhledání zákazníka",
                    icon: "mdi-magnify",
                    link: "/customers/search",
                },
                // { title: "Users", icon: "mdi-account-group-outline" },
            ],
        };
    },
    components: {},

    mounted() {
        this.index();
    },
    methods: {
        async index() {
            await axios.get("users").then((response) => {
                console.log(response.data.data);
                if (response.data.status == "success") {
                    this.user = response.data.data;
                } else {
                    this.$router.push("/login");
                }
            });
        },
    },
};
</script>
