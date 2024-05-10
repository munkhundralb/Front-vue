
<template>
  <div v-if="!iscallmanagement" class="spinoverlay">
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary-color" role="status">
        <span class="visually-hidden">Ачаалж байна...</span>
      </div>
    </div>
    <!-- <div  class="d-flex  justify-content-center mt-3"> 
        <button @click="logout" class="btn btn-primary">нэвтрэх</button> 
    </div> -->
  </div>
  <div v-else>
    <OnClickOutside @trigger="sidebarClickOutside">
      <div :class="{ activenav: issidebar }"
        class="h-100 overflow-auto p-3 side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
        <div class="">
        <div class="logo-details">
          <router-link to="/app/dashboard" title="МУИС - Элсэлт">
            <div class="mb-5 sidebar-head">
              <img src="../assets/img/logo-building.svg" />
              <span>Монгол Улсын Их Сургууль </span>
            </div>
          </router-link>
        </div>
        
        <appmenu :Managementsprop="Managementsprop" />
      </div>
      </div>
    </OnClickOutside>
    <div :class="{ activecont: !ismobile }" class="app-content-body my-container">

      <!-- Top Nav -->
      <nav :class="{ mobilenav: ismobile }" class="navbar navbar-expand navbar-header px-4">

        <div class="container-fluid p-0 col-md-12">
          <a class="togglemenu" @click="updatesidebar">
            <img src="../assets/appimg/menu-Light.svg" />
          </a>

          <a class="navbar-brand" href="#">
            <img class="navlogo" src="../assets/img/logo-building.svg" />
            <span>Бакалаврын өдрийн хөтөлбөрийн элсэлтийн систем</span></a>

          <div class="btn-group">
            <button type="button" class=" btn-link nav-link px-0 dropdown-toggle " data-bs-toggle="dropdown"
              aria-expanded="false">
              <span class="fullname" v-if="fullname">{{ fullname }}</span> <span v-if="firstname" class="fname">{{ firstname[0] }}</span>
            </button>
            <ul class="navbarDropdown dropdown-menu dropdown-menu-end">
              <li class="dropdown-item">
                <span @click="logout" type="button">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-181fe118=""
                      d="M11.7692 19.3077C11.7692 19.6898 11.4591 20 11.0769 20H7.38462C4.96708 20 3 18.0329 3 15.6154V6.38462C3 3.96708 4.96708 2 7.38462 2H11.0769C11.4591 2 11.7692 2.31015 11.7692 2.69231C11.7692 3.07446 11.4591 3.38462 11.0769 3.38462H7.38462C5.73046 3.38462 4.38462 4.73046 4.38462 6.38462V15.6154C4.38462 17.2695 5.73046 18.6154 7.38462 18.6154H11.0769C11.4591 18.6154 11.7692 18.9255 11.7692 19.3077ZM18.9508 10.5107L15.2585 6.81843C14.988 6.54797 14.5495 6.54797 14.2791 6.81843C14.0086 7.0889 14.0086 7.52739 14.2791 7.79785L16.7898 10.3086H9.23077C8.84862 10.3086 8.53846 10.6187 8.53846 11.0009C8.53846 11.3831 8.84862 11.6932 9.23077 11.6932H16.7898L14.2791 14.204C14.0086 14.4744 14.0086 14.9129 14.2791 15.1834C14.4138 15.3181 14.5911 15.3864 14.7683 15.3864C14.9455 15.3864 15.1228 15.3191 15.2575 15.1834L18.9498 11.4911C19.2212 11.2188 19.2212 10.7812 18.9508 10.5107Z"
                      fill="currentColor"></path>
                  </svg>
                  Гарах</span>
              </li>
            </ul>
          </div>

        </div>

      </nav>
      <div class="p-4" style="padding-bottom: 0.75rem!important;">
        <!--End Top Nav -->
        <router-view />
      <p class="copyright pt-4 m-0">© 2023 Монгол Улсын Их Сургууль </p>
      </div>
      <WarningModal  :ApplyWarningProp="isReadlocal" :ContactProp="false" :iscontactshowbtnprop="false"/>
    </div>
  </div>
 
</template>

<script>
import { OnClickOutside } from '@vueuse/components'
import appmenu from './appmenu.vue'
import axios from "axios";
import WarningModal from "../app/Apply/WarningModal.vue";

import { toggle } from "@/store/index.js";

export default ({
  mixins: [toggle],
  components: {
    OnClickOutside,
    appmenu,
    WarningModal
  },
  data() {
    return {
      iscallmanagement: false,
      issidebar: false,
      ismobile: false,
      Managementsprop: [],
      fullname: '',
      firstname:'',
      loaderloginlink:false,
      isReadlocal: false
    };
  },
  watch() {
    //this.getManagements();
  },
  mounted() {
    this.callnotif();
    //this.isLoggedIn();
    //setTimeout(() => this.getManagements(), 2000);
    this.getManagements();
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);

    var locaname = JSON.parse(localStorage.getItem('name'));
    if(locaname!=null)
    {
    this.fullname = locaname.lname[0] + '.' + locaname.fname;
    this.firstname= locaname.fname;
    }

  },
  methods: {
    logout() {

      axios.get("logout")
        .then(res => {
          var username=localStorage.getItem('username');
          localStorage.removeItem('form_' + username);
          localStorage.removeItem('confirmprogram');
          localStorage.removeItem('iscallapi');
          this.$router.push({ path: "/" });
        });
    },
    isLoggedIn() {
      if (this.isLoggedExpired()) {
        this.logout();
      }
      let authToken = localStorage.getItem("loggin");
      if (authToken == null) {
        this.logout();
      }
    },
    isLoggedExpired() {
      let expirationDate = localStorage.getItem("expires_in");
      return expirationDate < new Date();
    },
    getManagements() {
      // return new Promise(async (resolve) => {
      axios.get("getManagements")
        .then(res => {
          if (res.data.status == 1) {
            this.isReadlocal= !res.data.result.isRead; //!(boolString === "true");  
            this.Managementsprop = res.data.result.activeManagements;
            if(this.Managementsprop.length!=0)
            {
            let currentroutname=this.$route.name;
            if(currentroutname!='payment' //&& currentroutname!='confirm' 
            && currentroutname!='confirmpayment' 
            && currentroutname!='student' 
            && currentroutname!='agreement'
            && currentroutname!='request' )
            {
            if (this.Managementsprop[0].typeId == 1) {
              if(currentroutname!='addprogram')
              this.$router.push({ name: "Dashboard" });
            } else
              if (this.Managementsprop[0].typeId == 2) {
                this.$router.push({ name: "confirm" });
              } else
                if (this.Managementsprop[0].typeId == 3) {
                  this.$router.push({ name: "student" });
                }
                else {
                  this.$router.push({ name: "Applicant" });
                }
              }
            }else{
              this.$router.push({ name: "Applicant" });
            }
          }
          else {
                this.$toast.open({
                message: res.data.message,
                type: 'warning'});
                    }
          this.iscallmanagement = true;
        })
        .catch(error=>{
          this.iscallmanagement = true;
          this.$toast.open({
          message: 'Холболт амжилтгүй!',
          type: 'error'});
                    });
    },
    updatesidebar() {
      this.issidebar = !this.issidebar;
    },
    sidebarClickOutside() {
      if (this.ismobile && this.issidebar) {
        this.issidebar = false;
      }
    },
    updateScreenSize() {
      if (window.innerWidth <= 1024) {
        this.issidebar = false;
        this.ismobile = true;
      } else {
        this.issidebar = true;
        this.ismobile = false;
      }
    },
  },
});
</script>

<style>
 :root {
  --fullpaddingsize:4.9rem;
  --header-height:3rem;
 }
html {
  height: -webkit-fill-available;
}
body {
  background-color: #F5F5F5;
  font-family: var(--body-font);
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
strong{
  font-weight: 600;
}
.fullheigth{
 min-height: calc(100vh - var(--header-height) - var(--fullpaddingsize));
}
.copyright{
  color:#89939E;
  font-size: 12px;
}
p {
  font-size: 14px;
}
 .dropdown-menu {
    max-height: 250px;
    box-shadow: 0px 6px 12px rgba(171, 190, 209, 0.3);
    border: 0px;
}
table {
  font-size: 14px;
}

.bg-white-section {
  background: #FFFFFF;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.side-navbar ul.nav .nav-item .time-icon {
  position: absolute;
  right: 10%;
}

.side-navbar ul.nav .nav-item .time-icon img {
  margin-top: 10px;
}

@media (max-width: 1200px) {
  .side-navbar {
    transition: 0.5s;
  }
}
.click-primary-color {
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;
}
.modal p,
.modal ul li,
.modal label,
.modal .alert {
  font-size: 14px;
}

.modal p {
  margin-bottom: 3px;
}

.modal .table p {
padding:0;
}
.modal .table tr  td {
     vertical-align: top;
}
.modal .modal-title {
  font-weight: 600;
  font-size: 18px;
}
.modal .modal-body{
  padding: 1.5rem;
}


.modal .modal-header{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.modal .modal-body .modal-footer{
  padding-left: 0px;
  padding-right: 0px;
}
.modal .modal-body .modal-footer .btn{
  margin: 0px!important;
}


.togglemenu {
  display: none;
}

.navbar-header {
  background-color: white;
  height: var(--header-height);
  border-bottom: 1px solid #CFD7DF;
backdrop-filter: blur(2.5px);
}

.navbar-header .navbar-brand {
  font-size: 14px;
  display: flex;
  align-items: baseline;
  text-transform: uppercase;
  font-weight: 600;
}

.navbar-header img.navlogo {
  display: none;
}

.navbarDropdown {
  border-radius: 5px;
  background: #fff;
  list-style: none;
  padding: 4px 0;
  border: 0px;
  -webkit-box-shadow: 4px 4px 20px rgba(0, 0, 0, .04);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, .15);
  top: 30px !important;
}

.navbarDropdown:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  margin-left: -0.5em;
  right: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 8px solid #000;
  border-color: transparent transparent #fff #fff;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.mobilenav {
  background-color: var(--primary-bg-color) !important;
  height: 3.5rem;
}

.mobilenav .togglemenu {
  display: block;
  cursor: pointer;
}

.mobilenav .navbar-brand {
  color: white;
  font-size: 9px !important;
  white-space: unset;
  align-items: center !important;
  margin-right: 5px;
}

.mobilenav img.navlogo {
  display: block !important;
  margin-left: 10px;
  margin-right: 10px;
}

.mobilenav .btn-link {
  color: white;
}

.navbar-header .btn-link .fname {
  display: none;
}

.mobilenav .btn-link .fname {
  display: block;
  width: 35px;
  height: 35px;
  border: 1px solid #fff;
  background-color: #003e967a;
  font-size: 20px;
  border-radius: 5px;
  margin: 0;
  background-color: #CFD7DF;
  color: var(--primary-bg-color);
  padding-top: 1px;
}

.mobilenav .btn-link .fullname {
  display: none;
}

.mobilenav .btn-link::after {
  display: none;
}
.mobilenav .navbarDropdown {
  top: 43px!important;
}
.mobilenav .navbarDropdown:before {
    right: -10px;
}
.side-navbar {
  width: 300px;
  height: 100%;
  position: fixed;
  margin-left: -300px;
  background-color: var(--primary-bg-color);
  z-index: 1000;
}

.side-navbar::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.side-navbar::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
.side-navbar::-webkit-scrollbar-thumb {
  background: #E1EFFE; 
}

/* Handle on hover */
.side-navbar::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

.sidebar-head {
  padding-right: 0px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: baseline;
}

.sidebar-head img {
  height: 25px;
}

.sidebar-head span {
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 10px;
  float: right;
}


.my-container {
  transition: 0.4s;
}

.activenav {
  margin-left: 0;

}

/* for main section */
.activecont {
  margin-left: 300px;
}

#menu-btn {
  background-color: #100901;
  color: #fff;
  margin-left: -62px;
}

.app-content-body .content-tittle h2 {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 20px;
}

.alert {
  font-size: 14px;
  border: 0px;
  padding: 15px;
}

.alert-primary {
  color: #23222A;
  background-color: #E1EFFE;
}

.alert .alert-icon {
  float: left;
}

.alert .alert-icon img {
  width: 30px;
  height: 30px;
}

.alert .alert-content {
  margin-left: 30px;
}

.alert .alert-content p {
  margin-bottom: 5px;
}

.spinoverlay {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 40%;
  left: 0px;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.table-stripedmy thead tr th
{
  background-color: #F3F6FA;
  font-weight: 600;
  text-align: center;
  vertical-align: middle!important;
  padding-top: 12px;
    padding-bottom: 12px;
}
.table-stripedmy >tbody>tr:nth-child(even)>td {
  background-color: #F3F6FA;
}
.table-stripedmy tr td:first-child,  .table-stripedmy tr th:first-child{
    border-radius: 8px 0 0 8px;
  }
  .table-stripedmy tr td:last-child, .table-stripedmy tr th:last-child{
    border-radius: 0 8px 8px 0;
  }
.table-success-color{
  background: #BAEDBD!important;
}
.v-toast{
  z-index:1100!important ;
}
</style>