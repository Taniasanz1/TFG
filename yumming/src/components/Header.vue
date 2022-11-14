<template>
    <header class="header">
        <div class="menu-home">
            <h3>Yumming</h3>
            <ul class="menu">
                <li>
                    <!-- data-active="0" @click="selected.changeActive" -->
                    <router-link to="/" class="selected">Home
                    </router-link>
                </li>
                <li>
                    <!-- data-active="1" @click="selected.changeActive" -->
                    <router-link to="/menus">Menus</router-link>
                </li>
                <li>
                    <!-- data-active="2" @click="selected.changeActive" -->
                    <router-link to="/entrenamientos">Entrenamientos
                    </router-link>
                </li>
            </ul>
        </div>
    </header>

</template>
<script>
//import { reactive } from 'vue'



// export const selected = reactive({
//     active: 0,
//     changeActive(event) {
//         console.log(event);
//         document.querySelector('[data-active="' + that.active + '"]').classList.remove("selected");
//         that.active = event.target.dataset.active;
//         console.log(that.active);
//         event.target.classList.add("selected");
//     }
// })
// const that = selected;

export default {
    name: 'Header',
    // data() {
    //     return {
    //         selected
    //     }
    // }
}
</script>