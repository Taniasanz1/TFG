<template>
    <div class="menus-header">
        <div class="layer-transparent">
            <h2>¡Que aproveche, {{ this.user.properties.name }}!</h2>
            <p>Empieza a sentirte bien con este menú personalizado a tus gustos y objetivos.</p>
            <div class="actual-date" v-for="dia of dias" :key="dia.id">
                <div v-if="fulldatetime == dia.id">
                    <div v-if="fulldatetime == dia.id ? this.diaActual = dia.date : ''"></div>
                    <p v-show="fulldatetime">Hoy es tu día. ¡A comerse el <strong>
                            <span class="dia">{{ dia.date }}</span>
                        </strong>!</p>
                </div>
            </div>
            <div v-if="this.galleta" class="modalGalleta">
                <h4>¡Genial!Ya has completado el menú de hoy.</h4>
                <img src="../../public/assets/galletas.png" alt="">
            </div>
            <div class="calories_counter">
                <div class="calories_counter1">
                    <div class="each">
                        <h4>{{ this.counter }}</h4>
                        <p>Consumidas</p>
                    </div>
                    <div class="each circle">
                        <h4>{{ this.restantes }}</h4>
                        <p>{{ this.mssg }}</p>
                        <p>Restantes</p>
                    </div>
                    <div class="each">
                        <h4>{{ this.quemadas.cont }}</h4>
                        <p>Quemadas</p>
                    </div>
                </div>
                <div class="calories_counter2">
                    <div class="each1">
                        <p>Carbohidratos</p>
                        <p>----------</p>
                        <h4>{{ this.carbs }}/125g</h4>
                    </div>
                    <div class="each1">
                        <p>Proteínas</p>
                        <p>----------</p>
                        <h4>{{ this.protes }}/61g</h4>
                    </div>
                    <div class="each1">
                        <p>Grasas</p>
                        <p>----------</p>
                        <h4>{{ this.fats }}/40g</h4>
                    </div>
                </div>
            </div>
        </div>
        <img src="../../public/assets/font-menus-header.jpg" alt="" height="230" width="1100">
    </div>


    <div class="main-menus">
        <div v-if="loading">Loading...</div>
        <div v-else id="tabs" class="drop-down-menus">
            <div v-for="menu of menus" :key="menu.id">
                <div class="tabs">
                    <a v-on:click="activetab = `${menu.tab}`"
                        v-bind:class="[activetab === `${menu.tab}` ? 'active' : '']">
                        <h3>{{ menu.day }}</h3>
                    </a>
                </div>
                <div v-if="activetab === `${menu.tab}`" class="day tabcontent"
                    v-bind:class="[activetab === '2' ? 'second' : activetab === '3' ? 'third' : activetab === '4' ? 'four' : activetab === '5' ? 'five' : '']">
                    <div>
                        <div class="meals">
                            <div class="meal-item">
                                <h4>Desayuno</h4>
                                <div class="img-container">
                                    <img class="img-item" :src="menu.imgBreakfast" alt="" width="100" height="150" />
                                </div>
                                <p>{{ menu.breakfast }}</p>
                                <div v-if="menu.day == this.diaActual" class="meal-kcal">
                                    <p>{{ menu.kcalBreakfast }} kcal</p>
                                    <label class="check-kcal">
                                        <input type="checkbox"
                                            @click="countingKcals($event, menu.kcalBreakfast, menu.carbsBreakfast, menu.protesBreakfast, menu.fatsBreakfast)">
                                        <div class="checkmark"></div>
                                    </label>
                                </div>
                            </div>
                            <div class="meal-item">
                                <h4>Comida</h4>
                                <div class="img-container">
                                    <img class="img-item" :src="menu.imgLunch" alt="" />
                                </div>
                                <p>{{ menu.lunch }}</p>
                                <div v-if="menu.day == this.diaActual" class="meal-kcal">
                                    <p>{{ menu.kcalLunch }} kcal</p>
                                    <label class="check-kcal">
                                        <input type="checkbox" value="lunch"
                                            @click="countingKcals($event, menu.kcalLunch, menu.carbsLunch, menu.protesLunch, menu.fatsLunch)">
                                        <div class="checkmark"></div>
                                    </label>
                                </div>
                            </div>
                            <div class="meal-item">
                                <h4>Merienda</h4>
                                <div class="img-container">
                                    <img class="img-item" :src="menu.imgSnack" alt="" width="100" height="150" />
                                </div>
                                <p>{{ menu.snack }}</p>
                                <div v-if="menu.day == this.diaActual" class="meal-kcal">
                                    <p>{{ menu.kcalSnack }} kcal</p>
                                    <label class="check-kcal">
                                        <input type="checkbox" value="snack"
                                            @click="countingKcals($event, menu.kcalSnack, menu.carbsSnack, menu.protesSnack, menu.fatsSnack)">
                                        <div class="checkmark"></div>
                                    </label>
                                </div>
                            </div>
                            <div class="meal-item">
                                <h4>Cena</h4>
                                <div class="img-container">
                                    <img class="img-item" :src="menu.imgDinner" alt="" width="100" height="150" />
                                </div>
                                <p>{{ menu.dinner }}</p>
                                <div v-if="menu.day == this.diaActual" class="meal-kcal">
                                    <p>{{ menu.kcalDinner }} kcal</p>
                                    <label class="check-kcal">
                                        <input type="checkbox" value="dinner"
                                            @click="countingKcals($event, menu.kcalDinner, menu.carbsDinner, menu.protesDinner, menu.fatsDinner)">
                                        <div class="checkmark"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { user, quemadas, dias } from "../globalStates"


export default {
    data() {
        return {
            el: '#tabs',
            name: 'Menus',
            menus: [],
            loading: true,
            user,
            activetab: '1',
            counter: 0,
            carbs: 0,
            protes: 0,
            fats: 0,
            restantes: 1252,
            mssg: "",
            fulldatetime: '',
            diaActual: '',
            galleta: false,
            quemadas,
            dias,
            breakChecked: false,
            lunchChecked: false,
            snackChecked: false,
            dinnerChecked: false,

            // dias: [

            //     { id: "Mon", date: "lunes", dayTab: "1" },
            //     { id: "Tue", date: "martes", dayTab: "2" },
            //     { id: "Wed", date: "miércoles", dayTab: "3" },
            //     { id: "Thu", date: "jueves", dayTab: "4" },
            //     { id: "Fri", date: "viernes", dayTab: "5" }
            // ]
        }
    },
    created() {
        this.getMenus();

    },
    methods: {
        async getMenus() {
            const response = await fetch('http://localhost:8081/menus', {
                method: 'GET'
            }).then(res => res.json());
            this.menus = response.menus;
            this.loading = false;
        },
        async countingKcals(event, plus, carb, prote, fat) {

            if (this.counter == 1252) {
                this.galleta = true;
            } else {
                if (event.target.checked) {
                    this.counter += plus;
                    this.restantes -= plus;
                    this.carbs += carb;
                    this.protes += prote;
                    this.fats += fat;
                    if (event.target.value == "breakfast") {
                        this.breakChecked = true;
                        event.target.checked = this.breakChecked;

                    } else if (event.target.value == "lunch") {
                        this.lunchChecked = true;
                        event.target.checked = this.lunchChecked;

                    } else if (event.target.value == "snack") {
                        this.snackChecked = true;
                        event.target.checked = this.snackChecked;

                    } else if (event.target.value == "dinner") {
                        this.dinnerChecked = true;
                        event.target.checked = this.dinnerChecked;
                    }

                    const requestOptions = {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ calorias: event.target.value })
                    };
                    await fetch('http://localhost:8081/users/' + this.user.properties.email, requestOptions)
                        .then(res => res.json());

                    this.user.properties.calorias.push(event.target.value);
                } else {
                    this.counter -= plus;
                    this.restantes += plus;
                    this.carbs -= carb;
                    this.protes -= prote;
                    this.fats -= fat;
                }
            }

        },
        printFullDate: function () {
            return new Date();
        }
    },
    mounted: function () {

        this.fulldatetime = this.printFullDate().toDateString().toString().slice(0, 3);
    },

}


</script>