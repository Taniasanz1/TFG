<template>
    <header class="header">
        <div class="menu-home">
            <ul class="menu">
                <li>
                    <a> <router-link class="button" to="/">
                            Home
                        </router-link></a>
                </li>
                <li>
                    <a><router-link class="button" to="/menus">
                            Menus
                        </router-link></a>
                </li>
                <li>
                    <a> <router-link class="button" to="/entrenamientos">
                            Entrenamientos
                        </router-link></a>
                    <img class="pro-icon" src="../../public/assets/pro-icono.png" height="20" width="25" />
                </li>

            </ul>
            <div class="welcome">
                <h3 class="welcome-title">¡Saludos, {{ this.user.properties.name }}!</h3>
                <img class="welcome-icon" src="../../public/assets/user-profile.png" height="30" width="30" />
            </div>
            <div class="vl">
                <button class="cta" @click="logOut()">
                    <span class="hover-underline-animation"> Salir</span>
                </button>
            </div>
        </div>
    </header>

</template>
<script>
import { user, isLogged } from '../globalStates'

export default {
    data() {
        return {
            name: 'Header',
            user,
            isLogged
        }
    },
    methods: {
        logOut() {
            this.isLogged.status = false;
        },
    }
}
</script>