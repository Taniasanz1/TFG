<template>
  <div id="app">
    <div v-if="this.isLogged.status">
      <Header />
      <div class="bienvenido">
        <h3>¡Bienvenido {{ this.user.properties.name }}!</h3>
        <p>¿Quieres apuntar a nuestros entrenamientos?</p>
        <button @click="logOut()">LogOut</button>
        <button @click="updateToPro()">¡Me apunto!</button>
      </div>
      <router-view>
      </router-view>
      <Footer />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'
import { isLogged, user } from './globalStates'


export default {
  data() {
    return {
      name: 'App',
      components: {
        Header,
        Footer,
        Login
      },
      isLogged,
      user
    }
  },
  // created() {
  //   this.checkLogged();

  // },
  methods: {
    // checkLogged() {
    //   if (this.isLogged.status == false) {
    //     this.$router.push("/login")
    //   }
    // },
    async updateToPro() {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: ''
      };

      const response = await fetch('http://localhost:8081/users/' + this.user.properties.email, requestOptions)
        .then(res => res.json());
      this.user.properties = response.user;
    },
    logOut() {
      this.isLogged.status = false;
    }
  }
}
</script>