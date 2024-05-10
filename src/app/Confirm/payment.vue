<template>
    <div class="fullheigth payment bg-white-section p-4">
        <div class="content-tittle mb-4">
            <h2>
                <span class="title">Элсэх эрх баталгаажуулах</span>
            </h2>
        </div>
        <div v-if="isloadingpage">
        <confirmloading/>
    </div>
    <div v-else>
        <div class="d-flex justify-content-center align-items-center breadcrumbs mb-3">
            <div class="bd-highlight">
                <div class="done">
                    <div class="cirle-number ">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 6L9.5 17L4.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p> Хөтөлбөр сонгох</p>
                </div>
            </div>
            <div class="bd-highlight hr">
                <hr>
            </div>
            <div class="bd-highlight">
                <div class="active">
                    <div class="cirle-number ">2</div>
                    <p> Элсэх эрх баталгаажуулах</p>
                </div>
            </div>
        </div>
        <div class="alert alert-primary mb-4 alert-dismissible fade show" role="alert">
          <div class="alert-icon">
            <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
          </div>
          <div class="alert-content">
            <p class="ms-2"><strong>Санамж</strong></p>
            <p class="ms-2">
                Элсэх эрхээ баталгаажуулах төлбөрийн хэмжээ нь  элсэн суралцах бүрэлдэхүүн/салбар 
                сургуулийн ерөнхий суурь хичээлийн 1 багц цагийн төлбөр байна. Тухайн төлбөр 
                нь суралцагчийн сургалтын төлбөрт тооцогдоно. Элсэх эрхээ цуцлах тохиолдолд 
                төлбөрийг буцаан олгохгүй. 
             </p>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div v-if="confirmprogram" class="row ">
            <div class="col-md-6 mb-3">
                <table id="datatable" class="datatable table table-responsive table-stripedmy table-borderless"
                    cellspacing="0">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Баталгаажуулах хөтөлбөр</th>
                        </tr>
                    </thead>
                    <tbody v-if="confirmprogram">
                        <tr>
                            <td class="text-center">
                                1
                            </td>
                            <td>
                                <template
                                    v-for="proname in programnames.filter(x => x.programId == confirmprogram.selectedprogram.pid)"
                                    :key="proname">
                                    <p class="mb-0">{{ proname.programName }} </p>
                                    <small>{{ proname.abbrevm }}</small>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6 mb-3">
                <div class="card mt-1">
                    <div class="card-body ">
                        <ul class="payment-group list-group list-group-flush">
                            <li class="list-group-item">Элсэх эрх баталгаажуулах төлбөр:
                                <span class="float-end money">{{ formatPrice(calc_amount.totalAmount) }} ₮</span>
                            </li>
                            <li class="list-group-item">Дансны үлдэгдэлээр төлөх
                                <span class="float-end money">
                                    {{ formatPrice(calc_amount.payAmount) }} ₮</span>
                            </li>
                            <li class="list-group-item bordered-item">Төлбөл зохих
                                <span class="float-end">
                                    {{ formatPrice(calc_amount.feeAmount) }} ₮</span>
                            </li>
                        </ul>
                        <div class="row mt-4 paymenttypebtns">
                            <div class="col mx-auto d-grid gap-2">
                                <button @click="paymenttype = true; bankcarttype = 1;"
                                    :class="paymenttype ? 'btn  btn-primary' : 'btn btn-sm'" type="button">
                                    Онлайнаар төлөх
                                </button>
                            </div>
                            <div class="col mx-auto d-grid gap-2">
                                <button @click="paymenttype = false;" :class="paymenttype ? 'btn ' : 'btn btn-sm btn-primary'"
                                    type="button">
                                    Дансаар төлөх
                                </button>
                            </div>
                        </div>
                        <div v-if="paymenttype" class="row justify-content-center mt-4">
                            <div class="col-md-12 paymentbankcart">
                                <div :class="bankcarttype == 4 ? 'active' : ''" class="payment-item mb-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="bankcartraddio"
                                            id="bankcarttype1" value="4" v-model="bankcarttype">
                                        <label class="form-check-label" for="bankcarttype1">
                                            <img src="@/assets/appimg/golomt.png" />
                                            <span class="bankname">Хаан банкны картаар</span>
                                        </label>
                                    </div>
                                </div>
                                <div :class="bankcarttype == 1 ? 'active' : ''" class="payment-item  mb-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="bankcartraddio"
                                            id="bankcarttype2" value="1" v-model="bankcarttype">
                                        <label class="form-check-label" for="bankcarttype2">
                                            <img src="@/assets/appimg/khan.png" />
                                            <span class="bankname">Голомт банкны картаар</span>
                                        </label>
                                    </div>
                                </div>
                                <div :class="bankcarttype == 3 ? 'active' : ''" class="payment-item">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="bankcartraddio"
                                            id="bankcarttype3" value="3" v-model="bankcarttype">
                                        <label class="form-check-label" for="bankcarttype3">
                                            <img src="@/assets/appimg/socialpay.png" />
                                            <span class="bankname">SocialPay</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="pt-3 d-grid gap-2 d-md-flex justify-content-end">
                                    <button @click="ShowProgramConfirmModal" class="btn btn-primary">Төлбөр төлөх</button>
                                </div>
                            </div>
                        </div>
                        <div v-else class="row justify-content-center mt-4">
                            <div class="col-md-12 ">
                                <div class="alert alert-primary mb-0">
                                    <div class="alert-icon">
                                        <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
                                    </div>
                                    <div class="alert-content">
                                        <ul class="mb-0">
                                            <li>Хэрэв та дансны үлдэгдлээр элсэх эрх баталгаажуулах төлбөр төлөх
                                                бол <strong>төлбөл зохих дүнгээр</strong> дансаа цэнэглэнэ үү. Данс
                                                цэнэглэх заавартай 
                                                <BalanceHelpModal text="энд" vclass="text-primary-color"/> дарж танилцаарай.
                                            </li>
                                            <li>Дансны үлдэгдэлд мөнгөн дүн орж ирсний дараа 
                                                 <strong> хөтөлбөр сонгох, элсэх эрх баталгаажуулах
                                                 </strong> үйлдлийг <strong>дахин </strong> хийхийг анхаарна уу.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 ">
            <div class="pt-3 d-grid gap-2 d-md-flex justify-content-end">
                <router-link to="confirm" class="btn btn-light">Буцах</router-link>
            </div>
        </div>


    <BModal v-if="ProgramConfirmModal" id="ProgramConfirmModal" centered size="lg" title="Элсэх эрх баталгаажуулах"
        @hidden="HideProgramConfirmModal" hide-footer="true" v-model="ProgramConfirmModal">
        <div class="alert alert-primary mb-3">
            <div class="alert-icon">
                <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
            </div>
            <div class="alert-content">
                <p class="ms-2"><strong>Санамж</strong></p>
                <p>
                    Элсэх эрхээ баталгаажуулсан тохиолдолд бусад хөтөлбөрийн жагсаалтаас хасагдаж
                    сонгох боломжгүй болно. Мөн МУИС-д элсэгчийн мэдээллийг БҮТ-ийн системд өгөх
                    учир бусад их дээд сургуулиас давхар хуваарь авах боломжгүй болохыг анхаарна уу.
                </p>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-md-12">
                <template v-for="proname in programnames.filter(x => x.programId == confirmprogram.selectedprogram.pid)"
                    :key="proname">
                    <p> Та <strong>{{ proname.location }}</strong> байрлах 
                        <span v-if="proname.parentUnitName!=''"> 
                        <strong > {{proname.parentUnitName}} </strong> -ийн 
                        </span> 
                        <strong> {{ proname.unitName }} </strong>
                        -ийн
                        <strong class="text-primary-color"> {{ proname.programName }} </strong> хөтөлбөрт элсэх эрхээ баталгаажуулахыг зөвшөөрч байна
                        уу?
                    </p>
                </template>
                <div class="form-check mb-3 mt-3">
                    <input v-model="agreement" name="agreement" class="form-check-input" type="checkbox"
                        id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        <strong>Тийм. Зөвшөөрч байна</strong>
                    </label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <form action="https://sisi.num.edu.mn/merchant/invoice/bach" method="post">
                <input type="hidden" name="bankID" :value="bankcarttype == 1 || bankcarttype == 3 ? 1 : bankcarttype"
                    id="bankid" />
                <input type="hidden" name="spORqp" :value="bankcarttype == 3 ? 'socialpay' : ''" id="spORqp" />
                <input type="hidden" name="username" :value="username" />
                <input type="hidden" name='pid' :value='confirmprogram.selectedprogram.pid' />
                <input type="hidden" name='session' :value='SessionID' />
                <input type="submit"  class="btn btn-primary" :disabled="agreement == false" value="Баталгаажуулах">
                <!-- @click="Startnotif(confirmprogram.selectedprogram.pid)" -->
            </form>
        </div>
    </BModal>

</div>
</div>
</template>
<script>
import { BModal } from "bootstrap-vue-3";
import { toggle } from "@/store/index.js";
import confirmloading from "./Confirmloading.vue";
import BalanceHelpModal from "../BalanceHelpModal.vue";
export default ({
    name: "confirmpayment",
    mixins: [toggle],
    components: {
        BModal,
        confirmloading,
        BalanceHelpModal
    },
    data() {
        return {
            paymenttype: true, // Банкны картаар төлөх
            bankcarttype: 4,
            balance: 0,
            balancehelpModal: false,
            confirmprogram: [],
            ProgramConfirmModal: false,
            PaymentRedirectmsg: '',
            isonlinepaymentok: false,
            programnames: [],
            calc_amount: {
                totalAmount: 0,
                payAmount: 0,
                feeAmount: 0
            },
            SessionID: "",
            username: "",
            agreement: false,

            isloadingpage:false,
        };
    },
    mounted() {
     if (this.$route.query.ts) { // онлайнаар төлбөр төлж байгаа бол.
      this.PaymentRedirectmsg = this.$route.query.msg;
      if (this.$route.query.ts == "ok") // ok байвал гүйлгээ амжилттай 
      {
        this.isloadingpage = true;
        var localdata = localStorage.getItem('confirmprogram');
        if (localdata != null && localdata != '') {
            this.confirmprogram = JSON.parse(localdata);
            if (!localStorage.getItem('iscallapi')) { // callapi одоо дуудаагүй шинээр дуудна.
            this.Startnotif(this.confirmprogram.selectedprogram.pid,true);
            }
            //this.$router.push({ name: "index" });
        }else{
          this.$router.push({ name: "confirm" });
        }
      } else { //  байвал гүйлгээ амжилтгүй!
        this.$toast.open({
          duration: 10000,
          message: 'Таны онлайнаар элсэх эрх баталгаажуулах төлбөр төлөх хүсэлт амжилтгүй боллоо.' + this.$route.query.msg1,
          type: 'warning'
        });
        localStorage.removeItem('confirmprogram');
        this.$router.push({ name: "confirm" });
        //this.$router.push({ name: "confirm" });
      }
    } else {
        this.isloadingpage=false;
        var localdata1 = localStorage.getItem('confirmprogram');
        //localStorage.removeItem("ResponsePrograms");
        if (localdata1 != null && localdata1 != '') {
            this.confirmprogram = JSON.parse(localdata1);
            var localprograms = localStorage.getItem('programs');
            if (localprograms != null && localprograms != '') {
                this.programnames = JSON.parse(localprograms);
            } else {
                this.$toast.open({
                    message: 'Холболт амжилтгүй та ахин нэвтэрнэ үү!',
                    type: 'warning'});
            }
            this.username = localStorage.getItem('username');
            this.SessionID = this.$cookies.get("bSessionID");
            this.calc_amount.totalAmount = this.confirmprogram.selectedprogram.fee;
            this.calc_amount.payAmount = this.confirmprogram.ApplicantBalance;
            this.calc_amount.feeAmount = this.calc_amount.totalAmount - this.calc_amount.payAmount;

        } 
        else {
            this.$router.push({ name: "confirm" });
        }
    }

    },
    methods: {
        ShowProgramConfirmModal() {
            this.ProgramConfirmModal = true;
        },
        HideProgramConfirmModal() {
            //localStorage.removeItem("confirmprogram");
            this.ProgramConfirmModal = false;
            //this.$router.replace({ path: "confirm" });
        },
        formatPrice(value) {
            let val = "" + value;
            return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        },
    }
})
</script>
<style scoped>
table tr td {
    font-weight: 500;
}

table tr td small {
    color: #89939E;
    font-size: 12px;
}

.bhelpmodalspan {
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;
}

.card {
    border-color: #D8DFE5 !important;
}

.payment-group .list-group-item {
    border: 0px;
    padding: 5px;
    font-weight: 600;
    font-size: 14px;
}

.payment-group .list-group-item .money {
    font-weight: 500;
}

.payment-group .bordered-item {
    border-top: 1px dashed #D8DFE6;
    margin-top: 10px;
    padding-top: 15px;
}

.paymentbankcart .payment-item {
    border: 1px solid rgba(216, 218, 220, 0.5);
    padding-left: 15px;
    border-radius: 8px;
}

.paymentbankcart .active {
    border: 1px solid #009AD7;
}

.paymentbankcart .payment-item .form-check-label {
    width: 100%;
    padding: 13px 0;
}

.paymentbankcart .payment-item input {
    margin-top: 22px;
    font-size: 12px;
}

.paymentbankcart .payment-item .form-check {
    padding-bottom: 0px;
}

.paymentbankcart .payment-item img {
    width: 30px;
    margin-left: 10px;
}

.paymentbankcart .payment-item .bankname {
    margin-left: 10px;
    color: #23222A;
    font-size: 14px;
}

.paymenttypebtns button {
    font-size: 14px;
    padding: 10px;
}

.paymenttypebtns {
    padding: 8px 3px;
    background: #F3F6FA;
    border-radius: 8px;
    margin: 2px;
}

.paymenttypebtns .col {
    padding: 0;
    width: 50%;
}

.content-tittle svg {
    margin: 10px;
    margin-top: 5px;
    margin-right: 20px;
}

.breadcrumbs {
    background: #EBEBED;
    padding: 25px 0;
    margin-bottom: 30px;

    border-radius: 0.375rem;
}

.breadcrumbs .cirle-number {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #D8DFE6;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    color: white;
    font-size: 14px;
    float: left;
}

.breadcrumbs .inactive .cirle-number {
    margin-top: 8px;
}

.breadcrumbs p {
    padding-top: 5px;
    color: #718096;
    margin-bottom: 0px;
    margin-left: 45px;
}

.breadcrumbs .active .cirle-number {
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

.breadcrumbs hr {
    color: #656565;
    width: 140px;
    border-width: 2px;
}

.breadcrumbs .bd-highlight {
    margin-right: 15px;
    max-width: 230px;
}

.card-body {
    padding: 1.5rem !important;
}

@media (max-width: 1199.98px) {
    .card-body {
        padding: 1rem !important;
    }
    .breadcrumbs .bd-highlight:first-child .cirle-number {
    float: none;
    margin-left: 32%;
}
.breadcrumbs .bd-highlight:last-child .cirle-number {
    float: none;
    margin-left: 38%;
    margin-top: 0;
}
    .paymenttypebtns .btn {
        margin-bottom: 5px;
    }

    .breadcrumbs .bd-highlight.hr {
        width: 40px;
    }

    .breadcrumbs hr {
        width: 100%;
    }

    .breadcrumbs .bd-highlight {
        margin-right: 0;
        width: 40%;
    }

    .justify-content-md-end .btn {
        margin-bottom: 5px;
    }

    .breadcrumbs .cirle-number {
        float: none;
        margin-left: 23px;
    }

    .breadcrumbs p {
        padding-top: 5px;
        margin-left: 0px;
        text-align: center;
    }

    .breadcrumbs {
    padding: 20px 5px;
}

    .breadcrumbs .inactive .cirle-number,
    .breadcrumbs .active .cirle-number {
        margin-top: 15px;
    }
}

.breadcrumbs .done .cirle-number {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 4px;
}

.breadcrumbs .done .cirle-number {
    background: var(--success-color);
}

.breadcrumbs .done p {
    color: var(--success-color);
    font-weight: 600;
}

.uldegdel {
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF),
        linear-gradient(92.76deg, #009AD7 0%, #0E2138 100%);
    border: 1px solid var(--primary-color);
}

.uldegdel h3 {
    font-size: 16px;
    color: #718096;
}

.uldegdel .money {
    font-size: 18px;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 0;
}</style>