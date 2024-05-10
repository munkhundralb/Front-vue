<template>
    <header >
        <div class="home-header bg-primary pt-3 pb-2">
            <div class="container">
                <div class=" d-flex flex-wrap justify-content-center">
                    <router-link to="/" class="d-flex   mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <img src="../assets/img/logo-building.svg" />
                        <span class="text-white">Бакалаврын өдрийн хөтөлбөрийн элсэлтийн систем</span>
                    </router-link>
                </div>
            </div>
        </div>
        <nav :class="[scrollPosition >= 60 ? 'fixed-top' : '', '']" class="navbar navbar-expand-xl navbar-dark bg-secondary ">
            <div class="container px-0">
                <button @click="shownavbar=!shownavbar" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div :class="shownavbar? 'show': ' '" class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <router-link @click="hidenavbar" to="/" class="nav-link">Нүүр хуудас</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link @click="hidenavbar" to="/elseltbuleg" class="nav-link">Элсэлтийн бүлэг</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link @click="hidenavbar" to="/scorecalculator" class="nav-link">Онооны тооцоолуур</router-link>
                        </li>
                       <li class="nav-item">
                            <router-link @click="hidenavbar" to="/infograph" class="nav-link">Инфографик</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link @click="hidenavbar" to="juram" class="nav-link">Журам</router-link>
                        </li>
                       
                        <li class="nav-item">
                            <a href="https://manual.num.edu.mn/bachelor/docs/build/html/index.html" target="_blank" class="nav-link">Гарын авлага</a>
                        </li>
                        <li class="nav-item">
                            <router-link @click="hidenavbar" to="contact" class="nav-link">Холбоо барих</router-link>
                        </li>
                    </ul>
                </div>
                <div class="btn-group">
                <!--<a class="btn btn-light disabled" href="#" >Бүртгүүлэх</a>-->
                <LoginModal />
                
                 </div>
            </div>
        </nav>
    </header>

    <main class="content-page">
        <div class=" ">
            <img src="../assets/img/bg-image.png" alt="" class="position-absolute top-0 start-0 z-n1">
            <img src="../assets/img/bg-image2.png" alt="" class="position-absolute bottom-0 end-0 z-n1">
        </div>

            <router-view />

    </main>
    <footer class="pt-5 bg-primary">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-6 mb-5"  >
                    <div class="d-flex mb-3">
                        <div class="icon text-primary">
                            <img src="../assets/img/logo-building.svg" />
                            <span class="text-light ms-2 ">
                                Монгол улсын их сургууль
                            </span>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2 text-light">
                        Их сургуулийн гудамж - 1, Бага тойруу, <br>Сүхбаатар дүүрэг, Улаанбаатар
                    </div>
                </div>
                <div class="col-6 col-md-3 mb-3" >
                    <h5 class="mb-4 text-light">Чухал холбоос</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="https://www.num.edu.mn/" class="nav-link p-0 ">Үндсэн цахим хуудас</a></li>
                        <!--<li class="nav-item mb-2"><a href="https://burtgel.num.edu.mn/" class="nav-link p-0 ">Элсэлтийн цахим хуудас</a>
                        </li> -->

                    </ul>
                </div>
                <div class="col-6 col-md-3 mb-3" >
                    <h5 class="mb-4 text-light">Тусламж</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <router-link to="/contact" class="nav-link p-0">Холбоо барих</router-link> </li>
                        <li class="nav-item mb-2">
                            <a href="https://manual.num.edu.mn/bachelor/docs/build/html/index.html" target="_blank" class="nav-link p-0">Гарын авлага</a>
                            </li>
                    </ul>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top" >
                <p class="py-0 my-0 copyright text-light"  >Бүх эрх хуулиар хамгаалагдсан © 2023 МОНГОЛ УЛСЫН ИХ СУРГУУЛЬ</p>
                <ul class="list-unstyled d-flex my-0" >
                    <li class="ms-3"><a class="link-body-emphasis" target="_blank" href="https://www.youtube.com/channel/UCfWHF5c7aUtTDF93jqSvWXQ">
                            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.0639 0.498047C11.0711 0.498062 11.0787 0.49808 11.0869 0.4981L11.1754 0.498376C12.2027 0.502149 17.4091 0.539888 18.8128 0.917274C19.6733 1.14808 20.351 1.82827 20.581 2.69169C20.7076 3.16606 20.7958 3.79656 20.8573 4.445L20.8693 4.57489C20.8789 4.68326 20.8879 4.79187 20.8962 4.90009L20.9058 5.02971C20.9879 6.17235 20.9975 7.2416 20.9986 7.47554L20.9988 7.5071C20.9988 7.50969 20.9988 7.51391 20.9988 7.51391V7.53163C20.9988 7.53163 20.9988 7.53585 20.9988 7.53843L20.9986 7.56999C20.9975 7.81277 20.9872 8.95514 20.8962 10.1455L20.8859 10.2755L20.875 10.4057C20.8131 11.1214 20.7202 11.8321 20.581 12.3538C20.351 13.2173 19.6733 13.8976 18.8128 14.1283C17.3623 14.5184 11.8514 14.5457 11.0869 14.5476L11.0281 14.5477C11.0233 14.5477 11.019 14.5477 11.0154 14.5477L10.9913 14.5477C10.9913 14.5477 10.9858 14.5477 10.9822 14.5477L10.9106 14.5476C10.5243 14.5466 8.92571 14.5392 7.25162 14.4817L7.03758 14.4741C7.00187 14.4728 6.96615 14.4714 6.93042 14.4701L6.71614 14.4616L6.50235 14.4525C5.11547 14.3917 3.79315 14.2919 3.18486 14.1283C2.32434 13.8976 1.64671 13.2173 1.41672 12.3538C1.27739 11.8321 1.1845 11.1214 1.12258 10.4057L1.11166 10.2755L1.1014 10.1455C1.01363 8.99843 1.00089 7.89592 0.999039 7.60001L0.998818 7.55765C0.998803 7.55383 0.99879 7.55032 0.998779 7.54712V7.49842C0.99879 7.49521 0.998803 7.4917 0.998818 7.48789L0.999039 7.44553C1.00071 7.17755 1.01132 6.24801 1.07851 5.2229L1.0872 5.09431C1.0887 5.07281 1.09023 5.05127 1.09178 5.02971L1.1014 4.90009C1.10968 4.79187 1.11862 4.68326 1.12829 4.57489L1.14025 4.445C1.20178 3.79656 1.29006 3.16606 1.41672 2.69169C1.64671 1.82827 2.32434 1.14808 3.18486 0.917274C3.79315 0.75374 5.11547 0.653984 6.50235 0.593133L6.71614 0.584075L6.93042 0.575611C6.96615 0.574249 7.00187 0.57291 7.03758 0.571595L7.25162 0.563984C8.81885 0.510184 10.3199 0.500221 10.8221 0.498376L10.9106 0.4981C10.9188 0.49808 10.9265 0.498062 10.9336 0.498047H11.0639ZM8.99882 4.51204V10.5335L14.1947 7.52293L8.99882 4.51204Z"
                                    fill="#89939E" />
                            </svg>
                        </a></li>
                    <li class="ms-3"><a class="link-body-emphasis" target="_blank" href="https://twitter.com/num_edu">
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.28251 16.75C13.8295 16.75 17.9592 10.4963 17.9592 5.08231C17.9592 4.90637 17.9592 4.73044 17.9512 4.5545C18.7515 3.97872 19.4478 3.25098 20 2.42729C19.2637 2.75517 18.4714 2.97109 17.6391 3.07505C18.4874 2.57124 19.1357 1.76353 19.4478 0.803887C18.6555 1.27571 17.7751 1.61159 16.8387 1.79552C16.0864 0.995817 15.022 0.5 13.8455 0.5C11.5806 0.5 9.7399 2.33932 9.7399 4.60248C9.7399 4.92237 9.77991 5.23425 9.84394 5.53814C6.43457 5.3702 3.40936 3.73081 1.38455 1.25172C1.03241 1.8595 0.832333 2.56324 0.832333 3.31496C0.832333 4.73843 1.56062 5.99397 2.65706 6.7297C1.98479 6.70571 1.35254 6.52178 0.80032 6.21789C0.80032 6.23388 0.80032 6.24988 0.80032 6.27387C0.80032 8.25714 2.21689 9.92052 4.08964 10.2964C3.7455 10.3923 3.38535 10.4403 3.0092 10.4403C2.7451 10.4403 2.489 10.4163 2.2409 10.3684C2.7611 11.9998 4.28171 13.1833 6.07443 13.2153C4.66587 14.3189 2.89716 14.9747 0.976391 14.9747C0.64826 14.9747 0.320128 14.9587 0 14.9187C1.80872 16.0703 3.96959 16.75 6.28251 16.75Z"
                                    fill="#89939E" />
                            </svg>
                        </a></li>
                    <li class="ms-3"><a class="link-body-emphasis" target="_blank" href="https://www.facebook.com/Elselt.NUM">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 10.0605C21 4.50371 16.5225 -0.000976562 10.9994 -0.000976562C5.47619 -0.000976562 0.998779 4.50371 0.998779 10.0605C0.998779 15.0825 4.65585 19.245 9.43677 19.9998V12.9689H6.89756V10.0605H9.43677V7.84386C9.43677 5.32219 10.9298 3.9293 13.2141 3.9293C14.3083 3.9293 15.4528 4.12581 15.4528 4.12581V6.60189H14.1917C12.9494 6.60189 12.562 7.37747 12.562 8.17315V10.0605H15.3356L14.8922 12.9689H12.562V19.9998C17.3429 19.245 21 15.0825 21 10.0605Z"
                                    fill="#89939E" />
                            </svg>

                        </a></li>
                </ul>
            </div>
        </div>
        <a href="#" :class="[scrollPosition >= 120 ? '' : 'backtophide', '']" class="back-to-top" >
            <i class="bi bi-arrow-up"></i>
        </a>
    </footer>

</template>

<script >
import LoginModal from "../app/LoginModal.vue";
// importing AOS
//import AOS from 'aos'
import 'aos/dist/aos.css'

import { defineComponent } from 'vue';
import AOS from "aos";
export default defineComponent({
    components: {
        LoginModal
    },
    data() {
    return {  
        scrollPosition: 0,
        shownavbar:false
    }
  },
  created(){

  },
  methods: {
    hidenavbar(){
        if(window.innerWidth <= 1024)
        {
                this.shownavbar=false;
        }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    AOS.init({
duration: 1000,
once: true
  });
  }


});
</script>

<style>
nav .btn-group .btn{
    border-radius: var(--bs-btn-border-radius)!important;
}
.loginmodal .alert-primary{
border: 0px!important;
}
.back-to-top {
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 99999;
}
.backtophide{
display: none!important;
}
.back-to-top i {
    font-size: 16px;
    border-radius: 5px;
    color: #fff;
    transition: all 0.4s;
    background: var(--primary-color);
    padding: 8px 10px;
}
.fixed-top{
    transition: 3s;
    -webkit-transition:  3s;
}
header .navbar .btn i{
    font-size: 14px;
}

.content-page{
    background: #f5f5f578;
}
.home-header a span {
    padding: 5px;
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 5px;
}

.home-header a {
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}

header nav.navbar ul li a {
    color: white;
}
header nav.navbar ul li.nav-item  {
    margin-left:10px;
}
footer .copyright{
font-size: 12px;
}
footer .icon {
    display: flex;
    align-items: baseline;
    text-transform: uppercase;
}

footer .text-light{
color: #89939E!important
}
footer ul .nav-item a{
color:white;
}
footer .icon img{
    opacity: 0.6;
}
.content-body {
    min-height: 60vh;
    background: white;
    margin: 50px 0;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 32px;
}

 .content-tittle h2 {
    color: var(--primary-color);
    font-weight: 500;
}
@media (max-width: 575.98px) { 
    .home-header a {
    align-items: center!important;
}
.home-header a span {
    font-size: 12px!important;
}
}
</style>