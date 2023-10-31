<template>
    <v-app-bar fixed dense flat :style="background()">
        <v-spacer></v-spacer>
        <!-- <Search></Search> -->
        <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
                <v-list-item-avatar>
                    <v-avatar
                        style="cursor: pointer"
                        size="32"
                        fixed
                        v-on="on"
                    >
                        <v-icon color="black">mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
            </template>
            <v-list width="200px" class="text-center caption">
                <v-list-item link to="/user/prehled">
                    Uživatelský účet
                    <v-spacer></v-spacer
                    ><v-icon color="blue" right x-small
                        >mdi-account-cog-outline</v-icon
                    >
                </v-list-item>
                <!-- <v-list-item link to="/settings">
                    Nastavení<v-spacer></v-spacer
                    ><v-icon color="green" right x-small>mdi-settings</v-icon>
                </v-list-item> -->
                <v-divider class="ml-2 mr-2"></v-divider>
                <v-list-item @click="logOut()">
                    Odhlásit se
                    <v-spacer></v-spacer
                    ><v-icon color="red" right x-small>mdi-lock</v-icon>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
// import Search from "./_search/search.vue";
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    components: {
        // Search,
    },
    data() {
        return {};
    },

    methods: {
        background() {
            if (this.$vuetify.theme.dark == false) {
                return "background: rgba(248, 249, 250, 0.25);box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);backdrop-filter: blur(4px);-webkit-backdrop-filter: blur(4px);border-radius: 10px;";
            }

            return "background: rgba(27, 33, 45, 0.25);box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);backdrop-filter: blur(4px);-webkit-backdrop-filter: blur(4px);border-radius: 10px;";
        },
    },
};
</script>
