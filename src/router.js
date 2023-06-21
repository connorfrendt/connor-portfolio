import VueRouter from 'vue-router';
import HomeComp from './components/HomeComp.vue';
import ResumeComp from './components/ResumeComp.vue';
import ProjectsComp from './components/ProjectsComp.vue';
import AboutMe from './components/AboutMe.vue';
import ContactComp from './components/ContactComp.vue';

export default new VueRouter ({
    routes: [
        { path: '/', component: HomeComp },
        { path: '/resume', component: ResumeComp },
        { path: '/projects', component: ProjectsComp },
        { path: '/aboutme', component: AboutMe },
        { path: '/contactme', component: ContactComp },
        { path: '*', redirect: '/' },
    ]
})