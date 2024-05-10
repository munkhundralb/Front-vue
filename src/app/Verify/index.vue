<template >
    <div class="fullheigth centered-content bg-white-section p-4">
      <div class="content-tittle mb-4">
        <h2>
          <span class="title">Элсэх эрх баталгаажуулах</span>
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
            <p> Элсэх эрх баталгаажуулах</p>
          </div>
        </div>
      </div>
      <div class="alert alert-primary mb-4">
        <div class="alert-icon">
          <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
        </div>
        <div class="alert-content">
            <p class="ms-2"><strong>Санамж</strong></p>
          <ul class="mb-0">
            <li> 
                Таны одоогийн эзэлж буй байр үлдсэн хяналтын тоонд багтсан тохиолдолд
                 хяналтын тоонд багтсан гэж үзэн элсэх эрх нээгдэнэ (ногоон дэвсгэр өнгөөр ялгагдана).
            </li>
            <li>
                Тухайн хөтөлбөрийн жагсаалтад таны одоогийн эзэлж буй байр үлдсэн хяналтын тоонд
                 багтаагүй байсан ч жагсаалтын таны өмнөх бүртгүүлэгч өөр хөтөлбөрийг сонговол
                  таны эзэлж буй байр урагшилж үлдсэн хяналтын тоонд багтах магадлалтай.
            </li>
            <li>
                Элсэх эрхээ баталгаажуулахын тулд <strong>Баталгаажуулах эцсийн хугацаа</strong>-наас 
                өмнө элсэх хөтөлбөрийн өмнөх  <input class="form-check-input" type="checkbox"> -ийг сонгон 
                <strong>Баталгаажуулах</strong> товч дарж дараагийн алхамд шилжинэ. 
            </li>
          </ul>
        </div>
      </div>
      <div class="DatatableFilter row mb-4">
        <div class="col-md-3">
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
          <label for="inputState" class="form-label">Хяналтын тоонд багтсан эсэх</label>
          <select id="inputState" @change="searchbystatus" class="form-select" v-model="selectedstatus">
            <option selected :value="999">-Бүгд-</option>
            <option value="1">Багтсан</option>
            <option value="-1">Багтаагүй</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for="inputState" class="form-label">Хайх</label>
          <input type="text" @keyup="searchtable" v-model="searchtxt" class="form-control " placeholder="Хөтөлбөр хайх">
        </div>
      </div>
      <div class="align-middle mb-4 d-grid d-md-flex justify-content-md-end">
        <!-- <div class="updatetime  mt-2 mx-2">
          Сүүл 14:40 минутанд шинэчлэгдсэн
        </div> -->
        <button class="btn btn-light" :disabled="counting" @click="startCountdown">
            <vue-countdown v-if="counting" :time="6000" :transform="transformSlotProps" @end="onCountdownEnd" v-slot="{ minutes, seconds  }">Жагсаалт шинэчлэх {{ minutes  }} : {{ seconds }}</vue-countdown>
    <span v-else>Жагсаалт шинэчлэх</span>
          
        </button>
        <button :disabled="selectedprogram.length == 0" class="btn btn-primary me-md-2">
          Баталгаажуулах
          <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.7 13L7.33062 8.76428C7.71581 8.3149 7.7158 7.65177 7.33062 7.20238L3.7 2.96667" stroke="white"
              stroke-width="1.1" stroke-linecap="round" />
            <path d="M7.7 12.9995L11.3306 8.76379C11.7158 8.31441 11.7158 7.65128 11.3306 7.2019L7.7 2.96618" stroke="white"
              stroke-width="1.1" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <div class="row  pb-2 overflow-auto">
        <div class="col-md-12">
        <table id="datatable" class=" table table-hover  w-100" cellspacing="0">
          <thead>
            <tr>
              <th>
                <!-- <input class="form-check-input" type="checkbox" v-model="selectAll"> -->
              </th>
              <th>Хүсэлт гаргасан хөтөлбөр</th>
              <th>Суурь, дагалдах<br>шалгалт <br>(Тооцоолсон<br>оноо) </th>
              <th>Үлдсэн/Нийт хяналтын тоо</th>
              <th>Бүртгүүлэгчийн тооцоолсон оноо</th>
              <th>Одоогийн эзэлж буй байр</th>
              <th>Баталгаажуулах эцсийн хугацаа (хураамж)</th>
              <th>Үйлдэл</th>
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
                    <span v-if="row.examGroup?.lessons.length > 0">
                    {{ row.examGroup?.lessons[0]?.lessonName }}
                  </span>, 
                  <span v-if="row.examGroup?.lessons.length > 1">
                    {{ row.examGroup?.lessons[1]?.lessonName }}
                  </span>
                  <span v-else>
                    -
                  </span>
                    {{ row.scaledScore }}
                </td>
                <td class="text-center">
                  25/50
                </td>
                <td>

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
                <td>
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
                  <input type="checkbox" class="form-check-input " v-model="selectedprogram" :value="row.programId" number
                    disabled>
                </td>
                <td>
                  <span style="display:none">unitId_{{ row.unitId }}</span>
                  <p>{{ row.programName }}</p>
                  <small>{{ row.abbrevm }}</small>
                </td>
                <td>
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
      </div>
      <div class="row mt-3">
      <div class="align-middle d-grid d-md-flex justify-content-md-end">
        <button  :disabled="selectedprogram.length == 0" class="btn btn-primary me-md-2">
          Баталгаажуулах
          <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.7 13L7.33062 8.76428C7.71581 8.3149 7.7158 7.65177 7.33062 7.20238L3.7 2.96667" stroke="white"
              stroke-width="1.1" stroke-linecap="round" />
            <path d="M7.7 12.9995L11.3306 8.76379C11.7158 8.31441 11.7158 7.65128 11.3306 7.2019L7.7 2.96618" stroke="white"
              stroke-width="1.1" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
    </div>
  </template>
  <script>
  import $ from 'jquery'
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net-bs5';
  import axios from "axios";
  import VueCountdown from '@chenfengyuan/vue-countdown';
//   import { BModal } from "bootstrap-vue-3";
  DataTable.use(DataTablesCore);
  
  export default {
    components: {
    //   BModal
    VueCountdown
    },
    data: function () {
      return {
        table: '#datatable',
        datatableobj: null,
        tableData: [],
        selectedprogram: [],
        units: [],
        selectedunits: [],
        selectedstatus: 999,
        searchtxt: "",
        isloading: false,
        counting :false
      }
    },
  
    mounted() {
      this.getunits();
      this.datatabledraw();
      this.counting = true;
    },
    computed: {
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
          startCountdown() {
              this.datatableobj.clear();
              this.datatableobj.destroy();
              this.datatabledraw();
              this.counting = true;
          },
          onCountdownEnd() {
          this.counting = false;
              //this.startCountdown();
          },
          transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },
          getunitname() {
              return this.units.filter(x => x.unitId == this.selectedunits[0]);
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
      changepagelength() {
        this.datatableobj.page.len(this.tblpage).draw();
        $('.dropdown-menu').removeClass('show');
      },
      datatabledraw() {
        axios.get("getApplicantChosenPrograms")
          .then(res => {
            if (res.data.status == 1) {
              this.tableData = Object(res.data.result);
              this.makeTable();
            } else {
              this.$notify({
                title: "",
                text: res.data.message,
                type: 'warn'
              });
            }
          }).catch(error => {
            this.$notify({
              title: "Холболт амжилтгүй!",
              text: error,
              type: 'error'
            });
          });
      },
      getunits() {
          axios.get("getUnits")
          .then(res => {
            if (res.data.status == 1) {
              this.units = res.data.result;
            } else {
              this.$notify({
                title: "Бүрэлдэхүүн/салбар сургуулиар хайх",
                text: res.data.message,
                type: 'warn'
              });
            }
          }).catch(error => {
            this.$notify({
              title: "Холболт амжилтгүй!",
              text: error,
              type: 'error'
            });
          });
      },
      select: function () {
        this.allSelected = false;
      },
      makeTable() {
        this.$nextTick(function () {
          this.datatableobj = $(this.table).DataTable(
            {
              pageLength: 10,
              responsive: true,
              authwidth: true,
              aaSorting: [],
              dom: '<"top">rt<"bottom"<"row"<"col"l><"col-md-auto"i><"col-md-auto"p> >><"clear">',
              language: {
                url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/mn.json',
                search: "_INPUT_",
                searchPlaceholder: "Хөтөлбөр хайх",
                zeroRecords: 'Хөтөлбөр байхгүй байна.',
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

.updatetime{
  font-size: 14px;
  color: #718096;
  font-weight: 400;
}
  .not-allowed {
    cursor: not-allowed !important;
  }
  .breadcrumbs {
    background: #EBEBED;
    padding: 30px 0;
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
    padding-left:14px;
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