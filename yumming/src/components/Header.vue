<template>
    <header class="header">
        <div class="menu-home">
            <!-- <img src="../../public/assets/logo/Yumming.png" alt="" width="120" height="140"> -->
            <ul class="menu">
                <li>
                    <router-link class="button" to="/">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link class="button" to="/menus">
                        Menus
                    </router-link>
                </li>
                <li>
                    <router-link class="button" to="/entrenamientos">
                        Entrenamientos
                    </router-link>
                </li>
            </ul>
        </div>
    </header>

</template>
<script>

export default {
    name: 'Header',
}
</script>