<template>
    <section>
        <div class="container">
            <div class="grid-1 hero-section">
                <div class="hero-left">
                    <div>
                        <h1 class="main-header">Collaborate with your team <br> and get more done</h1>
                        <p class="main-text">Communicate effectively with One burner for easy <br> collaboration, team work and remote work.</p>
                        <button class="btn hero-trial-btn">start free trial<i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
                <div class="hero-right">
                    <div class="circle">
                        <svg width="680" height="680" viewBox="0 0 680 680" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="340" cy="340" r="339" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="14 28"/>
                        </svg>

                        <div class="person-cirlce">
                            <!-- <img :src="girl1" alt=""> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import girl1 from '../src/assets/imgs/person_imgs/girl_1.png';
// import girl2 from './assets/imgs/person_imgs/girl_2.png';
// import guy1 from './assets/imgs/person_imgs/girl_3.png';

export default {
    data(){
        return{
            // person1: girl1,
            // person2: girl2,
            // person3: guy1
        }
    }
}
</script>

<style>
    .hero-section{
        height: 80vh;
    }

    /* left hero section */
    .hero-left{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-left .main-header{
        color: var(--primary-color);
        margin-bottom: 30px;
        font-size: 2em;
    }

    .hero-left .main-text{
        color: var(--grey);
        line-height: 2.0;
    }

    .hero-trial-btn{
        margin: 20px 0;
        padding: 15px 40px;
        text-transform: capitalize;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        cursor: pointer;
    }

    .hero-trial-btn i{
        margin-left: 10px;
    }

    /* right hero section */
    .hero-right{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-right .circle{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-right .circle svg{
        width: 80%;
        height: 80%;
    }
</style>