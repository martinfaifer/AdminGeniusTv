<template>
    <v-app-bar fixed dense flat color="transparent">
        <v-spacer></v-spacer>
        <v-tooltip bottom v-if="user.is_admin == true">
            <template v-slot:activator="{ on, attrs }">
                <v-avatar
                    v-bind="attrs"
                    v-on="on"
                    style="cursor: pointer"
                    size="32"
                    fixed
                >
                    <v-icon
                        v-if="$route.params.component != 'admin'"
                        @click="goToAdmin()"
                        color="black"
                        >mdi-cog</v-icon
                    >
                    <v-icon v-else color="black" @click="goHome()">
                        mdi-home
                    </v-icon>
                </v-avatar>
            </template>
            <span v-if="$route.params.component != 'admin'">Administrace</span>
            <span v-else>Domů</span>
        </v-tooltip>
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

        goToAdmin() {
            this.$router.push("/admin/news");
        },

        goHome() {
            this.$router.push("/");
        }
    },
};
</script>
