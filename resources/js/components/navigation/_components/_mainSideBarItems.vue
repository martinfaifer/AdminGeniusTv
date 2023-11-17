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
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
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

    mounted() {},
    methods: {},
};
</script>
