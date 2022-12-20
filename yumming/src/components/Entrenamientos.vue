<template>

  <!-- <div class="sports-header">
    <div class="layer-transparent">
      <h2>!Vamos a entrenar, {{ this.user.properties.name }}!</h2>
      <p>Estos planes de entrenamiento te ayudarán a ponerte en forma.</p>
    </div>
    <img src="../../public/assets/workout-font-header.jpg" alt="" height="350" width="450" />
  </div> -->
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else class="sport-tables">
      <div class="sports1">
        <div v-for="sport of sports" :key="sport.id">
          <div v-bind:class="[`${sport.idSport}` >= 1 && `${sport.idSport}` < 4 ? 'card_box' : 'invisible-box']"
            @click="pay()">
            <span></span>
            <div class="sport">
              <img src="../../public/assets/sport-2.jpeg" width="320" height="120" />
              <h4>{{ sport.name }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="sports1">
        <div v-for="sport of sports" :key="sport.id">
          <div v-bind:class="[`${sport.idSport}` >= 4 && `${sport.idSport}` <= 6 ? 'card_box' : 'invisible-box']"
            @click="pay()">
            <span></span>
            <div class="sport">
              <img src="../../public/assets/sport-2.jpeg" width="320" height="120" />
              <h4>{{ sport.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.payment.isPayment" class="opacity-font"></div>
    <button v-if="this.payment.isPayment" class="btn-payment" @click="closeCreditModal()">
      Atrás
    </button>
    <div v-if="this.payment.isPayment" class="payment">

      <p class=" title">Plan Premium</p>
      <div class="pricecontainer">
        <p class="price">29.99€</p>
        <p class="pricedescriptor">/mes</p>
      </div>
      <p class="includes">Este Plan incluye:</p>
      <ul class="benefitlist">
        <li>Todas las tablas de ejercicios</li>
        <li>Consejos de profesionales</li>
        <li>Técnica de la postura</li>
        <li>Técnica de la postura</li>
      </ul>
      <div class="btncontainer">
        <button @click="creditModal()">Hazte Pro</button>
      </div>
    </div>
    <div v-if="this.creditCard.isCredit" class="form-payment">
      <div class="pay work">
        <div class="img-section">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" height="77" width="76">
            <path fill-rule="nonzero" fill="#3F9CBB"
              d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z">
            </path>
          </svg> -->
        </div>
        <div class="pay-desc">
          <div class="pay-header">
            <div class="pay-title">Proceso de pago</div>
            <div class="pay-menu">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
          <label for="number">Número de crédito:</label><br />
          <div class="input-icons-credit">
            <input class="input" type="text" name="number" id="number" placeholder="1234 1234 1234 1234 " required />
            <div class="creditcards-icons">
              <img src="../../public/assets/visa.png" alt="" width="30" height="25">
              <img src="../../public/assets/american-express.png" alt="" width="30" height="25">
              <img src="../../public/assets/mastercard.png" alt="" width="30" height="25">
            </div>
          </div>
          <br />
          <input class="input" type="text" name="date" id="date" placeholder="MM/YY" required>
          <input class="input" type="text" name="cvc" id="cvc" placeholder="CVC" required>
          <br />
          <label for="name">Nombre del titular:</label>
          <input class="input" type="text" name="name" id="name" required>
          <button class="pago-btn btn-1" @click="closeCreditModal()">Pagar</button>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import { payment, creditCard } from '../globalStates';

export default {
  data() {
    return {
      name: 'Entrenamientos',
      sports: [],
      loading: true,
      payment,
      creditCard

    }
  },
  created() {
    this.getSports();

  },
  methods: {
    async getSports() {
      const response = await fetch('http://localhost:8081/sports', {
        method: 'GET'
      }).then(res => res.json());
      this.sports = response.sports;
      this.loading = false;
    },

    pay() {
      this.payment.isPayment = true;
    },

    creditModal() {
      this.creditCard.isCredit = true;
    },

    closeCreditModal() {
      this.payment.isPayment = false;
      this.creditCard.isCredit = false;
    }

  }
}


</script>