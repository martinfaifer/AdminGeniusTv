<template>
    <div>
        <v-row v-cloak="customerData">
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
            <v-col cols="12" sm="12" md="12" lg="12">
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
                                            >SubscriptionCode:</span
                                        >
                                        {{ subscription.subscriptionCode }}
                                    </p>

                                    <p>
                                        <span class="font-weight-medium"
                                            >Služba:</span
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
                                            >Lokalita:</span
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
                                            >Status:</span
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
                                            <span
                                                v-if="
                                                    !Array.isArray(
                                                        subscription.pairedDevices
                                                    )
                                                "
                                                >1</span
                                            >
                                            <span v-else>
                                                {{
                                                    subscription.pairedDevices
                                                        .length
                                                }}
                                            </span>
                                            <v-icon
                                                style="cursor: pointer"
                                                @click="
                                                    openPairedDevicesDialog(
                                                        subscription.subscriptionCode,
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
                                                    >SubscriptionStbAccountCode:</span
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
            <!-- dialog pro odebrání zařízení -->
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

            <!-- odebrání zákazníka -->
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

            <!-- dialog pro odebrání stb -->
            <v-dialog
                v-model="deleteStbWarningDialog"
                persistent
                max-width="400px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-6">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat Stb?
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
                            @click="deleteStb()"
                            plain
                            outlined
                        >
                            Odebrat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- dialog pro připárovaná zařízení ke službě -->
            <v-dialog
                v-model="pairedDevicesDialog"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col
                                    v-if="Array.isArray(formData.pairedDevices)"
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    lg="12"
                                >
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
                                <v-col v-if="formData.pairedDevices && formData.pairedDevices.deviceType" cols="12">
                                    <p class="title">Nalezeno jedno zařízení</p>
                                    <v-container fluid>
                                        <v-row>
                                            <v-col cols="3">
                                                <span
                                                    class="font-weight-medium"
                                                >
                                                    Typ:
                                                </span>
                                                {{
                                                    formData.pairedDevices
                                                        .deviceType
                                                }}
                                            </v-col>
                                            <v-col cols="3">
                                                <span
                                                    class="font-weight-medium"
                                                >
                                                    Popis:
                                                </span>
                                                {{
                                                    formData.pairedDevices
                                                        .deviceName
                                                }}
                                            </v-col>
                                            <v-col cols="5">
                                                <span
                                                    class="font-weight-medium"
                                                >
                                                    Poslední IP:
                                                </span>
                                                {{
                                                    formData.pairedDevices
                                                        .lastLoginIp
                                                }}
                                            </v-col>
                                            <v-col cols="1">
                                                <v-icon
                                                    @click="
                                                        openWarningDialogForDelete(
                                                            formData
                                                                .pairedDevices
                                                                .deviceId
                                                        )
                                                    "
                                                    small
                                                    color="red"
                                                    >mdi-delete</v-icon
                                                >
                                            </v-col>
                                        </v-row>
                                    </v-container>
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

            <!-- dialog pro tarrify -->
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
                            color="green darken-1"
                            @click="submitChangeTarrifDialog()"
                            plain
                            outlined
                        >
                            Změnit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- dialog pro locality -->
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
                            color="green darken-1"
                            @click="submitChangeLocalityDialog()()"
                            plain
                            outlined
                        >
                            Změnit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- dialog pro stb account  -->
            <v-dialog
                v-model="subscriptionStbAccountCodeDialog"
                persistent
                max-width="1600px"
            >
                <v-card>
                    <p
                        class="font-weight-medium subtitle text-center black--text px-3 pt-3"
                    >
                        Informace o Stb accountu
                    </p>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <!-- stb account information -->
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="font-weight-medium font-italic">
                                        Informace o Stb Accountu
                                    </p>
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
                                    <v-divider></v-divider>
                                </v-col>

                                <!-- informace o stb -->
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    lg="12"
                                    v-if="detailedData.stb"
                                >
                                    <p class="font-weight-medium font-italic">
                                        Informace o Stb
                                        <v-icon
                                            @click="
                                                openWarningDialogForRemoveStb(
                                                    detailedData.subscriptionStbAccountCode,
                                                    detailedData.subscriptionCode,
                                                    detailedData.stb
                                                        .serialNumber,
                                                    detailedData.stb.macAddress
                                                )
                                            "
                                            small
                                            color="red"
                                            class="mx-3"
                                            >mdi-delete</v-icon
                                        >
                                    </p>
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
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col v-else>
                                    <v-btn
                                        @click="
                                            openAddStbToAccountDialog(
                                                detailedData.subscriptionCode,
                                                detailedData.subscriptionStbAccountCode
                                            )
                                        "
                                        color="primary"
                                        >+ Přidat stb ke službě</v-btn
                                    >
                                </v-col>

                                <!-- informace o identite -->
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="12"
                                    lg="12"
                                    v-if="detailedData.identities"
                                >
                                    <p class="font-weight-medium font-italic">
                                        Informace o identitě
                                    </p>
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
                                                <v-icon
                                                    @click="
                                                        openWarningDeleteIdentityDialog(
                                                            identity.identityId,
                                                            detailedData.subscriptionStbAccountCode
                                                        )
                                                    "
                                                    color="red"
                                                    small
                                                    >mdi-delete</v-icon
                                                >
                                            </p>
                                            <p v-if="identity.pairingPin">
                                                <span
                                                    class="font-weight-medium"
                                                >
                                                    Párovací pin:
                                                </span>
                                                {{ identity.pairingPin }}
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
                                            <v-icon
                                                @click="
                                                    openChangeIdentityPasswordDialog(
                                                        detailedData.identities
                                                            .identityId
                                                    )
                                                "
                                                color="primary"
                                                class="mx-3"
                                                small
                                                >mdi-restore</v-icon
                                            >
                                            <v-icon
                                                @click="
                                                    openWarningDeleteIdentityDialog(
                                                        detailedData.identities
                                                            .identityId,
                                                        detailedData.subscriptionStbAccountCode
                                                    )
                                                "
                                                color="red"
                                                small
                                                >mdi-delete</v-icon
                                            >
                                        </p>
                                    </div>
                                </v-col>
                                <v-col v-else cols="12" sm="12" md="12" lg="12">
                                    <v-btn
                                        @click="
                                            openAddIdentityToAccountDialog(
                                                detailedData.subscriptionCode,
                                                detailedData.subscriptionStbAccountCode
                                            )
                                        "
                                        color="primary"
                                        >+ Přidat Identitu ke službě</v-btn
                                    >
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

            <!-- change identity password dialog -->
            <v-dialog
                v-model="changeIdentityPasswordDialog"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="8" lg="8">
                                    <BaseInput
                                        label="Nové heslo do aplikace"
                                        type="text"
                                        :error="errors.identityPassword"
                                        v-model="identityPassword"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-btn
                                        class="mx-3 rounded-lg"
                                        color="info"
                                        @click="generatePassword()"
                                    >
                                        Vygenerovat heslo
                                    </v-btn>
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
                            color="green darken-1"
                            @click="updateIdentityPassword()"
                            plain
                            outlined
                        >
                            Změnit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- přidat stb -->
            <v-dialog
                v-model="addStbToAccountDialog"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-text>
                        <p class="title pt-3">Přidání stb</p>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <StbModelsAutocomplete
                                        v-model="formData.modelCode"
                                        :error="errors.modelCode"
                                    ></StbModelsAutocomplete>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <BaseInput
                                        label="Stb sn"
                                        type="text"
                                        :error="errors.serialNumber"
                                        v-model="formData.serialNumber"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <BaseInput
                                        label="Stb MAC"
                                        type="text"
                                        :error="errors.macAddress"
                                        v-model="formData.macAddress"
                                    ></BaseInput>
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
                            color="green darken-1"
                            @click="addStb()"
                            plain
                            outlined
                        >
                            Přidat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- dialog pro pridaní identity -->
            <v-dialog
                v-model="addIdentityToAccountDialog"
                persistent
                max-width="800px"
            >
                <v-card>
                    <v-card-text>
                        <p class="title pt-3">Přidání identity</p>
                        <v-container class="pt-12" fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <BaseInput
                                        label="Uživatelské jméno do aplikace"
                                        type="text"
                                        :error="errors.identityName"
                                        v-model="formData.identityName"
                                    ></BaseInput>
                                    <div class="mt-n6">
                                        <small class="blue--text font-italic"
                                            >Pokud není vyplněno použije se
                                            subscription code</small
                                        >
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <BaseInput
                                        label="Heslo do aplikace"
                                        type="text"
                                        :error="errors.identityPassword"
                                        v-model="identityPassword"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-btn
                                        class="mx-3 rounded-lg"
                                        color="info"
                                        @click="generatePassword()"
                                    >
                                        Vygenerovat heslo
                                    </v-btn>
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
                            color="green darken-1"
                            @click="addIdentity()"
                            plain
                            outlined
                        >
                            Přidat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <!-- dialog pro odebrání identity -->
            <v-dialog
                v-model="warningDeleteIdentityDialog"
                persistent
                max-width="400px"
            >
                <v-card>
                    <v-card-text>
                        <v-container class="pt-6">
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <p class="mt-6 text-center headline">
                                        Přejete si odebrat Identitu?
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
                            @click="deleteIdentity()"
                            plain
                            outlined
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
import axios from "axios";
import BaseInput from "../../Forms/BaseInput";
import TarrifAutocomplete from "../../Forms/TarrifAutocomplete";
import LocalitiesAutocomplete from "../../Forms/LocalitiesAutocomplete";
import StbModelsAutocomplete from "../../Forms/StbModelsAutocomplete";
export default {
    components: {
        BaseInput,
        TarrifAutocomplete,
        LocalitiesAutocomplete,
        StbModelsAutocomplete,
    },

    data() {
        return {
            addIdentityToAccountDialog: false,
            addStbToAccountDialog: false,
            warningDialog: false,
            deleteCustomerWarningDialog: false,
            deleteStbWarningDialog: false,
            pairedDevicesDialog: false,
            tariffCodeDialog: false,
            localityCodeDialog: false,
            changeIdentityPasswordDialog: false,
            warningDeleteIdentityDialog: false,
            identityPassword: "",
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
            this.customerData = [];
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

        openAddIdentityToAccountDialog(
            subscriptionCode,
            subscriptionStbAccountCode
        ) {
            this.formData.subscriptionCode = subscriptionCode;
            this.formData.subscriptionStbAccountCode =
                subscriptionStbAccountCode;
            this.addIdentityToAccountDialog = true;
        },

        addIdentity() {
            axios
                .post("nangu/customer/identity", {
                    subscriptionCode: this.formData.subscriptionCode,
                    subscriptionStbAccountCode:
                        this.formData.subscriptionStbAccountCode,
                    identityName: this.formData.identityName,
                    identityPassword: this.identityPassword,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openAddStbToAccountDialog(
            subscriptionCode,
            subscriptionStbAccountCode
        ) {
            this.formData.subscriptionCode = subscriptionCode;
            this.formData.subscriptionStbAccountCode =
                subscriptionStbAccountCode;
            this.addStbToAccountDialog = true;
        },

        addStb() {
            axios
                .post("nangu/customer/stbAccount/stb", {
                    subscriptionCode: this.formData.subscriptionCode,
                    subscriptionStbAccountCode:
                        this.formData.subscriptionStbAccountCode,
                    modelCode: this.formData.modelCode,
                    serialNumber: this.formData.serialNumber,
                    macAddress: this.formData.macAddress,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openPairedDevicesDialog(subscriptionCode, pairedDevices) {
            this.formData.subscriptionCode = subscriptionCode;
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

        openChangeIdentityPasswordDialog(
            identityId,
            subscriptionStbAccountCode
        ) {
            this.formData.identityId = identityId;
            this.formData.subscriptionStbAccountCode =
                subscriptionStbAccountCode;
            this.changeIdentityPasswordDialog = true;
        },

        async generatePassword() {
            await axios
                .get("nangu/customer/generate-password")
                .then((response) => {
                    let password = response.data.data.password;
                    this.identityPassword = password;
                });
        },

        updateIdentityPassword() {
            axios
                .patch("nangu/customer/identity", {
                    identityId: this.formData.identityId,
                    password: this.identityPassword,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        deleteDevice() {
            axios
                .delete(
                    "nangu/customer/identity/" +
                        this.formData.subscriptionCode +
                        "/" +
                        this.formData.itemId
                )
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                });
        },

        openWarningDeleteIdentityDialog(
            identityId,
            subscriptionStbAccountCode
        ) {
            this.formData.identityId = identityId;
            this.formData.subscriptionStbAccountCode =
                subscriptionStbAccountCode;
            this.warningDeleteIdentityDialog = true;
        },

        deleteIdentity() {
            axios
                .delete(
                    "nangu/customer/identity/identity/" +
                        this.formData.identityId +
                        "/" +
                        this.formData.subscriptionStbAccountCode
                )
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                });
        },

        openTariffCodeDialog(subscriptionCode, tariffCode) {
            this.formData.subscriptionCode = subscriptionCode;
            this.formData.tariffCode = tariffCode;
            this.tariffCodeDialog = true;
        },

        submitChangeTarrifDialog() {
            axios
                .patch("nangu/customer/tarrif", {
                    tariffCode: this.formData.tariffCode,
                    subscriptionCode: this.formData.subscriptionCode,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        openWarningDialogForRemoveStb(
            subscriptionStbAccountCode,
            subscriptionCode,
            stbSn,
            stbMac
        ) {
            this.formData.subscriptionStbAccountCode =
                subscriptionStbAccountCode;
            this.formData.subscriptionCode = subscriptionCode;
            this.formData.sn = stbSn;
            this.formData.mac = stbMac;
            this.deleteStbWarningDialog = true;
        },

        deleteStb() {
            axios
                .delete(
                    "nangu/stb/" +
                        this.formData.subscriptionStbAccountCode +
                        "/" +
                        this.formData.subscriptionCode +
                        "/" +
                        this.formData.sn +
                        "/" +
                        this.formData.mac
                )
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                });
        },

        openLocalityCodeDialog(subscriptionCode, localityCode) {
            this.formData.subscriptionCode = subscriptionCode;
            this.formData.localityCode = localityCode;
            this.localityCodeDialog = true;
        },

        submitChangeLocalityDialog() {
            axios
                .patch("nangu/customer/locality", {
                    localityCode: this.formData.localityCode,
                    subscriptionCode: this.formData.subscriptionCode,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
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
            this.addIdentityToAccountDialog = false;
            this.AddStbToAccountDialog = false;
            this.warningDeleteIdentityDialog = false;
            this.changeIdentityPasswordDialog = false;
            this.deleteStbWarningDialog = false;
            this.tariffCodeDialog = false;
            this.localityCodeDialog = false;
            this.warningDialog = false;
            this.deleteCustomerWarningDialog = false;
            this.pairedDevicesDialog = false;
            this.subscriptionStbAccountCodeDialog = false;
            this.detailedData = [];
            this.formData = [];
            this.errors = [];
            this.identityPassword = "";
        },
    },
};
</script>
