<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
                <v-card
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    flat
                >
                    <v-card-text class="text--center">
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-tabs centered background-color="transparent" color="info">
                                        <v-tab @click="activesTicket()"
                                            >Aktivní</v-tab
                                        >
                                        <v-tab @click="archivesTickets()"
                                            >Archivované</v-tab
                                        >
                                    </v-tabs>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <div v-if="tickets.error">
                                        <v-alert type="info">
                                            Nenalezeny tikety
                                        </v-alert>
                                    </div>
                                    <div v-else>
                                        <v-col cols="12" sm="12" md="6" lg="6">
                                            <v-text-field
                                                placeholder="Vyhledat tiket"
                                                v-model="search"
                                                dense
                                                autofocus
                                                clearable
                                            ></v-text-field>
                                        </v-col>
                                        <v-data-table
                                            :headers="headers"
                                            :items="tickets"
                                            :search="search"
                                            :loading="loadingData"
                                            loading-text="Načítání Vašich tiketů"
                                        >
                                            <template
                                                v-slot:item.current_step.inbox="{
                                                    item,
                                                }"
                                            >
                                                <span
                                                    v-html="
                                                        item.current_step.inbox
                                                    "
                                                ></span>
                                            </template>
                                            <template
                                                v-slot:item.detail="{ item }"
                                            >
                                                <span
                                                    v-html="
                                                        getDetail(
                                                            item.variables
                                                        )
                                                    "
                                                ></span>
                                            </template>
                                            <template
                                                v-slot:item.created_at="{
                                                    item,
                                                }"
                                            >
                                                <span>{{
                                                    formatDate(item.created_at)
                                                }}</span>
                                            </template>
                                            <template
                                                v-slot:item.current_step="{
                                                    item,
                                                }"
                                            >
                                                <span>
                                                    {{ item.current_step.name }}
                                                </span>
                                            </template>
                                            <template
                                                v-slot:item.actions="{ item }"
                                            >
                                                <!-- tooltips -->
                                                <v-tooltip bottom>
                                                    <template
                                                        v-slot:activator="{
                                                            on,
                                                            attrs,
                                                        }"
                                                    >
                                                        <v-icon
                                                            v-bind="attrs"
                                                            v-on="on"
                                                            small
                                                            color="info"
                                                            @click="
                                                                openTicketDetail(
                                                                    item
                                                                )
                                                            "
                                                            >mdi-magnify</v-icon
                                                        >
                                                    </template>
                                                    <span>Detail tiketu</span>
                                                </v-tooltip>
                                            </template>
                                        </v-data-table>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <!-- dialogs -->
        <v-row justify="center">
            <v-dialog v-model="detailTicketDialog" persistent max-width="800">
                <v-card v-if="ticketDetail != null">
                    <v-card-title class="text-h5">
                        <span
                            class="black--text"
                            v-html="ticketDetail.current_step.inbox"
                        ></span>
                    </v-card-title>
                    <v-card-text>
                        <v-col
                            cols="12"
                            v-for="discussion in ticketDetail.discussion"
                            :key="discussion.id"
                        >
                            <v-card
                                v-show="
                                    discussion.message.includes(
                                        'Email zákazníkovi'
                                    ) ||
                                    discussion.message.includes(
                                        'Odchozí email pro'
                                    )
                                "
                                flat
                            >
                                <v-card-text>
                                    <p v-html="discussion.message"></p>
                                    <v-divider></v-divider>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <span class="text-caption mx-2"
                                        >Řešitel:
                                    </span>
                                    <span
                                        class="text-caption font-weight-medium"
                                        v-html="discussion.author.fullname"
                                    ></span>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1 rounded-lg"
                            @click="closeDialog()"
                        >
                            <span class="white--text"> Zavřít </span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
import axios from "axios";
export default {
    components: {},

    data() {
        return {
            loadingData: true,
            search: "",
            tickets: [],
            ticketDetail: null,
            detailTicketDialog: false,
            headers: [
                { text: "Tiket", align: "start", value: "current_step.inbox" },
                { text: "Zadání", value: "detail" },
                { text: "Vytvořeno", value: "created_at" },
                { text: "Stav", value: "current_step" },
                { text: "", value: "actions" },
            ],
        };
    },

    created() {
        this.index();
    },
    methods: {
        index() {
            this.tickets = [];
            this.loadingData = true;
            axios.get("tickets").then((response) => {
                this.tickets = response.data.data;
                this.loadingData = false;
            });
        },

        activesTicket() {
            this.index();
        },

        archivesTickets() {
            this.tickets = [];
            this.loadingData = true;
            axios.get("tickets/closed").then((response) => {
                this.tickets = response.data.data;
                this.loadingData = false;
            });
        },

        getDetail(ticketData) {
            if (ticketData?.detail !== undefined) {
                return ticketData.detail.data;
            }

            if (ticketData?.ticket !== undefined) {
                return ticketData.ticket.data.detail;
            }
        },

        formatDate(date) {
            var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
        },

        openTicketDetail(ticket) {
            this.ticketDetail = ticket;
            this.detailTicketDialog = true;
        },

        closeDialog() {
            this.detailTicketDialog = false;
            this.ticketDetail = null;
        },
    },
};
</script>
