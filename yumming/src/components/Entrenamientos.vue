<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else class="sport-tables">
      <div class="sports1">
        <div v-for="sport of sports" :key="sport.id">
          <div v-bind:class="[`${sport.idSport}` >= 1 && `${sport.idSport}` < 4 ? 'card_box' : 'invisible-box']">
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport"></div>
            <div v-else class="card_box-img">
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
              <p @click="eachTable()">Accede al entrenamiento</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sports1">
        <div v-for="sport of sports" :key="sport.id">
          <div v-bind:class="[`${sport.idSport}` >= 4 && `${sport.idSport}` <= 6 ? 'card_box' : 'invisible-box']">
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport"></div>
            <div v-else class="card_box-img">
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
              <p @click="eachTable()">Accede al entrenamiento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL DE ENTRENAMIENTO -->

    <div v-if="this.tableSport" class="table_box">
      <div v-for="sport of sports" :key="sport.id" class="card_table">
        <div v-if="sport.idSport == this.idSport" class="card_eachSPort">
          <img v-if="sport.idSport == this.idSport" :src="sport.imgTable" alt="">
          <div class="buttons_table">
            <button @click="closeTable()" class="close_button">Cerrar</button>
            <a :href="sport.pdfTable" :download="sport.name">Descargar tabla</a>
          </div>
        </div>
      </div>
    </div>



    <!-- MODAL DE TARJETA DE PAGO -->
    <div v-if="this.creditCard.isCredit" class="font-payment"></div>
    <div v-if="this.creditCard.isCredit" class="form-payment">
      <div class="pay work">
        <div class="img-section">
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
      user,
      tableSport: false,
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
        });
      this.payment.isPayment = false;
      this.creditCard.isCredit = false;
      this.loading = false;
      this.idSports.push(this.idSport);

      localStorage.setItem("sport", JSON.stringify(this.idSport));
    },

    eachTable() {
      this.tableSport = true;
    },
    closeTable() {
      this.tableSport = false;
    }

  }
}


</script>