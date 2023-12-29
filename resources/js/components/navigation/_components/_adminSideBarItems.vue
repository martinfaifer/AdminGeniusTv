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
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            items: [
                {
                    title: "Správa novinek",
                    icon: "mdi-newspaper",
                    link: "/admin/news",
                },
                {
                    title: "Správa aplikací",
                    icon: "mdi-devices",
                    link: "/admin/apps",
                },
                {
                    title: "Uživatelé",
                    icon: "mdi-account-multiple",
                    link: "/admin/users",
                },
                {
                    title: "Správa návodů",
                    icon: "mdi-help",
                    link: "/admin/help",
                },
                {
                    title: "Marketing",
                    icon: "mdi-shopping",
                    link: "/admin/marketing",
                },
            ],

        };
    },
    components: {},

    mounted() {},
    methods: {},
};
</script>
