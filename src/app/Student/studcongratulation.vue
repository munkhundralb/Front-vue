<template>
    <div class="cong">
<div class="mb-4">
    <div class="col-md-12 cong-section ">

          <div class="d-flex justify-content-center ">
              
              <div class="header-logo">
                  <img src="@/assets/appimg/logo-text-blue.png" />
              </div>
          </div>
              <div class="toprectangle position-relative p-5 mb-3 mt-3">
                  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0645 12L0.370758 0H18.0645V12Z" fill="#84DFC1"/>
                  </svg>
                  <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6266 0L22.5718 15H0.681499L11.6266 0Z" fill="#FFD596"/>
                  </svg>
                  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.631836 0L18.3255 12L0.631836 12L0.631836 0Z" fill="#84DFC1"/>
                  </svg>
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2495 0L0.500477 14H23.2495V0Z" fill="#FF5A4F"/>
                  </svg>
                  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.450195 13L16.8801 0H0.450195V13Z" fill="#F0857D"/>
                  </svg>
              </div>
              <div class="text-section text-center ">
           <p><strong class="boldname">{{ fullname.lname }}</strong> овогтой <strong class="boldname"> {{ fullname.fname }} </strong> 
              та <span v-if="parentName!=''"> <strong class="boldname"> {{parentName}} </strong> -ийн </span> 
              <strong class="boldname"> {{schoolname}} </strong> -ийн
            <strong class="boldname"> {{programname}} </strong> хөтөлбөрт <span class="text-primary-color"> суралцагч болсон </span> байна.
            </p>
            <p class="mt-4">МУИС-д суралцах эрхтэй болсон танд баяр хүргэе.</p>
          </div>

               <div class="botrectangle position-relative p-5 mb-3">
                  <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4645 0L22.4097 15H0.51939L11.4645 0Z" fill="#76A9FA"/>
                  </svg>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.818848 13.8945L16.2914 0.106093L15.9826 14.104L0.818848 13.8945Z" fill="#84DFC1"/>
                  </svg>
                  <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.670898 0L23.5771 3.3923L8.25391 10.3923L0.670898 0Z" fill="#FFD596"/>
                  </svg>
                  <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1051 0L22.0503 15H0.160015L11.1051 0Z" fill="#D9D9D9"/>
                  </svg>
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8633 12L0.169586 0H17.8633V12Z" fill="#84DFC1"/>
                  </svg>
               </div>
               <div class="row text-center mb-4">
                  <p>МУИС, Элсэлтийн комисс</p>
               </div>

    </div>
  </div>
<div class="mb-4">
  <p style="text-align: justify;">
    Та дараах суралцагчийн дугаар, нууц үгээ ашиглан <a href="https://auth.num.edu.mn" target="blank">https://auth.num.edu.mn </a>
    холбоосоор МУИС-ийн Нэгдсэн хандалтын орчинд нэвтэрнэ үү.
     Системд нэвтэрсний дараа анхны нууц үгээ заавал солихыг анхаараарай.
  </p>
</div>
<div class="mb-4 alert alert-dark " >
      <table id="usertable" class="table table-borderless mb-0">
        <tr>
          <td width="40%" style="padding-bottom: 15px;"><strong>Суралцагчийн дугаар:</strong></td>
          <td>{{ cardnr }}</td>
        </tr>
        <tr>
          <td><strong>Нууц үг:</strong></td>
          <td> Таны төрсөн он сар өдөр (Жишээ нь: 20050130) </td>
        </tr>
      </table>
 </div>
</div>
</template>
<script>
export default ({
  name: 'studcongratulation',
  props: {
      schoolname: String,
      programname: String,
      parentName: String,
      cardnr: String
  },
  data() {
  return {
    fullname: Object
  }
},
  mounted() {
      this.fullname=JSON.parse(localStorage.getItem('name'));
  }
})
</script>
<style scoped>

.toprectangle, .botrectangle{
  padding: 2.2rem!important;
}
.toprectangle svg:nth-child(1){
  position: absolute;
width: 17.69px;
height: 12px;
left: 10%;
bottom: 10%;
}
.toprectangle svg:nth-child(2){
position: absolute;
width: 23px;
height: 18px;
left: 30%;
top: 5%;
}
.toprectangle svg:nth-child(3){
position: absolute;
width: 17.69px;
height: 12px;
left: 50%;
bottom: 10%;
}
.toprectangle svg:nth-child(4){
position: absolute;
width: 22.75px;
height: 14px;
left: 70%;
top: 20%;
}
.toprectangle svg:nth-child(5){
position: absolute;
width: 16.43px;
height: 13px;
left: 90%;
bottom: 20%;
}

.botrectangle svg:nth-child(1){
  position: absolute;
  width: 25.28px;
height: 20px;
left: 15%;
top: 0%;
}
.botrectangle svg:nth-child(2){
position: absolute;
width: 16px;
height: 17.17px;
left: 35%;
bottom: 5%;
}
.botrectangle svg:nth-child(3){
position: absolute;
width: 19px;
height: 16px;
left: 55%;
top: 20%;
}
.botrectangle svg:nth-child(4){
position: absolute;
width: 25.28px;
height: 20px;
left: 75%;
bottom: 20%;
}
.botrectangle svg:nth-child(5){
position: absolute;
width: 17.69px;
height: 12px;
left: 90%;
top: -40%;
}
.cong-section{
border: 1px solid #D8DFE6;
border-radius: 8px;
padding-top: 2rem!important;
  padding-bottom: 1rem!important;
}
.cong-section .text-section{
  padding: 10px 80px;
}
.cong-section p{
font-size: 16px;
line-height: 26px;
}
.cong-section .boldname{
text-transform: uppercase;
}
.cong-section .header-logo {
  padding-right: 0px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: baseline;
}
.cong-section .header-logo img{
  max-width: 100%;
  padding: 10px 30px;
}
.cong-section .header-logo span{
  font-size: 18px;
line-height: 24px;
font-style: normal;
font-weight: 600;
color: #1B4588;
text-transform: uppercase;
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
}
</style>