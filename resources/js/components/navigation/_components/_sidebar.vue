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
            >
                <v-list-item link v-for="item in items" :key="item.title"  :to="item.link">
                    <v-img max-height="26" max-width="26" class="mx-auto">
                        <v-icon> {{ item.icon }} </v-icon>
                    </v-img>
                    <v-list-item-title class="ml-6">
                        {{ item.title }}</v-list-item-title
                    >
                </v-list-item>
            </v-navigation-drawer>
        </v-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
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
};
</script>
