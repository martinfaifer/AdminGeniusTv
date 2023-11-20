<template>
    <div>
        <div v-if="$route.params.component">
            <v-container fluid>
                    <StoreCustomerComponent
                        v-if="$route.params.component == 'create'"
                    ></StoreCustomerComponent>
                    <SearchComponent
                        v-if="$route.params.component == 'search'"
                    ></SearchComponent>
                    <EditCustomerComponent
                        v-if="$route.params.component == 'edit'"
                    ></EditCustomerComponent>
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
import StoreCustomerComponent from "./StoreCustomerComponent";
import SearchComponent from "./SearchComponent";
import EditCustomerComponent from "./EditCustomerComponent";

export default {
    components: {
        InfoAlert,
        StoreCustomerComponent,
        SearchComponent,
        EditCustomerComponent,
    },

    data() {
        return {};
    },
};
</script>
