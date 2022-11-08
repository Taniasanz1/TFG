<template>
  <div class="front-page-1">
    <div class="header">
      <div class="menu-home">
        <h3>Yumming</h3>
        <ul class="menu">
          <li>Home</li>
          <li>About</li>
          <li>Healthy menu</li>
          <li>Promo</li>
        </ul>
      </div>
      <div class="body-home">
        <h2 class="title-home-1">Te ayudamos a mejorar dia a dia</h2>
        <p>Para lograr una alimentación saludable es necesario el consumo diario de frutas,
          verduras, cereales integrales,
          legumbres, leche, carnes, aves y pescado y aceite vegetal en cantidades adecuadas y
          variadas</p>
        <div class="buttons_home">
          <button class="button_home_1">Empieza ya</button>
          <button class="button_home_2">Aprender más</button>
        </div>
      </div>
    </div>
    <div class="front-image-1">
      <img src="../assets/front-breakfast1.png" width="680" height="560" />
    </div>
  </div>
  <div class="front-page-2">
    <div class="front-image-2">
      <img src="../assets/front-lunch.png" width="400" height="420" />
    </div>
    <div class="content-home-2">
      <div class="title-home-2">
        <h2>¿Por qué es tan importante?</h2>
      </div>
      <ul class="benefits-home">
        <li>Ayuda a mantener un buen sistema en los musculos y el cuerpo. Es un potente alimento nutritivo</li>
        <li>Para mantener la salud y prevenir la aparición de muchas enfermedades hay que seguir un estilo de vida
          saludable</li>
        <li>Ayuda a mantener un buen sistema en los musculos y el cuerpo. Es un potente alimento nutritivo</li>
      </ul>
    </div>
  </div>
  <div class="box_home">
    <h2 class="title-box">La comida sana nos ayuda a reforzar el sistema inmunitario</h2>
  </div>
</template>

<script>
export default {
  name: 'YummingHome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.front-page-1 {
  height: 35rem;
  width: 75rem;
  background-color: white;
  margin: 2rem auto 0 auto;
  display: flex;
  justify-content: space-around;
  position: relative;
}

.header {
  width: 60%;
  margin-left: 3rem;
  padding-top: 3rem;
}

.menu {
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-around;
}


.menu-home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.title-home-1 {
  font-family: fantasy;
  font-size: 55px;
  color: rgb(51, 95, 86);
  text-align: justify;
  width: 20rem;
  margin-left: 3rem;
}


.buttons_home {
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-left: 2rem;
}

.button_home_1 {
  width: 7rem;
  height: 3.5rem;
  background-color: darkolivegreen;
  border-color: rgb(165, 165, 157);
}

.button_home_2 {
  width: 7rem;
  height: 3.5rem;
  border-color: rgb(165, 165, 157);
}


.front-page-2 {
  height: 35rem;
  width: 75rem;
  background-color: rgb(41, 37, 37);
  margin: 0 auto 3rem auto;
  display: flex;
  flex-direction: row;
  position: relative;
  padding-top: 2rem;

}

.title-home-2 {
  font-family: fantasy;
  font-size: 30px;
  color: rgb(255, 255, 255);
  text-align: justify;
  width: 20rem;
  margin-left: 3rem;

}

.box_home {
  position: absolute;
  width: 10rem;
  height: 20rem;
  background-color: aqua;
}

.benefits-home {
  width: 70%;
  display: flex;
  list-style: none;
  font-size: 20px;
  margin-top: 10rem;
  justify-content: space-between;
  color: white;
}
</style>
