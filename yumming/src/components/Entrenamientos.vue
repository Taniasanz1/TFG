<template>
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
  <div v-if="creditcard" class="form-payment">
    <label for="number">Credit number:</label><br />
    <div class="input-icons-credit">
      <input type="number" name="number" id="number" placeholder="1234 1234 1234 1234 " />
      <div class="creditcards-icons">
        <img src="../../public/assets/visa.png" alt="" width="30" height="25">
        <img src="../../public/assets/american-express.png" alt="" width="30" height="25">
        <img src="../../public/assets/mastercard.png" alt="" width="30" height="25">
      </div>
    </div>
    <br />
    <input type="text" name="date" id="date" placeholder="MM/YY">
    <input type="text" name="cvc" id="cvc" placeholder="CVC">
    <br />
    <label for="name">Nombre del titular:</label>
    <input type="text" name="name" id="name">
    <button class="pago-btn btn-1" @click="closeModal()">Pagar</button>
  </div>
  <div class="sport" :class="{ sportModal: isOpen, sportPayment: this.payment.isPayment }">
    <div class="cards-oneLine">
      <div @click="openModal(1)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Full Body</h3>
          <img src="../../public/assets/sport-2.jpeg" width="200" height="150" />
        </div>
      </div>
      <div @click="openModal(2)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Abs</h3>
          <img src="../../public/assets/sport-3.jpeg" width="200" height="150" />
        </div>
      </div>
      <div @click="openModal(3)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Yoga</h3>
          <img src="../../public/assets/yoga.jpeg" width="200" height="150" />
        </div>
      </div>
      <div @click="openModal(4)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Flexibilidad</h3>
          <img src="../../public/assets/flexibilidad.webp" width="200" height="150" />
        </div>
      </div>
    </div>
    <div class="cards-secondLine">
      <div @click="openModal(1)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Full Body</h3>
          <img src="../../public/assets/sport-2.jpeg" width="200" height="150" />
        </div>
      </div>
      <div @click="openModal(2)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Abs</h3>
          <img src="../../public/assets/sport-3.jpeg" width="200" height="150" />
        </div>
      </div>
      <div @click="openModal(3)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Yoga</h3>
          <img src="../../public/assets/yoga.jpeg" width="200" height="150" />
        </div>
      </div>
      <div @click="openModal(4)"
        :class="{ cardModal: isOpen, card: isOpen == false, cardPayment: this.payment.isPayment }">
        <div class="border-inside">
          <h3>Flexibilidad</h3>
          <img src="../../public/assets/flexibilidad.webp" width="200" height="150" />
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="modal-sport">
      <div v-for="(modal, index) in filtered" :key="index">
        <img class="close-modal" src="../../public/assets/close.png" alt="" width="30" height="30"
          @click="closeModal()">
        <h3>{{ modal.title }}</h3>
        <img class="img-modal" :src="modal.imgModal" width="600" height="300" />
      </div>
    </div>
  </div>

</template>
<script>

import { payment } from '../globalStates'


export default {
  data() {
    return {
      name: 'Entrenamientos',
      isOpen: false,
      idModal: 0,
      payment,
      creditcard: false,
      modals: [
        {
          modalID: 1,
          title: "Rutina de entrenamiento Full Body",
          imgModal: "../../../public/assets/abs.webp"
        },
        {
          modalID: 2,
          title: "Rutina de entrenamiento Abdominales",
          imgModal: "../../../public/assets/abs.webp"
        },
        {
          modalID: 3,
          title: "Rutina de entrenamiento Yoga",
          imgModal: "../../../public/assets/abs.webp"
        }
      ]
    }

  },
  computed: {
    filtered() {
      return this.modals.filter((modal) => (modal.modalID == this.idModal));
    }
  },
  methods: {
    openModal(modal) {
      this.isOpen = true;
      this.idModal = modal;
    },

    closeModal() {
      this.isOpen = false;
    },
    creditModal() {
      this.creditcard = true;
    }
  }
}


</script>