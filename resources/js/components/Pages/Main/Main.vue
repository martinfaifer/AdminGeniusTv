<template>
    <div>
        <div v-if="$route.params.component">
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

                <User v-else-if="$route.params.component == 'user'"></User>

                <PageNotFound v-else></PageNotFound>
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
import InfoAlert from "../../Notifications/_infoAlert";
import IndexNews from "../News/IndexNewsComponent.vue";
import IndexApps from "../Apps/IndexAppsComponent.vue";
import IndexTickets from "../Tickets/IndexTicketComponent.vue";
import Invoices from "../Invoices/IndexInvoiceComponent.vue";
import Tutorials from "../Tutorials/IndexTutorialComponent.vue";

import AdminNews from "../Admin/News/AdminNewsComponent.vue";
import AdminApps from "../Admin/Apps/AdminAppsComponent.vue";
import AdminUsers from "../Admin/Users/AdminUsers.vue";
import AdminTutorials from "../Admin/Tutorials/AdminTutorials.vue";

import User from "../User/User.vue";

import PageNotFound from "../404/PageNotFound.vue";
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
    },

    data() {
        return {};
    },
};
</script>
