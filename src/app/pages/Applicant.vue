<template >
  <div class="row ">
    <div class="col-md-7">
      <div class="uldegdel bg-white-section p-4 mt-4 mb-4 d-block d-sm-none">
        <h3>Дансны үлдэгдэл</h3>
        <p class="money">{{formatPrice(Info.uldegdel)}}₮</p>
        <div class="pt-2 d-grid gap-2 d-md-flex justify-content-end">

          <BalanceHelpModal text="Данс цэнэглэх заавах харах" vclass="btn float-end"/>
              </div>
        </div>
      <div class="fullheigth bg-white-section p-4 mr-4">
        <div class="content-tittle mb-4">
          <h2>
            <span class="title">Хувийн мэдээлэл</span>
          </h2>
        </div>
        <table class="infotable table table-responsive table-borderless">
          <tr >
            <td width="50%"><strong> Овог</strong></td>
            <td> {{ Info.lastName }}</td>
          </tr>
          <tr>
            <td><strong> Нэр </strong></td>
            <td> {{ Info.firstName }}</td>
          </tr>
          <tr>
            <td><strong> Хүйс </strong></td>
            <td> {{ Info.gender }}</td>
          </tr>
          <tr>
            <td><strong> Регистрийн дугаар </strong></td>
            <td> {{ Info.registryNumber }}</td>
          </tr>
          <tr>
            <td><strong> ЕБ гэрчилгээний дугаар </strong></td>
            <td> {{ Info.adistatNumber }}</td>
          </tr>
          <tr>
            <td><strong> Харьяалагдах бүс </strong></td>
            <td> {{ Info.examLocName }}</td>
          </tr>
          <tr>
            <td><strong> Шалгалт өгсөн газар </strong></td>
            <td> {{ Info.aimagName}}</td>
          </tr>
          <tr>
            <td><strong> Сургууль </strong></td>
            <td> {{ Info.schoolName }}</td>
          </tr>
          <tr>
            <td><strong> Анги </strong></td>
            <td> {{ Info.angi }}</td>
          </tr>
          <tr>
            <td><strong> Бүртгэлийн дугаар </strong></td>
            <td> {{ Info.username }}</td>
          </tr>
          <tr>
            <td><strong> Бүртгүүлсэн огноо </strong></td>
            <td> {{ Info.registerDate }}</td>
          </tr>
        </table>
        <hr class="light_hr">
     
      <table class="infotable table table-responsive table-borderless">
        <tr>
            <td width="50%"><strong> Цахим шуудан </strong></td>
            <td> {{ Contact.email }}</td>
          </tr>
          <tr>
            <td><strong> Утасны дугаар </strong></td>
            <td> {{ Contact.phoneNumber }}</td>
          </tr>
        </table>
        <div class="mt-5 mb-2 d-grid gap-2 d-md-flex justify-content-md-end">
          <WarningModal  :ApplyWarningProp="false" :ContactProp="false" :iscontactshowbtnprop="true"/>
        </div>
        </div>
    </div>
    <div class="col-md-5">
      <div class="bg-white-section p-4 light_border">
        <div class="content-tittle mb-4">
          <h2>
            <span class="title">Дүнгийн мэдээлэл</span>
          </h2>
        </div>
        <table class="table table-responsive table-stripedmy table-borderless">
          <thead>
            <tr>
              <th>Хичээлийн нэр</th>
              <th>Гүйцэтгэл</th>
              <th>Дүйцүүлсэн оноо </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Info.examResults" :key="item">
              <td>{{ item.lessonName }}</td>
              <td class="text-center">{{ item.rowScore }}</td>
              <td class="text-center">{{ item.scaledScore }} </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="uldegdel bg-white-section p-4 mt-4 d-none d-sm-block">
        <h3>Дансны үлдэгдэл</h3>
        <p class="money">{{formatPrice(Info.uldegdel)}}₮</p>
        <div class="pt-2 d-grid gap-2 d-md-flex justify-content-end">
          <BalanceHelpModal text="Данс цэнэглэх заавах харах" vclass="btn float-end"/>
        </div>
    </div>
  </div>
  </div>

</template>
<script>
import axios from "axios";
import WarningModal from "../Apply/WarningModal.vue";
import BalanceHelpModal from "../BalanceHelpModal.vue";
export default {
  components: {
        WarningModal,
        BalanceHelpModal
    },
  data: function () {
    return {
      Info: [],
      Contact: [],
      Contactmodal:false,
      balancehelpModal:false
    }
  },
  mounted() {
    this.getApplicantInfo();
  },
  methods: {
    formatPrice(value) {
      let val=""+value;
      return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    showcontactmodal(){
      this.Contactmodal=!this.Contactmodal;
    },
    getApplicantInfo() {
      axios.get("getApplicantInfo")
        .then(res => {
          if (res.data.status == 1) {
            this.Info = res.data.result;
            this.Contact=res.data.result.contact;
          }
        else {
          this.$toast.open({
                            message: res.data.message,
                            type: 'warning'});
          }
        }).catch(error => {
          this.$toast.open({
                        message: 'Холболт амжилтгүй!',
                        type: 'error'});
        });
    },
  }
}
</script>
<style>
.infotable tr td {
  padding-bottom: 15px;
}
.infotable tr td strong{
  padding-left: 0px;
  font-weight: 600;
}

.uldegdel {
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF),
linear-gradient(92.76deg, #009AD7 0%, #0E2138 100%);
border: 1px solid var(--primary-color);;
}
.uldegdel h3{
  font-size: 16px;
  color:#718096;
}
.uldegdel .money{
font-size: 18px;
font-weight: 600;
color: var(--primary-color);
margin-bottom:0;
}
.uldegdel .btn{
  color: var(--primary-color);
}
.light_hr{
  color:#718096;
}
.light_border{
  border: 1px solid #D8DFE6;
  box-shadow: none;
}
@media (max-width: 1024px) { 
.fullheigth{
  min-height: auto;
  margin-bottom:1.5rem!important;
}
}
</style>