<template>
    <v-container>
        <v-layout row>
            <v-flex
                    xs12
                    sm8
                    offset-sm2
            >
                <v-tabs
                        grow
                        class="elevation-2 mb-5"
                        light
                >
                    <v-tab to="/new" router>
                        <v-icon class="mr-2">mdi-plus</v-icon>
                        New Appointment
                    </v-tab>
                    <v-tab
                            to="/confirm"
                            router
                    >
                        <v-icon class="mr-2">mdi-archive</v-icon>
                        Confirm & Save
                    </v-tab>
                </v-tabs>
                <h1 class="my-5">Confirm New Appointment</h1>
                <p><strong>*Date :</strong> {{ appointment.date ? appointment.date : 'none'}}</p>
                <p><strong>*Full Name :</strong> {{ appointment.name ? appointment.name : 'none'}}</p>
                <p><strong>Note :</strong> {{ appointment.note ? appointment.note : 'none'}}</p>
                <p
                        v-if="!appointment.date || !appointment.name"
                        class="error--text"
                >
                    You need complete some required fields!
                </p>
                <v-row>
                    <v-btn
                            color="grey"
                            class="mr-4"
                            to="/new"
                            dark
                    >
                        Back
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                            v-if="appointment.date && appointment.name"
                            color="primary"
                            class="mr-4"
                            @click="createAppointment(appointment)"
                    >
                        Create Appointment
                    </v-btn>
                </v-row>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Confirmation",
        methods: {
            createAppointment(appointment) {
                this.$store.dispatch('createAppointment', appointment);
                this.$store.dispatch('deleteTempAppointment');
                this.$router.push('/');
            }
        },
        computed: {
            appointment() {
                return this.$store.getters.appointment;
            }
        }
    }
</script>

<style scoped>

</style>