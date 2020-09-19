import Vue from 'vue'
import Vuex from 'vuex'

import Appointments from "./appointments";
import Appointment from "./appointment";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Appointments,
        Appointment
    }
})