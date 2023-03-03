import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectList from './pages/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
    ]
});

export { router };