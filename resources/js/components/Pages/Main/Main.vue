<template>
    <div>
        <div v-if="$route.params.component">
            <v-container fluid>
                <IndexNews v-if="$route.params.component == 'news'"></IndexNews>
                <IndexApps v-if="$route.params.component == 'apps'"></IndexApps>
                <IndexTickets v-if="$route.params.component == 'tikets'"></IndexTickets>
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
export default {
    components: {
        InfoAlert,
        IndexNews,
        IndexApps,
        IndexTickets
    },

    data() {
        return {};
    },
};
</script>
