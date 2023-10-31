<template>
    <div>
        <v-text-field
            v-bind="$attrs"
            dense
            :placeholder="placeholder"
            :label="label"
            :type="type"
            :value="value"
            @input="updateValue($event)"
            :error-messages="error"
            outlined
        ></v-text-field>
    </div>
</template>
<script>
export default {
    props: ["value", "label", "type", "error", "placeholder"],
    data() {
        return {};
    },

    created() {},

    methods: {
        updateValue(value) {
            this.$emit("input", value);
        },
    },
};
</script>
