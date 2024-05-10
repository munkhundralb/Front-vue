<template>
    <div :class="iscontainer ? 'container my-5' : ''">
        <div class="fullheigth centered-content bg-white-section p-4">
            <div class="content-tittle mb-4">
                <h2>
                    <span class="title">Онооны тооцоолуур</span>
                </h2>
            </div>

            <div class="alert alert-primary mb-4">
                <div class="alert-icon">
                    <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
                </div>
                <div class="alert-content ms-5">
                    <p><strong> Санамж </strong></p>
                    <p>Энэхүү тооцоолуур нь таамаглан оруулсан оноо бүхий хичээлүүдийн хослолоор журмын дагуу хөтөлбөрийн
                        шаардлагыг хэрхэн хангаж буйг үзүүлэх зорилготой.
                    </p>
                    <ol class="ms-0  m-0">
                        <li>
                            Хичээлд харгалзах ЭШ-ын оноог таамаглан оруулах.
                        </li>
                        <li>
                            Журмын дагуу Бүртгүүлэх боломжтой хөтөлбөрийн суурь болон дагалдах шалгалтын харьцаагаар оноог
                            хийсвэрлэн тооцоолно.
                        </li>
                    </ol>
                </div>
            </div>

            <div class="row scorebtns">
                <div class="col mx-auto d-grid gap-2">
                    <button @click="insertScore" :class="isCalc ? 'btn' : 'btn btn-primary'" type="button">Шалгалтын оноо
                        </button>
                </div>
                <div class="col mx-auto d-grid gap-2">
                    <button :class="!isCalc ? 'btn' : 'btn btn-primary'" type="button">Тооцоолсон оноо
                        </button>
                </div>
            </div>
            <div v-if="!isCalc" class="row justify-content-center pt-4 ">
                <div class="col-md-8">
                    <table class="scoretable table table-bordered ">
                        <thead>
                            <tr>
                                <th class="text-center" width="40">№</th>
                                <th >Шалгалтын нэр</th>
                                <th >Оноо</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in lessons" :key="item">
                                <td class="text-center">{{ Number(index) + 1 }}</td>
                                <td>{{ item.lessonName }}</td>
                                <td>
                                    <input class="form-control" @keyup="checkmax(item.scaledScore, index)"
                                        type="text" v-model="item.scaledScore" number 
                                        @keypress="isNumber($event)" :maxlength="3"
                                        placeholder="">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="pt-3 d-grid gap-2 d-md-flex justify-content-end">

                    <div class="">
                        <button @click="submitscore" class="btn btn-primary">Тооцоолсон оноог бодох</button>
                    </div>
                </div>
            </div>
            <div v-if="isCalc" class="row justify-content-center py-5 ">
                <div class="col-md-12">
                    <div class="DatatableFilter row  mb-4">
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Суурь шалгалт</label>
                            <select id="inputState" @change="searchbylesson1" class="form-select" v-model="selectedlesson1">
                                <option selected :value="999">-Бүгд-</option>
                                <option v-for="item in lessons.filter((item) => item.scaledScore != '')" :key="item" :value="item.lessonId">{{ item.lessonName }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Дагалдах шалгалт</label>
                            <select id="inputState" @change="searchbylesson2" class="form-select" v-model="selectedlesson2">
                                <option selected :value="999">-Бүгд-</option>
                                <option v-for="item in lessons.filter((item) => item.scaledScore != '')" :key="item" :value="item.lessonId">{{ item.lessonName }}
                                </option>
                            </select>
                        </div>

                        <div class="col-md-3">
                            <label for="inputState" class="form-label">Хайх</label>
                            <input type="text" @keyup="searchtable" v-model="searchtxt" class="form-control "
                                placeholder="Хөтөлбөр хайх">
                        </div>

                    </div>
                    <div class="overflow-auto row">
                    <table id="datatable" class="table table-bordered table-hover  w-100" cellspacing="0">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th class="tableprogramname">Хөтөлбөр</th>
                                <th>Суурь шалгалт (70%)</th>
                                <th>Дагалдах шалгалт (30%)</th>
                                <th class="primary-color">Хийсвэрээр тооцоолсон оноо</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(row, index) in tableData" :key="row">
                                <tr v-if="row.status == 1">
                                    <td>{{ Number(index) + 1 }}
                                    </td>
                                    <td>
                                        <p>{{ row.programName }}</p>
                                        <small>{{ row.abbrevm }}</small>
                                    </td>
                                    <td class="text-center">
                                        <span v-if="row.examGroup?.lessons.length > 0">
                                            {{ row.examGroup?.lessons[0]?.lessonName }}<br>
                                            {{ getlessonscore(row.examGroup?.lessons[0].lessonId) }}
                                            <span style="display:none"> lessonID1_{{ row.examGroup?.lessons[0]?.lessonId }}
                                            </span>
                                        </span>
                                    </td>
                                    <td class="text-center">
                                        <span v-if="row.examGroup?.lessons.length > 1">
                                            {{ row.examGroup?.lessons[1]?.lessonName }}<br>
                                            {{getlessonscore(row.examGroup?.lessons[1].lessonId) }}
                                            <span style="display:none"> lessonID2_{{ row.examGroup?.lessons[1]?.lessonId }}
                                            </span>
                                        </span>
                                        <span v-else>
                                            -
                                        </span>
                                    </td>
                                    <td class="text-center primary-color">
                                        <strong> {{ row.scaledScore }}</strong>
                                    </td>
                                </tr>
                                <tr v-else>
                                    <td>{{ Number(index) + 1 }}</td>
                                    <td>
                                        <p>{{ row.programName }}</p>
                                        <small>{{ row.abbrevm }}</small>
                                    </td>
                                    <td colspan="3">
                                        <span class="text-danger">{{ row.statusDescription }} </span>
                                    </td>
                                    <td style="display:none"></td>
                                    <td style="display:none"></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import axios from "axios";
import $ from 'jquery'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
DataTable.use(DataTablesCore);
export default {
    data: function () {
        return {
            table: '#datatable',
            tableData: Object,
            datatableobj: null,
            lessons: [],
            selectedlesson1: 999,
            selectedlesson2: 999,
            isCalc: false,
            BalanceModal: true,
            iscontainer: false,
            searchtxt: ""
        }
    },
    mounted() {
        let currentroutname = this.$route.name;
        if (currentroutname == 'scorecalculator') {
            this.iscontainer = true;
        } else {
            this.iscontainer = false;
        }
        this.getLessons();
        this.makeTable();
    },
    methods: {
        getlessonscore(lessonid){
         return this.lessons.filter((item) => item.scaledScore != '' 
          && item.lessonId==lessonid)[0].scaledScore;
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
    checkmax(value, index) {
            if (value > 800 || value < 0) {
                this.lessons[index].scaledScore = value.slice(0, -1);
            }
        },
        searchtable() {
            this.datatableobj.search(this.searchtxt).draw();
        },
        searchbylesson1() {
            if (this.selectedlesson1 != 999) {
                this.datatableobj.column(2).search("lessonID1_" + this.selectedlesson1).draw();
            } else {
                this.datatableobj.column(2).search("").draw();
            }
        },
        searchbylesson2() {
            if (this.selectedlesson2 != 999) {
                this.datatableobj.column(3).search("lessonID2_" + this.selectedlesson2).draw();
            } else {
                this.datatableobj.column(3).search("").draw();
            }
        },
        changepagelength() {
      this.datatableobj.page.len(this.tblpage).draw();
      $('.dropdown-menu').removeClass('show');
    },
        insertScore() {
            this.isCalc = false;
        },
        CalcScore() {
            this.isCalc = true;
        },
        submitscore() {
            if (this.lessons.filter((item) => item.scaledScore != '').length > 1) {
                axios.post("calculateScore", this.lessons.filter((item) => item.scaledScore != ''))
                    .then(res => {
                        if (res.data.status == 1) {
                            this.isCalc = true;
                            this.datatableobj.clear();
                            this.tableData = res.data.result;
                            this.datatableobj.destroy();
                            this.makeTable();
                            //this.datatableobj.columns.adjust().draw(); // Redraw the DataTable
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
            }
            else {
                //Хамгийн багадаа <strong> 2 </strong> хичээлийн оноог оруулна уу! 
                this.$toast.open({
                        message: 'Хамгийн багадаа <strong> 2 </strong> хичээлийн оноо оруулна уу!',
                        type: 'warning'});
            }
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
                            zeroRecords: 'Тохирох бичлэг олдсонгүй',
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
        getLessons() {
            axios.get("getLessons")
                .then(res => {
                    if (res.data.status == 1) {
                        res.data.result.forEach((item) => {
                            this.lessons.push(
                                {
                                    lessonName: item.lessonName,
                                    lessonId: item.lessonId,
                                    scaledScore: ''
                                }
                            )
                        });
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
    }
}
</script>

<style scoped>
@import 'datatables.net-bs5';
@import '@/assets/datatable.css';

ol {
    margin-left: -15px !important;
}
.scoretable{
    max-width: 600px;
    margin: auto;
}
.scoretable tr th{
    background-color: #F3F6FA;
    font-weight: 600;
    text-align: center;
    vertical-align: middle!important;
    padding-top:10px;
    padding-bottom:10px;
}
.scoretable tr td:last-child{
padding: 5px;
min-width: 90px;
max-width: 120px;
}
.alert .alert-content p {
    margin-bottom: 0;
}

.table-stripedmy>thead>tr>th {
    background-color: #F3F6FA;
    font-weight: 600;
    text-align: center;
    vertical-align: middle !important;
}

.scorebtns {
    padding: 8px 3px;
    background: #F3F6FA;
    border-radius: 8px;
    margin: 2px;
}

.scorebtns .col {
    padding: 0;
    width: 50%;
}

.primary-color {
    color: var(--primary-color);
}
</style>