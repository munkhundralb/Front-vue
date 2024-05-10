<template>
    <BModal id="balancehelpModal" centered title="Данс цэнэглэх заавар" @hidden="balancehelpModal = false" size="lg"
        ok-only="true" ok-title="Хаах" ok-variant="light" v-model="balancehelpModal">
        <div v-if="balancehelpModal">
            <p>
                Данс цэнэглэхдээ интернэт банк, банкны аппликейшн, мобайл банк ашиглах
                болон банкны теллерээр үйлчлүүлж МУИС-ийн харилцах данс руу
                төлбөр (бүртгэлийн хураамж, элсэх эрх баталгаажуулах төлбөр)-ийг шилжүүлнэ.
                Шилжүүлэхдээ гүйлгээний утга/төлбөрийн зориулалт хэсэгт БҮТ-ийн
                <strong>бүртгэлийн дугаар</strong> заавал бичнэ. Жишээ нь: 33ххххххх
            </p>
            <p class="text-center mt-3">МУИС-ийн харилцах данс</p>
            <table class="table table-responsive table-stripedmy table-borderless">
                <thead>
                    <tr style="background-color: #F3F6FA;" class="row-odd">
                        <th>
                            <p>№</p>
                        </th>
                        <th>
                            <p>Банк</p>
                        </th>
                        <th>
                            <p>Дансны дугаар</p>
                        </th>
                        <th>
                            <p>Дансны нэр</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="row-even">
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <p>Хаан банк</p>
                        </td>
                        <td>
                            <p>5041355868</p>
                        </td>
                        <td>
                            <p>Монгол Улсын Их Сургууль</p>
                        </td>
                    </tr>
                    <tr class="row-odd">
                        <td>
                            <p>2</p>
                        </td>
                        <td>
                            <p>Голомт банк</p>
                        </td>
                        <td>
                            <p>1102927741</p>
                        </td>
                        <td>
                            <p>МУИС ТӨВЛӨРСӨН САН</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        <div class="alert alert-primary">
            <div class="alert-icon">
                <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
            </div>
            <div class="alert-content">
                <ul class="mb-0">
                    <li>
                        Гүйлгээний утга/төлбөрийн зориулалт хэсэгт БҮТ-ийн бүртгэлийн дугаараа
                        зөв бичиж шилжүүлсэн тохиолдолд 10-20 минутын дотор таны төлсөн төлбөр
                        <strong>Хувийн мэдээлэл</strong> цэсийн <strong>Дансны үлдэгдэл</strong> хэсэгт харагдана.
                    </li>
                    <li>
                        Хэрвээ БҮТ-ийн бүртгэлийн дугаараа буруу бичиж шилжүүлсэн тохиолдолд
                        МУИС-ийн Цахим Шилжилтийн Бодлогын Газарт хандана уу
                        (<a href="https://manual.num.edu.mn/bachelor/docs/build/html/contact.html" target="blank">Холбоо
                            барих</a>)
                    </li>
                </ul>
            </div>

        </div>
    </div>
</BModal>
<span :class="vclass" id="balanceshowspan" @click="showmodal"> {{text}} </span></template>
<script>
import { BModal } from "bootstrap-vue-3";

export default {
    name: "BalanceHelpModal",
    props: {
        text: String,
        vclass: String
    },
    components: {
        BModal,
    },
    data() {
        return {
            balancehelpModal: false
        };
    },
    methods:{
      showmodal(){
        this.balancehelpModal = true;
      }
    }
};
</script>
<style scoped>
#balanceshowspan{
    cursor: pointer;
}
</style>