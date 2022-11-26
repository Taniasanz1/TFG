import { reactive } from 'vue'



export const isLogged = reactive({
    status: false,

})

export const user = reactive({
    properties: { name: null, email: null, pass: null, level: null, isPro: false }

})