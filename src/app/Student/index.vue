<template>
  <div class="fullheigth centered-content bg-white-section p-4">
    <div class="content-tittle mb-4">
      <h2>
        <span class="title">Оюутан болох</span>
      </h2>
    </div>
    <div v-if="management.Status == 1 && !stepresult.student" class="formdiv">
      <step :stepresult="stepresult" />
      <div class="alert alert-primary mb-4 alert-dismissible fade show" role="alert">
        <div class="alert-icon">
          <img src="@/assets/appimg/alert-icon.svg" alt="" class="icon">
        </div>
        <div class="alert-content">
          <p class="ms-2"><strong>Санамж</strong></p>

          <ul class="mb-0">
            <li>
              <strong>Зөвхөн зураг хавсаргах</strong> бөгөөд хавсаргаж буй зургууд нь нэг ижил (JPEG/JPG/PNG) өргөтгөлтэй,
              зургийн хэмжээ 4mb-аас ихгүй байхыг анхаарна уу.
            </li>
            <li>
              Зураг хавсаргах хэсэг тус бүрд нэг нэг зураг оруулах боломжтой тул 1-ээс олон зураг
              оруулах бол нэгтгээд нэг зураг болгож оруулна уу.
              Жишээлбэл иргэний үнэмлэхийн зураг хавсаргах талбарт иргэний үнэмлэхийн
              ард болон урд талыг нэгтгэн нэг зураг болгож оруулна.
            </li>
          </ul>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div class="sform">
        <div class="row section personalinfo">
          <div class="col-md-12">
            <div class="alert alert-dark " role="alert">
              Хувийн мэдээлэл
            </div>
          </div>
          <div class="col-md-8">
            <div class="row mb-2">
              <label for="register_mn1" class="col-sm-6 col-form-label">Регистрийн дугаар (Монгол)</label>
              <div class="col-sm-6">
                <input type="text" :minlength="2" :maxlength="60" class="form-control" @input="updateForm()"
                  v-model="form.register_mn" required disabled>
              </div>
            </div>
            <div class="row mb-2">
              <label for="register_en" class="col-sm-6 col-form-label">Регистрийн дугаар (Англи)<span
                  class="text-danger">*</span> </label>
              <div class="col-sm-6">
                <input type="text" :minlength="2" :maxlength="12"
                  :class="{ 'form-control': true, 'is-invalid': !validengname(form.register_en) && blurform.register_en }"
                  v-on:blur="blurform.register_en = true" @input="updateForm()" v-model="form.register_en">
                <div class="invalid-feedback">
                  Зөвхөн латин үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label for="register_en" class="col-sm-6 col-form-label">Эцэг/эхийн нэр (Монгол) </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" :minlength="2" :maxlength="60" @input="updateForm()"
                  v-model="form.lastname_mn" disabled>
              </div>
            </div>
            <div class="row mb-2">
              <label for="lastname_mn" class="col-sm-6 col-form-label">Эцэг/эхийн нэр (Англи)<span
                  class="text-danger">*</span> </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" :minlength="2" :maxlength="60"
                  :class="{ 'form-control': true, 'is-invalid': !validengname(form.lastname_en) && blurform.lastname_en }"
                  v-on:blur="blurform.lastname_en = true" @input="updateForm()" v-model="form.lastname_en">
                <div class="invalid-feedback">
                  Зөвхөн латин үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label for="lastname_en" class="col-sm-6 col-form-label">Өөрийн нэр (Монгол) </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" :minlength="2" :maxlength="60" @input="updateForm()"
                  v-model="form.firstname_mn" disabled>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_mn" class="col-sm-6 col-form-label">Өөрийн нэр (Англи)<span
                  class="text-danger">*</span>
              </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" :minlength="2" :maxlength="60"
                  :class="{ 'form-control': true, 'is-invalid': !validengname(form.firstname_en) && blurform.firstname_en }"
                  v-on:blur="blurform.firstname_en = true" @input="updateForm()" v-model="form.firstname_en">
                <div class="invalid-feedback">
                  Зөвхөн латин үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label">Ургийн овог (Монгол)<span
                  class="text-danger">*</span>
              </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" :minlength="2" :maxlength="60"
                  :class="{ 'form-control': true, 'is-invalid': !validmonname(form.urgiinOvog_mn) && blurform.urgiinOvog_mn }"
                  v-on:blur="blurform.urgiinOvog_mn = true" @input="updateForm()" v-model="form.urgiinOvog_mn">
                <div class="invalid-feedback">
                  Зөвхөн кирилл үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label">Ургийн овог (Англи)<span
                  class="text-danger">*</span>
              </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" :minlength="2" :maxlength="60"
                  :class="{ 'form-control': true, 'is-invalid': !validengname(form.urgiinOvog_en) && blurform.urgiinOvog_en }"
                  v-on:blur="blurform.urgiinOvog_en = true" @input="updateForm()" v-model="form.urgiinOvog_en">
                <div class="invalid-feedback">
                  Зөвхөн латин үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label">Хүйс </label>
              <div class="col-sm-6">
                <select class="form-select" @change="updateForm()" v-model="form.gender" disabled>
                  <option :value="1">Эрэгтэй</option>
                  <option :value="2">Эмэгтэй</option>
                </select>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label">Үндэс угсаа<span class="text-danger">*</span>
              </label>
              <div class="col-sm-3">
                <select class="form-select" @change="changeundesUgsaa_uls()" v-model="form.undesUgsaa_uls">
                  <option v-for="item in Nationality.filter(x => x.id == x.belongs)" :key="item" :value="item.id">
                    {{ item.nationalitym }}
                  </option>
                </select>
              </div>
              <div class="col-sm-3">
                <select class="form-select" @change="updateForm()" v-model="form.undesUgsaa"
                  :disabled="form.undesUgsaa_uls == 46">
                  <option
                    v-for="item in Nationality.filter(x => x.belongs == form.undesUgsaa_uls && x.id != form.undesUgsaa_uls)"
                    :key="item" :value="item.id">
                    {{ item.nationalitym }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label">Иргэншил<span class="text-danger">*</span>
              </label>
              <div class="col-sm-6">
                <select class="form-select" @change="updateForm()" v-model="form.irgenshil">
                  <option v-for="item in Country" :key="item" :value="item.countryID">
                    {{ item.countrym }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label">Харьяалал(Төрсөн газар)<span
                  class="text-danger">*</span> </label>
              <div class="col-sm-3">
                <select :class="{ 'form-select': true, 'is-invalid': blurform.tursun_aimag && form.tursun_aimag == -1 }"
                  @change="form.tursun_sum = -1; updateForm()" v-model="form.tursun_aimag">
                  <option value="-1" disabled selected>Хот/аймаг</option>
                  <option v-for="item in LocalArea.filter(x => x.id == x.belongs)" :key="item" :value="item.id">
                    {{ item.typem }}
                  </option>
                </select>
              </div>
              <div class="col-sm-3">
                <select :class="{ 'form-select': true, 'is-invalid': blurform.tursun_sum && form.tursun_sum == -1 }"
                  @change="updateForm()" v-model="form.tursun_sum">
                  <option value="-1" disabled selected>Дүүрэг/сум</option>
                  <option v-for="item in LocalArea.filter(x => x.belongs == form.tursun_aimag && x.id != form.tursun_aimag)"
                    :key="item" :value="item.id">
                    {{ item.typem }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label">Оршин суугаа хаяг<span
                  class="text-danger">*</span>
              </label>
              <div class="col-sm-3">
                <select
                  :class="{ 'form-select': true, 'is-invalid': blurform.orshinSuugaa_aimag && form.orshinSuugaa_aimag == -1 }"
                  @change="form.orshinSuugaa_sum = -1; updateForm()" v-model="form.orshinSuugaa_aimag">
                  <option value="-1" disabled selected>Хот/аймаг</option>
                  <option v-for="item in LocalArea.filter(x => x.id == x.belongs)" :key="item" :value="item.id">
                    {{ item.typem }}
                  </option>
                </select>
              </div>
              <div class="col-sm-3">
                <select
                  :class="{ 'form-select': true, 'is-invalid': blurform.orshinSuugaa_sum && form.orshinSuugaa_sum == -1 }"
                  @change="form.orshinSuugaa_horoo = -1; updateForm()" v-model="form.orshinSuugaa_sum">
                  <option value="-1" disabled selected>Дүүрэг/сум</option>
                  <option
                    v-for="item in LocalArea.filter(x => x.belongs == form.orshinSuugaa_aimag && x.id != form.orshinSuugaa_aimag)"
                    :key="item" :value="item.id">
                    {{ item.typem }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mb-2">
              <label for="firstname_en" class="col-sm-6 col-form-label"> </label>
              <div class="col-sm-3">
                <select
                  :class="{ 'form-select': true, 'is-invalid': blurform.orshinSuugaa_horoo && form.orshinSuugaa_horoo == -1 }"
                  @change="updateForm()" v-model="form.orshinSuugaa_horoo">
                  <option value="-1" disabled selected>Хороо/баг</option>
                  <option
                    v-for="item in LocalArea.filter(x => x.belongs == form.orshinSuugaa_sum && x.id != form.orshinSuugaa_sum)"
                    :key="item" :value="item.id">
                    {{ item.typem }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-6 col-form-label"> </label>
              <div class="col-sm-6">
                <textarea
                  :class="{ 'form-control': true, 'is-invalid': !validaddress(form.orshinSuugaa_hayag) && blurform.orshinSuugaa_hayag }"
                  v-on:blur="blurform.orshinSuugaa_hayag = true" v-model="form.orshinSuugaa_hayag"
                  placeholder="Хаяг"> </textarea>
                <div class="invalid-feedback">
                  Зөвхөн кирилл үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-6 col-form-label">Утасны дугаар<span class="text-danger">*</span> </label>
              <div class="col-sm-6">
                <input type="text" class="form-control" :minlength="8" :maxlength="12"
                  :class="{ 'form-control': true, 'is-invalid': !validPhone(form.phoneNumber) && blurform.phoneNumber }"
                  v-on:blur="blurform.phoneNumber = true" @input="updateForm()" v-model="form.phoneNumber">
                <div class="invalid-feedback">
                  Утасны дугаар бичнэ үү!
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-6 col-form-label">Цахим шуудан<span class="text-danger">*</span> </label>
              <div class="col-sm-6">
                <input type="email" class="form-control" :minlength="2" :maxlength="100"
                  :class="{ 'form-control': true, 'is-invalid': !validEmail(form.email) && blurform.email }"
                  v-on:blur="blurform.email = true" @input="updateForm()" v-model="form.email">
                <div class="invalid-feedback">
                  Цахим шуудангийн хаягаа зөв бичнэ үү!
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <label for="register_en" class="col-sm-12 col-form-label">Цээж зураг<span class="text-danger">*</span>
            </label>
            <div style="max-width:200px;" :class="blurfiles.img_profile ? 'img-novalid' : 'img-yesvalid'">
              <base-image-input imagetypeprop="1" class="invalid" />
              <div class="invalid-feedback">
                Зураг оруулна уу!
              </div>
            </div>
          </div>
        </div>
        <div class="row section education">
          <div class="col-md-12">
            <div class="alert alert-dark " role="alert">
              Элсэхээс өмнөх боловсролын мэдээлэл
            </div>
          </div>
          <div class="col-md-12">
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Төгссөн сургуулийн нэр<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <input type="text" class="form-control" :minlength="2" :maxlength="200"
                  :class="{ 'form-control': true, 'is-invalid': !validmonname(form.schoolName) && blurform.schoolName }"
                  v-on:blur="blurform.schoolName = true" @input="updateForm()" v-model="form.schoolName">
                <div class="invalid-feedback">
                  Зөвхөн кирилл үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Төгссөн он<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <input type="text" class="form-control" :minlength="3" :maxlength="4"
                  :class="{ 'form-control': true, 'is-invalid': !validyear(form.schoolEndYr) && blurform.schoolEndYr }"
                  v-on:blur="blurform.schoolEndYr = true" @input="updateForm()" v-model="form.schoolEndYr">
                <div class="invalid-feedback">
                  Зөвхөн он бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Боловсролын гэрчилгээний дугаар<span class="text-danger">*</span>
              </label>
              <div class="col-sm-8">
                <input type="text" class="form-control" :minlength="2" :maxlength="30"
                  :class="{ 'form-control': true, 'is-invalid': !validnumber(form.gerchilgeeNumber) && blurform.gerchilgeeNumber }"
                  v-on:blur="blurform.gerchilgeeNumber = true" @input="updateForm()" v-model="form.gerchilgeeNumber">
                <div class="invalid-feedback">
                  Зөвхөн тоо бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">ЭЕШ-ын батламжийн дугаар<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <input type="text" class="form-control" :minlength="2" :maxlength="30"
                  :class="{ 'form-control': true, 'is-invalid': !validnumber(form.eyeshCertNumber) && blurform.eyeshCertNumber }"
                  v-on:blur="blurform.eyeshCertNumber = true" @input="updateForm()" v-model="form.eyeshCertNumber">
                <div class="invalid-feedback">
                  Зөвхөн тоо бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Элсэхээс өмнө<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <div class="form-check" v-for="(item, index) in PriorStatus" :key="item">
                  <input class="form-check-input" type="radio" :value="item.RecNr" @change="updateForm()"
                    v-model="form.eyeshBeforeType" name="eyeshBeforeType" :id="'eyeshBeforeType' + index">
                  <label class="form-check-label" :for="'eyeshBeforeType' + index">
                    {{ item.Pristatusm }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row section fathermother">
          <div class="col-md-12">
            <div class="alert alert-dark " role="alert">
              Эцэг/эх/асран хамгаалагчийн талаарх мэдээлэл
            </div>
          </div>
          <div class="col-md-12">
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Бүтэн өнчин эсэх </label>
              <div class="col-sm-8">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" :value="true" @change="changeonchin"
                    v-model="form.isOrphan" name="onchin" id="onchin1">
                  <label class="form-check-label" for="onchin1">
                    Тийм
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" :value="false" @change="changeonchin"
                    v-model="form.isOrphan" name="onchin" id="onchin2">
                  <label class="form-check-label" for="onchin2">
                    Үгүй
                  </label>
                </div>
              </div>
            </div>
            <div v-if="!form.isOrphan">
              <div class="row mb-0 mt-4">
                <div class="col-md-12">
                  <p class="warningtitle">Эцгийн талаарх мэдээлэл (Хагас өнчин бол бөглөхгүй байж болно)</p>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Овог (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text" :minlength="2" :maxlength="60"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.fatherLastname) && form.fatherLastname != '' && blurform.fatherLastname }"
                    v-on:blur="blurform.fatherLastname = true" @input="updateForm()" v-model="form.fatherLastname">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Нэр (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text" :minlength="2" :maxlength="60"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.fatherFirstname) && form.fatherFirstname != '' && blurform.fatherFirstname }"
                    v-on:blur="blurform.fatherFirstname = true" @input="updateForm()" v-model="form.fatherFirstname">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Регистрийн дугаар (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text" :minlength="8" :maxlength="12"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.fatherRegister) && form.fatherRegister != '' && blurform.fatherRegister }"
                    v-on:blur="blurform.fatherRegister = true" @input="updateForm()" v-model="form.fatherRegister">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Ажлын газар </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" @input="updateForm()" v-model="form.fatherWork">
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Мэргэжил </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" @input="updateForm()" v-model="form.fatherMergejil">
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Утасны дугаар </label>
                <div class="col-sm-8">
                  <input type="text" :minlength="8" :maxlength="12"
                    :class="{ 'form-control': true, 'is-invalid': !validPhone(form.fatherPhone) && form.fatherPhone != '' && blurform.fatherPhone }"
                    v-on:blur="blurform.fatherPhone = true" @input="updateForm()" v-model="form.fatherPhone">
                  <div class="invalid-feedback">
                    Утасны дугаар бичнэ үү!
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Цахим шуудан </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validEmail(form.fatherEmail) && form.fatherEmail != '' && blurform.fatherEmail }"
                    v-on:blur="blurform.fatherEmail = true" @input="updateForm()" v-model="form.fatherEmail">
                  <div class="invalid-feedback">
                    Цахим шуудангийн хаягаа зөв бичнэ үү!
                  </div>
                </div>
              </div>

              <div class="row mb-0 mt-4">
                <div class="col-md-12">
                  <p class="warningtitle">Эхийн талаарх мэдээлэл (Хагас өнчин бол бөглөхгүй байж болно)</p>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Овог (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.motherLastname) && form.motherLastname != '' && blurform.motherLastname }"
                    v-on:blur="blurform.motherLastname = true" @input="updateForm()" v-model="form.motherLastname">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Нэр (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.motherFirstname) && form.motherFirstname != '' && blurform.motherFirstname }"
                    v-on:blur="blurform.motherFirstname = true" @input="updateForm()" v-model="form.motherFirstname">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Регистрийн дугаар (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.motherRegister) && form.motherRegister != '' && blurform.motherRegister }"
                    v-on:blur="blurform.motherRegister = true" @input="updateForm()" v-model="form.motherRegister">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Ажлын газар </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" @input="updateForm()" v-model="form.motherWork">
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Мэргэжил </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" @input="updateForm()" v-model="form.motherMergejil">
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Утасны дугаар </label>
                <div class="col-sm-8">
                  <input type="text" :minlength="8" :maxlength="12"
                    :class="{ 'form-control': true, 'is-invalid': !validPhone(form.motherPhone) && form.motherPhone != '' && blurform.motherPhone }"
                    v-on:blur="blurform.motherPhone = true" @input="updateForm()" v-model="form.motherPhone">
                  <div class="invalid-feedback">
                    Утасны дугаар бичнэ үү!
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Цахим шуудан </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validEmail(form.motherEmail) && form.motherEmail != '' && blurform.motherEmail }"
                    v-on:blur="blurform.motherEmail = true" @input="updateForm()" v-model="form.motherEmail">
                  <div class="invalid-feedback">
                    Цахим шуудангийн хаягаа зөв бичнэ үү!
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="row mb-0 mt-4">
                <div class="col-md-12">
                  <p class="warningtitle">Асран хамгаалагчийн талаарх мэдээлэл</p>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Овог (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.asranLastname) && form.asranLastname != '' && blurform.asranLastname }"
                    v-on:blur="blurform.asranLastname = true" @input="updateForm()" v-model="form.asranLastname">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Нэр (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.asranFirstname) && form.asranFirstname != '' && blurform.asranFirstname }"
                    v-on:blur="blurform.asranFirstname = true" @input="updateForm()" v-model="form.asranFirstname">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Регистрийн дугаар (Монгол) </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validmonname(form.asranRegister) && form.asranRegister != '' && blurform.asranRegister }"
                    v-on:blur="blurform.asranRegister = true" @input="updateForm()" v-model="form.asranRegister">
                  <div class="invalid-feedback">
                    Зөвхөн кирилл үсгээр бичнэ үү
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Ажлын газар </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" @input="updateForm()" v-model="form.asranWork">
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Мэргэжил </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" @input="updateForm()" v-model="form.asranMergejil">
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Утасны дугаар </label>
                <div class="col-sm-8">
                  <input type="text" :minlength="8" :maxlength="12"
                    :class="{ 'form-control': true, 'is-invalid': !validPhone(form.asranPhone) && form.asranPhone != '' && blurform.asranPhone }"
                    v-on:blur="blurform.asranPhone = true" @input="updateForm()" v-model="form.asranPhone">
                  <div class="invalid-feedback">
                    Утасны дугаар бичнэ үү!
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Цахим шуудан </label>
                <div class="col-sm-8">
                  <input type="text"
                    :class="{ 'form-control': true, 'is-invalid': !validEmail(form.asranEmail) && form.asranEmail != '' && blurform.asranEmail }"
                    v-on:blur="blurform.asranEmail = true" @input="updateForm()" v-model="form.asranEmail">
                  <div class="invalid-feedback">
                    Цахим шуудангийн хаягаа зөв бичнэ үү!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row section ">
          <div class="col-md-12">
            <div class="alert alert-dark " role="alert">
              Нэмэлт мэдээлэл
            </div>
          </div>
          <div class="col-md-12">
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Хөгжлийн бэрхшээлтэй эсэх </label>
              <div class="col-sm-8">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" :value="true" @change="ChangeImpairment()"
                    v-model="form.isImpairment" name="isImpairment" id="isImpairment1">
                  <label class="form-check-label" for="isImpairment1">
                    Тийм
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" :value="false" @change="ChangeImpairment()"
                    v-model="form.isImpairment" name="isImpairment" id="isImpairment2">
                  <label class="form-check-label" for="isImpairment2">
                    Үгүй
                  </label>
                </div>
              </div>
            </div>
            <div v-if="form.isImpairment">
              <div class="row mb-2">
                <label for="firstname_en" class="col-sm-4 col-form-label">Хөгжлийн бэрхшээлийн хэлбэр<span
                    class="text-danger">*</span> </label>
                <div class="col-sm-8">
                  <select class="form-select" @change="updateForm()" v-model="form.impairmentType">
                    <option v-for="item in ImpairmentType" :key="item" :value="item.recNr">
                      {{ item.typem }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row mb-2">
                <label for="firstname_en" class="col-sm-4 col-form-label">Хөдөлмөрийн чадвар алдалтын хувь<span
                    class="text-danger">*</span> </label>
                <div class="col-sm-8">
                  <select class="form-select" @change="updateForm()" v-model="form.impairmentDisabilitylvl">
                    <option v-for="item in Impairment_disabilitylvl" :key="item" :value="item.recNr">
                      {{ item.lvl }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row mb-2">
                <label class="col-sm-4 col-form-label">Сургалтын тохируулга авах эсэх </label>
                <div class="col-sm-8">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :value="true" @change="updateForm()"
                      v-model="form.isImpairmentSetting" name="radio3" id="radio31">
                    <label class="form-check-label" for="radio31">
                      Тийм
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :value="false" @change="updateForm()"
                      v-model="form.isImpairmentSetting" name="radio3" id="radio32">
                    <label class="form-check-label" for="radio32">
                      Үгүй
                    </label>
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <label for="firstname_en" class="col-sm-4 col-form-label">Хавсралт </label>

                  <div class="col-md-8" style="max-width: 300px;" :class="blurfiles.Img_Impairment ? 'img-novalid' : 'img-yesvalid'">
                    <!-- <label for="register_en" class="col-sm-12 col-form-label">
                      Боловсролын гэрчилгээ<span class="text-danger">*</span> </label> -->
                    <base-image-input imagetypeprop="6" />
                    <div class="invalid-feedback">
                      Зураг оруулна уу!
                    </div>
                  </div>

              </div>
              <div class="alert alert-primary " role="alert">
                <p class=" mb-0">
                  <strong>Сургалтын тохируулга</strong> гэдэг нь тухайн хөгжлийн бэрхшээлтэй суралцагч хичээлд
                  идэвхтэй оролцох, шалгалтаа бүрэн дүүрэн өгч шударгаар үнэлүүлэхэд нэмэлтээр гаргаж өгөх дэмжлэг
                  туслалцаа юм. Хэрэв танд сургалтын тохируулга авах бол хариуцсан мэргэжилтэнтэй холбогдоно уу.
                  Холбоо барих утас: 77307730, 75754400 - 1524
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row section tolbor">
          <div class="col-md-12">
            <div class="alert alert-dark " role="alert">
              Сургалтын төлбөр
            </div>
          </div>
          <div class="col-md-12">
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Зээл, буцалтгүй тусламж, тэтгэлэгт хамрагдах хүсэлтэй эсэх </label>
              <div class="col-sm-8">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" :value="true" @change="changeisPayHelp"
                    v-model="form.isPayHelp" name="isPayHelp" id="isPayHelp1">
                  <label class="form-check-label" for="isPayHelp1">
                    Тийм
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" :value="false" @change="changeisPayHelp"
                    v-model="form.isPayHelp" name="isPayHelp" id="isPayHelp2">
                  <label class="form-check-label" for="isPayHelp2">
                    Үгүй
                  </label>
                </div>
              </div>
            </div>
            <div class="row mb-2" v-if="form.isPayHelp">
              <label class="col-sm-4 col-form-label">Зээл, буцалтгүй тусламж, тэтгэлэгт хамрагдах хэлбэр </label>
              <div class="col-sm-8">
                <div class="form-check" v-for="(item, index) in PayTypes" :key="item">
                  <input class="form-check-input" type="radio" @change="updateForm" :value="item.PK_tulburturul"
                    v-model="form.payType" name="payType" :id="'payType' + index">
                  <label class="form-check-label" :for="'payType' + index">
                    {{ item.type }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row section warningcontact">
          <div class="col-md-12">
            <div class="alert alert-dark " role="alert">
              Яаралтай үед холбоо барих хүний мэдээлэл
            </div>
          </div>
          <div class="col-md-12">
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Овог (Монгол)<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <input type="text" class="form-control"
                  :class="{ 'form-control': true, 'is-invalid': !validmonname(form.warningLastname) && blurform.warningLastname }"
                  v-on:blur="blurform.warningLastname = true" @input="updateForm()" v-model="form.warningLastname">
                <div class="invalid-feedback">
                  Зөвхөн кирилл үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Нэр (Монгол)<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <input type="text" class="form-control"
                  :class="{ 'form-control': true, 'is-invalid': !validmonname(form.warningFirstname) && blurform.warningFirstname }"
                  v-on:blur="blurform.warningFirstname = true" @input="updateForm()" v-model="form.warningFirstname">
                <div class="invalid-feedback">
                  Зөвхөн кирилл үсгээр бичнэ үү
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Утасны дугаар<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <input type="text" class="form-control" :minlength="8" :maxlength="12"
                  :class="{ 'form-control': true, 'is-invalid': !validPhone(form.warningPhone) && blurform.warningPhone }"
                  v-on:blur="blurform.warningPhone = true" @input="updateForm()" v-model="form.warningPhone">
                <div class="invalid-feedback">
                  Утасны дугаар бичнэ үү!
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label">Цахим шуудан<span class="text-danger">*</span> </label>
              <div class="col-sm-8">
                <input type="text" class="form-control"
                  :class="{ 'form-control': true, 'is-invalid': !validEmail(form.warningEmail) && blurform.warningEmail }"
                  v-on:blur="blurform.warningEmail = true" @input="updateForm()" v-model="form.warningEmail">
                <div class="invalid-feedback">
                  Цахим шуудангийн хаягаа зөв бичнэ үү!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row section files">
          <div class="col-md-12">
            <div class="alert alert-dark " role="alert">
              Шаардлагатай файлууд
            </div>
          </div>
          <div class="col-md-3" :class="blurfiles.img_unemleh ? 'img-novalid' : 'img-yesvalid'">
            <label for="register_en" class="col-sm-12 col-form-label">
              Элсэгчийн иргэний үнэмлэх<span class="text-danger">*</span> </label>
            <base-image-input imagetypeprop="2" />
            <div class="invalid-feedback">
              Зураг оруулна уу!
            </div>
          </div>
          <div class="col-md-3" :class="blurfiles.img_asran_irgenii ? 'img-novalid' : 'img-yesvalid'">
            <label for="register_en" class="col-sm-12 col-form-label">
              Эцэг/эх/асран хамгаалагчийн иргэний үнэмлэх <span class="text-danger">*</span> </label>
            <base-image-input imagetypeprop="3" />
            <div class="invalid-feedback">
              Зураг оруулна уу!
            </div>
          </div>
          <div class="col-md-3" :class="blurfiles.img_eyeshCertNumberif ? 'img-novalid' : 'img-yesvalid'">
            <label for="register_en" class="col-sm-12 col-form-label">
              ЭЕШ-ийн батламж<span class="text-danger">*</span><br>
              <small>(дүйцүүлсэн оноотой бол тухайн батламжийн хамт) </small>
            </label>
            <base-image-input imagetypeprop="4" />
            <div class="invalid-feedback">
              Зураг оруулна уу!
            </div>
          </div>
          <div class="col-md-3" :class="blurfiles.img_edu_certif ? 'img-novalid' : 'img-yesvalid'">
            <label for="register_en" class="col-sm-12 col-form-label">
              Боловсролын гэрчилгээ<span class="text-danger">*</span> </label>
            <base-image-input imagetypeprop="5" />
            <div class="invalid-feedback">
              Зураг оруулна уу!
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button @click="savedata" :disabled="agreement == false || isloading2" class="btn btn-primary float-end">
                <span v-if="!isloading">Үргэлжлүүлэх
                </span>
                <span v-if="isloading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span v-if="isloading" class="sr-only"> Түр хүлээнэ үү</span>
              </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="management.Status != 999" class="alert alert-danger mt-4">
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
            <span v-if="management.Status == 2"> Эхлэх хугацаа: <strong> {{ management.managementDate }}</strong>
               
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BaseImageInput from './BaseImageInput'
import step from './step'
export default ({
  components: { BaseImageInput, step },
  data() {
    return {
      isloading: false,
      valid: false,
      Country: [],
      Nationality: [],
      LocalArea: [],
      aimaglist: [],
      sumlist: [],
      horoobaglist: [],
      ImpairmentType: [],
      Impairment_disabilitylvl: [],
      PayTypes: [],
      PriorStatus: [],
      profileimg: '@/assets/appimg/noimage.png',
      myusername: '',
      files: {
        img_profile: -1,
        img_unemleh: -1,
        img_asran_irgenii: -1,
        img_eyeshCertNumberif: -1,
        img_edu_certif: -1,
        Img_Impairment: -1
      },
      blurfiles: {
        img_profile: false,
        img_unemleh: false,
        img_asran_irgenii: false,
        img_eyeshCertNumberif: false,
        img_edu_certif: false,
        Img_Impairment: false
      },
      form: {
        register_mn: '',
        register_en: '',
        lastname_mn: '',
        lastname_en: '',
        firstname_mn: '',
        firstname_en: '',
        urgiinOvog_mn: '',
        urgiinOvog_en: '',
        gender: 1,
        undesUgsaa_uls: 34,
        undesUgsaa: 1,
        irgenshil: 1,
        tursun_aimag: -1,
        tursun_sum: -1,
        orshinSuugaa_aimag: -1,
        orshinSuugaa_sum: -1,
        orshinSuugaa_horoo: -1,
        orshinSuugaa_hayag: '',
        phoneNumber: '',
        email: '',
        // Элсэхээс өмнөх боловсролын мэдээлэл
        schoolName: '',
        schoolEndYr: '',
        gerchilgeeNumber: '',
        eyeshCertNumber: '',
        eyeshBeforeType: 1,
        // Эцэг/эх/асран хамгаалагчийн талаарх мэдээлэл
        isOrphan: false,
        fatherLastname: '',
        fatherFirstname: '',
        fatherRegister: '',
        fatherWork: '',
        fatherMergejil: '',
        fatherPhone: '',
        fatherEmail: '',

        motherLastname: '',
        motherFirstname: '',
        motherRegister: '',
        motherWork: '',
        motherMergejil: '',
        motherPhone: '',
        motherEmail: '',

        asranLastname: '',
        asranFirstname: '',
        asranRegister: '',
        asranWork: '',
        asranMergejil: '',
        asranPhone: '',
        asranEmail: '',
        // хөгжлийн бэрхшээл
        isImpairment: false,
        impairmentType: 1,
        impairmentDisabilitylvl: 1,
        isImpairmentSetting: false,
        // Сургалтын төлбөр
        isPayHelp: false,
        payType: null,
        // яаралтай
        warningLastname: '',
        warningFirstname: '',
        warningPhone: '',
        warningEmail: '',

      },
      blurform: {
        register_en: false,
        lastname_en: false,
        firstname_en: false,
        urgiinOvog_mn: false,
        urgiinOvog_en: false,
        orshinSuugaa_hayag: false,
        tursun_aimag: false,
        tursun_sum: false,
        orshinSuugaa_aimag: false,
        orshinSuugaa_sum: false,
        orshinSuugaa_horoo: false,
        phoneNumber: false,
        email: false,
        // Элсэхээс өмнөх боловсролын мэдээлэл
        schoolName: false,
        schoolEndYr: false,
        gerchilgeeNumber: false,
        eyeshCertNumber: false,
        //fatherLastname
        fatherLastname: false,
        fatherFirstname: false,
        fatherRegister: false,
        fatherWork: false,
        fatherMergejil: false,
        fatherPhone: false,
        fatherEmail: false,

        motherLastname: false,
        motherFirstname: false,
        motherRegister: false,
        motherWork: false,
        motherMergejil: false,
        motherPhone: false,
        motherEmail: false,

        asranLastname: false,
        asranFirstname: false,
        asranRegister: false,
        asranWork: false,
        asranMergejil: false,
        asranPhone: false,
        asranEmail: false,
        // яаралтай
        warningLastname: false,
        warningFirstname: false,
        warningPhone: false,
        warningEmail: false,
      },
      management: {
        Status: 999,
        Message: '',
        managementDate: ''
      },
      stepresult: null
    };
  },

  mounted() {
    axios.get("checkStudentStep")
      .then(res => {
        if (res.data.status == 1) {
          this.management.Status = res.data.managementStatus;
          this.management.Message = res.data.managementMessage;
          if (res.data.managementDate != null && res.data.managementDate != 'undefined') {
             
             this.management.managementDate = res.data.managementDate;
           }
          this.stepresult = res.data.result;
          if (this.management.Status == 1) {
            if (this.stepresult.student == true) {
              // Оюутан болсон байвал шууд шидэх
              this.$router.push({ name: "request" });
            } else {
              this.myusername = localStorage.getItem('username');
              this.callformdata();
              this.getApplicantFrom();
            }
          }
        } else {
          this.$toast.open({
            duration: 10000,
            message: res.data.message,
            type: 'warning'
          });
        }
      }).catch(error => {
        this.$toast.open({
          message: 'Холболт амжилтгүй!',
          type: 'error'
        });
      });

  },
  methods: {
    getApplicantInfo() {
      axios.get("getApplicantInfo")
        .then(res => {
          if (res.data.status == 1) {
            let info = res.data.result;
            this.form.register_mn = info.registryNumber;
            this.form.lastname_mn = info.lastName;
            this.form.firstname_mn = info.firstName;
            this.form.gender = info.genderId;
            this.form.phoneNumber = info.contact.phoneNumber;
            this.form.email = info.contact.email;
          }
          else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {
          this.$toast.open({
            message: 'Хувийн мэдээлэл: Холболт амжилтгүй!',
            type: 'error'
          });
        });
    },
    getApplicantFrom() {
      axios.get("getApplicantFrom")
        .then(res => {
          if (res.data.status == 1) {
            if (res.data.result == null) {
              this.getApplicantInfo();
              let storedForm = this.openStorage();
              if (storedForm) {
                this.form = this.openStorage();
              }
            } else {
              this.form = res.data.result;
            }
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {
          this.$toast.open({
            message: 'Форм: Холболт амжилтгүй!',
            type: 'error'
          });
        });
    },
    changeundesUgsaa_uls() {
      if (this.form.undesUgsaa_uls == 46) // тодорхойгүй байвал
      {
        this.form.undesUgsaa = 46;
      } else {
        this.form.undesUgsaa = this.Nationality.filter(x => x.belongs == this.form.undesUgsaa_uls && x.id != this.form.undesUgsaa_uls)[0].id;
      }
      this.updateForm();
    },
    ChangeImpairment() {
      if (this.form.isImpairment) {
        this.form.impairmentType = 1;
        this.form.impairmentDisabilitylvl = 1;
        this.form.isImpairmentSetting = false;
      } else {
        this.form.impairmentType = null;
        this.form.impairmentDisabilitylvl = null;
        this.form.isImpairmentSetting = null;
      }
      this.updateForm();
    },
    changeonchin() {
      if (!this.form.isOrphan) {
        this.form.fatherLastname = '';
        this.form.fatherFirstname = '';
        this.form.fatherRegister = '';
        this.form.fatherWork = '';
        this.form.fatherMergejil = '';
        this.form.fatherPhone = '';
        this.form.fatherEmail = '';
        this.form.motherLastname = '';
        this.form.motherFirstname = '';
        this.form.motherRegister = '';
        this.form.motherWork = '';
        this.form.motherMergejil = '';
        this.form.motherPhone = '';
        this.form.motherEmail = '';
      } else {
        this.form.asranLastname = '';
        this.form.asranFirstname = '';
        this.form.asranRegister = '';
        this.form.asranWork = '';
        this.form.asranMergejil = '';
        this.form.asranPhone = '';
        this.form.asranEmail = '';
      }
      this.updateForm();
    },
    changeisPayHelp() {
      if (this.form.isPayHelp) {
        this.form.payType = 2;
      } else {
        this.form.payType = null;
      }
      this.updateForm();
    },
    validEmail(email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email);
    },
    validPhone(phone) {
      var re = /^\d{8,12}$/;
      return re.test(phone);
    },
    validengname(strvalue) {
      var re = /^[a-z ,.0-9'-]+$/i
      return re.test(strvalue);
    },
    validmonname(strvalue) {
      var re = /^[а-яА-ЯөӨүҮчЧёЁ ,.0-9'-]+$/i
      return re.test(strvalue);
    },
    validaddress(strvalue) {
      var re = /^[а-яА-ЯөӨүҮчЧёЁ ,.0-9!#$/()'-]+$/i
      return re.test(strvalue);
    },
    validnumber(strvalue) {
      var re = /^[0-9]+$/i
      return re.test(strvalue);
    },
    validyear(strvalue) {

      if (strvalue < 1900 || strvalue > 2030) {
        return false;
      } else {
        var re = /^[0-9]+$/i
        return re.test(strvalue);
      }
    },
    validate() {
      this.valid = true;
      if (!this.validengname(this.form.register_en)) {
        this.valid = false;
        this.blurform.register_en = true;
      }
      if (!this.validengname(this.form.lastname_en)) {
        this.valid = false;
        this.blurform.lastname_en = true;
      }
      if (!this.validengname(this.form.firstname_en)) {
        this.valid = false;
        this.blurform.firstname_en = true;
      }
      if (!this.validengname(this.form.urgiinOvog_en)) {
        this.valid = false;
        this.blurform.urgiinOvog_en = true;
      }
      if (!this.validmonname(this.form.urgiinOvog_mn)) {
        this.valid = false;
        this.blurform.urgiinOvog_mn = true;
      }
      if (!this.validaddress(this.form.orshinSuugaa_hayag)) {
        this.valid = false;
        this.blurform.orshinSuugaa_hayag = true;
      }
      //select харьяалал
      if (this.form.tursun_aimag == -1) {
        this.valid = false;
        this.blurform.tursun_aimag = true;
      }
      if (this.form.tursun_sum == -1) {
        this.valid = false;
        this.blurform.tursun_sum = true;
      }
      if (this.form.orshinSuugaa_aimag == -1) {
        this.valid = false;
        this.blurform.orshinSuugaa_aimag = true;
      }
      if (this.form.orshinSuugaa_sum == -1) {
        this.valid = false;
        this.blurform.orshinSuugaa_sum = true;
      }
      if (this.form.orshinSuugaa_horoo == -1) {
        this.valid = false;
        this.blurform.orshinSuugaa_horoo = true;
      }
      //end select харьяалал
      if (!this.validmonname(this.form.warningFirstname)) {
        this.valid = false;
        this.blurform.warningFirstname = true;
      }
      if (!this.validmonname(this.form.warningLastname)) {
        this.valid = false;
        this.blurform.warningLastname = true;
      }
      if (!this.validPhone(this.form.phoneNumber)) {
        this.valid = false;
        this.blurform.phoneNumber = true;
      }
      if (!this.validPhone(this.form.warningPhone)) {
        this.valid = false;
        this.blurform.warningPhone = true;
      }
      if (!this.validEmail(this.form.email)) {
        this.valid = false;
        this.blurform.email = true;
      }
      if (!this.validEmail(this.form.warningEmail)) {
        this.valid = false;
        this.blurform.warningEmail = true;
      }
      if (!this.validmonname(this.form.schoolName)) {
        this.valid = false;
        this.blurform.schoolName = true;
      }
      if (!this.validyear(this.form.schoolEndYr)) {
        this.valid = false;
        this.blurform.schoolEndYr = true;
      }
      if (!this.validnumber(this.form.gerchilgeeNumber)) {
        this.valid = false;
        this.blurform.gerchilgeeNumber = true;
      }
      if (!this.validnumber(this.form.eyeshCertNumber)) {
        this.valid = false;
        this.blurform.eyeshCertNumber = true;
      }
      // зурагнууд
      if (this.files.img_profile == -1) {
        this.valid = false;
        this.blurfiles.img_profile = true;
      }
      if (this.files.img_unemleh == -1) {
        this.valid = false;
        this.blurfiles.img_unemleh = true;
      }
      if (this.files.img_asran_irgenii == -1) {
        this.valid = false;
        this.blurfiles.img_asran_irgenii = true;
      }
      if (this.files.img_eyeshCertNumberif == -1) {
        this.valid = false;
        this.blurfiles.img_eyeshCertNumberif = true;
      }
      if (this.files.img_edu_certif == -1) {
        this.valid = false;
        this.blurfiles.img_edu_certif = true;
      }
      if(this.form.isImpairment)
      {
        if (this.files.Img_Impairment == -1) {
          this.valid = false;
          this.blurfiles.Img_Impairment = true;
        }
      }else{
        this.blurfiles.Img_Impairment = false;
      }
    },
    changeimage(imagetype, imgurl) {
      if (imagetype == 1) {
        this.files.img_profile = imgurl;
        this.blurfiles.img_profile = false;
      } else
        if (imagetype == 2) {
          this.files.img_unemleh = imgurl;
          this.blurfiles.img_unemleh = false;
        } else
          if (imagetype == 3) {
            this.files.img_asran_irgenii = imgurl;
            this.blurfiles.img_asran_irgenii = false;
          } else
            if (imagetype == 4) {
              this.files.img_eyeshCertNumberif = imgurl;
              this.blurfiles.img_eyeshCertNumberif = false;
            } else
              if (imagetype == 5) {
                this.files.img_edu_certif = imgurl;
                this.blurfiles.img_edu_certif = false;
              }else
              if (imagetype == 6) {
                this.files.Img_Impairment = imgurl;
                this.blurfiles.Img_Impairment = false;
              }
    },
    savedata() {
      this.validate();
      if (this.valid) {
        this.isloading=true;
        // this.$router.push({ name: "agreement" });
        axios.post("setApplicantForm", this.form)
          .then(res => {
            this.isloading=false;
            if (res.data.status == 1) {
                this.removeStorage();
                if (this.stepresult.geree == false) {
                  this.$router.push({ name: "agreement" });
                } else {
                  this.$router.push({ name: "request" });
                }
            } else {
              this.$toast.open({
                message: res.data.message,
                type: 'warning'
              });
            }
          }).catch(error => {
            this.isloading=false;
            this.$toast.open({
              message: 'Холболт амжилтгүй!',
              type: 'error'
            });
          });
      } else {
        this.$toast.open({
          duration: 5000,
          message: 'Та мэдээллээ бүрэн гүйцэд бөглөнө үү!',
          type: 'error'
        });
      }
      //this.$router.push({ name: "student" });
    },
    callformdata() {
      axios.get("getCountry")
        .then(res => {
          if (res.data.status == 1) {
            this.Country = res.data.result;
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {
          this.$toast.open({
            message: 'Холболт амжилтгүй!',
            type: 'error'
          });
        });
      axios.get("getNationality")
        .then(res => {
          if (res.data.status == 1) {
            this.Nationality = res.data.result;
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {
          this.$toast.open({
            message: 'Холболт амжилтгүй!',
            type: 'error'
          });
        });
      axios.get("getLocalArea")
        .then(res => {
          if (res.data.status == 1) {
            this.LocalArea = res.data.result;
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {

        });
      axios.get("getImpairmentType")
        .then(res => {
          if (res.data.status == 1) {
            this.ImpairmentType = res.data.result;
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {

        });
      axios.get("getImpairment_disabilitylvl")
        .then(res => {
          if (res.data.status == 1) {
            this.Impairment_disabilitylvl = res.data.result;
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {

        });
      axios.get("getPayTypes")
        .then(res => {
          if (res.data.status == 1) {
            this.PayTypes = res.data.result;
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {

        });
      axios.get("getPriorStatus")
        .then(res => {
          if (res.data.status == 1) {
            this.PriorStatus = res.data.result;
          } else {
            this.$toast.open({
              message: res.data.message,
              type: 'warning'
            });
          }
        }).catch(error => {

        });
    },
    updateForm() {
      // this.form[input] = value

      // let storedForm = this.openStorage() // extract stored form
      // if (!storedForm) storedForm = {} // if none exists, default to empty object

      // storedForm[input] = value // store new value
      this.saveStorage(this.form) // save changes into localStorage
    },
    openStorage() {
      return JSON.parse(localStorage.getItem('form_' + this.myusername));
    },
    saveStorage(form) {
      localStorage.setItem('form_' + this.myusername, JSON.stringify(form))
    },
    removeStorage() {
      localStorage.removeItem('form_' + this.myusername);
    },
  }
})
</script>
<style>
/* .personalinfo .col-md-8 .row .col-sm-3:first-child{
 padding-right: 0px;
} */

.formdiv .form-control, .formdiv .form-select{
 max-width: 500px;
}
.personalinfo .col-sm-3 {
  max-width: 262px;
}
@media (max-width: 1199.98px) {
  .personalinfo .col-sm-3 {
    margin-bottom:20px;
    max-width: 100%;
}
}
.img-yesvalid .base-image-input {
  border: 1px dashed #D8DFE5;
  border-radius: 8px;
}

.img-novalid .base-image-input {
  border: 1px dashed red;
  border-radius: 8px;
}

.img-novalid .invalid-feedback {
  display: block;
}

.form-check .form-check-label {
  font-size: 14px;
}

.files .col-md-3 label {
  line-height: 20px !important;
  min-height: 80px;
}

.files .col-md-3 label small {
  font-weight: 500;
  line-height: 16px !important;
}

.warningtitle {
  font-weight: 500;
  color: #718096;
}

.sform .section {
  margin-bottom: 20px;
}

.sform label.col-form-label {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}

.alert-dark {
  background: #EEF1F5;
  color: #718096;
  font-weight: 600;
  padding: 10px;
}

.breadcrumbs {
  background: #EBEBED;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 0.375rem;
  width: 100%;
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

.breadcrumbs .inactive .cirle-number,
.breadcrumbs .active .cirle-number {
  margin-top: 8px;
}

.breadcrumbs p {
  padding-top: 5px;
  color: #718096;
  margin-bottom: 0px;
  margin-left: 45px;
}

.breadcrumbs .step2 {
  max-width: 290px !important;
}

.breadcrumbs .active .cirle-number {
  background: var(--primary-color);
  padding-left: 14px;
}

.breadcrumbs .active {
  width: 150px;
}

.breadcrumbs .active p {
  color: var(--primary-color);
  font-weight: 600;
  position: relative;
  padding-top: 5px;
}

.breadcrumbs hr {
  color: #aec7e0;
  width: 40px;
  border-width: 2px;
  margin-top: 23px;
}

.breadcrumbs .bd-highlight {
  margin-right: 15px;
  max-width: 230px;
}

.breadcrumbs .bd-highlight:last-child {
  margin-right: 0px !important;
}

@media (max-width: 1199.98px) {
  .breadcrumbs .active {
    width: 100%;
  }

  .breadcrumbs .step {
    width: 30%;
  }

  .onmobile {
    display: block;
  }

  .ondesktop {
    display: none;
  }

  .breadcrumbs .bd-highlight.hr {
    width: 40px;
  }

  .breadcrumbs hr {
    width: 100%;
  }

  .breadcrumbs .bd-highlight {
    margin-right: 0px;
  }

  .justify-content-md-end .btn {
    margin-bottom: 5px;
  }

  .breadcrumbs .bd-highlight .cirle-number {
    float: none;
    margin-left: 32%;
  }

  .breadcrumbs .bd-highlight:first-child .cirle-number {
    float: none;
    margin-left: 32%;
  }

  .breadcrumbs .bd-highlight:last-child .cirle-number {
    float: none;
    margin-left: 23%;
  }

  .breadcrumbs p {
    padding-top: 5px;
    margin-left: 0px;
    text-align: center;
  }

  .breadcrumbs {
    padding: 20px 5px;
  }

  .breadcrumbs .step {
    margin-top: 0px;
  }

}
</style>
