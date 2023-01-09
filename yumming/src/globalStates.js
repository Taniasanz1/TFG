import { reactive } from 'vue'



export const isLogged = reactive({
    status: false,

})

export const user = reactive({
    properties: { name: null, email: null, pass: null, idSport: [], calorias: [] }

})


export const payment = reactive({
    properties: { isPayment: false }

})


export const creditCard = reactive({
    properties: { isCredit: false }

})

export const quemadas = reactive({
    cont: 0,
})

export const dias = reactive([
    { id: "Mon", date: "lunes", dayTab: "1" },
    { id: "Tue", date: "martes", dayTab: "2" },
    { id: "Wed", date: "miércoles", dayTab: "3" },
    { id: "Thu", date: "jueves", dayTab: "4" },
    { id: "Fri", date: "viernes", dayTab: "5" }
])