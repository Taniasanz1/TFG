import { reactive } from 'vue'



export const isLogged = reactive({
    status: false,

})

export const user = reactive({
    properties: { name: null, email: null, pass: null, level: null, isPro: false, idSport: 0 }

})


export const payment = reactive({
    properties: { isPayment: false }

})


export const creditCard = reactive({
    properties: { isCredit: false }

})
