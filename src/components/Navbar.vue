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
                    <div class="nav-links-left">
                        <button>Products <i class="fas fa-angle-down"></i> </button>
                        <button>pricing</button>
                        <router-link to="/enterprise" exact>enterprise</router-link>
                        <button>support</button>
                    </div>
                    <div class="nav-links-right">
                        <router-link to="/contact-sales" exact>contact sales</router-link>
                        <button>login</button>
                        <button class="btn free-trial-btn">Try for free <i class="fas fa-angle-right"></i> </button>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import logo from '../assets/imgs/logo.png'

export default {
    data(){
        return{
            mainLogo: logo
        }
    }
}
</script>

<style>
    @media (min-width: 1200px){
        .navbar{
            display: flex;
            width: 100%;
            align-items: center;
        }

        .navbar .logo{
            width: 20%;
        }

        .navbar .nav-links{
            width: 80%;
            display: flex;
            justify-content: space-between;
            font-size: 1em;
            text-transform: capitalize;
        }

        .nav-links button{
            background: none;
            border: none;
            font-size: 1em;
            margin: 0 15px;
            text-transform: capitalize;
        }

        .nav-links a{
            text-decoration: none;
            color: var(--black);
            margin: 0 15px;
            text-transform: capitalize;
        }

        .nav-links .nav-links-left button{
            padding: 10px 0;
        }

        .free-trial-btn i{
            margin-left: 10px;
        }
    }
</style>