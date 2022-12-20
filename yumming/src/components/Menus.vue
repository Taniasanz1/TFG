<template>
    <div class="menus-header">
        <div class="layer-transparent">
            <h2>¡Que aproveche, {{ this.user.properties.name }}!</h2>
            <p>Empieza a sentirte bien con este menú personalizado a tus gustos y objetivos.</p>
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
                        <h3>{{
                                menu.day
                        }}</h3>
                    </a>
                </div>
                <div v-if="activetab === `${menu.tab}`" class="day tabcontent">
                    <!-- <h3>{{ menu.day }}</h3> -->
                    <div class="meals">
                        <div class="meal-item">
                            <h4>Desayuno</h4>
                            <div class="img-container">
                                <img class="img-item" :src="menu.imgBreakfast" alt="" width="100" height="150" />
                            </div>
                            <p>{{ menu.breakfast }}</p>
                        </div>
                        <div class="meal-item">
                            <h4>Comida</h4>
                            <div class="img-container">
                                <img class="img-item" :src="menu.imgLunch" alt="" width="100" height="150" />
                            </div>
                            <p>{{ menu.lunch }}</p>
                        </div>
                        <div class="meal-item">
                            <h4>Merienda</h4>
                            <div class="img-container">
                                <img class="img-item" :src="menu.imgSnack" alt="" width="100" height="150" />
                            </div>
                            <p>{{ menu.snack }}</p>
                        </div>
                        <div class="meal-item">
                            <h4>Cena</h4>
                            <div class="img-container">
                                <img class="img-item" :src="menu.imgDinner" alt="" width="100" height="150" />
                            </div>
                            <p>{{ menu.dinner }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { user } from "../globalStates"

export default {
    data() {
        return {
            el: '#tabs',
            name: 'Menus',
            menus: [],
            loading: true,
            user,
            activetab: "1",
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

    }
}
</script>