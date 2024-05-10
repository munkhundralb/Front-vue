<template >
  <div class="fullheigth centered-content bg-white-section p-4">
    <div class="content-tittle mb-4">
      <h2>
        <span class="title">Элсэх эрх баталгаажуулах</span>
      </h2>
    </div>
    <div v-if="isloadingpage">
        <confirmloading/>
    </div>
    <div v-else-if="management.Status != 999">
      <div v-if="chosenStatus == 1">
        <congratulation :schoolname="chosenschoolname" :programname="chosenprogramname" :parentName="chosenparentname" />
      </div>
      <div v-else-if="management.Status == 1">

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
        
        <div class="alert alert-primary mb-4 alert-dismissible fade show" role="alert">
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
                Баталгаажуулах эцсийн хугацаа нь Улаанбаатарын цагаар тодорхойлогдоно.
              </li>
              <li>
                Элсэх эрхээ баталгаажуулахын тулд<strong> Баталгаажуулах эцсийн хугацаа</strong>-наас өмнө элсэх
                хөтөлбөрийн өмнөх <input class="form-check-input" type="radio"> -ийг сонгон
                <strong>Баталгаажуулах</strong> товч дарж дараагийн алхамд шилжинэ.
                Хэрэв баталгаажуулах эцсийн хугацаанд амжиж баталгаажуулаагүй бол “Цуцлагдсан” төлөвтэй болно.
              </li>
            </ul>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="DatatableFilter row mb-4">
          <div class="col-md-3">
            <label for="inputCity" class="form-label">Бүрэлдэхүүн/салбар сургууль</label>
            <div class="dropdown">
              <button type="button" class="form-select " data-bs-toggle="dropdown" aria-expanded="false"
                data-bs-auto-close="outside">
                <span v-if="selectedunits.length > 0 && selectedunits.length != units.length">
                  Cонгосон ({{ selectedunits.length }})
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
                    <input class="form-check-input" type="checkbox" :id="'flexCheck' + unit.unitName"
                      @change="searchbyschool" v-model="selectedunits" :value="unit.unitId">
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
            <select id="inputState" :disabled="selectedstatus == -1" @change="searchbySeats" class="form-select"
              v-model="selectedSeats">
              <option selected :value="999">-Бүгд-</option>
              <option value="1">Багтсан</option>
              <option value="0">Багтаагүй</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="inputState" class="form-label">Хайх</label>
            <input type="text" @keyup="searchtable" v-model="searchtxt" class="form-control " placeholder="Хөтөлбөр хайх">
          </div>
        </div>
        <div class="align-middle mb-4 d-grid d-md-flex justify-content-md-end">
          <div class="updatetime  mt-2 mx-2">
            Сүүлд {{ lastupdatedate }} минутанд шинэчлэгдсэн
          </div>
          <button class="btn btn-light" :disabled="counting" @click="startCountdown">
            <vue-countdown v-if="counting" :time="60000 * 3" :transform="transformSlotProps" @end="onCountdownEnd"
              v-slot="{ minutes, seconds }">Жагсаалт шинэчлэх {{ minutes }} : {{ seconds }}</vue-countdown>
            <span v-else>Жагсаалт шинэчлэх</span>
          </button>

          <button @click="ConfirmProgram" :disabled="selectedprogram == 0 || isloading" class="btn btn-primary me-md-2">

            <span v-if="!isloading">Баталгаажуулах
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
        <div class="row  pb-2 overflow-auto">
          <div v-if="!isloaddatatable" class="col-md-12">
            <table id="datatable" class=" table table-hover  w-100" cellspacing="0">
              <thead>
                <tr>
                  <th>
                    <!-- <input class="form-check-input" type="checkbox" v-model="selectAll"> -->
                  </th>
                  <th class="tableprogramname">Хүсэлт гаргасан хөтөлбөр</th>
                  <th>Суурь, дагалдах<br>шалгалт <br>(Тооцоолсон<br>оноо) </th>
                  <th>Үлдсэн/Нийт хяналтын тоо</th>
                  <th>Одоогийн эзэлж буй байр</th>
                  <th>Баталгаажуулах эцсийн хугацаа (хураамж)</th>
                  <th>Үйлдэл</th>
                </tr>
              </thead>
              <tbody class="table-striped">
                <template v-for="row in tableData" :key="row">
                  <tr v-if="row.status == 1 && row.position>0 && row.remainingSeats >= row.position" class="table-success-color"
                    @click="toggleSelect(row.pid)">
                    <td>
                      <span style="display:none">Seats_1</span>
                      <span style="display:none">status_1</span>
                      <input type="radio" class="form-check-input" v-model="selectedprogramID" :value="row.pid" number>
                    </td>
                    <td>
                      <template v-for="proname in programnames.filter(x => x.programId == row.pid)" :key="proname">
                        <p>{{ proname.programName }} </p>
                        <small>{{ proname.abbrevm }}</small>
                        <span style="display:none">unitId_{{ proname.unitId }}</span>
                      </template>
                    </td>
                    <td class="text-center">
                      {{ combis.filter(x => x.combId == row.cid)[0].combName }} <br>
                      ({{ row.ss }})
                    </td>
                    <td class="text-center">
                      {{ row.remainingSeats }}/{{ row.totalSeats }}
                    </td>
                    <td class="text-center">
                      {{ row.position }}
                      <div class="controlnumber">
                        Хяналтын тоонд багтсан
                      </div>
                    </td>
                    <td class="text-center">
                      <span v-if="row.lastTime" class="date">
                        {{ dateTime(row.lastTime) }}
                        <!-- <vue-countdown :time="gettime(row.lastTime)" :interval="100" :transform="transformSlotProps" v-slot="{ hours, minutes, seconds }">
 {{ hours }} цаг {{ minutes }} мин {{ seconds }} 
  </vue-countdown> -->
                      </span>
                      <span v-else>-</span>
                      <br>
                      <span>({{ formatPrice(row.fee) }} ₮)</span>
                    </td>
                    <td @click.stop class="text-center">
                      <button @click="ShowStudentlistModal(row)" class="btn btn-light"> Жагсаалт харах</button>
                    </td>
                  </tr>
                  <tr v-else-if="row.status == 1 && row.remainingSeats < row.position" class="not-allowed">
                    <td>
                      <span style="display:none">Seats_0</span>
                      <span style="display:none">status_1</span>
                      <input type="radio" class="form-check-input" disabled>
                    </td>
                    <td>
                      <template v-for="proname in programnames.filter(x => x.programId == row.pid)" :key="proname">
                        <p>{{ proname.programName }} </p>
                        <small>{{ proname.abbrevm }}</small>
                        <span style="display:none">unitId_{{ proname.unitId }}</span>
                      </template>
                    </td>
                    <td class="text-center">
                      {{ combis.filter(x => x.combId == row.cid)[0].combName }} <br>
                      ({{ row.ss }})
                    </td>
                    <td class="text-center">
                      {{ row.remainingSeats }}/{{ row.totalSeats }}
                    </td>
                    <td class="text-center">
                      {{ row.position }}
                      <div class="nocontrolnumber">
                        <span v-if="row.remainingSeats==0">
                          Хяналтын тоо дууссан
                        </span>
                        <span v-else>
                          Үлдсэн хяналтын тоонд хараахан багтаагүй
                        </span>
                        
                      </div>
                    </td>
                    <td class="text-center">
                      <span>-</span>
                    </td>
                    <td @click.stop class="text-center">
                      <button @click="ShowStudentlistModal(row)" class="btn btn-light"> Жагсаалт харах</button>
                    </td>
                  </tr>
                  <tr v-else-if="row.status == 0" class="not-allowed">
                    <td>
                      <span style="display:none">Seats_0</span>
                      <span style="display:none">status_1</span>
                      <input type="radio" class="form-check-input" disabled>
                    </td>
                    <td>
                      <template v-for="proname in programnames.filter(x => x.programId == row.pid)" :key="proname">
                        <p>{{ proname.programName }} </p>
                        <small>{{ proname.abbrevm }}</small>
                        <span style="display:none">unitId_{{ proname.unitId }}</span>
                      </template>
                    </td>
                    <td class="text-center">
                      {{ combis.filter(x => x.combId == row.cid)[0].combName }} <br>
                      ({{ row.ss }})
                    </td>
                    <td class="text-center">
                      {{ row.remainingSeats }}/{{ row.totalSeats }}
                    </td>
                    <td class="text-center">
                      <div class="nocontrolnumber">
                        <span class="text-danger"> {{ row.statusDescription }} </span>
                      </div>
                    </td>
                    <td class="text-center">
                      <span>-</span>
                    </td>
                    <td>
                    </td>
                  </tr>
                  <tr v-else class="not-allowed">
                    <td>
                      <span style="display:none">status_-1</span>
                      <input type="radio" class="form-check-input" disabled>
                    </td>
                    <td>
                      <template v-for="proname in programnames.filter(x => x.programId == row.pid)" :key="proname">
                        <p>{{ proname.programName }} </p>
                        <small>{{ proname.abbrevm }}</small>
                        <span style="display:none">unitId_{{ proname.unitId }}</span>
                      </template>
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
          <div v-else class="col-md-12">
            <div class="d-flex justify-content-center">
              <div class="spinner-border text-primary-color" role="status">
                <span class="visually-hidden">Ачаалж байна...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="align-middle d-grid d-md-flex justify-content-md-end">

            <!-- <button @click="Startnotif" class="btn btn-success">эхлэх</button>
            <button @click="Stopnotif" class="btn btn-danger">зогсох</button> -->
            <!-- {{ selectedprogram.pid }} -->
            <button @click="ConfirmProgram" :disabled="selectedprogram == 0 || isloading" class="btn btn-primary me-md-2">

              <span v-if="!isloading">Баталгаажуулах
                <svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.7 13L7.33062 8.76428C7.71581 8.3149 7.7158 7.65177 7.33062 7.20238L3.7 2.96667"
                    stroke="white" stroke-width="1.1" stroke-linecap="round" />
                  <path d="M7.7 12.9995L11.3306 8.76379C11.7158 8.31441 11.7158 7.65128 11.3306 7.2019L7.7 2.96618"
                    stroke="white" stroke-width="1.1" stroke-linecap="round" />
                </svg></span>
              <span v-if="isloading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span v-if="isloading" class="sr-only"> Түр хүлээнэ үү</span>
            </button>
          </div>
        </div>
        <BModal size="xl" title="Жагсаалт харах" @hidden="StudentScorelistModal = false" ok-only="true" ok-title="Хаах"
          ok-variant="light" v-model="StudentScorelistModal">

          <div v-if="StudentScorelistModal && scorelistprogramID != 0" class="">
            <div class="row scorelist-form mb-4">
              <div class="col-md-7  order-md-1">
                <div class="">
                  <table class="table table-bordeless">
                    <template v-for="proname in programnames.filter(x => x.programId == scorelistprogramID)"
                      :key="proname">
                      <tr>
                        <td width="40%">
                          <p><strong>Бүрэлдэхүүн/Салбар сургууль</strong></p>
                        </td>
                        <td width="60%">{{ proname.abbrevm }}</td>
                      </tr>
                      <tr>
                        <td>
                          <p><strong>Хөтөлбөр</strong></p>
                        </td>
                        <td>{{ proname.programName }}</td>
                      </tr>
                    </template>
                  </table>
                </div>
                <div class="row onmobile">
                  <div class="card mb-4">
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
                <div class="row g-3 align-items-center">
                  <div class="col-auto" id="mobilehide">
                    <label for="inputPassword6" id="inputPassword6" class="col-form-label">Бүртгэлийн дугаар:</label>
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" @keyup="searchlisttable" v-model="searchnumber"
                      placeholder="Бүртгэлийн дугаараар хайх">
                  </div>
                </div>
              </div>
              <div class="ondesktop col-md-5 order-first order-md-2">
                <div class="card mb-4">
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
            <div class="row overflow-auto" v-if="!isloadlisttable">

              <table id="listdatatable" class=" table table-hover  w-100" cellspacing="0">
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
                  <tr v-for="(row, index) in listtableData" :class="myusername == row.username ? 'table-primary' : ''"
                    :key="row">
                    <td class="text-center"> {{ Number(index) + 1 }}</td>
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
                </tbody>
              </table>
            </div>
            <div v-else>
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary-color" role="status">
                  <span class="visually-hidden">Ачаалж байна...</span>
                </div>
              </div>
            </div>
          </div>
        </BModal>
        <BModal centered size="lg" title="Элсэх эрх баталгаажуулах" @hidden="HideProgramConfirmModal" hide-footer="true"
          v-model="ProgramConfirmModal">
          <div v-if="ProgramConfirmModal">
            <div class="alert alert-primary mb-3 alert-dismissible fade show">
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
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div class="row mb-4">
              <div class="col-md-12">
                <template v-for="proname in programnames.filter(x => x.programId == selectedprogram.pid)" :key="proname">
                  <p> Та <strong> {{ proname.location }} </strong> байрлах
                    <span v-if="proname.parentUnitName != ''">
                      <strong> {{ proname.parentUnitName }} </strong> -ийн
                    </span>
                    <strong> {{ proname.unitName }} </strong>
                    -ийн
                    <strong class="text-primary-color"> {{ proname.programName }} </strong> хөтөлбөрт элсэх эрхээ
                    баталгаажуулахыг зөвшөөрч байна
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
              <button @click="SaveProgram" :disabled="agreement == false || isloading2" class="btn btn-primary m-1">
                <span v-if="!isloading2">Баталгаажуулах
                </span>
                <span v-if="isloading2" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span v-if="isloading2" class="sr-only"> Түр хүлээнэ үү</span>
              </button>
            </div>
          </div>
        </BModal>
        <BModal v-model="WarningModal" title="Анхааруулга" @hidden="WarningModal = false" centered
          ok-title="Ахиж харуулахгүй" ok-variant="primary" cancel-title="Хаах" cancel-variant="light"
          @ok="WarningModalOk">
          <div v-if="WarningModal" class="">
            <strong> Элсэх эрх баталгаажуулах төлбөр төлөхдөө: </strong>
            <ul>
              <li>
                <strong>Онлайнаар төлөх </strong> бол баталгаажуулах эцсийн хугацаа дуусахаас
                багадаа <strong>10 минутын өмнө</strong> сонголтоо хийж баталгаажуулалтаа эхлүүлэхийг зөвлөж байна.
              </li>
              <li>
                <strong>Дансны үлдэгдэл ашиглан төлөх</strong> бол баталгаажуулах эцсийн хугацаа
                дуусахаас багадаа <strong>30 минутын</strong> өмнө өөрийн дансаа цэнэглэж,
                баталгаажуулахыг зөвлөж байна. Дансны үлдэгдэл цэнэглэх зааврыг
                <BalanceHelpModal text="энд" vclass="text-primary-color" /> дарж харна уу.
              </li>
            </ul>
          </div>
        </BModal>
      </div>
      <div v-if="management.Status != 1 && chosenStatus != 1" class="alert alert-danger mt-4">
        <div class="row">
          <div class="col">
            <div class="alert-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 8V12M12 16H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="#E02B1D" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div style="margin-left:40px">
              <span>{{ management.Message }}</span>
              <span v-if="management.Status == 2"> Эхлэх хугацаа: <strong> {{ management.managementDate }}</strong><br>
                <ScorelistModal :isshowbtnprop="true" btn_variant="btn btn-primary mt-2" btn_text="Онооны жагсаалт харах"/>
              </span>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import moment from 'moment';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import axios from "axios";
import VueCountdown from '@chenfengyuan/vue-countdown';
import { BModal } from "bootstrap-vue-3";
DataTable.use(DataTablesCore);
import congratulation from "./Congratulation.vue";
import { toggle } from "@/store/index.js";
import BalanceHelpModal from "../BalanceHelpModal.vue";
import confirmloading from "./Confirmloading.vue";
import ScorelistModal from "./ScorelistModal.vue";
export default {
  mixins: [toggle],
  components: {
    BModal,
    VueCountdown,
    congratulation,
    BalanceHelpModal,
    confirmloading,
    ScorelistModal
  },
  data: function () {
    return {
      table: '#datatable',
      datatableobj: null,
      tableData: [],
      isloaddatatable: true,
      selectedprogramID: 0,
      selectedprogram: 0,
      units: [],
      selectedunits: [],
      selectedstatus: 999,
      selectedSeats: 999,
      searchtxt: "",
      isloading: false,
      isloading2: false,
      counting: false,
      ProgramConfirmModal: false,
      agreement: false,
      programnames: [],
      combis: [],
      chosenStatus: 0,
      chosenschoolname: '',
      chosenparentname: '',
      chosenprogramname: '',
      management: {
        Status: 999,
        Message: '',
        managementDate: ''
      },
      lastupdatedate: moment(new Date()).format('hh:mm'),
      WarningModal: false,

      // Жагсаалт харах table
      StudentScorelistModal: false,
      scorelistprogramID: 0,
      listtable: '#listdatatable',
      listdatatableobj: null,
      listtableData: [],
      isloadlisttable: true,
      myusername: "",
      totalSeats: 0,
      choseSeats: 0,
      remainingSeats: 0,
      searchnumber: "",

      //isloadingpage
      isloadingpage: false
    }
  },

  mounted() {
    if (localStorage.getItem('iscallapi') && this.isExpired()) {
          this.isloadingpage = true;
        } else {
          this.myusername = localStorage.getItem('username');
          var localprograms = localStorage.getItem('programs');
          //localStorage.removeItem("ResponsePrograms");
          if (localprograms != null && localprograms != '') {
            this.programnames = JSON.parse(localprograms);
            this.combis = JSON.parse(localStorage.getItem('combis'));
          } else {
            this.$toast.open({
              message: 'Холболт амжилтгүй та ахин нэвтэрнэ үү!',
              type: 'warning'
            });
          }
          this.datatabledraw();
          this.getunits();
          this.counting = true;
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
  methods: {
    // gettime(lastTime) {
    //   const now = new Date();
    //   var today = new Date(lastTime);
    //   today.setHours(today.getHours() + 8);

    //   return today - now;
    // },
    WarningModalOk() {
      var username= localStorage.getItem('username');
      localStorage.setItem('m'+username, "ok");
      this.WarningModal = false;
    },
    HideProgramConfirmModal() {
      this.ProgramConfirmModal = false;
      this.$router.go();
    },
    SaveProgram() { // Дансны үлдэгдэл хүрч байвал шууд сонгосон хөтөлбөрийг хадгалах
      this.isloading2 = true;
      axios.get("https://burtgel.num.edu.mn/buils/api/choose?pid=" + this.selectedprogram.pid)
        .then(res => {
          this.isloading2 = false;
          if (res.data == "Accept") {
            this.ProgramConfirmModal = false;
            this.isloadingpage=true; // Та хүлээнэ үү хуудсын харуулах.
            this.Startnotif(this.selectedprogram.pid,false);
          } else {
            // test хийж байна.
            //this.Startnotif(this.selectedprogram.pid);
            this.$toast.open({
              duration: 5000,
              message: 'Таны хүсэлтийг боловсруулах боломжгүй!',
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
    },
    ConfirmProgram() {
      this.isloading = true;
      if (this.selectedprogram != 0) {
        axios.get("https://burtgel.num.edu.mn/buils/api/balance?pid=" + this.selectedprogram.pid)
          .then(res => {
            this.isloading = false;
            if (res.data.eli == true) {
              if (res.data.Balance >= this.selectedprogram.fee) {
                this.ProgramConfirmModal = true;
              } else {
                var confirmprogram = JSON.stringify({ selectedprogram: this.selectedprogram, ApplicantBalance: res.data.Balance });
                localStorage.setItem("confirmprogram", confirmprogram);
                this.$router.push({ name: "confirmpayment" });
              }
            } else {
              //Хөтөлбөр сонгох боломжгүй цуцлагдсан 
              // test хийж байна!
              //this.ProgramConfirmModal = true;
              var messagestr="";
              if(this.selectedprogram.status==1 && this.selectedprogram.remainingSeats >= this.selectedprogram.position)
              {
                 messagestr="Баталгаажуулах эцсийн хугацаа дууссан байна.Тухайн хөтөлбөрийг сонгох боломжгүй!";
              }else
              if(this.selectedprogram.status==1 && this.selectedprogram.remainingSeats < this.selectedprogram.position)
              {
                 messagestr="Үлдсэн хяналтын тоонд хараахан багтаагүй. Тухайн хөтөлбөрийг сонгох боломжгүй!";
              }else{
                messagestr="Тухайн хөтөлбөрийг сонгох боломжгүй!";
              }
              this.$toast.open({
                duration: 10000,
                message: messagestr,
                type: 'warning'
              });
              //Хөтөлбөр сонгох боломжгүй цуцлагдсан байвал Жагсаалт шинэчлэх
              //production ажиллан тест хийж байна!
              this.startCountdown();
            }
          }).catch(error => {
            this.isloading = false;
            this.$toast.open({
              message: 'Холболт амжилтгүй!',
              type: 'error'
            });
          });
        // this.$router.push({ name: "payment" });
      }
    },
    formatPrice(value) {
      let val = "" + value;
      return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    },
    dateTime(value) {
      return moment(new Date(value)).format('YYYY-MM-DD HH:mm:ss');
    },
    startCountdown() {
      this.selectedunits = [],
        this.selectedstatus = 999,
        this.selectedSeats = 999,
        this.searchtxt = "",
        this.datatableobj.clear();
      this.datatableobj.destroy();
      this.datatabledraw();
      this.counting = true;
      this.selectedprogramID = 0;
      this.selectedprogram = 0;
      this.lastupdatedate = moment(new Date()).format('hh:mm');
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
      this.selectedprogramID = programID;
      this.selectedprogram = this.tableData.filter(i => i.pid === programID)[0];
    },
    searchtable() {
      this.datatableobj.search(this.searchtxt).draw();
    },
    searchbyschool() {
      let searchunits = this.selectedunits.join('|');
      this.datatableobj.column(1).search(searchunits, true, false).draw();
    },
    searchbystatus() {
      if (this.selectedstatus != 999) {
        this.datatableobj.column(0).search("status_" + this.selectedstatus).draw();
      } else {
        this.datatableobj.column(0).search("").draw();
      }
    },
    searchbySeats() {
      if (this.selectedSeats != 999) {
        this.datatableobj.column(0).search("Seats_" + this.selectedSeats).draw();
      } else {
        this.datatableobj.column(0).search("").draw();
      }
    },
    datatabledraw() {
      this.isloaddatatable = true;
      axios.get("getApplicantList")
        .then(res => {
          if (res.data.status == 1) {

            this.isloaddatatable = false;

            this.management.Status = res.data.managementStatus;
            this.management.Message = res.data.managementMessage;
            if (res.data.managementDate != null && res.data.managementDate != 'undefined') {
             
              this.management.managementDate = res.data.managementDate;
            }
            this.chosenStatus = res.data.chosenStatus;
            if (this.chosenStatus == 1) // 1 байвал хөтөлбөр сонгосон тул баяр хүргэе харуулна!
            {
              let programnamelocal = this.programnames.filter(x => x.programId == res.data.chosenProgramId)[0];
              this.chosenschoolname = programnamelocal.unitName;
              this.chosenparentname = programnamelocal.parentUnitName;
              this.chosenprogramname = programnamelocal.programName;
            } else {
              if (this.management.Status == 1) {

                this.tableData = Object(res.data.result);

                var username= localStorage.getItem('username');
                if (localStorage.getItem('m'+username) != 'ok' && this.tableData.length>0) {
                  this.WarningModal = true;
                }
                this.makeTable();
              }
            }
          } else {
            this.isloaddatatable = false;
            this.$toast.open({
              duration: 10000,
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {
          this.isloaddatatable = false;
          this.$toast.open({
            message: 'Холболт амжилтгүй!',
            type: 'error'
          });
        });
    },
    getunits() {
      this.units = JSON.parse(localStorage.getItem('units'));
      // axios.get("getUnits")
      //   .then(res => {
      //     if (res.data.status == 1) {
      //       this.units = res.data.result;
      //     } else {
      //       this.$notify({
      //         title: "Бүрэлдэхүүн/салбар сургуулиар хайх",
      //         text: res.data.message,
      //         type: 'warn'
      //       });
      //     }
      //   }).catch(error => {
      //     this.$notify({
      //       title: "Холболт амжилтгүй!",
      //       text: error,
      //       type: 'error'
      //     });
      //   });
    },
    select: function () {
      this.allSelected = false;
    },
    makeTable() {
      this.$nextTick(function () {
        this.datatableobj = $(this.table).DataTable(
          {
            lengthMenu: [[5, 10, 25, 50], [5, 10, 25, 50]],
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
              lengthMenu: "Харуулах мөрийн тоо _MENU_",
              sInfo: "Нийт _TOTAL_ өгөгдлийн _START_ - _END_",
              paginate: {
                first: "First",
                last: "Last",
                next: "<i class='bi bi-chevron-right'></i>",
                previous: "<i class='bi bi-chevron-left'></i>"
              },
            },
            columnDefs: [
              { "orderable": false, "targets": [0, 2, 3, 6] }  // Disable search on first and last columns
            ]
          }
        );
      });
    },
    ShowStudentlistModal(program) {
      this.searchnumber = "";
      // this.selectedprogram = this.tableData.filter(i => i.pid === pid)[0];
      this.scorelistprogramID = program.pid;
      this.isloadlisttable = true;
      axios.get("getList?rid=" + program.rid + "&pid=" + program.pid)
        .then(res => {
          if (res.data.status == 1) {
            this.totalSeats = res.data.result.totalSeats;
            this.choseSeats = res.data.result.choseSeats;
            this.remainingSeats = res.data.result.remainingSeats;
            this.isloadlisttable = false;
            this.listtableData = res.data.result.applicants;
            this.listmakeTable();

          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {
          console.log(error);
          this.$toast.open({
            message: 'Холболт амжилтгүй!',
            type: 'error'
          });
        });

      this.StudentScorelistModal = true;
    },
    searchlisttable() {
      this.listdatatableobj.column(1).search(this.searchnumber).draw();
    },
    listmakeTable() {
      this.$nextTick(function () {
        this.listdatatableobj = $(this.listtable).DataTable(
          {
            lengthMenu: [[5, 10, 15, 25, 50, 100], [5, 10, 15, 25, 50, 100]],
            pageLength: 15,
            responsive: true,
            authwidth: true,
            aaSorting: [],
            dom: '<"top">rt<"bottom"<"row"<"col"l><"col-md-auto"i><"col-md-auto"p> >><"clear">',
            language: {
              url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/mn.json',
              search: "_INPUT_",
              searchPlaceholder: "",
              zeroRecords: 'Онооны жагсаалт хоосон байна.',
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
              //{ "orderable": false, "targets": [0] }  // Disable search on first and last columns
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
.slide-section .carousel .carousel__prev {
  left:-5px!important;
}
.slide-section .carousel .carousel__next {
  right:-5px!important;
}
.onmobile{
  display: none;
}
.ondesktop{
  display: block;
}
table.dataTable {
  border-collapse: collapse !important;
}

#datatable {
  border-collapse: collapse !important;
}

.counttable tr td {
  padding: 4px 0;
}

.btn-light:disabled {
  border-color: #B4BABF !important;
}

.table-success-color {
  border-bottom: 1px solid white;
}

.updatetime {
  font-size: 14px;
  color: #718096;
  font-weight: 400;
}

.controlnumber {
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  color: #009262;
  background: #F1FBF8;
  border: 1px solid #32C997;
  border-radius: 8px;
  padding: 4px;
  width: 100%;
}

.nocontrolnumber {
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  color: #718096;
  background: #F9F9F9;
  border: 1px solid #D8DFE6;
  border-radius: 8px;
  padding: 4px;
  width: 100%;
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

.breadcrumbs .bd-highlight:last-child {
  margin-right: 0px !important;
}

@media (max-width: 1199.98px) {
  .onmobile{
  display: block;
}
.ondesktop{
  display: none;
}

  #mobilehide {
    display: none;
  }

  .breadcrumbs .bd-highlight.hr {
    width: 40px;
  }

  .breadcrumbs .bd-highlight:last-child .cirle-number {
    margin-top: 0;
  }

  .breadcrumbs hr {
    width: 100%;
  }

  .breadcrumbs .bd-highlight {
    margin-right: 0px;
    width: 40%;
  }

  .justify-content-md-end .btn {
    margin-bottom: 5px;
  }

  .breadcrumbs .bd-highlight:first-child .cirle-number {
    float: none;
    margin-left: 32%;
  }

  .breadcrumbs .bd-highlight:last-child .cirle-number {
    float: none;
    margin-left: 38%;
  }

  .breadcrumbs p {
    padding-top: 5px;
    margin-left: 0px;
    text-align: center;
  }

  .breadcrumbs {
    padding: 20px 5px;
  }

  .breadcrumbs .inactive .cirle-number {
    margin-top: 15px;
  }
}</style>