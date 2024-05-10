<template>
    <router-view />
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>
    :root {
      --body-font: 'Montserrat', sans-serif;
      --primary-color: #009AD7;
      --success-color:#32C997;
      --light-color: #EBEBED;
      --primary-bg-color: #0E2138;
      --second-bg-color: rgba(14, 33, 56, 0.9);
      --text-white-color: #fff;
      }
      ::-webkit-scrollbar {
            width: 8px;
            height: 8px; 
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
  .bg-primary{
   background-color: var(--primary-bg-color)!important ;
   color: var(--text-white-color)
  }
  .bg-secondary{
   background-color: var(--second-bg-color)!important ;
  }
  .text-primary-color{
    color:var( --primary-color);
  }
body {
  font-family: var(--body-font);
}
.form-check-input:checked {
    background-color: var( --primary-color)!important;
    border-color: var( --primary-color)!important;
}
.btn{
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 0.3rem!important;
  margin-left: 0.3rem!important;
}
.btn:hover{
    opacity: 0.9;
}
.btn-primary{
  color: #fff;
    background-color: var(--primary-color)!important;
    border-color: var(--primary-color)!important;
}
.btn-light{
    color: var(--primary-bg-color)!important;
    background-color: #fff!important;
    border-color: #B4BABF; 
    font-weight: 500;
}
a{
  color:var(--primary-color);
  text-decoration: none;
}

.vue-notification-wrapper .vue-notification-template{
  margin-right: 23px!important;
  margin-bottom:20px!important;
}
.vue-notification-wrapper .notification-content{
  margin-top:10px;
}
@media (max-width: 1200px) { 
  .vue-notification-wrapper .vue-notification-template{
  margin-top: 20%!important;
}
}
</style>
