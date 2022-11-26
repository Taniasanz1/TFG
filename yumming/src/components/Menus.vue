<template>
    <div class="main-menus">
        <div v-if="loading">Loading...</div>
        <div v-else v-for="menu of menus" :key="menu.id">
            <div class="day">
                <h3>{{ menu.day }}</h3>
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
</template>
<script>

export default {
    data() {
        return {
            name: 'Menus',
            menus: [],
            loading: true,

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
        }
    }
}
</script>