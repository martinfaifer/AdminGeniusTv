<template>
    <v-app-bar fixed dense flat color="#F8F9FA">
        <v-spacer></v-spacer>
        <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
                <v-list-item-avatar>
                    <v-avatar style="cursor: pointer" size="32" fixed v-on="on">
                        <v-icon color="black">mdi-account</v-icon>
                    </v-avatar>
                </v-list-item-avatar>
            </template>
            <v-list width="200px" class="text-center caption">
                <!-- <v-list-item link to="/user/prehled">
                    Uživatelský účet
                    <v-spacer></v-spacer
                    ><v-icon color="blue" right x-small
                        >mdi-account-cog-outline</v-icon
                    >
                </v-list-item> -->
                <!-- <v-list-item link to="/settings">
                    Nastavení<v-spacer></v-spacer
                    ><v-icon color="green" right x-small>mdi-settings</v-icon>
                </v-list-item> -->
                <!-- <v-divider class="ml-2 mr-2"></v-divider> -->
                <v-list-item @click="logout()">
                    Odhlásit se
                    <v-spacer></v-spacer
                    ><v-icon color="red" right x-small>mdi-lock</v-icon>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    components: {},
    data() {
        return {};
    },

    methods: {
        logout() {
            axios.post("logout").then((response) => {
                this.$router.push("/login");
            });
        },
    },
};
</script>
