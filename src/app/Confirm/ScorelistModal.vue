<template>
    <BModal id="ScorelistModal" size="xl" centered title="Онооны жагсаалт харах" @hidden="HideScorelistModal"
        v-model="ScorelistModal" ok-only="true" ok-title="Хаах" ok-variant="light">
        <div v-if="ScorelistModal">
            <div class="alert alert-primary alert-dismissible fade show">
                <div class="alert-icon">
                    <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
                </div>
                <div class="alert-content ms-5">
                    <strong>Санамж</strong>
                    <ul class="mb-0">
                        <li>
                            Тухайн хөтөлбөрийн жагсаалтад таны одоогийн эзэлж буй байр үлдсэн
                            хяналтын тоонд багтаагүй байсан ч жагсаалтын таны өмнөх бүртгүүлэгч
                            өөр хөтөлбөрийг сонговол таны эзэлж буй байр урагшилж үлдсэн хяналтын
                            тоонд багтах магадлалтай.
                        </li>
                        <li>
                            Хүснэгтээс та өөрийн бүртгэлийн дугаараар хайлт хийх боломжтой.
                        </li>
                        <li>
                            <strong>Алтайн бүсэд </strong> Говь-Алтай, Баянхонгор, Өвөрхангай, 
                            <strong>Баруун бүсэд </strong>Баян-Өлгий, Увс, Ховд, 
                            <strong>Говийн бүсэд </strong> Говьсүмбэр, Дорноговь, Дундговь, Өмнөговь, Төв, 
                            <strong>Зүүн бүсэд </strong> Дорнод, Сүхбаатар, Хэнтий, 
                            <strong>Хангайн бүсэд</strong> Архангай, Булган, Дархан-Уул, Завхан, Орхон, Сэлэнгэ, Хөвсгөл аймаг,
                            <strong>Төвийн бүсэд</strong> Улаанбаатар хот хамаарна. 
                        </li>
                    </ul>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <div class="row scorelist-form mb-4">
                <div class="col-md-7">
                    <div class="mb-3">
                        <label for="email" class="form-label"><strong>Бүсчлэл</strong></label>
                        <select class="form-select" @change="changerid" v-model="selectedrid">
                            <template v-for="item in rid" :key="item.id">
                                <option :value="item.id">
                                    {{ item.location }}
                                </option>
                            </template>
                        </select>

                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label"><strong>Хөтөлбөр</strong></label>
                        <div class="dropdown selectsearch">
                            <button type="button" class="form-select" @click="clickdropbtn" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span v-if="selectedprogram != 0">
                                    {{ selectedprogram.programName }} ({{ selectedprogram.abbrevm }})
                                </span>
                                <span v-else> Хөтөлбөр сонгоно уу! </span>
                            </button>
                            <div class="dropdown-menu  overflow-auto">
                                <div class="sticky-top">
                                    <input type="text" class="form-control" @keydown="searchprogram" @keyup="searchprogram"
                                        v-model="searchtxt" placeholder="Хөтөлбөр хайх">
                                </div>
                                <div class="p-2">
                                    <template v-for="(unit) in units" :key="unit">
                                        <div class="form-check schoolname">
                                            <label class="form-check-label">
                                                <small v-if="unit.parentUnitName != ''">{{ unit.parentUnitName }} <br></small>
                                                <strong> {{ unit.unitName }} </strong>
                                            </label>
                                        </div>
                                        <template v-for="(pro) in programs.filter(x => x.unitId == unit.unitId)" :key="pro">
                                            <div class="form-check programname" @click="changeprogram(pro)">
                                                <label class="form-check-label">
                                                    <!-- <small v-if="pro.parentUnitName!=''">{{ pro.parentUnitName }} <br></small> -->
                                                    {{ pro.programName }}
                                                </label>
                                            </div>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3" v-if="selectedprogram!=0">
                        <label for="phone" class="form-label"><strong>Бүртгэлийн дугаар хайх</strong></label>
                        <input type="text" class="form-control" @keyup="searchtable" v-model="searchnumber"
                            placeholder="Бүртгэлийн дугаар оруулах">
                    </div>
                </div>
                <div class="col-md-5">
                    <div v-if="selectedprogram!=0" class="card mb-4">
                        <div class="card-body p-2">
                            <table class="table mb-0 counttable">
                                <tr>
                                    <td><strong>Нийт хяналтын тоо:</strong></td>
                                    <td>{{ totalSeats }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Баталгаажуулсан элсэгчийн тоо:</strong></td>
                                    <td>{{ choseSeats }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Үлдсэн хяналтын тоо:</strong></td>
                                    <td>{{ remainingSeats }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="drawtable" class="row overflow-auto">
                <table id="datatable" class="table table-bordered table-hover  w-100" cellspacing="0">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Бүртгэлийн дугаар</th>
                            <th>Тооцоолсон оноо</th>
                            <th>Хувь</th>
                            <th>Эзэлж буй байр</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(row, index) in tableData" :key="row">
                            <tr>
                                <td> {{ Number(index) + 1 }}</td>
                                <td class="text-center">
                                    {{ row.username }}
                                </td>
                                <td class="text-center">
                                    {{ row.scaledScore }}
                                </td>
                                <td class="text-center">
                                    {{ row.rowScore }}
                                </td>
                                <td class="text-center">
                                    {{ row.position }}
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
            <div v-if="!drawtable && isloading">
                <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary-color" role="status">
                    <span class="visually-hidden">Ачаалж байна...</span>
                </div>
                </div>
                <!-- <div  class="d-flex  justify-content-center mt-3"> 
                    <button @click="logout" class="btn btn-primary">нэвтрэх</button> 
                </div> -->
            </div>
            <table>

            </table>
        </div>
    </BModal>
    <button v-if="isshowbtnprop" @click="ShowScorelistModal" :class="btn_variant"> {{ btn_text }} </button>
</template>

<script>
import { BModal } from "bootstrap-vue-3";
import axios from "axios";
import $ from 'jquery'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
DataTable.use(DataTablesCore);

import programsjson from "@/utils/programs.json";
import unitsjson from "@/utils/units.json";
import ridjson from "@/utils/rid.json";
export default {
    name: "ScorelistModal",
    props: {
        isshowbtnprop: Boolean,
        btn_variant: String,
        btn_text: String
    },
    components: {
        BModal
    },
    data() {
        return {
            ScorelistModal: false,
            isshowbtn: false,
            table: '#datatable',
            tableData: Object,
            datatableobj: null,
            selectedprogram: 0,
            selectedrid: 0,
            units: [],
            unitsall: [],
            programs: [],
            programsall: [],
            searchtxt: "",
            searchnumber: "",
            drawtable: false,
            isloading:false,
            totalSeats: 0,
            choseSeats: 0,
            remainingSeats: 0,
            rid: []
        };
    },
    mounted() {
        this.rid = ridjson;
        this.selectedrid = this.rid[0].id;
    },
    created() {
        if (this.ScorelistModal) {
            this.isshowbtn = this.isshowbtnprop;
            this.ScorelistModal = false;
        }
    },
    methods: {
        HideScorelistModal() {
            this.ScorelistModal = false;
            this.drawtable = false;
        },
        searchtable() {
            this.datatableobj.column(1).search(this.searchnumber).draw();
        },
        clickdropbtn() {
            this.searchtxt = "";
            this.programs = this.programsall;
            this.units = this.unitsall;
        },
        ShowScorelistModal() {
            this.tableData = "";
            this.totalSeats = 0;
            this.choseSeats = 0;
            this.uldsencount = 0;
            this.selectedprogram = 0;
            this.searchnumber = "";


                    this.units = unitsjson;

                    this.programs = programsjson;

                this.programsall = this.programs;
                this.unitsall = this.units;

                this.ScorelistModal = true;
        },
        changerid() {
            if (this.selectedprogram != 0) {
                this.getscorelist();
            }
        },
        changeprogram(programID) {
            this.selectedprogram = programID;
            this.getscorelist();
        },
        getscorelist() {
            this.drawtable = false;
            this.isloading= true;
            axios.get("getList?rid=" + this.selectedrid + "&pid=" + this.selectedprogram.programId)
                .then(res => {
                    if (res.data.status == 1) {
                        this.drawtable = true;
                        this.isloading= false;
                        this.totalSeats = res.data.result.totalSeats;
                        this.choseSeats = res.data.result.choseSeats;
                        this.remainingSeats = res.data.result.remainingSeats;
                        this.tableData = res.data.result.applicants;
                        this.makeTable();
                    } else {
                        this.$toast.open({
                            message: res.data.message,
                            type: 'warning'
                        });
                        this.isloading= false;
                    }
                }).catch(error => {
                    this.isloading= false;
                    this.$toast.open({
                        message: 'Холболт амжилтгүй!',
                        type: 'error'
                    });
                });
        },
        searchprogram() {
            //this.programs=this.programsall.filter(x=>x.unitName.includes(this.searchtxt));
            if (this.searchtxt!="") {
                this.programs = this.programsall.filter((item) => {
                    return this.searchtxt.toLowerCase().split(' ').every(v => item.programName.toLowerCase().includes(v))
                })
                this.units = this.unitsall.filter(item1 =>
                    this.programs.some(item2 => item1.unitId === item2.unitId)
                )
            } else {
                this.programs = this.programsall;
                this.units = this.unitsall;
            }
        },
        makeTable() {
            this.$nextTick(function () {
                this.datatableobj = $(this.table).DataTable(
                    {
                        lengthMenu: [[5, 10, 25, 50,100], [5, 10, 25, 50,100]],
                        pageLength: 25,
                        responsive: true,
                        authwidth: true,
                        aaSorting: [],
                        dom: '<"top">rt<"bottom"<"row"<"col"l><"col-md-auto"i><"col-md-auto"p> >><"clear">',
                        language: {
                            url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/mn.json',
                            search: "_INPUT_",
                            searchPlaceholder: "",
                            zeroRecords: 'Онооны жагсаалт хоосон байна.',
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
                        //columnDefs: [{ "orderable": false, "targets": [0] } ] 
                    }
                );
            });
        },

    }

};
</script>
<style >
@import 'datatables.net-bs5';
@import '@/assets/datatable.css';

.counttable tr td {
    padding: 5px 0;
}

.selectsearch .form-check {
    padding-left: 5px !important;
}

.selectsearch .form-check.programname {
    padding-left: 25px !important;
}

.selectsearch .form-check.programname:hover {
    background: var(--primary-color);
    color: white;
}

.selectsearch .sticky-top {
    margin-top: 10px;
    margin-bottom: 10px;
}

.selectsearch .form-select {
    text-align: left;
}

.selectsearch .dropdown-menu {
    padding-top: 0px !important;
    border: var(--bs-border-width) solid var(--bs-border-color);
    max-height: 350px;
    min-width: 100%;
}</style>