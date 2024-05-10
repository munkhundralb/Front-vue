<template>
      <!-- <div class="spinoverlay">
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary-color" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div> -->
    <BModal  id="LoginModal" title="Нэвтрэх" hide-footer="true" @hidden="LoginModal=false"
      v-model="LoginModal">
      <div v-if="LoginModal">
        <div class="alert alert-primary d-flex text-body-secondary my-4">
            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 6V10M10 14H10.01M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                    stroke="#009AD7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="small mx-3">
                Бүт-ийн системд бүртгэлтэй бүртгэлийн дугаар нууц үгээ ашиглан нэвтэрнэ үү.
            </span>
        </div>
        <div id="login">
            <div class="mb-3">
                <label for="username" class="form-label">Бүртгэлийн дугаар</label>
                <input type="text" id="username" name="username" 
                    v-on:keyup.enter="onEnter"
                    v-model="input.username"
                    placeholder="3********" required
                    v-bind:class="{'form-control':true, 'is-invalid' : !validusername(input.username) && usernameBlured}" 
                    v-on:blur="usernameBlured = true" :maxlength="20"/>
                    <div class="invalid-feedback">Бүртгэлийн дугаар алдаатай!</div>
            </div>
            <div class="mb-3">
                <label for="password">Нууц үг</label>
                <input type="password" id="password"  class="form-control" name="password"
                v-on:keyup.enter="onEnter"
                 v-model="input.password"
                    placeholder="••••••" 
                    v-bind:class="{'form-control':true, 'is-invalid' : !validpassword(input.password) && passwordBlured}" 
                    v-on:blur="passwordBlured = true" :maxlength="30"/>
                    <div class="invalid-feedback">Нууц үг оруулна уу!</div>
            </div>
            <div class="mb-3 mt-4 pvc-section">
                <div class="mb-3 d-flex justify-content-center">
                     <img  :src="PVCimgurl" /> 
                     <svg @click="getPVC" width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.25 12.5C22.25 12.0858 21.9142 11.75 21.5 11.75C21.0858 11.75 20.75 12.0858 20.75 12.5H22.25ZM17.501 4.5L17.0505 5.09962L17.501 4.5ZM19.5 6.49903L18.9004 6.94953L18.931 6.99029L18.9669 7.02653L19.5 6.49903ZM20.9069 1.49665C20.905 1.08244 20.5677 0.748159 20.1535 0.750007C19.7393 0.751856 19.405 1.08914 19.4069 1.50335L20.9069 1.49665ZM20.1657 3.48571L20.9157 3.48237V3.48237L20.1657 3.48571ZM16.4857 7.16571L16.4824 7.91571L16.4857 7.16571ZM14.5034 6.40686C14.0891 6.40501 13.7519 6.7393 13.75 7.15351C13.7482 7.56772 14.0824 7.905 14.4967 7.90685L14.5034 6.40686ZM19.7572 6.40267L20.3503 6.86169V6.86169L19.7572 6.40267ZM19.4027 6.75717L19.8617 7.35029L19.8617 7.35029L19.4027 6.75717ZM19.5912 6.59117L20.1215 7.1215L19.5912 6.59117ZM20.75 12.5C20.75 17.6086 16.6086 21.75 11.5 21.75V23.25C17.4371 23.25 22.25 18.4371 22.25 12.5H20.75ZM11.5 21.75C6.39137 21.75 2.25 17.6086 2.25 12.5H0.75C0.75 18.4371 5.56294 23.25 11.5 23.25V21.75ZM2.25 12.5C2.25 7.39137 6.39137 3.25 11.5 3.25V1.75C5.56294 1.75 0.75 6.56294 0.75 12.5H2.25ZM11.5 3.25C13.5836 3.25 15.5044 3.93804 17.0505 5.09962L17.9515 3.90038C16.1546 2.55032 13.9197 1.75 11.5 1.75V3.25ZM17.0505 5.09962C17.7508 5.62582 18.3742 6.24916 18.9004 6.94953L20.0996 6.04852C19.4886 5.23519 18.7648 4.51145 17.9515 3.90038L17.0505 5.09962ZM19.4069 1.50335L19.4157 3.48906L20.9157 3.48237L20.9069 1.49665L19.4069 1.50335ZM16.4891 6.41572L14.5034 6.40686L14.4967 7.90685L16.4824 7.91571L16.4891 6.41572ZM19.4157 3.48906C19.4193 4.29848 19.4206 4.84217 19.3757 5.25351C19.3324 5.64976 19.2542 5.82713 19.164 5.94365L20.3503 6.86169C20.6793 6.43661 20.8089 5.94728 20.8668 5.41635C20.9232 4.9005 20.9192 4.25651 20.9157 3.48237L19.4157 3.48906ZM16.4824 7.91571C17.2565 7.91916 17.9005 7.92317 18.4164 7.86684C18.9473 7.80886 19.4366 7.67926 19.8617 7.35029L18.9437 6.16404C18.8271 6.25421 18.6498 6.33243 18.2535 6.3757C17.8422 6.42062 17.2985 6.41933 16.4891 6.41572L16.4824 7.91571ZM19.164 5.94365C19.1321 5.9849 19.0976 6.02404 19.0608 6.06084L20.1215 7.1215C20.2031 7.0399 20.2795 6.95314 20.3503 6.86169L19.164 5.94365ZM19.0608 6.06084C19.024 6.09764 18.9849 6.13211 18.9437 6.16404L19.8617 7.35029C19.9531 7.27952 20.0399 7.2031 20.1215 7.1215L19.0608 6.06084ZM18.9669 7.02653L19.058 7.11867L20.1243 6.06367L20.0331 5.97152L18.9669 7.02653Z" fill="#718096"/>
                    </svg>
                </div>
                <input type="text" id="pvc" class="form-control" name="pvc" v-model="input.pvc"
                v-on:keyup.enter="onEnter"
                placeholder="Дээрх кодыг оруулна уу." required
                v-bind:class="{'form-control':true, 'is-invalid' : !validpvc(input.pvc) && pvcBlured}" 
                    v-on:blur="pvcBlured = true" 
                    @keypress="isNumber($event)" :maxlength="6" autocomplete="off"/>
            </div>
            <div v-if="loginmessage!=''" class="alert alert-danger">
                {{  loginmessage }}
            </div>
        </div>
        <div class="modal-footer" style=" border: 0px; ">
            <button type="submit"   @click="CheckLogin" 
            class="btn btn-primary  m-1"  :disabled="isloading">
               <span v-if="!isloading">Нэвтрэх</span>
               <span v-if="isloading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
               <span v-if="isloading" class="sr-only"> Түр хүлээнэ үү</span>
            </button>
        </div>
</div>
    </BModal>
    <a style="min-width:120px;" class="btn btn-primary mx-2 " @click="showloginmodal">
        Нэвтрэх <i class="bi bi-chevron-right"></i>
    </a>
</template>

<script>
import { BModal } from "bootstrap-vue-3";
import axios from "axios";
import aes_encrypt from "@/utils/aes";
import programsjson from "@/utils/programs.json";
import combisjson from "@/utils/combis.json";
import unitsjson from "@/utils/units.json";
export default {
    name: "LoginModal",
    components: {
        BModal,
    },
    data() {
        return {
            LoginModal: false,
            PVCimgurl:null,
            imgrand_arg:0,
            loginstatus:1,
            loginmessage: "",
            input: {
                username: "",
                password: "",
                pvc: ""
            },
            usernameBlured : false,
            passwordBlured : false,
            pvcBlured : false,
            isloading : false
        };
    },
    mounted() {
    },
    methods: {
        validate : function(){
      this.usernameBlured = true;
      this.pvcBlured = true;
      this.passwordBlured = true;
       if( this.validusername(this.input.username) && this.validpvc(this.input.pvc) && this.validpassword(this.input.password)){
          this.valid = true;
       }else{
        this.valid=false;
       }
    },
        validusername : function(username) {
        var re = /^\d{3,20}$/;
        if(username=='test1')
        {
            return true;
        }else{
        return re.test(username.toLowerCase());
        }
    },
    validpvc : function(pvc) {
        //var re = /^\d{6}$/;
        if(pvc.length==6)
        {
            return true;
        }else{
            return false;
        }
    },
    validpassword : function(password) {
        if(password.length>0)
        {
            return true;
        }else{
            return false;
        }
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
        showloginmodal() {
            this.LoginModal = !this.LoginModal;
            this.input.pvc="";
            this.pvcBlured=false;
            this.loginmessage="";
            this.getPVC();
        },
        getPVC() {
            this.PVCimgurl=axios.defaults.baseURL + "getpvc?" +this.imgrand_arg;
            this.imgrand_arg++;
    },
    onEnter: function() {
        this.CheckLogin();
    },
    CheckLogin(){
        this.validate();
            if(this.valid){
                this.isloading=true;
                this.loginmessage="";
        const encpassword=aes_encrypt(this.input.pvc ,this.input.password);
        const article = { username: this.input.username, password:  encpassword };
        axios.post("auth", article)
            .then(res => {
                if(res.data.status==1)
                    {
                        var today = new Date();
                        today.setHours(today.getHours() + 5);

                        this.LoginModal=false;
                        this.isloading=false;
                        //console.log(res.data.message);
                        localStorage.setItem("name",JSON.stringify(res.data.result));
                        localStorage.setItem("username",this.input.username);
                        //locastorage цэвэрлэх
                        localStorage.removeItem('confirmprogram');
                        localStorage.removeItem('iscallapi');
                        
                        localStorage.setItem("units",JSON.stringify(unitsjson));
                        localStorage.setItem("programs",JSON.stringify(programsjson));
                        localStorage.setItem("combis",JSON.stringify(combisjson));

                        this.$router.push({name: "confirm"});
                        
                    }else
                    {
                        this.input.pvc="";
                        this.valid = false;
                        this.pvcBlured = false;
                        this.getPVC();
                        this.isloading=false;
                        this.loginstatus= res.data.status;
                        this.loginmessage=res.data.message;
                        // this.loginstatus= 2;
                        // this.loginmessage= "Амжилтгүй боллоо. Дахин оролдоно уу.";
                    }
            }).catch(response=>{ 
                this.isloading=false;
                console.log('error:' + response);
                this.loginstatus= 0;
                this.loginmessage="Алдаа гарлаа!";
                this.getPVC();
        });
        }
    },
    
    },
    
};

</script>

<style scoped>
.pvc-section img{
width: 90px;
    margin-top: -5px;
}
.pvc-section svg{
    margin-left: 15px;
    margin-top: 3px;
}
#login label{
font-weight: bold;
}
#login .form-control::placeholder{
    color: #95a1b4;
}
</style>