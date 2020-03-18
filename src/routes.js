import mainHome from './components/mainhome.vue';
import resume from './components/CreateResume/resume.vue'

export const routes= [
    {
        path: '/',
        component: mainHome
    },
    {
        path: '/create-resume',
        component: resume
    }
];