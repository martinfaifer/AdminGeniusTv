<template>
    <div>
        <v-autocomplete
            v-bind="$attrs"
            :items="tariffCodes"
            color="#1E293B"
            dense
            label="Tarif"
            type="text"
            :value="value"
            @input="updateValue($event)"
            :error-messages="error"
            outlined
            clearable
        ></v-autocomplete>
    </div>
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    props: ["value", "error"],
    data() {
        return {
            tariffCodes: [],
        };
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await axios
                .get("nangu/tarrifs")
                .then((response) => {
                    this.tariffCodes = response.data.tariffCodes;
                });
        },
        updateValue(value) {
            this.$emit("input", value);
        },
    },
};
</script>
