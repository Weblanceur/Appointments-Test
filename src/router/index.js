import Vue from 'vue';
import Router from 'vue-router';
import MyAppointments from '@/components/MyAppointments';
import New from '@/components/Appointments/New';
import Confirmation from '@/components/Appointments/Confirmation';

Vue.use(Router);

export default new Router({

    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'MyAppointments',
            component: MyAppointments
        },
        {
            path: '/new',
            name: 'NewAppointment',
            component: New
        },
        {
            path: '/confirm',
            name: 'Confirmation',
            component: Confirmation
        },
        {
            path: '*',
            redirect: '/'
        },
    ]
});