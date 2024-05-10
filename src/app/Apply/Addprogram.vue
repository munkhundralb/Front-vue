<template >
  <div class="fullheigth centered-content bg-white-section p-4">
    <div class="content-tittle mb-4">
      <h2>
        <router-link to="Dashboard">
          <svg width="22" height="12" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.49933 0.999512L1.55986 5.93898C0.974056 6.52478 0.974056 7.47455 1.55986 8.06036L6.49933 12.9998M1.99921 6.99967L23.9998 6.99967"
              stroke="#23222A" stroke-width="1.1" stroke-linecap="round" />
          </svg>
        </router-link>
        <span class="title">Элсэх хүсэлт гаргах</span>
      </h2>
    </div>
    <div class="d-flex justify-content-center align-items-center breadcrumbs mb-4">
      <div class="bd-highlight">
        <div class="active">
          <div class="cirle-number ">1</div>
          <p> Хөтөлбөр сонгох</p>
        </div>
      </div>
      <div class="bd-highlight hr">
        <hr>
      </div>
      <div class="bd-highlight">
        <div class="inactive">
          <div class="cirle-number ">2</div>
          <p> Бүртгэлийн хураамж төлөх</p>
        </div>
      </div>
    </div>
    <div class="alert alert-primary mb-4">
      <div class="alert-icon">
        <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
      </div>
      <div class="alert-content">
        <ul class="mb-0">
          <li> Та дараах жагсаалтаас бүртгүүлэхийг хүссэн бүрэлдэхүүн/салбар сургуулийн хөтөлбөрөө сонгоно уу.
          </li>
          <li>Бүрэлдэхүүн/салбар сургуульд харьяалагдах мэргэжлийн хөтөлбөрүүд, суурь болон дагалдах шалгалтын жагсаалт,
            онооны харьцааны талаарх дэлгэрэнгүй мэдээллийг <strong>Элсэлтийн бүлэг</strong> цэсээс харна уу.
          </li>
          <li>
            ЭШ эхлээгүй, оноо гараагүй үед бүртгүүлэгчийн оноог тооцоолох боломжгүй учир тухайн талбаруудад “-”
            тэмдэглэгээ харагдана.
          </li>
          <li>
                        Бүртгүүлэгч нь 1-ээс олон удаа ЭШ өгсөн бол бүртгэлийн дугаар тус бүрээр 
                        бүртгүүлэх бөгөөд энэ тохиолдолд бүртгүүлэгчийн оноог нэгтгэх хүрэтэл оноог 
                        тооцох боломжгүй учир тухайн талбаруудад “-” тэмдэглэгээ харагдана.
                    </li>
        </ul>
      </div>
    </div>
    <div class="DatatableFilter row  mb-4">
      <div class="col-md-4">
        <label for="inputCity" class="form-label">Бүрэлдэхүүн/салбар сургууль</label>
        <div class="dropdown">
          <button type="button" class="form-select " data-bs-toggle="dropdown" aria-expanded="false"
            data-bs-auto-close="outside">
            <span v-if="selectedunits.length>0 && selectedunits.length!=units.length">
            Cонгосон ({{selectedunits.length}})
          </span> 
           <span v-else> -Бүгд- </span>
          </button>
          <div class="dropdown-menu p-2 overflow-auto">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheck0" v-model="selectAllunits" :value="999">
              <label class="form-check-label" for="flexCheck0">
                -Бүгд-
              </label>
            </div>
            <hr class="dropdown-divider">
            <template v-for="(unit) in units" :key="unit">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" :id="'flexCheck' + unit.unitName" @change="searchbyschool"
                  v-model="selectedunits" :value="unit.unitId">
                <label class="form-check-label" :for="'flexCheck' + unit.unitName">
                  <small v-if="unit.parentUnitName != ''">{{ unit.parentUnitName }} <br></small>
                  {{ unit.unitName }}
                </label>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <label for="inputState" class="form-label">Болзол хангасан эсэх</label>
        <select id="inputState" @change="searchbystatus" class="form-select" v-model="selectedstatus">
          <option selected :value="999">-Бүгд-</option>
          <option value="1">Болзол хангасан</option>
          <option value="-1">Болзол хангаагүй</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="inputState" class="form-label">Хайх</label>
        <input type="text" @keyup="searchtable" v-model="searchtxt" class="form-control " placeholder="Хөтөлбөр хайх">
      </div>

    </div>
    <div class="align-middle mb-4 d-grid d-md-flex justify-content-md-end">
      <div class="selectedcount mt-2 mx-2">
        Нийт сонгосон: {{ selectedprogram.length }}
      </div>
      <router-link to="dashboard" class="btn btn-light">
        Буцах
      </router-link>
      <button @click="ShowChooseCatModal" :disabled="selectedprogram.length == 0" class="btn btn-primary me-md-2">
        Үргэлжлүүлэх
        <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.7 13L7.33062 8.76428C7.71581 8.3149 7.7158 7.65177 7.33062 7.20238L3.7 2.96667" stroke="white"
            stroke-width="1.1" stroke-linecap="round" />
          <path d="M7.7 12.9995L11.3306 8.76379C11.7158 8.31441 11.7158 7.65128 11.3306 7.2019L7.7 2.96618" stroke="white"
            stroke-width="1.1" stroke-linecap="round" />
        </svg>
      </button>
    </div>
    <div class="row mb-4 overflow-auto">
      <table id="datatable" class=" table table-hover  w-100" cellspacing="0">
        <thead>
          <tr>
            <th rowspan="2" class="align-top">
              <!-- <input class="form-check-input" type="checkbox" v-model="selectAll"> -->
            </th>
            <th rowspan="2" class="align-top tableprogramname">Хөтөлбөр</th>
            <th rowspan="2" class="align-top">Хяналтын тоо</th>
            <th colspan="4" rowspan="1">Шалгалтын бүлэг</th>
            <th rowspan="2" class="align-top">Бүртгүүлэгчийн тооцоолсон оноо</th>
          </tr>
          <tr>
            <th>Суурь шалгалт</th>
            <th>Дагалдах шалгалт</th>
            <th>Онооны харьцаа (%)</th>
            <th>Тооцоолсон онооны босго</th>
          </tr>
        </thead>
        <tbody class="table-striped">
          <template v-for="row in tableData" :key="row">
            <tr v-if="row.status == 1" @click="toggleSelect(row.programId)">
              <td>
                <span style="display:none">status_{{ row.status }}</span>
                <input type="checkbox" class="form-check-input" v-model="selectedprogram" :value="row.programId" number>
              </td>
              <td>
                <span style="display:none">unitId_{{ row.unitId }}</span>
                <p>{{ row.programName }}</p>
                <small>{{ row.abbrevm }}</small>
              </td>
              <td class="text-center">
                {{ row.seatCnt }}
              </td>
              <td>
                <span v-if="row.examGroup?.lessons.length > 0">
                  {{ row.examGroup?.lessons[0]?.lessonName }}
                </span>
              </td>
              <td>
                <span v-if="row.examGroup?.lessons.length > 1">
                  {{ row.examGroup?.lessons[1]?.lessonName }}
                </span>
                <span v-else>
                  -
                </span>
              </td>
              <td class="text-center">
                <span v-if="row.examGroup?.lessons.length > 0">{{ row.examGroup?.lessons[0]?.percentOfTotal }}
                </span>
                <span v-if="row.examGroup?.lessons.length > 1">:{{ row.examGroup?.lessons[1]?.percentOfTotal }}
                </span>
              </td>
              <td class="text-center">
                <span v-if="row.examGroup?.lessons.length > 0">
                  {{ row.examGroup?.lessons[0]?.minScaledScore }}
                </span>
              </td>
              <td class="text-center">
                {{ row.scaledScore }}
              </td>
            </tr>
            <tr v-else-if="row.status == 0" @click="toggleSelect(row.programId)">
              <td>
                <span style="display:none">status_{{ row.status }}</span>
                <input type="checkbox" class="form-check-input" v-model="selectedprogram" :value="row.programId" number>
              </td>
              <td>
                <span style="display:none">unitId_{{ row.unitId }}</span>
                <p>{{ row.programName }}</p>
                <small>{{ row.abbrevm }}</small>
              </td>
              <td class="text-center">
                {{ row.seatCnt }}
              </td>
              <td>
                <span >-</span>
              </td>
              <td>
                <span >-</span>
              </td>
              <td class="text-center">
                <span >-</span>
              </td>
              <td class="text-center">
                <span >-</span>
              </td>
              <td class="text-center">
                <span >-</span>
              </td>
            </tr>
            <tr v-else class="not-allowed">
              <td>
                <span style="display:none">status_{{ row.status }}</span>
               <input type="radio" class="form-check-input" disabled>
              </td>
              <td>
                <span style="display:none">unitId_{{ row.unitId }}</span>
                <p>{{ row.programName }}</p>
                <small>{{ row.abbrevm }}</small>
              </td>
              <td class="text-center"> 
                {{ row.seatCnt }}
              </td>
              <td class="align-middle borderrad" colspan="5">
                <span class="text-danger">{{ row.statusDescription }} </span>
              </td>
              <td style="display:none"></td>
              <td style="display:none"></td>
              <td style="display:none"></td>
              <td style="display:none"></td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="align-middle mb-2 d-grid d-md-flex justify-content-md-end">
      <!-- <div class="">
        {{ selectedprogram }}
      </div> -->
      <div class="selectedcount mt-2 mx-2">
        Нийт сонгосон: {{ selectedprogram.length }}
      </div>
      <router-link to="dashboard" class="btn btn-light">
        Буцах
      </router-link>
      <button @click="ShowChooseCatModal" :disabled="selectedprogram.length == 0" class="btn btn-primary me-md-2">
        Үргэлжлүүлэх
        <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.7 13L7.33062 8.76428C7.71581 8.3149 7.7158 7.65177 7.33062 7.20238L3.7 2.96667" stroke="white"
            stroke-width="1.1" stroke-linecap="round" />
          <path d="M7.7 12.9995L11.3306 8.76379C11.7158 8.31441 11.7158 7.65128 11.3306 7.2019L7.7 2.96618" stroke="white"
            stroke-width="1.1" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </div>
  <BModal id="ChooseCatModal" size="lg" title="Элсэх ангилал сонгох" @hidden="ChooseCatModal = false" hide-footer="true"
    v-model="ChooseCatModal">
    <div v-if="ChooseCatModal">
      <div class="form-check mb-4">
        <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat1" value="0" v-model="categoryID"
          checked>
        <label class="form-check-label" for="choosecat1">
          <strong>Үндсэн</strong>
          <p>Доорх нөхцлүүдэд хамаарахгүй бүртгүүлэгч энэ ангиллаар бүртгүүлнэ.</p>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat2" value="2"
          v-model="categoryID">
        <label class="form-check-label" for="choosecat2">
          <strong>Олимпиад</strong>
          <div class="alert alert-primary mt-1">
            <strong>Журмын 5.7.1.</strong>
            БШУЯ-аас тогтоосон Олон улсын олимпиадад оролцож 1-ээс 3-р байр эзэлсэн,
            Улсын олимпиадад оролцож энэ журмын Хүснэгт 2-т заасан нөхцөлийг хангасан ерөнхий боловсролын
            сургуулийн төгсөгчийг тухайн чиглэлээр шууд элсүүлнэ.
            <p>Хүснэгт 2-ийг <OlympiadModal/> дарж харна
              уу. </p>
          </div>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat3" value="5"
          v-model="categoryID">
        <label class="form-check-label" for="choosecat3">
          <strong>Англи хэлний олон улсын шалгалт</strong>
          <div class="alert alert-primary mt-1">
            <strong>Журмын 5.7.2.</strong>
            Англи хэлний олон улсын шалгалтын IELTS 5, TOEFL iBT 45, PTE 40.8-аас дээш
            оноотой бүртгүүлэгчдийг гүйцэтгэлийн хувиар жагсааж, эхний 10 байр эзэлсэн
            бүртгүүлэгчийг ШУС-ийн Хүмүүнлэгийн ухааны салбарт шууд элсүүлнэ.
          </div>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat4" value="3"
          v-model="categoryID">
        <label class="form-check-label" for="choosecat4">
          <strong>Кембрижийн олон улсын шалгалт</strong>
          <div class="alert alert-primary mt-1">
            <strong>Журмын 5.7.3.</strong>
            Кембрижийн олон улсын AS (A) түвшний шалгалтын b (B) -ээс дээш, IB (international baccalaureate)
            хөтөлбөрийн 4-өөс дээш үнэлгээтэй бүртгүүлэгчдийг сургууль бүрд суурь шалгалтад тооцохоор
            заасан хичээлээр нь онооны дарааллаар жагсаан, эхний 3 байр эзэлсэн бүртгүүлэгчийг шууд элсүүлнэ.
          </div>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat5" value="4"
          v-model="categoryID">
        <label class="form-check-label" for="choosecat5">
          <strong>Спортын ур чадвар</strong>
          <div class="alert alert-primary mt-1">
            <strong>Журмын 5.7.4.</strong>
            Комиссын зүгээс спортын өндөр ур чадвартай 10 хүртэлх бүртгүүлэгчийг
            шалгаруулж, гэрээ байгуулж БС <span style="color: #89939E;">/хяналтын тоо-2/</span>, МТЭС <span style="color: #89939E;">/хяналтын тоо-2/</span>, ШУС, ИТС, ББС, 3БС, ЗАдБМТС-д элсүүлж болно
            (Олимп, тив, дэлхийн тэмцээнээс медальт болон шагналт байранд шалгарсан, улсын өсвөр
            үеийн, улсын идэрчүүдийн аварга шалгаруулах тэмцээнд медальт байранд шалгарсан бүртгүүлэгчдийг
            гаргасан амжилтаар нь эрэмбэлж сонгуулна).
          </div>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat6" value="1"
          v-model="categoryID">
        <label class="form-check-label" for="choosecat6">
          <strong>МУИС-ийн харьяа ерөнхий боловсролын ахлах сургууль</strong>
          <div class="alert alert-primary mt-1">
            <strong>Журмын 5.9.</strong>
            МУИС-ийн харьяа ерөнхий боловсролын ахлах сургуулийн төгсөгчийг тухайн бүрэлдэхүүн сургуулийн 
            суурь болон дагалдах шалгалтад тооцохоор заасан хичээлүүдээс ЭШ өгч, тухайн хөтөлбөрийн
             босго оноог хангасан бол ШУС, ИТС, МТЭС-ийн сонгосон хөтөлбөрт шууд элсүүлнэ.
          </div>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat7" value="7"
          v-model="categoryID">
        <label class="form-check-label" for="choosecat7">
          <strong>МУИС-ийн орон нутгийн ерөнхий боловсролын ахлах сургууль</strong>
          <div class="alert alert-primary mt-1">
            <strong>Журмын 5.9.</strong>
            МУИС-ийн орон нутгийн ерөнхий боловсролын ахлах сургуулийн төгсөгчийг орон нутгийн салбар
            сургуулийн суурь болон дагалдах шалгалтад тооцохоор заасан хичээлүүдээс ЭШ өгч,
            БШУЯ-аас баталсан их, дээд сургуульд элсэгчдийн хангасан байх босго онооноос багагүй
            бол ББС, ЗБС, ЗАдБМТС-ийн сонгосон хөтөлбөрт шууд элсүүлнэ.
          </div>
        </label>
      </div>
      <!-- <div>Ангилал: {{ categoryID }}</div> -->
      <div class="modal-footer" style=" border: 0px; ">
        <button @click="saveProgramsCat" class="btn btn-primary  m-1" :disabled="isloading">

          <span v-if="!isloading">Үргэлжлүүлэх
            <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.7 13L7.33062 8.76428C7.71581 8.3149 7.7158 7.65177 7.33062 7.20238L3.7 2.96667" stroke="white"
                stroke-width="1.1" stroke-linecap="round" />
              <path d="M7.7 12.9995L11.3306 8.76379C11.7158 8.31441 11.7158 7.65128 11.3306 7.2019L7.7 2.96618"
                stroke="white" stroke-width="1.1" stroke-linecap="round" />
            </svg></span>
          <span v-if="isloading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span v-if="isloading" class="sr-only"> Түр хүлээнэ үү</span>
        </button>
      </div>
    </div>
  </BModal>

  <BModal id="ResponseModal" centered title="Элсэх хүсэлт гаргах" @hidden="HideBalanceModal" ok-only="true"
    ok-title="Хаах" ok-variant="light" v-model="ResponseModal">
    <div class="row text-center">
      <svg class="mb-2" width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M29.75 15.75L23.8539 22.3356C21.5176 24.9452 20.3494 26.25 18.8125 26.25C17.2756 26.25 16.1074 24.9452 13.771 22.3356L12.25 20.6366M38.5 21C38.5 30.665 30.665 38.5 21 38.5C11.335 38.5 3.5 30.665 3.5 21C3.5 11.335 11.335 3.5 21 3.5C30.665 3.5 38.5 11.335 38.5 21Z"
          stroke="#009262" stroke-linecap="round" />
      </svg>
      <p class="text-success mb-5"><strong>Амжилттай</strong></p>
      <div v-if="ResponsePrograms.stat == 2" class="row">
        <p class="mb-5"> Таны дансны үлдэгдэлийг ашиглан
          <span class="text-primary-color"><strong>{{ ResponsePrograms.programs.length }} хөтөлбөрт</strong></span> элсэх
          хүсэлт амжилттай гаргалаа.
        </p>
      </div>
      <div v-if="ResponsePrograms.stat == 1" class="row">
        <p class="mb-5"> Нэмж
          <span class="text-primary-color"><strong>{{ ResponsePrograms.programs.length }} хөтөлбөрт</strong></span> элсэх
          хүсэлт амжилттай гаргалаа.
        </p>
      </div>
    </div>
  </BModal>
</template>
<script>
import $ from 'jquery'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import axios from "axios";
import { BModal } from "bootstrap-vue-3";
DataTable.use(DataTablesCore);
// import OlympiadModal from './OlympiadModal.vue';

export default {
  components: {
    BModal,
    // OlympiadModal
  },
  data: function () {
    return {
      table: '#datatable',
      datatableobj: null,
      tableData: [],
      selectedprogram: [],
      selectedstatus: 999,
      units: [],
      selectedunits: [],
      searchtxt: "",
      ChooseCatModal: false,
      categoryID: 0,
      ResponseModal: false,
      ResponsePrograms: [],
      isloading: false
    }
  },

  mounted() {
    localStorage.removeItem("ResponsePrograms");
    this.getunits();
    this.datatabledraw();
  },
  computed: {
    selectAll: {
      get: function () {
        return this.tableData ? this.selectedprogram.length == this.tableData.length : false;
      },
      set: function (value) {
        var selectedprogram = [];
        if (value) {
          this.tableData.forEach(function (row) {
            selectedprogram.push(row.programId);
          });
        }
        this.selectedprogram = selectedprogram;
      }
    },
    selectAllunits: {
      get: function () {
        return this.units ? this.selectedunits.length == this.units.length : false;
      },
      set: function (value) {
        var sunits = [];
        if (value) {
          this.units.forEach(function (row) {
            sunits.push(row.unitId);
          });
        }
        this.selectedunits = sunits;
        this.searchbyschool();
      }
    }
  },
  methods: {
    getunitname(){
      return this.units.filter(x=>x.unitId==this.selectedunits[0]);
    },
    toggleSelect(programID) {
      if (this.selectedprogram.includes(programID)) {
        this.selectedprogram.splice(this.selectedprogram.findIndex(v => v === programID), 1)
      } else {
        this.selectedprogram.push(programID)
      }
    },
    HideBalanceModal() {
      this.$router.replace({ path: "Dashboard" });
    },
    saveProgramsCat() {
      this.isloading = true;
      //var article={termId: 'test', programIds: this.selectedprogram};
      var article = { termId: this.categoryID, programIds: this.selectedprogram };

      axios.post("choosePrograms", article)
        .then(res => {
          this.isloading = false;
          if (res.data.status == 1) {

            this.ChooseCatModal = false;
            this.ResponsePrograms = res.data.result;
            let stat = res.data.result.stat;
            if (stat == 1 || stat == 2) // Өмнө нь баталгаажсан байсан гүйлгээгээр баталгаажуулсан.
            {                      // Дансны үлдэгдлээр баталгаажуулсан.
              this.ResponseModal = true;
            } else { //Онлайнаар баталгаажуулах ёстой.
              localStorage.setItem("ResponsePrograms", JSON.stringify(this.ResponsePrograms));
              this.$router.push({ name: "payment" });
            }
          } else {
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
    ShowChooseCatModal() {
      this.ChooseCatModal = true;
    },
    searchtable() {
      this.datatableobj.search(this.searchtxt).draw();
    },
    searchbystatus() {
      if (this.selectedstatus != 999) {
        this.datatableobj.column(0).search("status_" + this.selectedstatus).draw();
      } else {
        this.datatableobj.column(0).search("").draw();
      }
    },
    searchbyschool() {
      let searchunits = this.selectedunits.join('|');
      this.datatableobj.column(1).search(searchunits, true, false).draw();
    },
    datatabledraw() {
      axios.get("getApplicantPossiblePrograms")
        .then(res => {
          if (res.data.status == 1) {
            this.tableData = Object(res.data.result);
            this.tableDataall = Object(res.data.result);
            this.makeTable();
          } else {
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
    getunits() {
        axios.get("getUnits")
        .then(res => {
          if (res.data.status == 1) {
            this.units = res.data.result;
          } else {
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
    select: function () {
      this.allSelected = false;
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
              zeroRecords: 'Сонгох боломжит хөтөлбөр байхгүй байна.',
              infoEmpty: "",
              lengthMenu: "Харуулах мөрийн тоо  _MENU_",
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
}

</script>
<style >
@import 'datatables.net-bs5';
@import '@/assets/datatable.css';

.not-allowed {
  cursor: not-allowed !important;
}
.selectedcount{
  font-size: 14px;
  color: #718096;
  font-weight: 400;
}
.dropdown-menu-form {
  padding: 5px 10px 0;
  max-height: 100px;
  overflow-y: scroll;
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
  padding-left: 14px;
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
  color: #aec7e0;
  width: 140px;
  border-width: 2px;
}

.breadcrumbs .bd-highlight {
  margin-right: 15px;
  max-width: 230px;
}

@media (max-width: 1199.98px) {
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
.breadcrumbs .inactive .cirle-number {
    margin-top: 15px;
}
}</style>