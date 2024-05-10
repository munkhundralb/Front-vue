<template>
    <div class="fullheigth centered-content bg-white-section p-4">
        <div class="content-tittle mb-4">
            <h2>
                <span class="title">Оюутан болох</span>
            </h2>
        </div>
        <step :stepresult="stepresult" />
        <div class="container">
            <div class="row mb-4">
                <div class="geree  overflow-auto justify-content-center">
                    <p><img src="@/assets/appimg/geree2022-1.png" class="img-responsive"></p>
                    <p><img src="@/assets/appimg/geree2022-2.png" class="img-responsive"></p>
                    <p><img src="@/assets/appimg/geree2022-3.png" class="img-responsive"></p>
                    <p><img src="@/assets/appimg/geree2022-4.png" class="img-responsive"></p>
                    <!-- <iframe height="100%" width="100%"
                        src="https://burtgel.num.edu.mn/assets/geree2022.pdf"
                        title="МУИС-ийн бакалаврын өдрийн хөтөлбөрт 2023-2024 оны хичээлийн жилийн намрын улиралд оюутан элсүүлэх журам">
                    </iframe> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p>Та МУИС-д суралцагч <strong>суралцуулах гэрээг зөвшөөрч</strong> байна уу?</p>
                    <div class="form-check mb-3 mt-3">
                        <input v-model="agreement" name="agreement" class="form-check-input" type="checkbox" value=""
                            id="flexCheckChecked">
                        <label class="form-check-label okeybtn" for="flexCheckChecked">
                            <strong>Тийм. Зөвшөөрч байна.</strong>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <router-link to="/app/student" class="btn btn-light float-end">Буцах</router-link>
                    <button @click="saveagreement" :disabled="agreement == false" class="btn btn-primary float-end">
                        <span v-if="!isloading">Үргэлжлүүлэх
                        </span>
                        <span v-if="isloading" class="spinner-border spinner-border-sm" role="status"
                            aria-hidden="true"></span>
                        <span v-if="isloading" class="sr-only"> Түр хүлээнэ үү</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import step from './step';
export default {
    components: { step },
    data() {
        return {
            isloading: false,
            agreement: false,
            isstudent: false,
            stepresult: []
        }
    },
    mounted() {

        axios.get("checkStudentStep")
            .then(res => {
                
                if (res.data.status == 1) {
                    this.stepresult = res.data.result;
                    if (this.stepresult.geree == true) {
                        this.$router.push({ name: "request" });
                    }
                } else {
                    this.$toast.open({
                        message: res.data.message,
                        type: 'warning'
                    });
                }
            }).catch(error => {
                this.$toast.open({
                    message: 'Холболт амжилтгүй!',
                    type: 'error'
                });
            });
    },
    methods: {
        saveagreement() {
            this.isloading = true;
            if (this.agreement) {
                axios.post("setApplicantAgreement")
                    .then(res => {
                        this.isloading = false;
                        if (res.data.status == 1) {
                            this.$router.push({ name: "request" });
                        } else {
                            this.$toast.open({
                                message: res.data.message,
                                type: 'warning'
                            });
                        }
                    }).catch(error => {
                        this.isloading = false;
                        this.$toast.open({
                            message: 'Холболт амжилтгүй!',
                            type: 'error'
                        });
                    });
            }
        }
    }
}
</script>
<style>
.okeybtn strong {
    font-size: 14px;
}

.geree {
    max-height: 500px;
    width: 100%;
    border: 1px solid #EBEBED;
}

.geree img {
    width: 100%;
}

.bg-white-section iframe {
    width: 100%;
    max-width: 1000px;
    height: 600px;
}
</style>