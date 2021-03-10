<template>
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <router-link to="/" exact>
                        <img :src="mainLogo" alt="logo">
                    </router-link>
                </div>
                <div class="nav-links">
                    <button>Products</button>
                    <button>pricing</button>
                    <router-link to="/enterprise" exact>enterprise</router-link>
                    <button>support</button>
                    <router-link to="/contact-sales" exact>contact sales</router-link>
                    <button>login</button>
                    <button>try for free</button>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import logo from '../assets/logo.png'

export default {
    data(){
        return{
            mainLogo: logo
        }
    }
}
</script>

<style>

</style>