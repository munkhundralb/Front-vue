<template>
    <BModal  size="lg" centered title="Шилдэг, МУИС-ийн харьяа ерөнхий боловсролын ахлах сургууль ангиллаар элсэгчид" @hidden="HideScorelistTopModal"
    v-model="ScorelistTopModal"  ok-only="true" ok-title="Хаах" ok-variant="light" >
        <div v-if="ScorelistTopModal">
        <div class="row overflow-auto">
            <table  class="table table-responsive table-stripedmy table-borderless">
          <thead>
            <tr>
              <th>Бүртгэлийн дугаар</th>
              <th>Сонгосон хөтөлбөр</th>
              <th>Элссэн ангилал</th>
            </tr>
          </thead>
          <tbody >
            <template v-for="(row) in Scorelist" :key="row">
            <tr>
              <td class="text-center">
                {{ row.username }}
              </td>
              <td >
                <p>{{ row.pname }}</p>
                                <small>{{ row.abbrevm }}</small>
              </td>
              <td >
                {{ row.term }}
              </td>
            </tr>
        </template>
          </tbody>
        </table>
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
export default {
    name: "ScorelistModal",
    props: {
        isshowbtnprop:Boolean,
        btn_variant: String,
        btn_text: String
    },
    components: {
        BModal
    },
    data() {
        return {
            ScorelistTopModal: false,
            Scorelist:[]
        };
    },
    mounted() {

    },
    created() {
        if(this.ScorelistTopModal)
        {
        this.ScorelistTopModal=false;
     }
    },
    methods: {
        HideScorelistTopModal(){
            this.ScorelistTopModal=false;
        },
        ShowScorelistModal() {
                this.getscorelist();
                this.ScorelistTopModal = true;
        },
        getscorelist(){
        axios.get("getListBest")
          .then(res => {
            if (res.data.status == 1) {
                this.Scorelist = res.data.result;
            } else {
              this.$toast.open({
                            message: res.data.message,
                            type: 'warning'});
          }
        }).catch(error => {
            console.log(error);
          this.$toast.open({
                        message: 'Холболт амжилтгүй!',
                        type: 'error'});
        });
        },
    }

};
</script>
<style >

</style>