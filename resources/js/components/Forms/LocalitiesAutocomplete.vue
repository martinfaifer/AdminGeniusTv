<template>
    <div>
        <v-autocomplete
            v-bind="$attrs"
            item-text="localityName"
            item-value="localityCode"
            :items="localities"
            color="#1E293B"
            :error-messages="error"
            dense
            label="Lokalita"
            type="text"
            :value="value"
            @input="updateValue($event)"
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
            localities: [],
        };
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await axios.get("nangu/localities").then((response) => {
                this.localities = response.data.localities;
            });
        },
        updateValue(value) {
            this.$emit("input", value);
        },
    },
};
</script>
