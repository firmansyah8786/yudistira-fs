import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/Home.vue";
import Portofolio from "/src/components/Portofolio.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/portofolio',
        name: 'Portofolio',
        component: Portofolio
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router