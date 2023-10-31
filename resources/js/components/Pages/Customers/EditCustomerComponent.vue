<template>
    <div>
        <v-row>
            <v-col cols="12">
                <span class="headline-1 font-weight-bold">
                    Zákazník: {{ $route.params.customer }}</span
                >
                <v-icon
                    @click="openDeleteCustomerWarningDialog()"
                    class="mx-6"
                    small
                    color="red"
                    >mdi-delete</v-icon
                >
            </v-col>
            <v-col cols="12">
                <v-divider></v-divider>
            </v-col>
            <!-- subscriber -->
            <v-col
                cols="12"
                sm="12"
                md="3"
                lg="3"
                v-if="customerData.subscriber"
            >
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle> Subscriber </v-card-subtitle>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12">
                                    <p>
                                        <span class="font-weight-medium"
                                            >subscriberCode:</span
                                        >
                                        {{
                                            customerData.subscriber
                                                .subscriberCode
                                        }}
                                    </p>
                                    <div
                                        v-for="subscription in customerData
                                            .subscriber
                                            .getSubscriptionsResponse"
                                    >
                                        <div
                                            v-if="subscription.subscriptionCode"
                                        >
                                            <p>
                                                <span class="font-weight-medium"
                                                    >subscriptionCode:</span
                                                >
                                                <span
                                                    :class="
                                                        getTextColor(
                                                            subscription.subscriptionState
                                                        )
                                                    "
                                                >
                                                    {{
                                                        subscription.subscriptionCode
                                                    }}
                                                </span>
                                            </p>
                                        </div>
                                        <div v-else>
                                            <p
                                                v-for="singleSubscription in subscription"
                                                :key="
                                                    singleSubscription.subscriptionCode
                                                "
                                            >
                                                <span class="font-weight-medium"
                                                    >subscriptionCode:</span
                                                ><span
                                                    :class="
                                                        getTextColor(
                                                            singleSubscription.subscriptionState
                                                        )
                                                    "
                                                >
                                                    {{
                                                        singleSubscription.subscriptionCode
                                                    }}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- subscriptions -->
            <v-col cols="12" sm="12" md="9" lg="9">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle> Subscriptions </v-card-subtitle>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    :md="
                                        calcGrid(
                                            customerData.subscriptions.length
                                        )
                                    "
                                    :lg="calcGrid()"
                                    v-for="subscription in customerData.subscriptions"
                                    :key="subscription.subscriptionCode"
                                >
                                    <p>
                                        <span class="font-weight-medium"
                                            >subscriptionCode:</span
                                        >
                                        {{ subscription.subscriptionCode }}
                                    </p>
                                    <p>
                                        <span class="font-weight-medium"
                                            >currencyCode:</span
                                        >
                                        {{ subscription.currencyCode }}
                                    </p>
                                    <p>
                                        <span class="font-weight-medium"
                                            >tariffCode:</span
                                        >
                                        {{ subscription.tariffCode }}
                                        <v-icon
                                            style="cursor: pointer"
                                            small
                                            color="info"
                                            class="mx-3"
                                            @click="
                                                openTariffCodeDialog(
                                                    subscription.subscriptionCode,
                                                    subscription.tariffCode
                                                )
                                            "
                                            >mdi-pencil</v-icon
                                        >
                                    </p>
                                    <p>
                                        <span class="font-weight-medium"
                                            >localityCode:</span
                                        >
                                        {{ subscription.localityCode }}
                                        <v-icon
                                            style="cursor: pointer"
                                            small
                                            color="info"
                                            class="mx-3"
                                            @click="
                                                openLocalityCodeDialog(
                                                    subscription.subscriptionCode,
                                                    subscription.localityCode
                                                )
                                            "
                                            >mdi-pencil</v-icon
                                        >
                                    </p>
                                    <p>
                                        <span class="font-weight-medium"
                                            >subscriptionState:</span
                                        >
                                        <span
                                            :class="
                                                getTextColor(
                                                    subscription.subscriptionState
                                                )
                                            "
                                        >
                                            {{ subscription.subscriptionState }}
                                        </span>
                                    </p>
                                    <p>
                                        <span class="font-weight-medium"
                                            >Přihášená zařízení:</span
                                        >
                                        <span
                                            v-if="subscription.pairedDevices"
                                            class="font-weight-medium"
                                        >
                                            {{
                                                subscription.pairedDevices
                                                    .length
                                            }}
                                            <v-icon
                                                style="cursor: pointer"
                                                @click="
                                                    openPairedDevicesDialog(
                                                        subscription.pairedDevices
                                                    )
                                                "
                                                small
                                                color="info"
                                                >mdi-magnify</v-icon
                                            >
                                        </span>
                                        <span v-else class="font-weight-medium"
                                            >0</span
                                        >
                                    </p>
                                    <div
                                        v-for="subscriptionStbAccount in subscription.getSubscriptionStbAccountsResponse"
                                        :key="
                                            subscriptionStbAccount.subscriptionStbAccountCode
                                        "
                                    >
                                        <div
                                            v-if="
                                                subscriptionStbAccount.subscriptionStbAccountCode
                                            "
                                        >
                                            <p>
                                                <span class="font-weight-medium"
                                                    >subscriptionStbAccountCode:</span
                                                >
                                                <span
                                                    :class="
                                                        getTextColor(
                                                            subscriptionStbAccount.subscriptionStbAccountState
                                                        )
                                                    "
                                                >
                                                    {{
                                                        subscriptionStbAccount.subscriptionStbAccountCode
                                                    }}
                                                    <v-icon
                                                        small
                                                        color="info"
                                                        style="cursor: pointer"
                                                        class="mx-3"
                                                        @click="
                                                            loadSubscriptionStbAccountCodeData(
                                                                subscriptionStbAccount.subscriptionStbAccountCode
                                                            )
                                                        "
                                                        >mdi-magnify</v-icon
                                                    >
                                                </span>
                                            </p>
                                        </div>
                                        <div v-else>
                                            <span
                                                v-for="singleSubscriptionStbAccount in subscriptionStbAccount"
                                                :key="
                                                    singleSubscriptionStbAccount.subscriptionStbAccountCode
                                                "
                                            >
                                                <p>
                                                    <span
                                                        class="font-weight-medium"
                                                        >subscriptionStbAccountCode:</span
                                                    >
                                                    <span
                                                        :class="
                                                            getTextColor(
                                                                singleSubscriptionStbAccount.subscriptionStbAccountState
                                                            )
                                                        "
                                                    >
                                                        {{
                                                            singleSubscriptionStbAccount.subscriptionStbAccountCode
                                                        }}
                                                        <v-icon
                                                            small
                                                            color="info"
                                                            style="
                                                                cursor: pointer;
                                                            "
                                                            class="mx-3"
                                                            @click="
                                                                loadSubscriptionStbAccountCodeData(
                                                                    singleSubscriptionStbAccount.subscriptionStbAccountCode
                                                                )
                                                            "
                                                            >mdi-magnify</v-icon
                                                        >
                                                    </span>
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="center">
            <v-dialog v-model="warningDialog" persistent max-width="400px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-6">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat zařízení?
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
                            @click="deleteDevice()"
                            plain
                            outlined
                        >
                            Odebrat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog
                v-model="deleteCustomerWarningDialog"
                persistent
                max-width="400px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-6">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat zákazníka?
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
                            @click="deleteCustomer()"
                            plain
                            outlined
                        >
                            Odebrat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog
                v-model="pairedDevicesDialog"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="formData.pairedDevices"
                                        :items-per-page="5"
                                        dense
                                    >
                                        <template
                                            v-slot:item.actions="{ item }"
                                        >
                                            <v-icon
                                                @click="
                                                    openWarningDialogForDelete(
                                                        item.deviceId
                                                    )
                                                "
                                                small
                                                color="red"
                                                >mdi-delete</v-icon
                                            >
                                        </template>
                                    </v-data-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="tariffCodeDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <TarrifAutocomplete
                                        v-model="formData.tariffCode"
                                        :error="errors.tariffCode"
                                    ></TarrifAutocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="localityCodeDialog" persistent max-width="800px">
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <LocalitiesAutocomplete
                                        v-model="formData.localityCode"
                                        :error="errors.localityCode"
                                    ></LocalitiesAutocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog
                v-model="subscriptionStbAccountCodeDialog"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <p>
                                        <span class="font-weight-medium">
                                            PUK:
                                        </span>

                                        {{ detailedData.puk }}
                                    </p>
                                    <p>
                                        <span class="font-weight-medium">
                                            IP adresa:
                                        </span>
                                        {{ detailedData.ipAddress }}
                                    </p>
                                    <p v-if="detailedData.createDate">
                                        <span class="font-weight-medium">
                                            Založeno:
                                        </span>
                                        {{ detailedData.createDate }}
                                    </p>
                                </v-col>
                                <v-divider inset vertical></v-divider>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="4"
                                    lg="4"
                                    v-if="detailedData.stb"
                                >
                                    <p>
                                        <span class="font-weight-medium">
                                            STB model:
                                        </span>
                                        {{ detailedData.stb.modelCode }}
                                    </p>
                                    <p>
                                        <span class="font-weight-medium">
                                            STB sn:
                                        </span>
                                        {{ detailedData.stb.serialNumber }}
                                    </p>
                                    <p>
                                        <span class="font-weight-medium">
                                            STB MAC:
                                        </span>
                                        {{ detailedData.stb.macAddress }}
                                    </p>
                                </v-col>
                                <v-divider inset vertical></v-divider>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="4"
                                    lg="4"
                                    v-if="detailedData.identities"
                                >
                                    <div
                                        v-if="!detailedData.identities.username"
                                    >
                                        <div
                                            v-for="identity in detailedData.identities"
                                            :key="identity.identityId"
                                        >
                                            <p v-if="identity.username">
                                                <span
                                                    class="font-weight-medium"
                                                >
                                                    Identita:
                                                </span>
                                                {{ identity.username }}
                                                <v-icon color="red" small>mdi-delete</v-icon>
                                            </p>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <p
                                            v-if="
                                                detailedData.identities.username
                                            "
                                        >
                                            <span class="font-weight-medium">
                                                Identita:
                                            </span>
                                            {{
                                                detailedData.identities.username
                                            }}
                                            <v-icon color="red" small>mdi-delete</v-icon>
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            @click="closeDialog()"
                            plain
                            outlined
                        >
                            Zavřít
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import axios from "axios";
import BaseInput from "../../Forms/BaseInput";
import TarrifAutocomplete from "../../Forms/TarrifAutocomplete";
import LocalitiesAutocomplete from "../../Forms/LocalitiesAutocomplete";
export default {
    components: {
        BaseInput,
        TarrifAutocomplete,
        LocalitiesAutocomplete,
    },

    data() {
        return {
            warningDialog: false,
            deleteCustomerWarningDialog: false,
            pairedDevicesDialog: false,
            tariffCodeDialog: false,
            localityCodeDialog: false,
            subscriptionStbAccountCodeDialog: false,
            customerData: [],
            detailedData: [],
            formData: [],
            errors: [],
            headers: [
                { text: "Typ", value: "deviceType" },
                { text: "Popis", value: "deviceName" },
                { text: "Poslední přihlášení", value: "lastLoginDate" },
                { text: "Poslední IP", value: "lastLoginIp" },
                { text: "", value: "actions" },
            ],
        };
    },

    created() {
        if (this.$route.params.customer) {
            this.index();
        }
    },

    methods: {
        index() {
            axios
                .get("nangu/customer/" + this.$route.params.customer)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    if (response.data.status == "success") {
                        this.customerData = response.data.data;
                    }
                });
        },

        getTextColor(status) {
            if (status == "BILLING") {
                return "font-weight-medium green--text";
            }

            if (status == "STB_ACTIVE") {
                return "green--text";
            }

            return "font-weight-medium info--text";
        },

        calcGrid(numberOfItems) {
            return 12 / numberOfItems;
        },

        openPairedDevicesDialog(pairedDevices) {
            this.formData.pairedDevices = pairedDevices;
            this.pairedDevicesDialog = true;
        },

        openWarningDialogForDelete(itemId) {
            this.formData.itemId = itemId;
            this.warningDialog = true;
        },

        openDeleteCustomerWarningDialog() {
            this.deleteCustomerWarningDialog = true;
        },

        openTariffCodeDialog(subscriptionCode, tariffCode) {
            this.formData.subscriptionCode = subscriptionCode;
            this.formData.tariffCode = tariffCode;
            this.tariffCodeDialog = true;
        },

        openLocalityCodeDialog(subscriptionCode, localityCode) {
            this.formData.subscriptionCode = subscriptionCode;
            this.formData.localityCode = localityCode;
            this.localityCodeDialog = true;
        },

        loadSubscriptionStbAccountCodeData(subscriptionStbAccountCode) {
            axios
                .get("nangu/customer/stbAccount/" + subscriptionStbAccountCode)
                .then((response) => {
                    this.detailedData = response.data.data;
                    this.$store.state.alerts = response.data;
                    this.subscriptionStbAccountCodeDialog = true;
                });
        },

        deleteCustomer() {
            axios
                .delete("nangu/customer/" + this.$route.params.customer)
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    if (response.data.status == "success") {
                        this.closeDialog();
                        this.$router.push("/customers/create");
                    }
                });
        },

        closeDialog() {
            this.tariffCodeDialog = false;
            this.localityCodeDialog = false;
            this.warningDialog = false;
            this.deleteCustomerWarningDialog = false;
            this.pairedDevicesDialog = false;
            this.subscriptionStbAccountCodeDialog = false;
            this.detailedData = [];
            this.formData = [];
            this.errors = [];
        },
    },
};
</script>
