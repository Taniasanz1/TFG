<template>
  <div id="app">
    <Header />
    <router-view>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'
import { isLogged } from './globalStates'

export default {
  data() {
    return {
      name: 'App',
      components: {
        Header,
        Footer
      },
      isLogged
    }
  },
  created() {
    this.checkLogged();

  },
  methods: {
    checkLogged() {
      if (isLogged.status == false) {
        window.location.href = "/#/login"
      }
    }
  }
}
</script>