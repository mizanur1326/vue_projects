import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import FoodItem from './components/FoodItem.vue'
import BirdsCom from './components/birds.vue'
import FlowersCom from './components/flowers.vue'
import AboutCom from './components/About.vue'
import ContactCom from './components/Contact.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component: AboutCom },
        { path: '/contact', component: ContactCom },
    ]
});



const app = createApp(App)
app.use(router);
app.component('food-item', FoodItem)
app.component('birds-comp', BirdsCom)
app.component('flowers-comp', FlowersCom)
// app.component('headerVue', HeaderVue)
app.mount('#app')
