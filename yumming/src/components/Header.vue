<template>
    <header class="header">
        <div class="menu-home">
            <h3>
                <img src="../../public/assets/logo-yumming.png" width="200" height="150">
            </h3>
            <ul class="menu">
                <li>
                    <!-- data-active="0" @click="selected.changeActive" -->
                    <router-link class="button" to="/">Home
                    </router-link>
                </li>
                <li>
                    <!-- data-active="1" @click="selected.changeActive" -->
                    <router-link class="button" to="/menus">Menus</router-link>
                </li>
                <li>
                    <!-- data-active="2" @click="selected.changeActive" -->
                    <router-link class="button" to="/entrenamientos">Entrenamientos
                    </router-link>
                </li>
            </ul>
        </div>
    </header>

</template>
<script>

export default {
    name: 'Header',
    // data() {
    //     return {
    //         selected
    //     }
    // }
}
</script>