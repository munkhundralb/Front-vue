<template>
  <div :class="iscontainer ? 'container my-5' : ''">
    <div class="fullheigth centered-content bg-white-section p-4">
      <div class="content-tittle mb-5">
        <h2><span class="title">Инфографик</span></h2>
      </div>

      <!-- <div class="alert alert-primary mb-5">
                        <div class="alert-icon">
                            <img src="../assets/appimg/alert-icon.svg" alt="" class="icon">
                        </div>
                        <div class="alert-content">
                            Тун удахгүй.
                        </div>
                    </div> -->
      <div ref="chartdiv">
        <div class="border rounded mb-4 pb-5">
          <h5 class="pt-4 text-center px-2">
            2023 онд элссэн элсэгчдийн тоо (Аймгаар)
          </h5>
          <p style="color: #89939e" class="text-center pb-2">
            Тухайн аймаг дээр дарснаар элсэгчдийн тоог харах боломжтой
          </p>
          <CountryMap />
        </div>
        
        <div class="border rounded mb-4 py-4 container">
          <h5 class="text-center">
            Бүрэлдэхүүн/салбар сургуулиудын хөтөлбөр
          </h5>
          <!-- <div style="color: #89939e" class="text-center">
              <p>
                Бүрэлдэхүүн/салбар сургуулийн хөтөлбөрүүдийг задлаж харах
                боломжтой
              </p>
            </div> -->
          <majorbubble />
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="border rounded pt-4 px-2">
              <h5 class="text-center">
                Нийт шалгуулагчдаас МУИС-д бүртгүүлж, элссэн элсэгчдийн тоо
              </h5>
              <examinee />
            </div>
          </div>
          <div class="col-md-6">
            <div class="border rounded pt-4 mb-4">
              <h5 class="avg text-center px-2">
                Элсэгчдийн тооцоолсон онооны дундаж
              </h5>
              <avarage />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="border rounded pt-4 pb-5 mb-4 px-2">
              <h5 class="text-center">
                Элсэгчдийн ЭШ-ын дундаж оноо (Хичээлээр)
              </h5>
              <div style="color: #89939e" class="text-center pb-6">
                <p>Сүүлийн гурван жилээр харах боломжтой</p>
              </div>
              <eec />
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="border rounded pt-4 pb-5">
              <h5 class="text-center mb-5 px-2">
                2023 онд элссэн элсэгчдийн хувь (Сургуулиар)
              </h5>
              <schools />
            </div>
          </div>
        </div>

        <div class="alert alert-primary mb-4">
          <b>Шалгуулагч</b> гэдэг нь ЭШ өгөхөөр БҮТ-д бүртгүүлсэн сурагчид
          <br />
          <b>Элсэгч</b> гэдэг нь МУИС-д элсэх эрх авсан бүртгүүлэгч
          <br />
          <b>Бүртгүүлэгч</b> гэдэг нь МУИС-д элсэх хүсэлт гаргаж буй
          шалгуулагчид
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import examinee from "./infograph/examinee.vue";
import schools from "./infograph/schools.vue";
import avarage from "./infograph/avarage.vue";
import eec from "./infograph/eec.vue";
import majorbubble from "./infograph/majorbubble.vue";
import CountryMap from "./infograph/countryMap.vue";
export default {
  name: "infograph",
  components: {
    majorbubble,
    schools,
    examinee,
    avarage,
    eec,
    CountryMap,
  },
  data() {
    return {
      iscontainer: false,
    };
  },
  mounted() {
    let currentroutname = this.$route.name;
    if (currentroutname == "infograph") {
      this.iscontainer = true;
    } else {
      this.iscontainer = false;
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 22px;
  text-align: center;
}
</style>
