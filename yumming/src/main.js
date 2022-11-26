import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'


//componentes 
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Menus from './components/Menus.vue'
import Entrenamientos from './components/Entrenamientos.vue'
import './sass/main.scss'


//definir objeto rutas
const routes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/login', component: Login,
    },
    {
        path: '/menus', component: Menus,
    },
    {
        path: '/entrenamientos', component: Entrenamientos,
    }
]


//crear objeto rutas de vue router -- objeto de VR

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//instancia de vue
const app = createApp(App)

app.use(router)

app.mount('#app')