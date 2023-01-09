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
              <ul class="benefitlist">
                <li>{{ sport.difficulty }}</li>
                <li>{{ sport.duration }}</li>
                <li>{{ sport.bodyParts }}</li>
              </ul>
              <div class="btncontainer">
                <button @click="changeDetails()">Más detalles</button>
                <!-- <button @click="creditModal()">Comprar</button> -->
              </div>
            </div>
            <div v-else class="card_box-info">
              <p class="text_box-title">{{ sport.name }}</p>
              <p class="text_box-body">Product description and details</p>
            </div>
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport"></div>
            <div v-else-if="!this.user.properties.idSport.find(id => id === sport.idSport)" class="card_box-footer">
              <span class="text_box-title">{{ sport.price }}</span>
              <!-- <button @click="changeDetails()">Detalles</button> -->
              <!-- <a href="url" target="_blank">Detalles</a> -->
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
              <p @click="eachTable(sport.idSport)">Accede al entrenamiento</p>
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
                <li>{{ sport.duration }}</li>
                <li>{{ sport.bodyParts }}</li>
              </ul>
              <div class="btncontainer">
                <button @click="changeDetails()">Más detalles</button>
                <!-- <button @click="creditModal()">Comprar</button> -->
              </div>
            </div>
            <div v-else class="card_box-info">
              <p class="text_box-title">{{ sport.name }}</p>
              <p class="text_box-body">Product description and details</p>
            </div>
            <div v-if="this.payment.isPayment && this.idSport == sport.idSport"></div>
            <div v-else-if="!this.user.properties.idSport.find(id => id === sport.idSport)" class="card_box-footer">
              <span class="text_box-title">{{ sport.price }}</span>
              <!-- <button @click="changeDetails()">Detalles</button> -->
              <!-- <a href="url" target="_blank">Detalles</a> -->
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
              <p @click="eachTable(sport.idSport)">Accede al entrenamiento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL DE ENTRENAMIENTO -->
    <div v-if="this.tableSport" class="font-payment1"></div>
    <div v-if="this.tableSport" class="table_box">
      <div v-for="sport of sports" :key="sport.id" class="card_table">
        <div v-if="sport.idSport == this.idSport" class="card_eachSPort">
          <div class="card_img">
            <h2>Tabla de ejercicios de {{ sport.name }}</h2>
            <img class="img_table" :src="sport.imgTable" alt="">
          </div>
          <div>
            <div @click="closeTable()" class="button_close">
              <img src="../../public/assets/close.png" alt="">
            </div>
            <div class="buttons_table">
              <a :href="sport.pdfTable" :download="sport.name"><button class="cssbuttons-io-button">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                      fill="currentColor"></path>
                  </svg>
                  <span class="descargar">Descargar</span>
                </button></a>
              <div class="checkboxcheck">
                <label><input type="checkbox" @click="isQuemadas($event, sport.kcal)" :disabled="this.checked == true">
                </label>
                <p class="textcheck">{{ sport.kcal }} calorías quemadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- DETALLES DEL ENTRENAMIENTO -->
    <div v-if="this.details" class="font-payment"></div>
    <div v-if="this.details" class="details">
      <div v-for="sport of sports" :key="sport.id">
        <div v-if="this.idSport == sport.idSport" class="details-each">
          <h1>Entrenamiento de {{ sport.name }}</h1>
          <div @click="closeDetails()" class="close_tab">
            <img src="../../public/assets/close.png" alt="" width="20" height="20">
          </div>
          <div class="flex-sport">
            <div class="details-text">
              <p>{{ sport.description }}</p>
              <div class="caracteristicas">
                <p class="title-caracteristicas">Características de esta tabla de ejercicios:</p>
                <ul class="benefitss">
                  <li><strong>Dificultad:</strong> {{ sport.difficulty }}</li>
                  <li><strong>Duración del entreno:</strong> {{ sport.duration }}</li>
                  <li><strong>Partes del cuerpo que se trabajan:</strong> {{ sport.bodyParts }}</li>
                </ul>
              </div>
            </div>
            <div class="framebtn">
              <iframe width="400" height="215" :src="sport.video" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              <div class="btncontainer">
                <button @click="creditModal()">Comprar</button>
              </div>
            </div>
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
          <!-- <form> -->
          <label for="number">Número de tarjeta de crédito:</label>
          <div class="input-icons-credit">
            <input class="input" type="number" name="number" id="number" placeholder="1234 1234 1234 1234 "
              @change="setIban($event)" max="16" />
            <p v-if="this.errorIban" class="errorform">Introduce un número de tarjeta bancaria.</p>
            <div class="creditcards-icons">
              <img src="../../public/assets/visa.png" alt="" width="30" height="25">
              <img src="../../public/assets/american-express.png" alt="" width="30" height="25">
              <img src="../../public/assets/mastercard.png" alt="" width="30" height="25">
            </div>
          </div>

          <label for="date">Fecha de expedición:</label>
          <input class="input" type="date" name="date" id="date" placeholder="MM/YY" @change="setFechaExp($event)" />
          <p v-if="this.errorfechaExp" class="errorform">Introduce la fecha de expedición de la tarjeta.</p>
          <label for="cvc">CVC:</label>
          <input class="input" type="number" name="cvc" id="cvc" placeholder="CVC" @change="setCvc($event)" min="3"
            max="3" /><br />
          <p v-if="this.errorCvc" class="errorform">Introduce el cvc de la tarjeta.</p>
          <label for="name">Nombre del titular:</label>
          <input class="input" type="text" name="name" id="name" @change="setTitular($event)" />
          <p v-if="this.errorTitular" class="errorform">Introduce el nombre del titular de la tarjeta.</p><br />
          <!-- <input type="submit" value="Pagar" name="pagar" @click="updateSport()"> -->
          <button class="pago-btn btn-1" @click="updateSport()">Pagar</button>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { payment, creditCard, user, quemadas } from '../globalStates';

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
      details: false,
      iban: '',
      fechaExp: '',
      cvc: '',
      titular: '',
      errorIban: false,
      errorfechaExp: false,
      errorCvc: false,
      errorTitular: false,
      quemadas,
      checked: false,
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
      this.details = false;
    },

    closeCreditModal() {
      this.payment.isPayment = false;
      this.creditCard.isCredit = false;
    },

    async updateSport() {
      if (this.iban == null || this.iban == '') {
        this.errorIban = true;
      } else if (this.fechaExp == null || this.fechaExp == '') {
        this.errorfechaExp = true;
        this.errorIban = false;
      } else if (this.cvc == null || this.cvc == '') {
        this.errorCvc = true;
        this.errorfechaExp = false;
        this.errorIban = false;
      } else if (this.titular == null || this.titular == '') {
        this.errorTitular = true;
        this.errorCvc = false;
        this.errorfechaExp = false;
        this.errorIban = false;
      } else {
        this.errorTitular = false;
        this.errorCvc = false;
        this.errorfechaExp = false;
        this.errorIban = false;

        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idSport: this.idSport })
        };
        await fetch('http://localhost:8081/users/' + this.user.properties.email, requestOptions)
          .then(res => res.json());
        this.payment.isPayment = false;
        this.creditCard.isCredit = false;
        this.loading = false;
        this.user.properties.idSport.push(this.idSport);
      }
    },

    eachTable(idd) {
      this.tableSport = true;
      this.idSport = idd;
    },
    closeTable() {
      this.tableSport = false;
    },
    changeDetails() {
      this.details = true;
    },
    closeDetails() {
      this.details = false;
    },

    setIban(event) {
      this.iban = event.target.value;
    },
    setFechaExp(event) {
      this.fechaExp = event.target.value;
    },
    setCvc(event) {
      this.cvc = event.target.value;
    },
    setTitular(event) {
      this.titular = event.target.value;
    },
    isQuemadas(event, quem) {

      if (event.target.checked) {

        this.quemadas.cont += quem;
        this.checked = true;

      }

    }



  }
}


</script>