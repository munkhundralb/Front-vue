<template>
    <div class="fullheigth bg-white-section p-4">
        <div class="content-tittle mb-4">
            <h2>
                <span class="title">Хүсэлт гаргасан хөтөлбөрүүд</span>
            </h2>
        </div>

        <div class="alert alert-primary mb-4 alert-dismissible fade show">
            <div class="alert-icon">
                <img src="../assets/appimg/alert-icon.svg" alt="" class="icon">
            </div>
            <div class="alert-content">
                <ul class="mb-0">
                    <li> Та <strong> Хөтөлбөр нэмэх </strong> товчийг дарж бүртгүүлэхийг хүссэн бүрэлдэхүүн/салбар
                        сургуулийн
                        хөтөлбөрөө сонгоно уу.
                    </li>
                    <li> Бүрэлдэхүүн/салбар сургуульд харьяалагдах мэргэжлийн хөтөлбөрүүд,
                        суурь болон дагалдах шалгалтын жагсаалт, онооны харьцааны талаарх дэлгэрэнгүй
                        мэдээллийг <strong>Элсэлтийн бүлэг </strong> цэсээс харна уу.
                    </li>
                    <li>ЭШ эхлээгүй, оноо гараагүй үед бүртгүүлэгчийн оноог тооцоолох боломжгүй учир
                        тухайн талбаруудад “-” тэмдэглэгээ харагдана.
                    </li>
                    <li>
                        Бүртгүүлэгч нь 1-ээс олон удаа ЭШ өгсөн бол бүртгэлийн дугаар тус бүрээр 
                        бүртгүүлэх бөгөөд энэ тохиолдолд бүртгүүлэгчийн оноог нэгтгэх хүртэл оноог 
                        тооцох боломжгүй учир тухайн талбаруудад “-” тэмдэглэгээ харагдана.
                    </li>
                </ul>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div class="mb-4" v-if="management.Status != 999">
            <div v-if="management.Status == 1" class="row">
                <div class="col align-self-end">
                    <router-link to="/app/Addprogram" class="btn btn-primary float-end">
                        <i class="bi bi-plus-lg"></i> Хөтөлбөр нэмэх
                    </router-link>
                </div>
            </div>
            <div v-else  class="alert alert-danger  align-items-center">
                
                        <div class="row">
                        <div class="col-md-6">
                            <svg style="float:left;" class="bi flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V12M12 16H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                                stroke="#E02B1D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div >
                            {{ management.Message }}
                            <span v-if="management.Status == 2"><br> Эхлэх хугацаа: <strong> {{ management.managementDate }}</strong> </span>
                        </div>
                    </div>
                        
                    <div v-if="management.Status == 0" class="col-md-6">
                        <div class="">
                        <router-link to="/app/confirm" class="btn btn-primary float-end">
                            Элсэх эрх баталгаажуулах
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.2502 7L12.7199 4.53027C13.0129 4.23737 13.0129 3.76248 12.7199 3.46958L10.2502 0.999845M12.5003 3.99992L1.5 3.99992"
                                    stroke="white" stroke-width="1.1" stroke-linecap="round" />
                            </svg>
                        </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-2 overflow-auto">
            <table id="datatable" class="table table-responsive table-hover  w-100" cellspacing="0">
                <thead>
                    <tr>
                        <th style="width:10px">№</th>
                        <th class="tableprogramname">Хүсэлт гаргасан хөтөлбөр</th>
                        <th>Нийт хяналтын тоо</th>
                        <th>Суурь шалгалт</th>
                        <th>Дагалдах шалгалт</th>
                        <th>Онооны харьцаа (%)</th>
                        <th>Тооцоолсон оноо</th>
                    </tr>
                </thead>
                <tbody v-if="tableData" class="table-striped">
                    <template v-for="(row, index) in tableData" :key="row.programId">
                        <tr v-if="row.status == 1">
                            <td>{{ Number(index) + 1 }}</td>
                            <td>
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
                                {{ row.scaledScore }}
                            </td>
                        </tr>
                        <tr v-else-if="row.status == 0">
                            <td>{{ Number(index) + 1 }}</td>
                            <td>
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
                        </tr>
                        <tr v-else>
                            <td>{{ Number(index) + 1 }}</td>
                            <td>
                                <p>{{ row.programName }}</p>
                                <small>{{ row.abbrevm }}</small>
                            </td>
                            <td class="text-center">
                                {{ row.seatCnt }}
                            </td>
                            <td class="align-middle borderrad" colspan="4">
                                <span class="text-danger">{{ row.statusDescription }} </span>
                            </td>
                            <td style="display:none"></td>
                            <td style="display:none"></td>
                            <td style="display:none"></td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

import $ from 'jquery'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
DataTable.use(DataTablesCore);
import axios from "axios";

export default {
    name: "Dashboard",
    components: {
    },
    data() {
        return {
            table: '#datatable',
            tableData: Object,
            datatableobj: null,
            management: {
                Status: 999,
                Message: '',
                managementDate: ''
            },
            responseerror: false
        };
    },
    created() {
        // let boolString= localStorage.getItem('isRead');
        // this.isReadlocal=!(boolString === "true"); 
    },
    computed: {
        counter() {
      return this.$store.state.count;
        }
    },
    mounted() {
        // using options

        this.datatabledraw();
    },
    methods: {
        datatabledraw() {
            axios.get("getApplicantChosenPrograms")
                .then(res => {
                    if (res.data.status == 1) {
                        this.management.Status = res.data.managementStatus;
                        this.management.Message = res.data.managementMessage;
                        if (res.data.managementDate != null && res.data.managementDate != 'undefined') {
                            this.management.managementDate = res.data.managementDate;
                        }
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
                            zeroRecords: 'Танд хүсэлт гаргасан бүрэлдэхүүн/салбар сургуулийн хөтөлбөр <br>одоогоор байхгүй байна.',
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

};
</script>

<style scoped>@import 'datatables.net-bs5';
@import '../assets/datatable.css';</style>
