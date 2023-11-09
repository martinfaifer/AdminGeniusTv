<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-subtitle>
                        <v-row class="justify-center">
                            <p
                                class="mt-3 text-center caption font-weight-bold"
                            >
                                Založení zákazníka
                            </p>
                        </v-row>
                    </v-card-subtitle>
                    <v-card-text class="text--center">
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        label="Subscriber code"
                                        type="text"
                                        :error="errors.subscriberCode"
                                        v-model="formData.subscriberCode"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <BaseInput
                                        label="Subscription code"
                                        type="text"
                                        :error="errors.subscriptionCode"
                                        v-model="formData.subscriptionCode"
                                    ></BaseInput>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <LocalitiesAutocomplete
                                        v-model="formData.localityCode"
                                        :error="errors.localityCode"
                                    ></LocalitiesAutocomplete>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <TarrifAutocomplete
                                        v-model="formData.tariffCode"
                                        :error="errors.tariffCode"
                                    ></TarrifAutocomplete>
                                </v-col>
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

                                <v-col cols="12">
                                    <v-row>
                                        <v-divider class="mx-3"></v-divider>
                                        <span class="mt-n3">
                                            Volitelná sekce
                                        </span>
                                        <v-divider class="mx-3"></v-divider>
                                    </v-row>
                                </v-col>
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
                        <v-spacer></v-spacer>
                        <v-btn
                            class="mx-3 rounded-lg"
                            :loading="loading"
                            :disabled="loading"
                            color="info"
                            @click="submitForm()"
                        >
                            Založit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import BaseInput from "../../Forms/BaseInput";
import LocalitiesAutocomplete from "../../Forms/LocalitiesAutocomplete";
import TarrifAutocomplete from "../../Forms/TarrifAutocomplete";
import StbModelsAutocomplete from "../../Forms/StbModelsAutocomplete";
export default {
    components: {
        BaseInput,
        LocalitiesAutocomplete,
        TarrifAutocomplete,
        StbModelsAutocomplete,
    },

    data() {
        return {
            CheckLoading: false,
            loading: false,
            formData: [],
            errors: [],
            identityPassword: "",
        };
    },

    methods: {
        async generatePassword() {
            await axios
                .get("nangu/customer/generate-password")
                .then((response) => {
                    let password = response.data.data.password;
                    this.identityPassword = password;
                });
        },
        async submitForm() {
            this.loading = true;
            await axios
                .post("nangu/customer", {
                    subscriberCode: this.formData.subscriberCode,
                    subscriptionCode: this.formData.subscriptionCode,
                    localityCode: this.formData.localityCode,
                    tariffCode: this.formData.tariffCode,
                    modelCode: this.formData.modelCode,
                    serialNumber: this.formData.serialNumber,
                    macAddress: this.formData.macAddress,
                    identityName: this.formData.identityName,
                    identityPassword: this.identityPassword,
                })
                .then((response) => {
                    this.$store.state.alerts = response.data;
                    this.formData = [];
                    this.identityPassword = "";
                    this.loading = false;
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    this.loading = false;
                });
        },
    },
};
</script>
