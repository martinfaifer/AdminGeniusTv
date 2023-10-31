<template>
    <div>
        <v-autocomplete
            v-bind="$attrs"
            item-text="modelCode"
            item-value="modelCode"
            :items="stbModels"
            color="#1E293B"
            dense
            label="Stb model"
            type="text"
            :value="value"
            :error-messages="error"
            @input="updateValue($event)"
            outlined
            clearable
        ></v-autocomplete>
    </div>
</template>
<script>
export default {
    props: ["value", "error"],
    data() {
        return {
            stbModels: [],
        };
    },

    created() {
        this.index();
    },

    methods: {
        async index() {
            await axios.get("nangu/stb/models").then((response) => {
                this.stbModels = response.data.data;
            });
        },
        updateValue(value) {
            this.$emit("input", value);
        },
    },
};
</script>
