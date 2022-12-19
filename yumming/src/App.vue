<template>
  <div id="app">
    <div v-if="this.isLogged.status">
      <Header />
      <div class="bienvenido">
        <div v-if="!this.payment.isPayment || this.heartInvisible.isInvisible === false" class="pro">
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
        <div v-else-if="this.payment.isPayment || this.creditCard.isCredit">
          <button class="atras" @click="back()">
            Atrás
          </button>
        </div>
        <div v-else-if="this.heartInvisible.isInvisible == true"></div>
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
import { isLogged, user, payment, creditCard, heartInvisible } from './globalStates'


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
      user,
      payment,
      creditCard,
      heartInvisible
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
      this.payment.isPayment = true;
      this.$router.push("/entrenamientos")
      // const requestOptions = {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: ''
      // };

      // const response = await fetch('http://localhost:8081/users/' + this.user.properties.email, requestOptions)
      //   .then(res => res.json());
      // this.user.properties = response.user;
      // if (this.user.properties.isPro) {
      //   this.$router.push("/entrenamientos")

      // }
    },
    logOut() {
      this.isLogged.status = false;
    },

    back() {
      this.payment.isPayment = false;
      this.creditCard.isCredit = false;
    }
  }
}
</script>