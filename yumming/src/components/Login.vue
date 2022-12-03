<template>

    <!-- <body> -->
    <!-- <div class="form">
            <div v-if="!registerActive" class="login" v-bind:class="{ error: emptyFields }">
                <input type="button" value="Register" class="btn-select"
                    @click="registerActive = !registerActive, emptyFields = false">

                <h3 class="form-title">Entra aquí:</h3>
                <label for="email">Email:</label>
                <input v-model="emailLogin" type="email" @change="setUserProperty($event)"><br />
                <label for="pass">Contraseña:</label>
                <input v-model="passwordLogin" type="password" @change="setUserProperty($event)" />
                <button @click="login()">Entrar</button>
                <p>Don't have an account? <a href="#"
                        @click="registerActive = !registerActive, emptyFields = false">Sign up here</a></p>
            </div>
            <div class="register">
                <h3 class="form-title">¡Regístrate!</h3>
                <label for="name">Nombre y apellidos:</label>
                <input type="text" name="name" id="name" @change="setUserProperty($event)" /><br />
                <label for="email">Email:</label>
                <input v-model="emailLogin" type="email" @change="setUserProperty($event)"><br />
                <label for="pass">Contraseña:</label>
                <input v-model="passwordLogin" type="password" @change="setUserProperty($event)" />
                <h3>¿Qué buscas?</h3>
                <label for="level-perder">Perder Peso</label>
                <input type="radio" name="level" value="0" @change="setUserProperty($event)" />
                <label for="level-ganar">Ganar músculo</label>
                <input type="radio" name="level" value="1" @change="setUserProperty($event)" />
                <button @click="register()">Registrarse</button>
            </div>
        </div>
    </body> -->


    <div class="login-page">
        <transition name="fade">
            <div v-if="!registerActive" class="wallpaper-login"></div>
        </transition>
        <div class="wallpaper-register"></div>
        <div class="container">
            <div v-if="!registerActive" class="login">
                <h1 class="form-title">Login</h1>
                <form class="form-group">
                    <label for="email">
                        <p>Email:</p>
                    </label>
                    <input name="email" id="email" type="email" @change="setUserProperty($event)" placeholder="Email">
                    <label for="pass">
                        <p>Contraseña:</p>
                    </label>
                    <input name="pass" id="pass" type="password" @change="setUserProperty($event)"
                        placeholder="Password">
                    <button @click="login()">Entrar</button>
                    <p>¿No tienes una cuenta aún? <a href="#" @click="registerActive = !registerActive">Regístrate</a>
                    </p>
                </form>
            </div>

            <div v-else class="register">
                <h1 class="form-title">Registrar</h1>
                <form class="form-group">
                    <label for="name">
                        <p>Nombre y apellidos:</p>
                    </label>
                    <input name="name" id="name" type="text" @change="setUserProperty($event)" placeholder="Nombre" />
                    <label for="email">
                        <p>Email:</p>
                    </label>
                    <input name="email" id="email" type="email" @change="setUserProperty($event)" placeholder="Email">
                    <label for="pass">
                        <p>Contraseña:</p>
                    </label>
                    <input name="pass" id="pass" type="password" @change="setUserProperty($event)"
                        placeholder="Password">
                    <h3>
                        <p>¿Qué buscas?</p>
                    </h3>
                    <label for="level-perder">
                        <p>Perder Peso</p>
                    </label>
                    <input type="radio" name="level" value="0" @change="setUserProperty($event)" />
                    <label for="level-ganar">Ganar músculo</label>
                    <input type="radio" name="level" value="1" @change="setUserProperty($event)" />
                    <button @click="register()">Registrarse</button>
                    <p>¿Tienes una cuenta? <a href="#" @click="registerActive = !registerActive">Entra aquí</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { user, isLogged } from '../globalStates'
import md5 from 'md5'

export default {
    data() {
        return {
            name: 'Login',
            user,
            isLogged,
            registerActive: false,
        }
    },
    methods: {
        async register() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user: user.properties })
            };
            const response = await fetch('http://localhost:8081/users/', requestOptions)
                .then(res => res.json());
            this.user.properties = response;
            this.isLogged.status = true;
            // this.$router.push("/")
        },
        setUserProperty(event) {
            this.user.properties[event.target.name] = event.target.name == "pass" ? md5(event.target.value) : event.target.value;

        },

        async login() {
            const requestOptions = {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            };

            await fetch('http://localhost:8081/users/' + this.user.properties.email, requestOptions)
                .then(res => res.json())
                .then(data => {
                    if (data.user == null) {
                        console.log("El usuario no existe");
                    } else {
                        if (data.user.pass != this.user.properties.pass) {
                            console.log("Las contraseñas no coinciden");
                            console.log(this);
                        } else {

                            this.user.properties = data.user;
                            this.isLogged.status = true;
                            // this.$router.push("/")
                        }
                    }
                });
        },
    }
}

</script>