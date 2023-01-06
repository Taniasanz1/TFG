<template>
  <div id="app">
    <div v-if="this.isLogged.status">
      <Header />
      <div class="bienvenido">
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
import { isLogged } from './globalStates'


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
    }
  }
}
</script>