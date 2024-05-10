<template>
    <BModal id="ApplywarningModal" size="lg" title="Бүртгүүлэгчдийн анхааралд" @hidden="ApplywarningModal = false"
        no-close-on-backdrop hide-footer="true" v-model="ApplyWarningModal">
        <div v-if="ApplyWarningModal">
            <p> МУИС нь Боловсролын үнэлгээнээс төвөөс Элсэлтийн шалгалтын мэдээлэл
                татан авах, элсэх эрх олгох үйл ажиллагааг зохион байгуулах, тушаал шийдвэр гаргах,
                боловсролын асуудал эрхэлсэн төрийн захиргааны төв байгууллагын системд бүртгэх,
                статистик мэдээ, тайлан гаргах зэрэг элсэлтийн үйл ажиллагаанд Таны дараах хувийн
                мэдээллийг цуглуулж, боловсруулан ашиглах болно. Үүнд:
            </p>
            <ul class="mb-2">
                <li>Эцэг (эх)-ийн нэр</li>
                <li>Өөрийн нэр</li>
                <li>Хүйс</li>
                <li>Иргэншил</li>
                <li>Төрсөн он сар өдөр</li>
                <li>Регистрийн дугаар</li>
                <li>Бүрэн дунд боловсролын гэрчилгээний дугаар</li>
                <li>Цахим шуудангийн хаяг, утасны дугаар</li>
                <li>Яаралтай үед холбоо барих хүний овог нэр, утасны дугаар, цахим шуудангийн хаяг</li>
            </ul>
            <p>
                Таны зөвшөөрсөн хувийн мэдээллийг МУИС-д бүртгүүлж эхэлснээс хойш элсэлтийн үйл ажиллагаанд
                болон элсэлтийн тайлан мэдээлэлтэй холбоотойгоор 3 жилийн хугацаанд хадгалан, ашиглах болно.
            </p>
            <p>
                МУИС-ийн дотоодод ашигладаг мэдээллийн системд хувийн мэдээллийг бүртгэх ба Таны ЭШ-ын
                бүртгэлийн дугаар, ЭШ-ын оноо болон тооцоолсон онооны жагсаалт нь элсэх эрх олгох үйл
                ажиллагааны хугацаанд нийтэд ил тод байна.
            </p>

            <div class="alert alert-primary mt-3">
                <div class="alert-icon">
                    <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
                </div>
                <div class="alert-content ms-5">
                    <p class="mb-2"><strong>Санамж</strong></p>
                    <p>МУИС-д элсэхийг хүссэн иргэн нь элсэлтийн журам, элсэлтийн системийн гарын авлагатай заавал
                        танилцсан байх шаардлагатай.
                        Мэдээлэлтэй бүрэн танилцаагүйгээс үүсэх асуудлыг бүртгүүлэгч өөрөө хариуцна.
                    </p>
                    <ul class="mb-0">
                        <li> Бакалаврын өдрийн хөтөлбөрт элсүүлэх журамтай танилцах бол <router-link target="_blank"
                                to="/juram"><strong>энд </strong></router-link> дарна уу.
                        </li>
                        <li>Системийн гарын авлагатай танилцах бол <a target="_blank"
                                href="https://manual.num.edu.mn/bachelor/docs/build/html/index.html"><strong>энд
                                </strong></a> дарна уу.
                        </li>
                    </ul>
                </div>
            </div>
            <p>
                Та МУИС-д хувийн мэдээллээ дээрх зорилгоор өгөх, ашиглуулахыг зөвшөөрч байна уу?
            </p>
            <div class="form-check mb-3 mt-3">
                <input v-model="agreement1" name="agreement1" class="form-check-input" type="checkbox"
                    id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    <strong>Тийм. Зөвшөөрч байна</strong>
                </label>
            </div>
            <p>
                Та элсэлтийн журам болон системийн гарын авлагатай танилцсан уу?
            </p>

            <div class="form-check mb-3 mt-3">
                <input v-model="agreement2" name="agreement2" class="form-check-input" type="checkbox" value=""
                    id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                    <strong>Тийм. Танилцсан</strong>
                </label>
            </div>

            <div class="modal-footer">
                <button @click="saveApplywarning" class="btn btn-primary  m-1"
                    :disabled="agreement1 == false || agreement2 == false">Хадгалах</button>
            </div>
        </div>
    </BModal>

    <BModal id="ContactModal" centered title="Холбоо барих мэдээлэл оруулах" @hidden="ContactModal = false"
        hide-footer="true" v-model="ContactModal">
        <div v-if="ContactModal">
            <div class="alert alert-primary mt-3">
                <div class="alert-icon">
                    <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
                </div>
                <div class="alert-content ms-5">
                    <p class="mb-0">Өөрийн цахим шуудан болон утасны дугаарыг зөв эсэхийг шалгана уу.
                    </p>
                </div>
            </div>

            <div id="contact-form " class="mb-5">
                <div class="mb-3">
                    <label for="email" class="form-label"><strong>Цахим шуудан<span
                                class="text-danger">*</span></strong></label>
                    <input type="email" id="email" name="email" v-model="email" placeholder="name@email.com" required
                        v-bind:class="{ 'form-control': true, 'is-invalid': !validEmail(email) && emailBlured }"
                        v-on:blur="emailBlured = true" />
                    <div class="invalid-feedback">Цахим шуудан буруу!</div>
                </div>
                <div class="mb-3">
                    <label for="phone"><strong>Утасны дугаар<span class="text-danger">*</span></strong></label>
                    <input type="phone" id="phone" class="form-control" name="phone" v-model="phone" placeholder="99999999"
                        required v-bind:class="{ 'form-control': true, 'is-invalid': !validPhone(phone) && phoneBlured }"
                        v-on:blur="phoneBlured = true" />
                    <div class="invalid-feedback">Утасны дугаар буруу!</div>
                </div>
            </div>
            <div class="modal-footer" style=" border: 0px; ">
                <button @click="savecontacts" class="btn btn-primary  m-1" :disabled="false">Хадгалах</button>
            </div>
        </div>
    </BModal>
    <button v-if="iscontactshowbtn" @click="showcontactmodal" class="btn btn-primary me-md-2"> Засах </button>
</template>

<script>
import { BModal } from "bootstrap-vue-3";
import axios from "axios";

export default {
    name: "WarningModal",
    props: {
        // isReadprop: Boolean,
        //ApplyWarningProp: Boolean,
        ApplyWarningProp: Boolean,
        ContactProp: Boolean,
        iscontactshowbtnprop: Boolean
    },
    components: {
        BModal,
    },
    data() {
        return {
            ApplyWarningModal: false,
            ContactModal: false,
            iscontactshowbtn: false,
            agreement1: false,
            agreement2: false,
            email: "",
            phone: "",
            emailBlured: false,
            phoneBlured: false,
            valid: false,
            submitted: false
        };
    },
    created() {
        this.ApplyWarningModal = this.ApplyWarningProp;
        this.ContactModal = this.ContactProp;
        this.iscontactshowbtn = this.iscontactshowbtnprop;
    },
    mounted() {

        //console.log('ApplyWarningModal:' + this.ApplyWarningModal);
        if (this.ContactModal) {
            this.getApplicantContact();
        }
    },
    methods: {
        showcontactmodal() {
            this.ContactModal = true;
            this.getApplicantContact();
        },
        validate: function () {
            this.emailBlured = true;
            this.phoneBlured = true;
            if (this.validEmail(this.email) && this.validPhone(this.phone)) {
                this.valid = true;
            }
        },
        validEmail: function (email) {
            var re = /(.+)@(.+){2,}\.(.+){2,}/;
            return re.test(email.toLowerCase());
        },
        validPhone: function (phone) {
            var re = /^\d{8,12}$/;
            return re.test(phone.toLowerCase());
        },
        saveApplywarning() {
            if (this.agreement1 && this.agreement2) {
                const article = {};
                axios.post("approveCondition", article)
                    .then(res => {
                        if (res.data.status == 1) {
                            this.ApplyWarningModal = false;
                            this.ContactModal = true;
                            this.getApplicantContact();
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
        },
        getApplicantContact() {
            axios.get("getApplicantContact")
                .then(res => {
                    if (res.data.status == 1) {
                        this.email = res.data.result.email;
                        this.phone = res.data.result.phoneNumber;
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
        savecontacts() {
            //save data
            this.validate();
            if (this.valid) {
                const article = { email: this.email, phoneNumber: this.phone };
                axios.post("changeApplicantContact", article)
                    .then(res => {
                        if (res.data.status == 1) {
                            this.ContactModal = false;
                            //this.$router.go();
                            if (this.iscontactshowbtn) {
                                //console.log(this.iscontactshowbtn);
                                this.$parent.getApplicantInfo();
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

            }
        }

    },
};
</script>
<style >
#ApplywarningModal .btn-close {
    display: none !important;
}
</style>