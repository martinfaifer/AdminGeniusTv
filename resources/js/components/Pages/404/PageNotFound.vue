<template>
    <div class="body-1">
        <v-container class="fill-height" fluid>
            <v-col cols="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12">
                                    <p class="mt-4 mb-4 text-center display-4">
                                        404 | Stránka nenalezena

                                        <v-btn
                                            class="ml-12"
                                            plain
                                            outlined
                                            link
                                            :to="'/'"
                                        >
                                            <v-icon v-on="on">
                                                mdi-home
                                            </v-icon>
                                            Zpět domů
                                        </v-btn>
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-container>
    </div>
</template>
