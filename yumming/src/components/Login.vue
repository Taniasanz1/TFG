<template>
    <div class="login-page">
        <transition name="fade">
            <div v-if="!registerActive" class="wallpaper-login"></div>
        </transition>
        <div class="wallpaper-register"></div>
        <div class="container">

            <!-- FORMULARIO LOGIN  -->
            <div v-if="!registerActive" class="login">
                <h1 class="form-title">Login</h1>
                <div class="form-group">
                    <label for="email">
                        <p>Email:</p>
                    </label>
                    <input name="email" id="email" type="email" @change="setEmail($event)" placeholder="Email" />
                    <p v-if="this.errorLEmail" class="errorform">Complete con un email válido.</p>
                    <p v-if="this.errorUser">El usuario no existe.</p>
                    <div v-else></div>
                    <label for="pass">
                        <p>Contraseña:</p>
                    </label>
                    <input name="pass" id="pass" type="password" @change="setPass($event)" placeholder="Password" />
                    <p v-if="this.errorLPass" class="errorform">Complete con una contraseña.</p>
                    <p v-if="this.errorPass">Las contraseñas no coinciden.</p>
                    <div v-else></div>
                    <button @click="login()">Entrar</button>
                    <p>¿No tienes una cuenta aún? <a href="#" @click="registerActive = !registerActive">Regístrate</a>
                    </p>
                </div>
            </div>


            <!-- FORMULARIO REGISTRO -->
            <div v-else class="register">
                <div class="form-group">
                    <h1 class="form-title">Registrar</h1>
                    <label for="name">
                        <p>Nombre y apellidos:</p>
                    </label>
                    <input name="name" id="name" type="text" @change="setName($event)" placeholder="Nombre" />
                    <p v-if="this.errorRName" class="errorform">Complete con un nombre.</p>

                    <label for="email">
                        <p>Email:</p>
                    </label>
                    <input name="email" id="email" type="email" @change="setEmail($event)" placeholder="Email" />
                    <p v-if="this.errorREmail" class="errorform">Complete con un email.</p>
                    <p v-if="this.errorRNamesEmail" class="errorform">El email debe ser válido. Debe incluir @ y .</p>

                    <label for="pass">
                        <p>Contraseña:</p>
                    </label>
                    <input name="pass" id="pass" type="password" @change="setPass($event)" placeholder="Password" />
                    <p v-if="this.errorRPass" class="errorform">Complete con una contraseña.</p>

                    <button @click="register()">Registrarse</button>

                    <p>¿Tienes una cuenta? <a href="#" @click="registerActive = !registerActive">Entra aquí</a>
                    </p>
                </div>
                <!-- <div class="questions" v-bind:class="[this.questionary ? 'active' : '']">
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
                </div> -->

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
            errorUser: false,
            errorPass: false,
            userName: '',
            email: '',
            pass: '',
            errorRName: false,
            errorREmail: false,
            errorRNamesEmail: false,
            errorRPass: false,
            errorLEmail: false,
            errorLPass: false
        }
    },
    methods: {
        async register() {

            if (this.userName == null || this.userName == '') {
                this.errorRName = true;

            } else if (this.email == null || this.email == '') {
                this.errorREmail = true;
                this.errorRName = false;

            } else if (!this.email.includes("@") || !this.email.includes(".")) {
                this.errorRNamesEmail = true;
                this.errorREmail = false;
                this.errorRName = false;

            } else if (this.pass == null || this.pass == '') {
                this.errorRPass = true;
                this.errorRNamesEmail = false;
                this.errorRName = false;
                this.errorREmail = false;
            } else {
                this.errorRNamesEmail = false;
                this.errorRName = false;
                this.errorREmail = false;
                this.errorRPass = false;
                this.user.properties.name = this.userName;
                this.user.properties.email = this.email;
                this.user.properties.pass = this.pass;
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ user: user.properties })
                };
                const response = await fetch('http://localhost:8081/users/', requestOptions)
                    .then(res => res.json());
                this.user.properties = response;
                this.isLogged.status = true;
                //this.$router.push("/");
            }
        },

        // setUserProperty(event) {


        //     this.user.properties[event.target.name] = event.target.name == "pass" ? md5(event.target.value) : event.target.value;

        // },

        async login() {

            if (this.email == null || this.email == '') {
                this.errorLEmail = true;
            } else if (this.pass == null || this.pass == '') {
                this.errorLPass = true;
                this.errorLEmail = false;
            } else {
                this.errorLPass = false;
                this.errorLEmail = false;
                this.user.properties.email = this.email;
                this.user.properties.pass = this.pass;
                const requestOptions = {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                };

                await fetch('http://localhost:8081/users/' + this.user.properties.email, requestOptions)
                    .then(res => res.json())
                    .then(data => {
                        if (data.user == null) {
                            this.errorUser = true;

                        } else {
                            if (data.user.pass != this.user.properties.pass) {
                                this.errorPass = true;

                            } else {

                                this.user.properties = data.user;
                                this.isLogged.status = true;
                                //this.$router.push("/")
                            }
                        }
                    });
            }
        },
        siguiente() {
            this.questionary = true;
        },

        setName(event) {
            this.userName = event.target.value;
        },
        setEmail(event) {
            this.email = event.target.value;
        },
        setPass(event) {
            this.pass = md5(event.target.value);
        }
    }
}

</script>