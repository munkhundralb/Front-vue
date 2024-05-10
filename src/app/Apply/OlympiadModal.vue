<template>
  <span class="click-primary-color" @click="showmodal"> энд </span>
      <BModal id="OlympiadtableModal" size="lg" centered title="Олон улс, улсын олимпиадын нөхцөлөөр элсүүлэх жагсаалт"
    @hidden="OlympiadtableModal = false" ok-only="true" ok-title="Хаах" ok-variant="light" 
    v-model="OlympiadtableModal">
    <div v-if="OlympiadtableModal" class="overflow-auto">
    <table  class="table table-responsive table-stripedmy table-borderless">
      <thead>
        <tr>
          <th>№</th>
          <th class="text-center">Бүрэлдэхүүн/салбар сургууль</th>
          <th class="text-center" style=" width: 30%; ">Олимпиадын чиглэл (“Суурь” шалгалтад заагдсан хичээл)</th>
          <th class="text-center" style=" width: 20%; ">Суурь шалгалт</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>1</td>
          <td>Шилжлэх ухааны сургуулийн
            Байгалийн ухааны салбар хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Биологи</li>
              <li> Газарзүй</li>
              <li> Математик</li>
              <li> Физик</li>
              <li> Хими</li>
            </ul>
          </td>
          <td>Оролцогч</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Шилжлэх ухааны сургуулийн
            Нийгмийн ухааны салбар хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Математик</li>
              <li> Нийгэм судлал</li>
              <li> Түүх</li>
              <li> Англи хэл</li>
            </ul>
          </td>
          <td>1-ээс 3-р байр</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Шилжлэх ухааны сургуулийн
            Хүмүүнлэгийн ухааны салбар хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Англи хэл</li>
              <li> Монгол хэл</li>
              <li> Орос хэл</li>
              <li> Түүх</li>
              <li> Математик</li>
              <li> Нийгэм судлал</li>
            </ul>
          </td>
          <td>Оролцогч</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Мэдээллийн технологи, электроникийн сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Математик</li>
              <li> Физик</li>
              <li> Мэдээлэл зүй</li>
            </ul>
          </td>
          <td>1-ээс 3-р байр</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Инженер, технологийн сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Биологи</li>
              <li> Газарзүй</li>
              <li> Математик</li>
              <li> Физик</li>
              <li> Хими</li>
            </ul>
          </td>
          <td>Оролцогч</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Бизнесийн сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Математик</li>
            </ul>
          </td>
          <td>1-ээс 3-р байр</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Улс төр судлал, олон улсын харилцаа, нийтийн удирдлагын сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Англи хэл</li>
              <li> Орос хэл</li>
              <li> Математик</li>
              <li> Нийгэм судлал</li>
            </ul>
          </td>
          <td>1-ээс 3-р байр</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Хууль зүйн сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li>Нийгэм судлал</li>
            </ul>
          </td>
          <td>1-ээс 3-р байр</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Завхан аймаг дахь МУИС-ийн бизнес, мэдээллийн технологийн сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Математик</li>
              <li> Нийгэм судлал</li>
              <li> Физик</li>
              <li> Хими</li>
              <li> Газарзүй</li>
            </ul>
          </td>
          <td>Оролцогч</td>
        </tr>
        <tr>
          <td>10</td>
          <td>МУИС-ийн зүүн бүсийн сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Англи хэл</li>
              <li> Орос хэл</li>
              <li> Математик</li>
              <li> Монгол хэл</li>
              <li> Нийгэм судлал</li>
              <li> Физик</li>
            </ul>
          </td>
          <td>Оролцогч</td>
        </tr>
        <tr>
          <td>11</td>
          <td>МУИС-ийн баруун бүсийн сургуулийн хөтөлбөрүүд</td>
          <td>
            <ul>
              <li> Англи хэл</li>
              <li> Математик</li>
              <li> Монгол хэл</li>
              <li> Нийгэм судлал</li>
              <li> Физик</li>
              <li> Хими</li>
            </ul>
          </td>
          <td>Оролцогч</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-primary">
      Монголын сайхан бичигтэн улсын уралдааны 1-ээс 3-р байрт шалгарсан ерөнхий боловсролын сургуулийн төгсөгчийг Шинжлэх ухааны сургуулийн Хүмүүнлэгийн ухааны салбарын хөтөлбөрт суралцуулна.
    </div>
  </div>
  </BModal>
</template>

<script>
import { BModal } from "bootstrap-vue-3";

export default {
    name: "OlympiadModal",
    components: {
        BModal,
    },
    data() {
        return {
          OlympiadtableModal: false
        };
    },
    methods:{
      showmodal(){
        this.OlympiadtableModal = true;
      }
    }
};
</script>