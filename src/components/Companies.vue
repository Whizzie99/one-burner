<template>
    <section>
        <div class="container">
            <div class="companies">
                <h4>Over 500+ companies bond teams together with Oneburner</h4>
                <div class="grid-7 company-list">
                    <div v-for="logo in logos" :key="logo.index" class="company">
                        <img :src="logo.icon" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import dangote from '../assets/imgs/companies/dangote_logo.svg';
import egyptAir from '../assets/imgs/companies/egyptair_logo.svg';
import gtBank from '../assets/imgs/companies/gtbank_logo.svg';
import mtn from '../assets/imgs/companies/mtn_logo.svg';
import paystack from '../assets/imgs/companies/paystack_logo.png';
import standardBank from '../assets/imgs/companies/standard_bank.svg';
import skooleo from '../assets/imgs/companies/skooleo_logo.svg';


export default {
    data(){
        return{
            logos:[
                {icon: dangote},
                {icon: egyptAir},
                {icon: gtBank},
                {icon: mtn},
                {icon: paystack},
                {icon: standardBank},
                {icon: skooleo},
            ]
        }
    }
}
</script>

<style>
    .companies h4{
        text-align: center;
        margin: 25px 0;
    }

    .company{
        height: 70px;
        width: 70px;
    }

    .company img{
        width: 100%;
        height: 100%;
    }
</style>