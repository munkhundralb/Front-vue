<template>
  <div class="fullheigth payment bg-white-section p-4">
    <div class="content-tittle mb-4">
      <h2>
        <router-link to="addprogram">
          <svg width="22" height="12" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.49933 0.999512L1.55986 5.93898C0.974056 6.52478 0.974056 7.47455 1.55986 8.06036L6.49933 12.9998M1.99921 6.99967L23.9998 6.99967"
              stroke="#23222A" stroke-width="1.1" stroke-linecap="round" />
          </svg>
        </router-link>
        <span class="title">Элсэх хүсэлт гаргах</span>
      </h2>
    </div>
    <div class="d-flex justify-content-center align-items-center breadcrumbs mb-3">
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
            <div class="cirle-number ">2</div>
            <p> Бүртгэлийн хураамж төлөх</p>
          </div>
        </div>
  </div>
    <div v-if="responsedata" class="row  flex-column-reverse flex-md-row">
      <div class="col-md-6 mb-3">
        <table id="datatable" class=" table table-hover  w-100" cellspacing="0">
          <thead>
            <tr>
              <th>№</th>
              <th>Сонгосон хөтөлбөр</th>
            </tr>
          </thead>
          <tbody v-if="responsedata.programs" class="table-striped">
            <tr v-for="(row, index) in responsedata.programs" :key="index">
              <td>
                {{ Number(index) + 1 }}
              </td>
              <td>
                <p>{{ row.programName }}</p>
                <small>{{ row.abbrevm }}</small>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card mt-1">
          <div class="card-body ">
            <ul class="payment-group list-group list-group-flush">
              <li class="list-group-item">Бүртгэлийн хураамж 
                <span class="float-end money" v-if="responsedata.totalAmount || responsedata.totalAmount==0">{{formatPrice(responsedata.totalAmount)}} ₮</span>
              </li>
              <li class="list-group-item">Дансны үлдэгдэлээр төлөх 
                <span class="float-end money" v-if="responsedata.payAmount || responsedata.payAmount==0">
                  {{formatPrice(responsedata.payAmount)}} ₮</span>
              </li>
              <li class="list-group-item bordered-item">Төлбөл зохих 
                <span class="float-end" v-if="responsedata.feeAmount || responsedata.feeAmount==0"> 
                  {{formatPrice(responsedata.feeAmount)}} ₮</span>
              </li>
            </ul>
            <div class="row mt-4 paymenttypebtns">
              <div class="col mx-auto d-grid gap-2">
                <button @click="paymenttype=true;bankcarttype=1;" :class="paymenttype ? 'btn  btn-primary' : 'btn btn-sm'" type="button">
                 Онлайнаар төлөх
                </button>
              </div>
              <div class="col mx-auto d-grid gap-2">
                <button @click="paymenttype=false;" :class="paymenttype ? 'btn ' : 'btn btn-sm btn-primary'" type="button">
                  Дансаар төлөх
                </button>
              </div>
            </div>
            <div v-if="paymenttype" class="row justify-content-center mt-4">
              <div class="col-md-12 paymentbankcart">
                <div  :class="bankcarttype==4 ? 'active' : ''" class="payment-item mb-2">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="bankcartraddio" id="bankcarttype1" value="4"
                      v-model="bankcarttype">
                    <label class="form-check-label" for="bankcarttype1">
                      <img src="@/assets/appimg/golomt.png" />
                      <span class="bankname">Хаан банкны картаар</span>
                    </label>
                  </div>
                </div>
                <div :class="bankcarttype==1 ? 'active' : ''" class="payment-item  mb-2">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="bankcartraddio" id="bankcarttype2" value="1"
                      v-model="bankcarttype">
                    <label class="form-check-label" for="bankcarttype2">
                      <img src="@/assets/appimg/khan.png" />
                      <span class="bankname">Голомт банкны картаар</span>
                    </label>
                  </div>
                </div>
                <div :class="bankcarttype==3 ? 'active' : ''" class="payment-item">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="bankcartraddio" id="bankcarttype3" value="3"
                      v-model="bankcarttype">
                    <label class="form-check-label" for="bankcarttype3">
                      <img src="@/assets/appimg/socialpay.png" />
                      <span class="bankname">SocialPay</span>
                    </label>
                  </div>
                </div>
                <div class="pt-3 d-grid gap-2 d-md-flex justify-content-end">
                  <form   action="https://sisi.num.edu.mn/merchant/invoice" method="post">
<input type="hidden" name="tranID" :value="responsedata.feeTranId" />
<input type="hidden" name="applicant" :value="responsedata.applicantExamId"/>
<input type="hidden" name='uid' value='1001000'/>
<input type="hidden" name="bankID" :value="bankcarttype==1 || bankcarttype==3 ? 1: bankcarttype" id="bankid" />
<input type="hidden" name="spORqp" :value="bankcarttype==3? 'socialpay': ''" id="spORqp" />
<input type="submit"  class="btn btn-primary"  value="Төлбөр төлөх">
</form>
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
          <li>Хэрэв та дансны үлдэгдлээр бүртгэлийн хураамж төлөх 
            бол <strong>төлбөл зохих дүнгээр</strong> дансаа цэнэглэнэ үү. Данс 
            цэнэглэх заавартай 
            <BalanceHelpModal text="энд" vclass="text-primary-color"/>

            дарж танилцаарай.
          </li>
          <li>Дансны үлдэгдэлд мөнгөн дүн орж ирсний дараа элсэх 
            хүсэлт гаргах <strong> хөтөлбөр сонгох, бүртгэлийн хураамж 
            төлөх </strong>  үйлдлийг <strong>дахин </strong> хийхийг анхаарна уу.
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
                <router-link to="addprogram" class="btn btn-light">Буцах</router-link>
              </div>
             </div>
  </div>

  <BModal id="PaymentRedirectModal"  centered  title="Элсэх хүсэлт гаргах" @hidden="HidePaymentRedirectModal" ok-only="true" ok-title="Хаах" ok-variant="light"
        v-model="PaymentRedirectModal">

        <div v-if="isonlinepaymentok" class="row text-center">
          <svg class="mb-2" width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.75 15.75L23.8539 22.3356C21.5176 24.9452 20.3494 26.25 18.8125 26.25C17.2756 26.25 16.1074 24.9452 13.771 22.3356L12.25 20.6366M38.5 21C38.5 30.665 30.665 38.5 21 38.5C11.335 38.5 3.5 30.665 3.5 21C3.5 11.335 11.335 3.5 21 3.5C30.665 3.5 38.5 11.335 38.5 21Z" stroke="#009262" stroke-linecap="round"/>
          </svg>
          <p class="text-success mb-5">Амжилттай</p>
          <div  class="row">
          <p class="mb-5"> Та онлайнаар бүртгэлийн хураамж төлж
            <span class="text-primary-color">{{responsedata.programs.length}} хөтөлбөрт</span> элсэх хүсэлт амжилттай гаргалаа.</p>
          </div>
        </div>
        <div v-else class="row text-center">
          <svg class="mb-2" width="35" height="35" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 24.25C19 24.8023 18.5523 25.25 18 25.25C17.4477 25.25 17 24.8023 17 24.25C17 23.6977 17.4477 23.25 18 23.25C18.5523 23.25 19 23.6977 19 24.25Z" fill="#E01507"/>
          <path d="M18 9.25V19.75M35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33502 35.5 0.5 27.665 0.5 18C0.5 8.33502 8.33502 0.5 18 0.5C27.665 0.5 35.5 8.33502 35.5 18Z" stroke="#E01507" stroke-linecap="round"/>
          </svg>
          <p class="text-danger mb-5">Амжилтгүй!</p>
          <div  class="row">
          <p class="mb-5"> Таны онлайнаар бүртгэлийн хураамж төлөх хүсэлт  амжилтгүй боллоо.</p>
          </div>
        </div>
    </BModal>

</template>
<script>
import $ from 'jquery'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import { BModal } from "bootstrap-vue-3";
DataTable.use(DataTablesCore);
import BalanceHelpModal from "../BalanceHelpModal.vue";
export default ({
  name: "Payment",
  components: {
    BModal,
    BalanceHelpModal
  },
  data() {
    return {
      table: '#datatable',
      tableData: null,
      datatableobj: null,
      paymenttype: true, // Банкны картаар төлөх
      bankcarttype: 4,
      balance:0,
      responsedata: [],
      PaymentRedirectModal: false,
      PaymentRedirectmsg: '',
      isonlinepaymentok: false
    };
  },
  mounted() {     
    
    var localdata=localStorage.getItem('ResponsePrograms');
    //localStorage.removeItem("ResponsePrograms");
    if(localdata!=null && localdata!='')
    {
      this.responsedata = JSON.parse(localdata);
      this.makeTable();
    }else
    { 
      this.$router.push({name: "addprogram"});
    }

    if(this.$route.query.ts)
    {
      this.PaymentRedirectmsg=this.$route.query.msg;
      //console.log('bankparam: '+this.$route.query.bank); 
      if(this.$route.query.ts=="ok") // ok байвал гүйлгээ амжилттай 
      {
        this.isonlinepaymentok=true;
      }else{ // ok байвал гүйлгээ амжилтгүй!
        this.isonlinepaymentok=false;
      }
      this.PaymentRedirectModal=true;
    }
  },
  methods: {
    HidePaymentRedirectModal(){
      localStorage.removeItem("ResponsePrograms");
      this.PaymentRedirectModal=false;
      this.$router.replace({ path: "Dashboard" });
    },
    formatPrice(value) {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
},
    makeTable() {
      this.$nextTick(function () {
        this.datatableobj = $(this.table).DataTable(
          {
            lengthMenu: [[5,10, 25, 50],[5,10, 25, 50]],
            pageLength: 10,
            responsive: true,
            authwidth: true,
            aaSorting: [],
            dom: '<"top">rt<"bottom"<"row"<"col"l><"col-md-auto"i><"col-md-auto"p> >><"clear">',
            language: {
              url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/mn.json',
              search: "_INPUT_",
              searchPlaceholder: "Хөтөлбөр хайх",
              zeroRecords: 'Танд хүсэлт гаргасан бүрэлдэхүүн/салбар сургуулийн хөтөлбөр <br>одоогоор байхгүй байна!',
              infoEmpty: "",
              lengthMenu: "_MENU_",
              sInfo: "Нийт _TOTAL_ өгөгдлийн _START_ - _END_",
              paginate: {
                first: "First",
                last: "Last",
                next: "<i class='bi bi-chevron-right'></i>",
                previous: "<i class='bi bi-chevron-left'></i>"
              },
            },
            columnDefs: [
               { "orderable": false, "targets": [0] }  // Disable search on first and last columns
            ]
          }
        );
      });
    },

  }
})
</script>
<style scoped>
@import 'datatables.net-bs5';
@import '@/assets/datatable.css';
.bhelpmodalspan{
  color:var( --primary-color);
  font-weight: 600;
  cursor: pointer;
}
.card {
  border-color: #D8DFE5!important;
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
.paymentbankcart .payment-item{
  border: 1px solid rgba(216, 218, 220, 0.5);
  padding-left: 15px;
  border-radius: 8px;
}
.paymentbankcart .active{
  border: 1px solid #009AD7;
}
.paymentbankcart .payment-item .form-check-label{
  width: 100%;
  padding: 13px 0;
}
.paymentbankcart .payment-item input{
  margin-top: 22px;
  font-size: 12px;
}
.paymentbankcart .payment-item .form-check{
 padding-bottom:0px;
}
.paymentbankcart .payment-item img{
  width: 30px;
  margin-left:10px;
}
.paymentbankcart .payment-item .bankname{
  margin-left:10px;
  color:#23222A;
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
  width:50%;
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
.breadcrumbs .inactive .cirle-number{
  margin-top: 8px;
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
}
.breadcrumbs .bd-highlight{
  margin-right: 15px;
  max-width: 230px;
}

.card-body{
      padding: 1.5rem!important;
    }
  @media (max-width: 1199.98px) {
    .card-body{
      padding: 1rem!important;
    }
    .paymenttypebtns .btn{
      margin-bottom: 5px;
    }
  .breadcrumbs .bd-highlight.hr {
    width: 60px;
  }
  .breadcrumbs hr {
    width:100%;
  }
  .breadcrumbs .bd-highlight {
    max-width: 80px;
  }

  .justify-content-md-end .btn {
    margin-bottom: 5px;
  }
  .breadcrumbs .cirle-number{
    float:none;
    margin-left: 23px;
  }
  .breadcrumbs p {
    padding-top: 5px;
    margin-left: 0px;
    text-align: center;
}
.breadcrumbs {
    padding: 20px 0;
}
.breadcrumbs .inactive .cirle-number , .breadcrumbs .active .cirle-number{
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

.breadcrumbs  .done .cirle-number {
  background: var(--success-color);
}

.breadcrumbs  .done p {
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