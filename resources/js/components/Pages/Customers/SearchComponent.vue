<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-form @submit.prevent="search()">
                    <v-card
                        class="overflow-hidden rounded-xl blur shadow-blur"
                        flat
                    >
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12">
                                        <BaseInput
                                            label="Vyhledání zákazníka"
                                            type="text"
                                            :error="errors.searchText"
                                            v-model="searchText"
                                            autofocus
                                        ></BaseInput>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                type="submit"
                                color="info"
                                class="mx-3 rounded-lg"
                                :loading="searchLoading"
                                >Vyhledat</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-col>
            <v-col v-if="searchedData.length > 0" cols="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-text>
                        <v-container fluid>
                            <v-col cols="12">
                                <v-data-table
                                    :headers="headers"
                                    :items="searchedData"
                                    :items-per-page="5"
                                >
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            @click="
                                                editLink(item.subscriberCode)
                                            "
                                            small
                                            color="info"
                                            >mdi-pencil</v-icon
                                        >
                                        <v-icon
                                            @click="
                                                openWarningDialogForDelete(
                                                    item.subscriberCode
                                                )
                                            "
                                            small
                                            color="red"
                                            >mdi-delete</v-icon
                                        >
                                    </template>
                                </v-data-table>
                            </v-col>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col v-if="!Array.isArray(searchedData)">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-text>
                        <v-container fluid>
                            <v-col cols="12">
                                <p class="headline font-weight-medium">
                                    Vyhledán jeden zákazník:
                                </p>
                                <v-divider></v-divider>
                                <v-row class="mt-3">
                                    <v-col cols="12" sm="4" md="4" lg="4">
                                        {{ searchedData.subscriberCode }}
                                    </v-col>
                                    <v-col cols="12" sm="4" md="4" lg="4">
                                        {{ searchedData.subscriberFullName }}
                                    </v-col>
                                    <v-col cols="12" sm="4" md="4" lg="4">
                                        <v-icon
                                            @click="
                                                editLink(
                                                    searchedData.subscriberCode
                                                )
                                            "
                                            small
                                            color="info"
                                            >mdi-pencil</v-icon
                                        >
                                        <v-icon
                                            @click="
                                                openWarningDialogForDelete(
                                                    searchedData.subscriberCode
                                                )
                                            "
                                            small
                                            color="red"
                                            >mdi-delete</v-icon
                                        >
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="center">
            <v-dialog v-model="warningDialog" persistent max-width="400px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-3">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat uživatele?
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            @click="deleteItem()"
                            plain
                            outlined
                            :loading="deleteLoading"
                        >
                            Odebrat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import BaseInput from "../../Forms/BaseInput";
export default {
    components: {
        BaseInput,
    },

    data() {
        return {
            deleteLoading: false,
            searchLoading: false,
            searchText: "",
            errors: "",
            searchedData: [],
            headers: [
                {
                    text: "Subscriber code",
                    align: "start",
                    value: "subscriberCode",
                },
                { text: "subscriberFullName", value: "subscriberFullName" },
                { text: "", value: "actions" },
            ],
            warningDialog: false,
            subscriberCode: "",
        };
    },

    methods: {
        search() {
            this.searchLoading = true;
            axios.get("nangu/search/" + this.searchText).then((response) => {
                this.$store.state.alerts = response.data;
                this.searchLoading = false;
                if (response.data.status == "success") {
                    this.searchedData = response.data.data.subscribers;
                }
            });
        },

        editLink(subscriberCode) {
            this.$router.push("/customers/edit/" + subscriberCode);
        },

        openWarningDialogForDelete(subscriberCode) {
            this.subscriberCode = subscriberCode;
            this.warningDialog = true;
        },

        deleteItem() {
            this.deleteLoading = true;
            axios
                .delete("nangu/customer/" + this.subscriberCode)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    if (response.data.status == "success") {
                        this.closeDialog();
                    }
                    this.search();
                });
        },

        closeDialog() {
            this.subscriberCode = "";
            this.warningDialog = false;
            this.deleteLoading = false;
        },
    },
};
</script>
