export default {
    state: {
        appointment: {}
    },
    mutations: {
        addTempAppointment(state, payload) {
            state.appointment = payload;
        },
        deleteTempAppointment(state) {
            state.appointment = {};
        },
    },
    actions: {
        pushTempAppointment ({commit}, payload) {
            commit('addTempAppointment', payload)
        },
        deleteTempAppointment ({commit}) {
            commit('deleteTempAppointment');
        },
    },
    getters: {
        appointment(state) {
            return state.appointment
        }
    }
}