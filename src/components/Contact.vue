<template>
            <div  :class="iscontainer? 'container my-5': ''">
    <div class="fullheigth centered-content bg-white-section p-4">
            <div class="content-tittle mb-5">
                <h2><span class="title">Холбоо барих</span></h2>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="contact-cat">
                        <h5 class="mb-3">Оюутны хөгжлийн бодлогын газар</h5>
                        <p>Элсэлтийн үйл ажиллагаа, дүрэм журамтай холбоотой асуудлаар холбогдох</p>
                        <div class="cat-cap">
                            <ul class="nav flex-column">
                                <li class="nav-item mb-3">
                                    <img src="../assets/img/location.svg" class="">
                                    <span>Багш, оюутны хөгжлийн төв, 306 тоот</span>
                                </li>
                                <li class="nav-item mb-3">
                                    <img src="../assets/img/mail.svg" class="">
                                    <span>elselt@num.edu.mn</span>
                                </li>
                                <li class="nav-item mb-3">
                                    <img src="../assets/img/phone.svg" class="">
                                    <span>75754400, 77307730 - 1122, 1123, 1124, 1125 </span>
                                </li>
                                <li class="nav-item">
                                    <img src="../assets/img/facebook.svg" class="">
                                    <a href="https://www.facebook.com/Elselt.NUM" target="_blank">
                                        <span>МУИС - Элсэлт </span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="contact-cat">
                        <h5 class="mb-3">Цахим шилжилтийн бодлогын газар</h5>
                        <p>Системийн үйл ажиллагаатай холбоотой асуудлаар холбогдох</p>
                        <div class="cat-cap">
                            <ul class="nav flex-column">
                                <li class="nav-item mb-3">
                                    <img src="../assets/img/location.svg" class="">
                                    <span>E-Номын сан, 514 тоот</span>
                                </li>
                                <li class="nav-item ">
                                    <img src="../assets/img/phone.svg" class="">
                                    <span>75754400, 77307730 - 1153, 1151</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data: function () {
        return {
            iscontainer:false
        }
    },
    mounted() {
        let currentroutname=this.$route.name;
        if(currentroutname=='contact')
        {
            this.iscontainer=true;
        }else
        {
            this.iscontainer=false;
        }
    },
}

</script>

<style scoped>

.contact-cat {
    background: var(--light-color);
    border-radius: 5px;
    padding: 30px 30px;
    transition: all .4s ease-out 0s;
    position: relative;
    z-index: 1;
    height: 100%;
}
.contact-cat h5{
 font-weight: 600;
}
.contact-cat p{
    color: #718096;
    font-size: 14px;
    margin-bottom:20px;
}
.contact-cat .cat-cap ul li span{
    margin-left: 10px;
    font-size: 16px;
}
.contact-cat .cat-cap ul li img{
    max-height: 22px;
    width: 18px;
}
.contact-cat .cat-cap ul li{
cursor: pointer;
}
.contact-cat .cat-cap ul li:hover{
 color:var(--primary-color)
}
.contact-cat .cat-cap ul li a:hover{
 color:black;
}
</style>
