<template>
    <div>
        <div v-cloak v-if="$route.params.component">
            <v-container fluid>
                <IndexNews v-if="$route.params.component == 'news'"></IndexNews>
                <IndexApps
                    v-else-if="$route.params.component == 'apps'"
                ></IndexApps>
                <IndexTickets
                    v-else-if="$route.params.component == 'tikets'"
                ></IndexTickets>
                <Invoices
                    v-else-if="$route.params.component == 'invoices'"
                ></Invoices>
                <Tutorials
                    v-else-if="$route.params.component == 'help'"
                ></Tutorials>
                <!-- admin sections -->
                <AdminNews
                    v-else-if="
                        user.is_admin == true &&
                        $route.params.component == 'admin' &&
                        $route.params.subcomponent == 'news'
                    "
                ></AdminNews>
                <AdminApps
                    v-else-if="
                        user.is_admin == true &&
                        $route.params.component == 'admin' &&
                        $route.params.subcomponent == 'apps'
                    "
                ></AdminApps>
                <AdminUsers
                    v-else-if="
                        user.is_admin == true &&
                        $route.params.component == 'admin' &&
                        $route.params.subcomponent == 'users'
                    "
                ></AdminUsers>
                <AdminTutorials
                    v-else-if="
                        user.is_admin == true &&
                        $route.params.component == 'admin' &&
                        $route.params.subcomponent == 'help'
                    "
                ></AdminTutorials>
                <AdminMarketing
                    v-else-if="
                        user.is_admin == true &&
                        $route.params.component == 'admin' &&
                        $route.params.subcomponent == 'marketing'
                    "
                ></AdminMarketing>

                <User v-else-if="$route.params.component == 'user'"></User>
                <Api v-else-if="$route.params.component == 'api'"></Api>
                <Marketing
                    v-else-if="$route.params.component == 'marketing'"
                ></Marketing>
                <!-- <PageNotFound v-else></PageNotFound> -->
            </v-container>
        </div>
        <div v-else>
            <v-col cols="12" sm="12" md="12" lg="12">
                <InfoAlert alertText="Vyberte z menu v levo"></InfoAlert>
            </v-col>
        </div>
    </div>
</template>
<script>
let InfoAlert = () => import("../../Notifications/_infoAlert");
let IndexNews = () => import("../News/IndexNewsComponent.vue");
let IndexApps = () => import("../Apps/IndexAppsComponent.vue");
let IndexTickets = () => import("../Tickets/IndexTicketComponent.vue");
let Invoices = () => import("../Invoices/IndexInvoiceComponent.vue");
let Tutorials = () => import("../Tutorials/IndexTutorialComponent.vue");
let Marketing = () => import("../Marketing/IndexMarketing.vue");

let AdminNews = () => import("../Admin/News/AdminNewsComponent.vue");
let AdminApps = () => import("../Admin/Apps/AdminAppsComponent.vue");
let AdminUsers = () => import("../Admin/Users/AdminUsers.vue");
let AdminTutorials = () => import("../Admin/Tutorials/AdminTutorials.vue");
let AdminMarketing = () =>
    import("../Admin/Marting/AdminMarketingComponent.vue");

let User = () => import("../User/User.vue");
let Api = () => import("../API/Api.vue");

let PageNotFound = () => import("../404/PageNotFound.vue");
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    components: {
        InfoAlert,
        IndexNews,
        IndexApps,
        IndexTickets,
        Invoices,
        Tutorials,
        AdminNews,
        AdminApps,
        AdminUsers,
        AdminTutorials,
        PageNotFound,
        User,
        Api,
        Marketing,
        AdminMarketing,
    },

    data() {
        return {};
    },
};
</script>
