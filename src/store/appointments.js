export default {
    state: {
        appointments: []
    },
    mutations: {
        loadAppointments(state, payload) {
            state.appointments = payload;
        },
        addAppointment(state, payload) {
            state.appointments.push(payload);
        },
        completeAppointment(state, payload) {
            let obj = state.appointments[payload.key];
            obj = {...obj, complete: payload.value};
        },
        deleteAppointment(state, payload) {
            state.appointments.splice(payload, 1);
        },
    },
    actions: {
        createAppointment ({commit, state}, payload) {
            commit('addAppointment', payload);
            localStorage.setItem('appointments', JSON.stringify(state.appointments));
        },
        fetchAppointments({commit, state}) {
            let appointments = localStorage.getItem('appointments');
            if (appointments) {
                commit('loadAppointments', JSON.parse(appointments));
            }
        },
        completeAppointment ({commit, state}, payload) {
            commit('completeAppointment', payload);
            localStorage.setItem('appointments', JSON.stringify(state.appointments));
        },
        deleteAppointment ({commit, state}, payload) {
            commit('deleteAppointment', payload.key);
            localStorage.setItem('appointments', JSON.stringify(state.appointments));
        },
    },
    getters: {
        appointments(state) {
            return state.appointments
        }
    }
}