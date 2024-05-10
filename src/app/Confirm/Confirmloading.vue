<template>
      <div >

    
  <div class="d-flex justify-content-center align-items-center breadcrumbs mb-4">
  <div class="bd-highlight">
    <div class="done">
          <div class="cirle-number ">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 6L9.5 17L4.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <p> Хөтөлбөр сонгох</p>
        </div>
  </div>
  <div class="bd-highlight hr"><hr></div>
  <div class="bd-highlight">
    <div class="active">
          <div class="cirle-number ">
              2
          </div>
          <p> Элсэх эрх баталгаажуулах</p>
        </div>
      </div>
</div>

 <div class="mb-5 loadingsection justify-content-center">
    <div class="col-auto text-center">
     <img  src="@/assets/appimg/confirmloading.gif">
     <p>Таны хүсэлтийг боловсруулж байна. Та түр хүлээнэ үү.</p>
    </div>
  </div>

  <div class="slide-section mb-4  justify-content-center">
    <p class="ptitle">
Та хүлээх зуураа дараах мэдээлэлтэй танилцана уу.</p>
    <Carousel v-bind="settings" :breakpoints="breakpoints">

    <Slide v-for="item in slideitem" :key="item">
      <div class="carouselitem">
       <h3> <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.17563 0.5L5.5914 15.052L4.73118 10.8943C6.11708 10.8943 7.26404 11.3244 8.17204 12.1846C9.08005 13.0448 9.53405 14.1918 9.53405 15.6254C9.53405 17.0591 9.08005 18.23 8.17204 19.138C7.26404 20.046 6.14098 20.5 4.80287 20.5C3.41697 20.5 2.27001 20.046 1.36201 19.138C0.454002 18.1822 0 17.0113 0 15.6254C0 15.1476 0.0238949 14.6936 0.0716845 14.2634C0.167264 13.8333 0.310633 13.3315 0.501792 12.7581C0.692951 12.1368 0.955794 11.3961 1.29032 10.5358L4.6595 0.5H9.17563ZM22.724 0.5L19.1398 15.052L18.2796 10.8943C19.6655 10.8943 20.8124 11.3244 21.7204 12.1846C22.6284 13.0448 23.0824 14.1918 23.0824 15.6254C23.0824 17.0591 22.6284 18.23 21.7204 19.138C20.8124 20.046 19.6894 20.5 18.3513 20.5C16.9654 20.5 15.8184 20.046 14.9104 19.138C14.0024 18.1822 13.5484 17.0113 13.5484 15.6254C13.5484 15.1476 13.5723 14.6936 13.6201 14.2634C13.7157 13.8333 13.859 13.3315 14.0502 12.7581C14.2413 12.1368 14.5042 11.3961 14.8387 10.5358L18.2079 0.5H22.724Z" fill="#009AD7"/>
</svg>
 {{item.title}}</h3>
        <p>{{ item.text }}
        </p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>

  </div>
</div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default ({
  name: 'Confirmloading',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {

  },
  data: () => ({
    slideitem: [
      {
        title: 'Тэтгэлэг',
        text: 'Таны судалсан багц цаг, нийт голч дүнгээс хамааран хос хавсаргаар суралцах,тэтгэлэгт хамрагдах боломж нээгдэнэ.'
      },
      {
        title: 'Дотуур байр',
        text: 'Оюутны байранд амьдрах хүсэлтээ 8-р сарын 20-27-ны хооронд гаргах ба журамд заасан эрэмбийн дагуу 7 хоногийн дотор баталгаажуулалт явагдана.'
      },
      {
        title: 'Сургалтын төлбөр',
        text: 'Сургалтын төлбөр нь тухайн улиралд судалж буй багц цагаас хамаарна.'
      },
      {
        title: 'Чөлөө авах',
        text: '3 долоо хоногоос дээж хугацаагаар чөлөө авах бол Сургалтын үйл ажиллагаа хариуцсан нэгжид хүсэлт гаргана.'
      }
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
  mounted() {


  }
})
</script>
<style scoped>
.slide-section{
  margin-left:-5px;
  margin-right:-5px;
}

.slide-section .ptitle{
  font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-bottom:20px;
margin-left:5px;
  margin-right:5px;
}
.carouselitem{
    padding: 30px 30px;
    background: #EBEBED;
    border-radius: 8px;
    margin: 0 5px;
    text-align: left;
    position: relative;
    z-index: 1;
    height: 100%;
}
.carouselitem h3 svg{
  width: 20px;
height: 18px;
}
.carouselitem h3{
  font-weight: 600;
  font-size: 18px;
  margin-bottom:20px;
}
.carouselitem p{
  font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #23222A;
margin-bottom:0px;
}
.loadingsection p{
font-weight: 600;
font-size:20px;
line-height: 28px;
}
.loadingsection img{
width:200px;
}
.breadcrumbs {
background: #EBEBED;
padding: 25px 0;
margin-bottom: 30px;

border-radius: 0.375rem;
}
.breadcrumbs .active .cirle-number {
 
  padding-left: 12px;
}
.breadcrumbs .cirle-number {
width: 32px;
height: 32px;
border-radius: 50%;
background: #D8DFE6;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 14px 6px 10px;
color: white;
font-size: 14px;
float: left;
}
.breadcrumbs  p {
padding-top: 5px;
color: #718096;
margin-bottom: 0px;
margin-left: 45px;
}

.breadcrumbs  .active .cirle-number {
background: var(--primary-color);
}

.breadcrumbs .active p {
color: var(--primary-color);
  font-weight: 600;
  width: 150px;
  position: relative;
  width: 100%;
  padding-top: 5px;
}
.breadcrumbs hr{
color: #656565;
width: 140px;
border-width: 2px;
margin-left:10px;
margin-right:10px;
}
.breadcrumbs  .bd-highlight:last-child .done .cirle-number{
margin-top:8px;
}
.breadcrumbs .bd-highlight:last-child{
margin-right: 0px!important;
}

@media (max-width: 1199.98px) {
  .toprectangle, .botrectangle{
  padding: 1.5rem!important;
}
  .cong-section{
  padding-top: 0.8rem!important;
  padding-bottom: 0.8rem!important;
}
  .cong-section .text-section{
  padding: 10px 10px;
}
  .paymenttypebtns .btn{
    margin-bottom: 5px;
  }
.breadcrumbs .bd-highlight.hr {
  width: 40px;
}
.breadcrumbs hr {
  width:100%;
}
.breadcrumbs .bd-highlight {
  width: 40%;
}
.breadcrumbs .cirle-number{
  float:none;
  margin-left: 35%;
}
.breadcrumbs p {
  padding-top: 5px;
  margin-left: 0px;
  text-align: center;
  line-height: 20px;
}
.breadcrumbs {
  padding:20px 5px;
}
.breadcrumbs  .bd-highlight:last-child .done .cirle-number{
margin-top:0px;
}
}
.breadcrumbs .done .cirle-number {
padding: 4px 4px;
}

.breadcrumbs  .done .cirle-number {
background: var(--success-color);
}

.breadcrumbs  .done p {
color: var(--success-color);
font-weight: 600;
}
</style>