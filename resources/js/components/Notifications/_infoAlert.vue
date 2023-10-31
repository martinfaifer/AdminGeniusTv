<template>
    <v-alert
        class="rounded-lg overflow-hidden blur shadow-blur-info"
        type="info"
        style="background: linear-gradient(to right, #0dc2f3, #2756ff)"
    >
        {{ alertText }}
    </v-alert>
</template>
<script>
export default {
    props: ["alertText"],
    data() {
        return {};
    },
};
</script>
