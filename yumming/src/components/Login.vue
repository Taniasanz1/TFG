<template>

    <body>
        <div class="form">
            <div class="register">
                <label for="name">Nombre y apellidos:</label>
                <input type="text" name="name" id="name" @change="setUserProperty($event)" /><br />
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" @change="setUserProperty($event)"><br />
                <label for="pass">Contraseña:</label>
                <input type="password" name="pass" id="pass" @change="setUserProperty($event)" />
                <h3>¿Qué buscas?</h3>
                <label for="level-perder">Perder Peso</label>
                <input type="radio" name="level" value="0" @change="setUserProperty($event)" />
                <label for="level-ganar">Ganar músculo</label>
                <input type="radio" name="level" value="1" @change="setUserProperty($event)" />
                <button @click="register()">Registrarse</button>
            </div>
            <div class="login">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" @change="setUserProperty($event)"><br />
                <label for="pass">Contraseña:</label>
                <input type="password" name="pass" id="pass" @change="setUserProperty($event)" />
                <button>Entrar</button>
            </div>
        </div>
    </body>
</template>

<script>
import { user, isLogged } from '../globalStates'
import md5 from 'md5'

export default {
    data() {
        return {
            name: 'Login',
            user,
            isLogged
        }
    },
    created() {
        this.setLogged();
    },
    methods: {
        // setLogged() {
        //     setTimeout(() => { isLogged.status = true; }, 5000);
        // },
        async register() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user: user.properties })
            };
            const response = await fetch('http://localhost:8081/users/', requestOptions)
                .then(res => res.json());
            this.user.properties = response.user;
            isLogged.status = true;
        },
        setUserProperty(event) {
            user.properties[event.target.name] = event.target.name == "pass" ? md5(event.target.value) : event.target.value;

        },

        async login() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user: user.properties })
            };
            // const usuarioDB = await user.findOne({ email: body.email });
            const response = await fetch('http://localhost:8081/users/', requestOptions)
                .then(res => res.json());
            this.user.properties = response.user;
            isLogged.status = true;
        }

    }
}

</script>