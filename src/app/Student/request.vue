<template>
    <div class="fullheigth centered-content bg-white-section p-4">
        <div class="content-tittle mb-4">
            <h2>
                <span class="title">Оюутан болох</span>
            </h2>
        </div>
        <div v-if="isloadingapi">
        <step v-if="stepresultdata!=null" :stepresult="stepresultdata" />
        <studcongratulation v-if="this.stepresultdata.student" :schoolname="chosenschoolname" :programname="chosenprogramname"
            :parentName="chosenparentname" :cardnr="chosencardnr"/>
        <div v-else>
            <div class="alert alert-primary mb-4 alert-dismissible fade show" role="alert">
                <div class="alert-icon">
                    <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
                </div>
                <div class="alert-content">
                    <p class="ms-2 mb-0">
                        Таны хүсэлтийг хүлээн авсны дараа
                        МУИС-ийн Нэгдсэн хандалтын орчинд нэвтрэх суралцагчийн дугаар, нууц үг харагдана.
                    </p>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <router-link to="/app/student" class="btn btn-light me-md-2">Буцах</router-link>
                <button @click="setApplicantStudent" class="btn btn-primary">
                <span v-if="!isloading">Оюутан болох хүсэлт илгээх
                </span>
                <span v-if="isloading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span v-if="isloading" class="sr-only"> Түр хүлээнэ үү</span>
              </button>
            </div>
        </div>
    </div>
    <div v-else>
                <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary-color" role="status">
                    <span class="visually-hidden">Ачаалж байна...</span>
                </div>
                </div>
            </div>
    </div>
</template>
<script>
import axios from "axios";
import studcongratulation from "./studcongratulation.vue";
import step from './step';
export default {
    components: {
        studcongratulation,
        step
    },
    data() {
        return {
            isloading: false,
            agreement1: false,
            programnames: [],
            chosenschoolname: '',
            chosenparentname: '',
            chosenprogramname: '',
            chosencardnr: '',
            stepresultdata: null,
            isloadingapi:false
        }
    },
    mounted() {
        this.checkStudentStep();
    },
    methods: {
        checkStudentStep (){
            axios.get("checkStudentStep")
            .then(res => { 
                this.isloading=false;
                if (res.data.status == 1) {
                    this.stepresultdata = res.data.result;
                    if(this.stepresultdata.form==false)
                    {
                        this.$router.push({ name: "student" });
                    }else
                    if(this.stepresultdata.student == true)
                    {
                        var localprograms = localStorage.getItem('programs');
                        this.programnames = JSON.parse(localprograms);
                        let programnamelocal = this.programnames.filter(x => x.programId == this.stepresultdata.pid)[0];
                        this.chosenschoolname = programnamelocal.unitName;
                        this.chosenparentname = programnamelocal.parentUnitName;
                        this.chosenprogramname = programnamelocal.programName;
                        this.chosencardnr=this.stepresultdata.cardnr;
                    }
                } else {
                    this.$toast.open({
                        message: res.data.message,
                        type: 'warning'
                    });
                }
                this.isloadingapi=true;
            }).catch(error => {
                this.$toast.open({
                    message: 'Холболт амжилтгүй!',
                    type: 'error'
                });
            });
        },
        setApplicantStudent() {
            this.isloading=true;
            axios.post("setApplicantStudent")
                .then(res => {
                    
                    if (res.data.status == 1) {
                        this.checkStudentStep();
                        
                    } else {
                        this.isloading=false;
                        this.$toast.open({
                            message: res.data.message,
                            type: 'warning'
                        });
                    }
                }).catch(error => {
                    this.isloading=false;
                    this.$toast.open({
                        message: 'Холболт амжилтгүй!',
                        type: 'error'
                    });
                });
        }
    }
}
</script>
<style></style>