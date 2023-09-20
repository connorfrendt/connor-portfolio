import VueRouter from 'vue-router';
import HomeComp from './components/HomeComp.vue';
import ResumeComp from './components/ResumeComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';
import ContactComp from './components/ContactComp.vue';
import AboutMe from './components/AboutMe.vue';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter ({
    mode: 'history',
    routes: [
        { path: '/', component: HomeComp },
        { path: '/resume', component: ResumeComp },
        { path: '/projects', component: ProjectsComp },
        { path: '/contactme', component: ContactComp },
        { path: '/aboutme', component: AboutMe },
        { path: '*', redirect: '/' },
    ],
    scrollBehavior(savedPosition) {
        if(savedPosition) {
            // If a saved position is available, use it
            return savedPosition;
        }
        else {
            // Scroll to the top of the new page when navigating
            return { x: 0, y: 0 };
        }
    }
});