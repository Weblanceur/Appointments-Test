<template>
    <v-container>
        <v-layout row v-if="!loading">
            <v-flex
                    xs12
                    sm8
                    offset-sm2
            >
                <div
                        v-if="appointments.length"
                >

                    <v-row>
                        <h1 class="mb-5">My Appointments</h1>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="success"
                                right class="mt-1"
                                to="/new"
                        >
                            Create New
                        </v-btn>
                    </v-row>

                    <v-card
                            v-for="(appointment, key) in appointments"
                            :key="key"
                            class="mx-auto mb-5"
                            elevation="10"
                    >
                        <v-card-title>Date: {{ appointment.date }}</v-card-title>
                        <v-card-text>
                            <p class="display-1 text--primary">
                                Name: {{ appointment.name }}
                            </p>
                            <div class="text--primary">
                                Note: {{ appointment.note }}
                            </div>
                        </v-card-text>
                        <v-card-actions
                                class="mx-2"
                        >
                            <v-checkbox
                                    v-model="appointment.complete"
                                    label="Complete"
                                    @change="completeAppointment({key, complete: appointment.complete})"
                            ></v-checkbox>
                            <v-spacer></v-spacer>
                            <v-btn
                                    color="red darken-3"
                                    dark
                                    @click="deleteAppointment(key, appointment)"
                            >
                                Remove Appointment
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
                <div v-else>
                    <p>You don`t have appointments</p>
                    <v-btn
                            color="success"
                            to="/new"
                    >
                        Create a new one
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "MyAppointments",
        data: () => ({
            loading: true,
        }),
        created() {
            this.$store.dispatch('fetchAppointments');

            setTimeout(() => {
                this.loading = false
            }, 1000);
        },
        methods: {
            completeAppointment(appointment) {
                this.$store.dispatch('completeAppointment', appointment);
            },
            deleteAppointment(key, appointment) {
                let message = 'Вы точно хотите удалить встречу с ' + appointment.name + '?';

                if (confirm(message, false)) {
                    this.$store.dispatch('deleteAppointment', {key, appointment})
                        .then(() => {
                                alert('Встреча удалена')
                        });
                }
            }
        },
        computed: {
            appointments() {
                return this.$store.getters.appointments;
            }
        }
    }
</script>

<style scoped>

</style>