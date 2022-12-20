<template>
  <div id="app">
    <div v-if="this.isLogged.status">
      <Header />
      <div class="bienvenido">

        <!-- <div v-if="this.payment.isPayment || this.creditCard.isCredit">
          <button class="atras" @click="back()">
            Atrás
          </button>
        </div>
        <div v-else-if="this.heartInvisible.isInvisible == true"></div> -->

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

  methods: {

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

    back() {
      this.payment.isPayment = false;
      this.creditCard.isCredit = false;
    }
  }
}
</script>