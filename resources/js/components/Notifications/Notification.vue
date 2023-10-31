<template>
    <div>
        <div v-if="alert.length != 0" class="flex-row-reverse d-flex">
            <v-col
                cols="12"
                sm="12"
                md="2"
                lg="2"
                style="position: fixed; z-index: 2"
            >
                <v-snackbar
                    transition="slide-x-reverse-transition"
                    :timeout="4000"
                    :value="true"
                    absolute
                    top
                    right
                    :color="alert.status"
                    elevation="24"
                    style="z-index: 2"
                >
                    <v-row>
                        <v-icon class="mx-3" small>
                            {{ iconFunction(alert.status) }}
                        </v-icon>
                        <v-spacer></v-spacer>
                        <span class="justify-end mx-6 body-2 font-weight-bold">
                            {{ alert.message }}
                        </span>
                    </v-row>
                </v-snackbar>
            </v-col>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        alert() {
            return this.$store.state.alerts;
        },
    },
    data() {
        return {};
    },

    created() {},

    methods: {
        iconFunction(status) {
            if (status == "success") {
                return "mdi-check";
            }
            return "mdi-close";
        },
    },

    watch: {
        alert() {
            if (this.alert.length != 0) {
                setTimeout(
                    function () {
                        this.$store.state.alerts = [];
                    }.bind(this),
                    5000
                );
            } else {
                return;
            }
        },
    },
};
</script>
