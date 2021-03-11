<template>
    <section>
        <div class="container">
            <div class="grid-2 hero-section">
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
                    </div>
                    <div class="person-area first-staff">
                        <div>
                            <div class="area-circle">
                                <img class="person-img" :src="person1" alt="">
                            </div>
                            <div class="area-rectangle">
                                <p class="name">Mitchelle</p>
                                <p class="role">Admin officer</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>Time to implement the new changes</p>
                        </div>
                    </div>



                    <div class="person-area second-staff">
                        <div>
                            <div class="area-circle ">
                                <img class="person-img" :src="person2" alt="">
                            </div>
                            <div class="area-rectangle">
                                <p class="name">Wanyama</p>
                                <p class="role">Software Engineer</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>Deploying on production at 2AM</p>
                        </div>
                    </div>

                    <div class="person-area third-staff">
                        <div class="message">
                            <p>Yes! We are getting it done</p>
                        </div>
                        <div>
                            <div class="area-circle ">
                                <img class="person-img" :src="person3" alt="">
                            </div>
                            <div class="area-rectangle">
                                <p class="name">Adeola</p>
                                <p class="role">Manager</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
    <Companies/>
</template>

<script>
import Companies from '../components/Companies.vue';

import girl1 from '../assets/imgs/person_imgs/girl_1.png';
import girl2 from '../assets/imgs/person_imgs/girl_2.png';
import guy1 from '../assets/imgs/person_imgs/man_img.png';

export default {
    data(){
        return{
            person1: girl1,
            person2: girl2,
            person3: guy1
        }
    },
    components:{Companies}
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
        z-index: -1;
    }

    .hero-right .circle svg{
        width: 80%;
        height: 80%;
        z-index: -2;
    }

    .person-area{
        display: flex;
        align-items: flex-start;
        position: absolute;
        top: 28%;
        left: 53%;
    }

    .area-circle{
        border-radius: 50%;
        background-color: var(--dark-red);
        height: 140px;
        width: 140px;
        position: relative;
        z-index: -1;
    }

    .person-img{
        position: absolute;
        top: -60px;
        left: 5px;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    .area-rectangle{
        background-color: var(--dark-red);
        text-align: center;
        color: var(--white);
        padding: 15px 10px;
        width: 150px;
        margin-top: -60px;
        margin-left: -14px;
        border-radius: 15px;
        z-index: 5 !important;
    }

    .area-rectangle .name{
        font-size: 0.9em;
        text-transform: capitalize;
    }

    .area-rectangle .role{
        font-size: 0.7em;
        text-transform: capitalize;
    }

    .person-area .message{
        font-size: 0.8em;
        font-weight: 500;
        padding: 15px 10px;
        width: 200px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        position: relative;
        border-radius: 10px;
    }

    .person-area .message::after{
        content: "";
        position:absolute;
        margin-top:-8px;
        margin-left:-5px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid var(--white);
        transform:rotate(45deg);
        left: -15px; 
        top: 10px;
    }

    .first-staff .message{
        background-color: var(--white);
        margin-left: 15px; 
    }

    .second-staff{
        top: 70%;
        left: 55%;
    }

    .second-staff .area-circle, .second-staff .area-rectangle{
        background-color: var(--light-brown);
        color: var(--grey);
    }

    .second-staff .person-img{
        width: 100%;
        top: -35%;
        left: 3px;
    }

    .second-staff .message{
        background-color: var(--dark-red);
        color: var(--white);
        margin-left: 15px;
        margin-top: 20px;
    }

    .second-staff .message::after{
        margin-left: 2px;
        border-bottom: 15px solid var(--dark-red);
    }

    .third-staff{
        top: 50%;
        left: 65%;
    }

    .third-staff .area-circle, .third-staff .area-rectangle{
        background-color: var(--purple-1);
    }

    .third-staff .person-img{
        width: 80%;
        left: 20px;
    }

    .third-staff .message{
        background-color: var(--light-brown);
        color: var(--white);
        margin-left: 0;
        margin-right: 20px;
        margin-top: 10px;
        padding: 20px;
        color: var(--grey);
    }

    .third-staff .message::after{
        margin-left: 2px;
        border-bottom: 15px solid var(--light-brown);
        transform: rotate(-45deg);
        left: 220px;
    }

    /* right hero section end */

</style>