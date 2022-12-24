<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else class="sport-tables">
      <div class="sports1">
        <div v-for="sport of sports" :key="sport.id">
          <div v-bind:class="[`${sport.idSport}` >= 1 && `${sport.idSport}` < 4 ? 'card_box' : 'invisible-box']">
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport"></div>
            <div v-else class=" card_box-img">
              <img :src="sport.img" alt="">
            </div>
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport" class="card_pay-info">
              <p class="text_box-title">{{ sport.name }}</p>
              <div class="pricecontainer">
                <p class="price">{{ sport.price }} /mes</p>
                <p class="pricedescriptor"></p>
              </div>
              <!-- <p class="includes">Este Plan incluye:</p> -->
              <ul class="benefitlist">
                <li>{{ sport.difficulty }}</li>
                <li>{{ sport.durability }}</li>
                <li>{{ sport.bodyParts }}</li>
              </ul>
              <div class="btncontainer">
                <button @click="creditModal()">Comprar</button>
              </div>
            </div>
            <div v-else class="card_box-info">
              <p class="text_box-title">{{ sport.name }}</p>
              <p class="text_box-body">Product description and details</p>

            </div>
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport"></div>
            <div v-else-if="!this.idSports.find(id => id === sport.idSport)" class="card_box-footer">
              <span class="text_box-title">{{ sport.price }}</span>
              <div class="card_box-button" @click="pay(sport.idSport)">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z">
                  </path>
                  <path
                    d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z">
                  </path>
                  <path
                    d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z">
                  </path>
                </svg>
              </div>
            </div>
            <div class="card_box-check" v-else>
              <img src="../../public/assets/marca-de-verificacion.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="sports1">
        <div v-for="sport of sports" :key="sport.id">
          <div v-bind:class="[`${sport.idSport}` >= 4 && `${sport.idSport}` <= 6 ? 'card_box' : 'invisible-box']">
            <div v-if="!this.payment.isPayment || !this.idSports.find(id => id === sport.idSport)"
              class=" card_box-img">
              <img :src="sport.img" alt="" height="40%" width="100%" />
            </div>
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport" class="card_pay-info">
              <p class="text_box-title">{{ sport.name }}</p>
              <div class="pricecontainer">
                <p class="price">{{ sport.price }} /mes</p>
                <p class="pricedescriptor"></p>
              </div>
              <!-- <p class="includes">Este Plan incluye:</p> -->
              <ul class="benefitlist">
                <li>{{ sport.difficulty }}</li>
                <li>{{ sport.durability }}</li>
                <li>{{ sport.bodyParts }}</li>
              </ul>
              <div class="btncontainer">
                <button @click="creditModal()">Comprar</button>
              </div>
            </div>
            <div v-else class="card_box-info">
              <p class="text_box-title">{{ sport.name }}</p>
              <p class="text_box-body">Product description and details</p>
            </div>
            <div v-if="!this.idSports.find(id => id === sport.idSport)" class="card_box-footer">
              <span class="text_box-title">{{ sport.price }}</span>
              <div class="card_box-button" @click="pay(sport.idSport)">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path
                    d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z">
                  </path>
                  <path
                    d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z">
                  </path>
                  <path
                    d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z">
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="this.payment.isPayment" class="opacity-font"></div> -->
    <!-- <button v-if="this.payment.isPayment" class="btn-payment" @click="closeCreditModal()">
      Atrás
    </button> -->
    <!-- <div v-if="this.payment.isPayment" class="payment"> -->

    <!-- <p class=" title">Plan Premium</p>
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
  </div> -->
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
          <button class="pago-btn btn-1" @click="updateSport()">Pagar</button>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import { payment, creditCard, user } from '../globalStates';

export default {
  data() {
    return {
      name: 'Entrenamientos',
      sports: [],
      loading: true,
      payment,
      creditCard,
      idSport: "0",
      idSports: [],
      user
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

    pay(sportId) {
      this.payment.isPayment = true;
      this.idSport = sportId;
    },

    creditModal() {
      this.creditCard.isCredit = true;
    },

    closeCreditModal() {
      this.payment.isPayment = false;
      this.creditCard.isCredit = false;
    },

    async updateSport() {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idSport: this.idSports })
      };


      await fetch('http://localhost:8081/users/' + this.user.properties.email, requestOptions)
        .then(res => res.json())
        .then(data => {
          this.user.properties.idSport = data.user.idSport;
          console.log(this.user.properties);
        });
      this.payment.isPayment = false;
      this.creditCard.isCredit = false;
      this.loading = false;
      this.idSports.push(this.idSport);
    },

    // findSports(paramId) {
    //   const isIdHere = this.idSports.find(id => id === paramId)
    // }

  }
}


</script>