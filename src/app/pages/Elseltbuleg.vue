<template >
        <div  :class="iscontainer? 'container my-5': ''">
        
    <div class="fullheigth centered-content bg-white-section p-4 ">
      <div class="content-tittle mb-4">
        <h2>
          <span class="title">Элсэлтийн бүлэг</span>
        </h2>
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
              <input class="form-check-input" type="checkbox" id="flexCheck0"
                v-model="selectAllunits" :value="999">
              <label class="form-check-label" for="flexCheck0">
                -Бүгд-
              </label>
            </div>
            <hr class="dropdown-divider">
            <template v-for="(unit) in units" :key="unit">
              <div  class="form-check">
                <input class="form-check-input" type="checkbox" :id="'flexCheck' + unit.unitName" @change="searchbyschool"
                  v-model="selectedunits" :value="unit.unitId">
                <label class="form-check-label" :for="'flexCheck' + unit.unitName">
                  <small v-if="unit.parentUnitName!=''">{{ unit.parentUnitName }} <br></small>
                  {{ unit.unitName }}
                </label>
              </div>
          </template>
          </div>
        </div>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Хайх</label>
          <input type="text" @keyup="searchtable" v-model="searchtxt" class="form-control " placeholder="Хөтөлбөр хайх">
        </div>
      </div>
      <div class="row overflow-auto">
      <table id="datatable" class=" table table-hover  w-100" cellspacing="0">
                  <thead>
                      <tr>
                          <th width="10px">№</th>
                          <th class="tableprogramname" width="40%">Элсэх хөтөлбөр</th>
                          <th width="90px">Хяналтын тоо</th>
                          <th width="40%">Үйлдэл</th>
                      </tr>
                  </thead>
                  <tbody v-if="tableData" class="table-striped">
                      <tr v-for="(row,index) in tableData" :key="'row' + row.name + row.season">
                          <td class="text-center">
                            {{Number(index) +1 }}
                          </td>
                          <td>
                              {{ row.programName }} <br>
                              <small>{{ row.abbrevm }}</small>
                              <span style="display:none">unitId_{{ row.unitId }}</span>
                          </td>
                          <td class="text-center">
                             <span> {{ row.totalSeats }}
                             </span>
                              <button @click="showSeatsModal(row.programId)" class="btn-seats btn btn-light btn-sm float-end">?</button>
                          </td>
                          <td class="text-center">
                            <button @click="showProgramintroModal(row.sisiProgramId)" class="btn btn-light btn-sm">
                                Дэлгэрэнгүй
                            </button>
                            <button @click="showexamGroupsModal(row.programId)" class="btn btn-primary btn-sm">
                                Шалгалтын бүлэг
                            </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
    </div>
  </div>
    <BModal id="SeatsModal" centered size="lg" title="Хяналтын тоон задаргаа" @hidden="SeatsModal=false" ok-only="true" ok-title="Хаах" ok-variant="light"
        v-model="SeatsModal">
        <table class="table table-bordeless table-responsive">
            <tr>
                    <td width="40%"><p><strong>Бүрэлдэхүүн/Салбар сургууль</strong></p></td>
                    <td width="60%">{{Selectedprogram.abbrevm}}</td>
                </tr>
                <tr>
                    <td><p><strong>Хөтөлбөр</strong></p></td>
                    <td>{{Selectedprogram.programName}}</td>
                </tr>
        </table>
        <table class="table table-responsive table-stripedmy table-borderless">
            <thead>
                <tr>
                    <th>Бүсчлэл</th>
                    <th>Хяналтын тоо</th>
                </tr>
            </thead>
            <tbody>
               
                <tr v-for="row in Selectedprogram.seats" :key="row">
                    <td>{{row.region}}</td>
                    <td class="text-center">{{row.cnt}}</td>
                </tr>
            </tbody>
        </table>

    </BModal>
    <BModal id="ProgramintroModal" size="xl" title="Хөтөлбөрийн дэлгэрэнгүй" @hidden="ProgramintroModal=false"  ok-only="true" ok-title="Хаах" ok-variant="light"
    v-model="ProgramintroModal">
        <table class="table table-bordeless table-responsive">
                <tr>
                        <td width="40%"><p><strong>Бүрэлдэхүүн/Салбар сургууль: </strong></p></td>
                        <td width="60%"><p>{{Selectedprogram.abbrevm}}</p></td>
                    </tr>
                    <tr>
                        <td><p><strong>Хөтөлбөрийн нэр: </strong></p></td>
                        <td><p>{{Selectedprogram.programName}}</p></td>
                    </tr>
                    <tr>
                        <td><p><strong>Хөтөлбөрийн индекс: </strong></p></td>
                        <td><p>{{Programintro.mecsnr}}</p></td>
                    </tr>
            </table>
            <p>Хөтөлбөрийн тодорхойлолт: </p>
            <div class="rawhtml col-md-12" v-html="Programintro.introduction">
            </div>

    </BModal>
    <BModal id="examGroupsModal" size="lg" title="Шалгалтын бүлэг" @hidden="examGroupsModal=false" ok-only="true" ok-title="Хаах" ok-variant="light"
        v-model="examGroupsModal">
        <table class="table table-bordeless">
                <tr>
                        <td width="40%"><p><strong>Бүрэлдэхүүн/Салбар сургууль: </strong></p></td>
                        <td width="60%"><p>{{Selectedprogram.abbrevm}}</p></td>
                    </tr>
                    <tr>
                        <td><p><strong>Хөтөлбөрийн нэр: </strong></p></td>
                        <td><p>{{Selectedprogram.programName}}</p></td>
                    </tr>
                    
            </table>
     <table class="table table-responsive table-stripedmy table-borderless">
        <thead>
            <tr>
                <!-- <th>№</th> -->
                <!-- <th>Элсэх хөтөлбөр</th> -->
                <th>Суурь шалгалт</th>
                <th>Дагалдах шалгалт</th>
                <th>Онооны харьцаа (%)</th>
                <th>Босго оноо</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row) in Selectedprogram.examGroups" :key="row">
                <!-- <td  v-if="index==0" :rowspan="Selectedprogram.examGroups.length">{{Number(index) +1 }}</td> -->
               
                <!-- <td  v-if="index==0" :rowspan="Selectedprogram.examGroups.length">
                    {{ Selectedprogram.programName}} <br>
                <small>{{ Selectedprogram.abbrevm}}</small>
                </td>  -->
               
                <td>
                  <span v-if="row.lessons.length>0">
                    {{ row.lessons[0].lessonName }}
                  </span>
                </td>
                <td>
                  <span v-if="row.lessons.length>1">
                    {{ row.lessons[1].lessonName }}
                  </span>
                </td>
                <td class="text-center">
                  <span v-if="row.lessons.length>0"> 
                    {{ row.lessons[0].percentOfTotal }} 
                  </span> 
                    <span v-if="row.lessons.length>1">:{{ row.lessons[1].percentOfTotal }}
                    </span>
                  </td>
                <td class="text-center">
                  <span v-if="row.lessons.length>0">
                    {{ row.lessons[0].minScaledScore }}
                  </span>
                </td>
            </tr>
        </tbody>
     </table>
    </BModal>
  </template>
  <script>
  import $ from 'jquery'
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net-bs5';
  import axios from "axios";
  import { BModal } from "bootstrap-vue-3";
  DataTable.use(DataTablesCore);
  
  export default {
    components: {
        BModal
      },
    data: function () {
      return {
        table: '#datatable',
        tableData: null,
        selectedunits: [],
        units: [],
        datatableobj: null,
        searchtxt: "",
        SeatsModal:false,
        Selectedprogram:[],
        ProgramintroModal:false,
        Programintro:[],
        examGroupsModal:false,
        iscontainer:true
      }
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
    mounted() {
      this.getcontaner();
      this.getunits();
      this.datatabledraw();
    },
    methods: {
      getcontaner(){
        let currentroutname=this.$route.name;
        if(currentroutname=='elseltbuleg')
        {
            this.iscontainer=true;
        }else
        {
            this.iscontainer=false;
        }
    },
    showSeatsModal(programId){
        this.Selectedprogram= this.tableData.filter(i => i.programId === programId)[0];
        this.SeatsModal=!this.SeatsModal;
    },
    showProgramintroModal(sisiProgramId){
        this.Selectedprogram= this.tableData.filter(i => i.sisiProgramId === sisiProgramId)[0];
        axios.get("getProgramIntro?pid="+ sisiProgramId)
          .then(res => {
            if (res.data.status == 1) {
            this.Programintro = res.data.result;
            this.ProgramintroModal=!this.ProgramintroModal;
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
    showexamGroupsModal(programId){
        this.Selectedprogram= this.tableData.filter(i => i.programId === programId)[0];
        this.examGroupsModal=!this.examGroupsModal;
    },
      searchtable() {
        this.datatableobj.search(this.searchtxt).draw();
      },
      searchbyschool() {
      let searchunits = this.selectedunits.join('|');
      this.datatableobj.column(1).search(searchunits, true, false).draw();
    },
      datatabledraw() {
        axios.get("getPrograms")
                .then(res => {
                    if (res.data.status == 1) {
                        this.tableData = Object(res.data.result);
                        //this.tableDataall = res.data.result;
                        this.makeTable();
                    } else {
                      this.$toast.open({
                            message: res.data.message,
                            type: 'warning'});
                    }
                } ).catch(error=>{
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
            }else {
              this.$toast.open({
                            message: res.data.message,
                            type: 'warning'});
                    }
                } ).catch(error=>{
                  this.$toast.open({
                        message: 'Холболт амжилтгүй!',
                        type: 'error'});
                    });
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
                zeroRecords: 'Хөтөлбөр байхгүй байна!',
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
       
  table tr td .btn-seats{
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 30px!important;
  }
  table tr td small{
    color:#89939E;
  }


.rawhtml img{
    max-width:100%;
}
@media (max-width: 1199.98px) {
  #datatable .btn {
    margin-bottom: 5px;
  }
}
  </style>