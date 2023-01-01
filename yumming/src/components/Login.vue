<template>
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
                    <input name="email" id="email" type="email" @change="setUserProperty($event)" placeholder="Email"
                        pattern="+@.+" required>
                    <label for="pass">
                        <p>Contraseña:</p>
                    </label>
                    <input name="pass" id="pass" type="password" @change="setUserProperty($event)"
                        placeholder="Password" required>
                    <button @click="login()">Entrar</button>
                    <p>¿No tienes una cuenta aún? <a href="#" @click="registerActive = !registerActive">Regístrate</a>
                    </p>
                </form>
            </div>

            <div v-else class="register">
                <div class="form-group">
                    <form>
                        <h1 class="form-title">Registrar</h1>
                        <label for="name">
                            <p>Nombre y apellidos:</p>
                        </label>
                        <input name="name" id="name" type="text" @change="setUserProperty($event)" placeholder="Nombre"
                            required />
                        <label for="email">
                            <p>Email:</p>
                        </label>
                        <input name="email" id="email" type="email" @change="setUserProperty($event)"
                            placeholder="Email" pattern="+@.+" required>
                        <label for="pass">
                            <p>Contraseña:</p>
                        </label>
                        <input name="pass" id="pass" type="password" @change="setUserProperty($event)"
                            placeholder="Password" required>
                        <button @click="register()">Registrarse</button>
                    </form>
                    <p>¿Tienes una cuenta? <a href="#" @click="registerActive = !registerActive">Entra aquí</a>
                    </p>
                </div>
                <div class="questions" v-bind:class="[this.questionary ? 'active' : '']">
                    <h3>¿Cuál es tu objetivo?</h3>
                    <div class="objetivo">
                        <input name="date" type="text" />
                        <input id="check-button" type="button" value="Check" />
                        <button class="btn-health">
                            <img src="../../public/assets/health-button.png" alt="">
                            <div>
                                <h5>Perder Grasa</h5>
                                <p>Perder peso y ganar salud</p>
                            </div>
                        </button>
                        <button class="btn-health">
                            <img src="../../public/assets/muscle-button.png" alt="">
                            <div>
                                <h5>Ganar músculo</h5>
                                <p>Ganar volumen y ganar salud</p>
                            </div>
                        </button>

                    </div>
                    <h3>¿Cómo es tu actividad física?</h3>
                    <div class="actividad">
                        <button class="btn-actividad">
                            <img src="../../public/assets/low-battery.png" alt="">
                            <div>
                                <h5>Baja</h5>
                                <p>1 ó 2 días/semana</p>
                            </div>
                        </button>
                        <button class="btn-actividad">
                            <img src="../../public/assets/walk.png" alt="">
                            <div>
                                <h5>Moderada</h5>
                                <p>3 ó 4 días/semana</p>
                            </div>
                        </button>
                        <button class="btn-actividad">
                            <img src="../../public/assets/growth.png" alt="">
                            <div>
                                <h5>Alta</h5>
                                <p>Todos los días</p>
                            </div>
                        </button>

                    </div>
                    <button class="btn-ques" @click="siguiente()">
                        <span>Siguiente</span>
                    </button>
                </div>

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
            questionary: false,
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
            //this.$router.push("/")
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
                            //this.$router.push("/")
                        }
                    }
                });
        },
        siguiente() {
            this.questionary = true;
        }
    }
}

</script>