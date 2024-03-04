// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from "./components/Home.vue";
import Department from "./components/Department.vue";
import About from "./components/About.vue";
import Doctor from "./components/Doctor.vue";
import Contact from "./components/Contact.vue";
import Testimonial from "./components/Testimonial.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/department', component: Department },
        { path: '/about', component: About },
        { path: '/doctor', component: Doctor },
        { path: '/contact', component: Contact },
        { path: '/testimonial', component: Testimonial },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')
