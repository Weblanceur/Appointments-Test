<template>
    <v-tabs
            grow
            class="elevation-2 mb-5"
            light
    >
        <v-tab
                :disabled="name === 'NewAppointment'"
                :to="{name: 'NewAppointment'}"
                router
        >
            <v-icon class="mr-2">mdi-plus</v-icon>
            New Appointment
        </v-tab>
        <v-tab
                :disabled="name === 'Confirmation'"
                :to="{ name: 'Confirmation' }"
                router
        >
            <v-icon class="mr-2">mdi-archive</v-icon>
            Confirm & Save
        </v-tab>
    </v-tabs>
</template>

<script>
    export default {
        name: "Tabs",
        computed: {
            name() {
                return this.$route.name;
            },
        },
    }
</script>

<style scoped>

</style>