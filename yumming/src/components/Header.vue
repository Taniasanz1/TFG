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
                    <!-- <svg viewBox="0 0 46 16" height="10" width="30" color="#f8f7f0" xmlns="http://www.w3.org/2000/svg"
                        id="arrow-horizontal">
                        <path transform="translate(30)"
                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10"
                            id="Path_10"></path>
                    </svg> -->
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