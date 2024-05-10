<template>
    <section  class="hero-section home-section position-relative ">
        <div class="container z-0">
            <h2 class="text-center blue" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" >МУИС</h2>
            <h2 class="text-center mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" > Бакалаврын өдрийн <br>хөтөлбөрийн элсэлт</h2>
            <div class="row text-center calendar" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <p>Элсэх хүсэлт гаргах: <span>2024 оны 06 дугаар сарын 03-ны 09:00 цагт эхэлж 2024 оны 07 дугаар сарын 08-ны 12:00 цагт дуусна </span></p>
                        
                <p> Онооны жагсаалт: <span>Элсэх хүсэлт гаргах хугацаа дууссанаас 1 өдрийн дараа гарна</span></p>
                <p> Элсэх эрх олгох: <span>2024 оны 07 дугаар сарын 16-ны 12:00 цагт эхэлж 2024 оны 07 дугаар сарын 22-ны 12:00 цагт дуусна </span></p>
                <p> Оюутан болох: <span>2024 оны 07 дугаар сарын 16-ны 12:00 цагт эхэлж 2024 оны 08 дугаар сарын 09-ний 15:00 цагт дуусна </span></p>
            </div>
            <div class="row mt-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div class="col d-flex justify-content-center">
                    <LoginModal />
                    <!-- <a class="btn btn-lg btn-primary ">Нэвтрэх <i class="bi bi-chevron-right"></i></a> -->
                    <!-- <a class="btn btn-lg btn-light ">Онооны жагсаалт<br> харах</a>  -->
                    <ScorelistModal :isshowbtnprop="true" btn_variant="btn btn-light me-md-2" btn_text="Онооны жагсаалт харах"/>
                </div>
            </div>
        </div>
    </section>
    <section data-aos="fade-right"  class="counter-section home-section bg-primary position-relative">
        <img src="../assets/img/bg-logo.png" alt="" class="position-absolute bottom-0 end-0 ">
        <div class="container">
            <div class="row">
                <div class="col-md-3 position-relative" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="block-18">
                        <div class="text">
                            <span>Бакалаврын түвшний суралцагч</span>
                        </div>
                        <div class="number position-absolute bottom-0 start-1">
                            <strong>19000<span class="text-primary">+</span></strong>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 position-relative" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="block-18">
                        <div class="text">
                            <span>Бакалаврын түвшний хөтөлбөр</span>
                        </div>
                        <div class="number position-absolute bottom-0 start-1">
                            <strong>170<span class="text-success">+</span></strong>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 position-relative" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <div class="block-18">
                        <div class="text">
                            <span>Бакалаврын түвшний магадлан итгэмжлэгдсэн хөтөлбөр</span>
                        </div>
                        <div class="number position-absolute bottom-0 start-1">
                            <strong>50<span class="text-warning">+</span></strong>
                        </div>
                    </div>
                </div>
                <div class="col-md-3  position-relative" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <div class="block-18">
                        <div class="text">
                            <span>2022 онд ЭШ-ын оноо 750-аас дээш оноотой элсэгч</span>
                        </div>
                        <div class="number position-absolute bottom-0 start-1">
                            <strong>300<span class="text-danger">+</span></strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="help-section home-section position-relative">
        <img src="../assets/img/bg-image3.png" alt="" class="bg-image3 position-absolute top-50 start-0 translate-middle-y z-n1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12"  data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">
                    <div class="section-tittle text-center mb-60">
                        <h2 class="align-middle">
                            <span class="number">01</span><span class="title">Элсэх хүсэлт гаргах</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="single-cat ">
                        <div class="cat-icon">
                            <img src="../assets/img/help1.png" alt="">
                        </div>
                        <h5>Бүртгүүлэх</h5>
                        <div class="cat-cap">
                            <p>
                                Шинээр бүртгүүлэгч нь элсэлтийн системд нэвтрэх мэдээлэл болон шаардлагатай бусад мэдээллээ
                                үнэн зөв оруулан баталгаажуулж системд нэвтрэх эрх авна. Нэвтрэх мэдээлэл нь БҮТ-н системд
                                бүртгүүлсэн бүртгэлийн дугаар, нууц үгээс бүрдсэн байна.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="single-cat single-cat2 ">
                        <div class="cat-icon">
                            <img src="../assets/img/help2.png" alt="">
                        </div>
                        <h5>Нэвтрэх</h5>
                        <div class="cat-cap">
                            <p>
                                БҮТ-н системд бүртгүүлсэн бүртгэлийн дугаар, нууц үгээ ашиглан нэвтэрнэ.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <div class="single-cat single-cat3 ">
                        <div class="cat-icon">
                            <img src="../assets/img/help3.png" alt="">
                        </div>
                        <h5>Санамж</h5>
                        <div class="cat-cap">
                            <p>
                                Хэдэн ч хөтөлбөрт бүртгүүлэх боломжтой. Удирдах зөвлөлөөс баталсан бүртгэлийн хураамжийг
                                төлнө.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section  class="help2-section home-section position-relative">
        <img src="../assets/img/bg-image3.png" alt="" class="bg-image3 position-absolute top-50 start-0 translate-middle-y z-n1">
        <div class="container">
        <div class="row">
           
                <div class="col-md-6" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                    <div class="section-tittle text-center ">
                        <h2>
                            <span class="number">02</span><span class="title">Онооны жагсаалт гаргах</span>
                        </h2>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <div class="d-flex mb-4">
                        <div class="icon text-primary">
                            <img src="../assets/img/v1.png" alt="">
                        </div>

                        <div class="ms-5">
                            <p class=" mb-6">
                                Элсэлтийн бүртгэл хааснаас 1 өдрийн дараа элсэлтийн системд бүртгүүлэгчийн хүсэлт гаргасан хөтөлбөр тус бүрээр холбогдох тооцооллыг хийж онооны жагсаалтыг гаргана. 
                            </p>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <div class="icon text-primary">
                            <img src="../assets/img/v2.png" alt="">
                        </div>
                        <div class="ms-5">
                            <p class="mb-6">
                                Бүртгүүлэгч хяналтын тоонд багтсан эсэхээ дараах товч дээр дарж урьдчилан харах боломжтой.
                            </p>
                            <ScorelistModal :isshowbtnprop="true" btn_variant="btn btn-primary" btn_text="Онооны жагсаалт харах"/>
                            <!-- <a href="#" class="btn btn-primary disabled">Онооны жагсаалт харах</a> -->
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="icon text-primary">
                            <img src="../assets/img/v3.png" alt="">
                        </div>
                        <div class="ms-5">
                            <p class="mb-6">
                                Шилдэг элсэгчид болон МУИС-ийн харьяа ерөнхий боловсролын ахлах сургууль (ЕБАС) ангиллаар элссэн элсэгчдийг дараах товч дээр дарж харах боломжтой.
                            </p>
                            <a href="#" class=""></a>
                            <ScorelistTopModal :isshowbtnprop="true" btn_variant="btn btn-primary" btn_text="Шилдэг, ЕБАС ангиллаар элсэгчид"/>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        </div>
    </section>
    <section  class="help3-section home-section position-relative">
    <img src="../assets/img/bg-image4.png" alt="" class="position-absolute top-0 end-0  z-n1 bg-image4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="section-tittle text-center mb-60">
                        <h2 class="align-middle">
                            <span class="number">03</span><span class="title">Элсэх эрх олгох</span>
                        </h2>
                    </div>
                </div>
            </div>
        <div class="row ">
                <div class="col-md-12 col-sm-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="single-cat single-cat3 mb-30">
                        <div class="cat-icon">
                            <img src="../assets/img/v1.png" alt="">
                        </div>
                        <h5>Баталгаажуулах</h5>
                        <div class="cat-cap">
                            <p>
                                Бүртгүүлэгч хяналтын тоонд багтаж элсэх эрхтэй болсноос хойш 2 (комиссын шийдвэрээр өөрчлөгдөж болно) цагийн дотор 
                                тухайн элсэн суралцах гэж буй бүрэлдэхүүн/салбар сургуулийн ерөнхий суурь хичээлийн 1 багц цагийн төлбөрийг төлж 
                                элсэх эрхээ баталгаажуулна. Хэд хэдэн хөтөлбөрийн хяналтын тоонд багтсан бүртгүүлэгч нь зөвхөн нэг хөтөлбөрийг сонгон 
                                баталгаажуулахыг анхаарна уу.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section  class="help4-section home-section position-relative">
        <img src="../assets/img/bg-image5.png" alt="" class="bg-image5 position-absolute top-0 start-0  z-n1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div class="section-tittle text-center mb-60">
                        <h2 class="align-middle">
                            <span class="number">04</span><span class="title">Элсэгчийг бүртгэх</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="single-cat mb-30">
                        <div class="cat-icon">
                            <img src="../assets/img/help4.png" alt="">
                        </div>
                        <h5>Маягт бөглөх</h5>
                        <div class="cat-cap">
                            <p>
                                Бүртгүүлэгч оюутан болоход шаардлагатай мэдээлэл бүхий 
                                бүртгэлийн маягтыг үнэн зөв бөглөнө.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <div class="single-cat single-cat2 mb-30">
                        <div class="cat-icon">
                            <img src="../assets/img/help5.png" alt="">
                        </div>
                        <h5>Гэрээ байгуулах</h5>
                        <div class="cat-cap">
                            <p>
                                Бүртгүүлэгч “МУИС-д суралцагч суралцуулах гэрээ”-тэй танилцаж 
                                баталгаажуулна.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <div class="single-cat single-cat3 mb-30">
                        <div class="cat-icon">
                            <img src="../assets/img/help6.png" alt="">
                        </div>
                        <h5>Хүсэлт гаргах</h5>
                        <div class="cat-cap">
                            <p>
                                Маягт бөглөн гэрээтэй танилцаж баталгаажуулсны дараа оюутан болох
                                 хүсэлтээ гарган оюутны дугаар болон нууц үгээ авна.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" class="faq-section home-section position-relative">
        <img src="../assets/img/bg-image.png" alt="" class="bg-image7 position-absolute top-0 start-0  z-n1">
        <img src="../assets/img/bg-image6.png" alt="" class="bg-image6 position-absolute top-50 end-0 translate-middle-y  z-n1">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="section-tittle text-center ">
                        <h2 class="align-middle">
                            Таны сонорт
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mb-5">
                <div class="col-md-7">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                               <span class="icon">?</span> Хэн бүртгүүлэх вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                                Бүртгүүлэгч нь БҮТ-ийн хүчинтэй батламжтай, эсвэл 2024 онд ЭШ өгөхөөр БҮТ-д бүртгүүлсэн байна.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <span class="icon">?</span> Тооцоолсон оноог хэрхэн тооцох вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                                "Суурь" шалгалтад тооцохоор заасан хичээлээс хамгийн өндөр оноо авсан шалгалтын оноог 0.7, "Дагалдах" шалгалтад тооцохоор заасан хичээлээс хамгийн өндөр оноо авсан шалгалтын оноог 0.3-аар үржүүлж, нэмсэн нийлбэрээр тооцоолсон оноог бодно.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <span class="icon">?</span>  Суурь болон дагалдах шалгалтын босго оноо хэд вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                                Тооцох "Суурь" болон "Дагалдах" шалгалтын оноо нь МУИС-ийн Улаанбаатар дахь бүрэлдэхүүн сургуулийн хувьд тус бүр 480, орон нутгийн салбар сургуулийн хувьд 420 онооноос багагүй байна. Суурь шалгалтад тооцуулсан хичээлийн оноог дагалдах шалгалтад давхар тооцуулахгүй.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
                                <span class="icon">?</span>  МУИС-ийн харьяа ерөнхий боловсролын ахлах сургуулийн төгсөгчийг хэрхэн ШУС, ИТС, МТЭС-д шууд элсүүлэх вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                                <ol>
                                    <li>МУИС-ийн харьяа ерөнхий боловсролын ахлах сургуулийн төгсөгчийг тухайн бүрэлдэхүүн сургуулийн суурь болон дагалдах шалгалтад тооцохоор заасан хичээлүүдээс ЭШ өгч, тухайн хөтөлбөрийн босго оноог хангасан бол ШУС, ИТС, МТЭС-ийн сонгосон хөтөлбөрт шууд элсүүлнэ.
                                    </li>
                               <li>“МУИС-ийн харьяа ерөнхий боловсролын ахлах сургууль” гэсэн ангиллаас сонгон бүртгүүлж, заасан бүртгэлийн хураамж төлж, тухайн нөхцөл хангасныг гэрчлэх бичиг баримтын эх хувийг сканердаж , өргөдлийн хамт бүртгэлийн хугацаа хаахаас 7 хоногийн өмнө (07 дугаар сарын 01-ний өдрийн 17:30 минут) Оюутны хөгжлийн бодлогын газрын elselt@num.edu.mn цахим шуудан руу илгээж бүртгүүлнэ.</li>
                                </ol>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5">
                                <span class="icon">?</span>  МУИС-ийн орон нутгийн ерөнхий боловсролын ахлах сургуулийн төгсөгчийг хэрхэн шууд элсүүлэх вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                                <ol>
                                    <li>МУИС-ийн орон нутгийн ерөнхий боловсролын ахлах сургуулийн төгсөгчийг орон нутгийн салбар сургуулийн суурь болон дагалдах шалгалтад тооцохоор заасан хичээлүүдээс ЭШ өгч, БШУЯ-аас баталсан их, дээд сургуульд элсэгчдийн хангасан байх босго онооноос багагүй бол ББС, ЗБС, ЗАдБМТС-ийн хөтөлбөрүүдээс сонгон шууд элсүүлнэ. </li>
                                    <li>“Орон нутгийн ерөнхий боловсролын ахлах сургууль” гэсэн ангиллаас сонгон бүртгүүлж, заасан бүртгэлийн хураамж төлж, тухайн нөхцөл хангасныг гэрчлэх бичиг баримтын эх хувийг сканердаж , өргөдлийн хамт бүртгэлийн хугацаа хаахаас 7 хоногийн өмнө (07 дугаар сарын 01-ний өдрийн 17:30 минут) Оюутны хөгжлийн бодлогын газрын elselt@num.edu.mn цахим шуудан руу илгээж бүртгүүлнэ.</li>
                                </ol>  
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false" aria-controls="panelsStayOpen-collapse7">
                                <span class="icon">?</span>  Шилдэг элсэгчийн шаардлага юу вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                                <ol>
                                    <li>        
                                        Бүртгүүлэгч нь сүүлийн 2 жилийн дотор дараах шаардлагыг хангаж байвал шилдэг элсэгч гэж үзэж, албан ёсны эрх бүхий байгууллагаас олгосон батламж, сертификат, баримт бичигт үндэслэн хяналтын тоонд багтаан элсүүлнэ. Үүнд:
                                            <ul>
                                             <li>
                                                БШУЯ-аас тогтоосон Олон улсын олимпиадад оролцож 1-ээс 3-р байр эзэлсэн, Улсын олимпиадад оролцож энэ журмын Хүснэгт 2-т заасан нөхцөлийг хангасан ерөнхий боловсролын сургуулийн төгсөгчийг тухайн чиглэлээр шууд элсүүлнэ.
                <br>Хүснэгт 2-ийг <OlympiadModal/> дарж харна уу.
                                            </li>
                                            <li>
                                                Англи хэлний олон улсын шалгалтын IELTS 5, TOEFL iBT 45, PTE 40.8-аас дээш оноотой бүртгүүлэгчдийг гүйцэтгэлийн хувиар жагсааж, эхний 10 байр эзэлсэн бүртгүүлэгчийг ШУС-ийн Хүмүүнлэгийн ухааны салбарт шууд элсүүлнэ.
                                            </li>
                                            <li>
                                                Кембрижийн олон улсын AS (A) түвшний шалгалтын b (B) -ээс дээш, IB (international baccalaureate) хөтөлбөрийн 4-өөс дээш үнэлгээтэй бүртгүүлэгчдийг сургууль бүрд суурь шалгалтад тооцохоор заасан хичээлээр нь онооны дарааллаар жагсаан, эхний 3 байр эзэлсэн бүртгүүлэгчийг шууд элсүүлнэ.
                                            </li>
                                            <li>
                                                Комиссын зүгээс спортын өндөр ур чадвартай 10 хүртэлх бүртгүүлэгчийг шалгаруулж, гэрээ байгуулж БС <span style="color: #89939E;">/хяналтын тоо-2/</span>, МТЭС <span style="color: #89939E;">/хяналтын тоо-2/</span>, ШУС, ИТС, ББС, 3БС, ЗАдБМТС-д элсүүлж болно (Олимп, тив, дэлхийн тэмцээнээс медальт болон шагналт байранд шалгарсан, улсын өсвөр үеийн, улсын идэрчүүдийн аварга шалгаруулах тэмцээнд медальт байранд шалгарсан бүртгүүлэгчдийг гаргасан амжилтаар нь эрэмбэлж сонгуулна).
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Шилдэг элсэгч нь тухайн бүрэлдэхүүн/салбар сургуулийн суурь болон дагалдах шалгалтад тооцохоор заасан хичээлүүдээс ЭШ өгсөн байх ба МУИС-аас тавих ЭШ-ын босго оноог хангасан байна.</li>
                                </ol>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false" aria-controls="panelsStayOpen-collapse6">
                                <span class="icon">?</span>  Шилдэг элсэгчийг хэрхэн бүртгэх вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                                 Шилдэг элсэгчийн нөхцөлийг хангасан бүртгүүлэгч “Олимпиад”, “Англи хэлний олон улсын шагналт”, “Кембриж, IB-ийн олон улсын шагналт”, “Спортын ур чадвар” гэсэн ангиллаас сонгон бүртгүүлж, заасан бүртгэлийн хураамж төлж, тухайн нөхцөл хангасныг гэрчлэх бичиг баримтын эх хувийг сканердаж , өргөдлийн хамт бүртгэлийн хугацаа хаахаас 7 хоногийн өмнө Оюутны хөгжлийн бодлогын газрын elselt@num.edu.mn цахим шуудан руу илгээж бүртгүүлнэ.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false" aria-controls="panelsStayOpen-collapse8">
                                <span class="icon">?</span>  Элсэгчдэд олгох хөнгөлөлт, тэтгэлэг хэрхэн олгох вэ?
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div class="accordion-body">
                               <ol>
                                <li>
                                    БШУЯ-наас тогтоосон Олон улсын болон улсын олимпиадад оролцож 1-ээс 3-р байрт шалгарсан элсэгчид сургалтын төлбөрийн 50-100 хувьтай тэнцэх хэмжээний тэтгэлэг олгоно. Үүнд:
                                    <ul>
                                        <li>
                                            Олон улсын олимпиадад оролцож 1-ээс 3-р байр эзэлсэн элсэгчид 100 хувь;
                                        </li>
                                        <li>
                                            Улсын олимпиадад оролцож 1-р байрт шалгарсан элсэгчид 100 хувь;
                                        </li>
                                        <li>
                                            Улсын олимпиадад оролцож 2-р байрт шалгарсан элсэгчид 75 хувь;
                                        </li>
                                        <li>
                                            Улсын олимпиадад оролцож 3-р байрт шалгарсан элсэгчид 50 хувь;
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <!-- Багш мэргэжлийн хөтөлбөрт элссэн элсэгч нь ЭШ-д 650-750 оноо авсан бол 70 хувь, 751-ээс дээш оноо авсан бол 100 хувь сургалтын төлбөрийг төрөөс эхний улиралд чөлөөлнө. Цаашид суралцагч сурлагын голч дүн 3.0 болон түүнээс дээш оноотой суралцсан тохиолдолд сургалтын төлбөрийг үргэлжлүүлэн 100 хувь олгоно.
                                     -->
                                     МУ-ийн Засгийн газрын 2024 оны 03 сарын 06-ны өдрийн 103 дугаар тогтоол "Багш, багш мэргэжлээр суралцагч болон багш, ажилтны хүүхдийг тэргүүлэх, эрэлттэй мэргэжлээр суралцахад төрөөс дэмжлэг үзүүлэх журам"-ын
                                     2.1-2.7 дахь заалтын тавигдах шаардлагыг хангасан бол төрөөс төлбөрийг бүрэн санхүүжүүлнэ. 
                                </li>
                                <li>
                                    Монголын сайхан бичигтэн уралдаанаас шалгарсан, суралцах эрх (ШУС-ийн Хүмүүнлэгийн ухааны салбарын хөтөлбөрүүдээс сонгоно) авсан элсэгчийн суралцах хугацааны сургалтын төлбөрийг Засгийн газрын буцалтгүй тэтгэлгээр 100 хувь олгоно.
                                </li>
                                <li>
                                    Орон нутгийн салбар сургуулиуд бие даасан тэтгэлэг, хөнгөлөлтийн нөхцөлтэй байж болно.
                                </li>
                               </ol>
                            </div>
                            </div>
                        </div>
                        </div>
                   </div>
            </div>
        </div>
    </section>
</template>

<script>
import LoginModal from "../app/LoginModal.vue";
import OlympiadModal from "../app/Apply/OlympiadModal.vue";
import ScorelistModal from "../app/Confirm/ScorelistModal.vue";
import ScorelistTopModal from "../app/Confirm/ScorelistTopModal.vue";
export default {
    name: 'Home',
    components: {
        LoginModal,
        OlympiadModal,
        ScorelistModal,
        ScorelistTopModal
    },
    props: {
        msg: String
    },
    mounted() {
    }
  
}
</script>

<style >
.alink{
    color: var(--primary-color)!important;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
}
#shildegelsegchModal ul li{
    list-style-type: circle;
}
#shildegelsegchModal .table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-accent-bg: #F3F6FA;
    color: var(--bs-table-striped-color);
}
.bg-image3{
top: 35% !important;
}
.bg-image4{
top: -150px !important;
}
.bg-image7{
    top: -80px !important;
}
.hero-section{
    position: relative;
}
.accordion .accordion-item{
    border: 0px;
}
.accordion .accordion-item .accordion-header {
    border-bottom: 1px solid #e3e3e5;
    padding-bottom: 10px;
    background-color: var(--light-color)!important;
}
.accordion .accordion-item .accordion-collapse{
    background-color: var(--light-color)!important;
}
.accordion .accordion-item .accordion-header button{
    color:var(--primary-color);
    font-weight: 600;
}
.accordion .accordion-item .accordion-header button.collapsed{
    color: black!important;
    font-weight: 500;
}
.accordion .accordion-item .accordion-header button{
    background-color: var(--light-color)!important;
    box-shadow: none;
}
.accordion .accordion-item .accordion-header button .icon{
    color:var(--primary-color);
    font-weight: 600;
    margin-right: 15px;
}
.accordion .accordion-body {
    margin-left:25px;
}
.home-section {
    padding: 5em 0;
}

.section-tittle {
    padding-bottom: 100px;
}

.section-tittle h2 {
    vertical-align: middle !important;
    line-height: 80px;
}

.section-tittle h2 span {
    vertical-align: middle !important;
}

.section-tittle h2 .title {
    font-size: 48px;
    z-index: 1;
    margin-left: -30px;
    font-weight: 600;
    text-transform: uppercase;
}

.section-tittle h2 .number {
    font-size: 120px;
    z-index: 0;
    color: #89939E;
    opacity: 0.2;
    font-weight: 600;
    text-transform: uppercase;
}

.hero-section {
    padding: 120px 0;
}
.hero-section .btn{
width:200px;
font-size: 16px;
    font-weight: 600;
}
.hero-section .btn-primary{
    padding: 20px;
}
.hero-section .btn-primary i{
    font-size: 14px;
    margin-left: 5px;
}

.hero-section h2.blue {
    color: var(--primary-color);
    font-weight: 600;
}

.hero-section h2 {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 42px;
    line-height: 1.3em;
}

.hero-section .calendar p {
    color: black;
}

.hero-section .calendar p span {
    color: var(--primary-color);
}

.counter-section .number strong {
    font-size: 46px;
}

.counter-section .block-18 {
    height: 170px;
}

.help-section .single-cat {
    background: var(--light-color);
    border-radius: 8px;
    padding: 30px 30px;
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s;
    position: relative;
    z-index: 1;
    height: 100%;
}

.help-section .single-cat .cat-icon {
    margin-bottom: 50px;

}

.help-section .single-cat .cat-icon img {
    height: 40px;
}

.help-section .single-cat h5 {
    margin-bottom: 20px;
    font-weight: 600;
}

.help-section .single-cat p {
    margin-bottom: 0px;
}
.help2-section .col-md-6 .d-flex .icon {
    background: var(--light-color);
    border-radius: 50%;
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 25px;

width: 90px;
height: 90px;
flex: none;
order: 0;
flex-grow: 0;
}
.help2-section .col-md-6 .d-flex .icon img {
    height: 40px;
}

.help3-section .single-cat .cat-icon img {
    height: 40px;
}
.help3-section .single-cat h5 {
    margin-bottom: 20px;
    font-weight: 600;
}

.help3-section .single-cat {
    background: var(--light-color);
    border-radius: 8px;
    padding: 30px 30px;
    position: relative;
}
.help3-section .single-cat .cat-icon {
    margin-bottom: 50px;
}
.faq-section .section-tittle h2 {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 48px;
}
.faq-section .accordion-body ol, ul{
    padding-left: 15px;
}
.help4-section .single-cat {
    background: var(--light-color);
    border-radius: 8px;
    padding: 30px 30px;
    -webkit-transition: all .4s ease-out 0s;
    -moz-transition: all .4s ease-out 0s;
    -ms-transition: all .4s ease-out 0s;
    -o-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s;
    position: relative;
    z-index: 1;
    height: 100%;
}

.help4-section .single-cat .cat-icon {
    margin-bottom: 50px;

}

.help4-section .single-cat .cat-icon img {
    height: 40px;
}

.help4-section .single-cat h5 {
    margin-bottom: 20px;
    font-weight: 600;
}

.help4-section .single-cat p {
    margin-bottom: 0px;
}
.faq-section{
    background: var(--light-color);
}
@media (max-width: 1200px) { 
    .section-tittle h2 .title {
    font-size: 36px;
    margin-left: -30px;
}
}
</style>