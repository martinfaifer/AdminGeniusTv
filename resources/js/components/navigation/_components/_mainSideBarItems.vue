<template>
    <div>
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
                    <v-img max-height="26" max-width="26" class="mx-auto">
                        <v-icon color="white"> {{ item.icon }} </v-icon>
                    </v-img>
                </v-list-item-icon>
                <v-list-item-title class="ml-6 subtitle-1 font-weight-medium">
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
                    <v-img max-height="26" max-width="26" class="mx-auto">
                        <v-icon color="white"> {{ item.icon }} </v-icon>
                    </v-img>
                </v-list-item-icon>
                <v-list-item-title class="ml-6 subtitle-1 font-weight-medium">
                    {{ item.title }}</v-list-item-title
                >
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-item
                link
                nav
                v-for="item in api"
                :key="item.title"
                :to="item.link"
                class="white--text"

            >
                <v-list-item-icon>
                    <v-img max-height="26" max-width="26" class="mx-auto">
                        <v-icon color="white"> {{ item.icon }} </v-icon>
                    </v-img>
                </v-list-item-icon>
                <v-list-item-title class="ml-6 subtitle-1 font-weight-medium">
                    {{ item.title }}</v-list-item-title
                >
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-item
                link
                nav
                v-for="item in marketing"
                :key="item.title"
                :to="item.link"
                class="white--text"

            >
                <v-list-item-icon>
                    <v-img max-height="26" max-width="26" class="mx-auto">
                        <v-icon color="white"> {{ item.icon }} </v-icon>
                    </v-img>
                </v-list-item-icon>
                <v-list-item-title class="ml-6 subtitle-1 font-weight-medium">
                    {{ item.title }}</v-list-item-title
                >
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
import axios from "axios";

export default {
    // props: {
    //     user: Object,
    // },
    data() {
        return {
            user: [],
            items: [
                {
                    title: "Novinky",
                    icon: "mdi-newspaper",
                    link: "/news",
                    can: "show_news",
                },
                {
                    title: "Aplikace",
                    icon: "mdi-devices",
                    link: "/apps",
                    can: "show_apps",
                },
                {
                    title: "Tikety",
                    icon: "mdi-checkbox-marked-circle-plus-outline",
                    link: "/tikets",
                    can: "show_tickets",
                },
                {
                    title: "Fakturace",
                    icon: "mdi-currency-usd",
                    link: "/invoices",
                    can: "show_invoices",
                },
                {
                    title: "Návody",
                    icon: "mdi-help",
                    link: "/help",
                    can: "show_tutorials",
                },
            ],
            nanguCustomerMenuPart: [
                {
                    title: "Založení zákazníka",
                    icon: "mdi-account-multiple",
                    link: "/customers/create",
                    can: "show_nangu",
                },
                {
                    title: "Vyhledání zákazníka",
                    icon: "mdi-magnify",
                    link: "/customers/search",
                    can: "show_nangu",
                },
                // { title: "Users", icon: "mdi-account-group-outline" },
            ],

            api: [
                {
                    title: "API",
                    icon: "mdi-api",
                    link: "/api",
                    can: "show_api",
                },
            ],
            marketing: [
                {
                    title: "Marketing",
                    icon: "mdi-shopping",
                    link: "/marketing",
                    can: "show_marketing",
                },
            ],
        };
    },
    created() {
        this.index();
    },
    components: {},
    mounted() {},
    methods: {
        index() {
            axios.get("users/auth").then((response) => {
                this.user = response.data.data;
            });
        },
        hasPermision(itemPermision, userPermisions, isAdmin) {
            if (isAdmin == true) {
                return true;
            }
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
