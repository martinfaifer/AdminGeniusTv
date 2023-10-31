<template>
    <v-app>
        <div>
            <vertical-menu></vertical-menu>
            <side-bar></side-bar>

            <v-main app>
                <v-container fluid class="mr-16 mt-8">
                    <notification></notification>
                    <router-view class="mt-3"> </router-view>
                </v-container>
            </v-main>
        </div>
    </v-app>
</template>

<script>
import VerticalMenu from "./_components/_verticalmenu.vue";
import SideBar from "./_components/_sidebar.vue";
import Notification from "../Notifications/Notification.vue";
export default {
    computed: {},
    data() {
        return {
            alert: true,
        };
    },

    components: {
        SideBar,
        VerticalMenu,
        Notification,
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("users")
                .then((response) => {
                    if (response.data.status != "success") {
                        this.$router.push("/login");
                    } else {
                        this.$store.state.user = response.data.data;
                    }
                })
                .catch((error) => {
                    if (error.response.status == "401") {
                        this.$router.push("/login");
                    }
                });
        },
    },

    mounted() {
        //
    },

    watch: {
        $route(to, from) {},
    },
};
</script>
