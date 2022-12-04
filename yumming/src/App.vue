<template>
  <div id="app">
    <div v-if="this.isLogged.status">
      <Header />
      <div class="bienvenido">
        <h3>¡Bienvenido/a {{ this.user.properties.name }}!</h3>
        <div class="pro">
          <p>¿Te apuntas a nuestros entrenamientos?</p>
          <div class="love">
            <input id="switch" type="checkbox" @click="updateToPro()">
            <label class="love-heart" for="switch">
              <i class="left"></i>
              <i class="right"></i>
              <i class="bottom"></i>
              <div class="round"></div>
              <!-- <button @click="updateToPro()">¡Me apunto!</button> -->
            </label>
          </div>
        </div>
        <button class="cta" @click="logOut()">
          <span class="hover-underline-animation"> Salir</span>
          <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10" id="Path_10"></path>
          </svg>
        </button>
        <!-- <button @click="logOut()">LogOut</button> -->

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