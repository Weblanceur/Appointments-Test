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
                            disabled
                            to="/confirm"
                            router
                    >
                        <v-icon class="mr-2">mdi-archive</v-icon>
                        Confirm & Save
                    </v-tab>
                </v-tabs>
                <h1 class="my-5">Add New Appointment</h1>
                <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                >
                    <v-date-picker
                            v-model="date"
                            full-width
                            :landscape="$vuetify.breakpoint.smAndUp"
                            class="m-4"
                    ></v-date-picker>

                    <v-text-field
                            v-model="name"
                            :counter="250"
                            :rules="nameRules"
                            label="*Full Name"
                            required
                    ></v-text-field>

                    <v-textarea
                            v-model="note"
                            label="Note"
                    ></v-textarea>
                </v-form>

                <v-row
                        class="ml-1"
                >
                    <v-btn
                            color="grey"
                            class="mr-4"
                            to="/"
                            dark
                    >
                        Back
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="validate"
                    >
                        Next
                    </v-btn>
                </v-row>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "New",
        data: () => ({
            valid: false,
            date: '',
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 250) || 'Name must be less than 250 characters',
            ],
            note: '',
        }),
        created() {
            this.date = this.appointment.date ?? moment().format('YYYY-MM-DD');
            this.name = this.appointment.name ?? '';
            this.note = this.appointment.note ?? '';
        },
        methods: {
            validate () {
                this.$store.dispatch('pushTempAppointment', {
                    date: this.date,
                    name: this.name,
                    note: this.note
                });
                if (this.$refs.form.validate()) {
                    this.$router.push('/confirm');
                }
            },
        },
        computed: {
            appointment() {
                return this.$store.getters.appointment;
            },
        }
    }
</script>

<style scoped>

</style>