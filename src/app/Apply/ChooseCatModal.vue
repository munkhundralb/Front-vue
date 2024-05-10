<template>
    <BModal id="ApplywarningModal" size="lg" title="Элсэх ангилал сонгох"  hide-footer="true"
        v-model="showChooseCatModal">

<div class="form-check mb-4">
  <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat1" value="1" v-model="choosecategory" checked>
  <label class="form-check-label" for="choosecat1">
    <strong>Үндсэн</strong>
    <p>Доорх нөхцлүүдэд хамаарахгүй бүртгүүлэгч энэ ангиллаар бүртгүүлнэ.</p>
  </label>

</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat2" value="2" v-model="choosecategory">
  <label class="form-check-label" for="choosecat2">
    <strong>Олимпиад</strong>
    <div class="alert alert-primary mt-1">
        <strong>Журмын 5.7.1.</strong> БШУЯ-аас тогтоосон Олон улсын олимпиадад оролцож 1-ээс 3-р байр эзэлсэн, 
        Улсын олимпиадад оролцож энэ журмын Хүснэгт 2-т заасан нөхцөлийг хангасан ерөнхий боловсролын 
        сургуулийн төгсөгчийг тухайн чиглэлээр шууд элсүүлнэ.
        Хүснэгт 2-ийг <span> энд </span> дарж харна уу.
    </div>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="choosecatraddio" id="choosecat3" value="3" v-model="choosecategory">
  <label class="form-check-label" for="choosecat3">
    <strong>Англи хэлний олон улсын шалгалт</strong>
    <div class="alert alert-primary mt-1">
        <strong>Журмын 5.7.1.</strong> Англи хэлний олон улсын шалгалтын IELTS 5, TOEFL iBT 45, PTE 40.8-аас дээш 
        оноотой бүртгүүлэгчдийг гүйцэтгэлийн хувиар жагсааж, эхний 10 байр эзэлсэн 
        бүртгүүлэгчийг ШУС-ийн Хүмүүнлэгийн ухааны салбарт шууд элсүүлнэ.
    </div>
  </label>
</div>
<!-- <div>Picked: {{ choosecategory }}</div> -->
<div class="modal-footer" style=" border: 0px; ">
            <button @click="saveCategory" class="btn btn-primary  m-1"
                :disabled="false">Үргэлжлүүлэх</button>
        </div>
    </BModal>
</template>

<script>
import { BModal } from "bootstrap-vue-3";

export default {
    name: "ChooseCatModal",
    components: {
        BModal,
    },
    data() {
        return {
            showChooseCatModal: true,
            categoryID: 1
        };
    },
    methods:{
        saveCategory(){
            console.log(this.choosecategory);
        }
    }
};
</script>