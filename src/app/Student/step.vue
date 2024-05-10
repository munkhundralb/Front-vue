<template>
  <div class="d-flex justify-content-center  breadcrumbs mb-4">
    <div v-if="stepresult.form" class="bd-highlight step1 step">
      <div class="done">
        <div class="cirle-number">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 6L9.5 17L4.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <p>Бүртгэлийн маягт бөглөх</p>
      </div>
    </div>
    <div v-else class="bd-highlight step1 step">
      <div class="active">
        <div class="cirle-number">1</div>
        <p>Бүртгэлийн маягт бөглөх</p>
      </div>
    </div>
    <div class="bd-highlight hr ">
      <hr>
    </div>
    <div class="bd-highlight step2 step">
      <div v-if="stepresult.geree" class="done">
        <div class="cirle-number">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 6L9.5 17L4.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <p>“МУИС-д суралцагч суралцуулах гэрээ”-г зөвшөөрөх </p>
      </div>
      <div v-else :class="routename == 'agreement' ? 'active' : 'inactive'">
        <div class="cirle-number ">2</div>
        <p>“МУИС-д суралцагч суралцуулах гэрээ”-г зөвшөөрөх</p>
      </div>
    </div>
    <div class="bd-highlight hr">
      <hr>
    </div>
    <div class="bd-highlight step3 step">
      <div v-if="stepresult.student" class="done">
        <div class="cirle-number">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 6L9.5 17L4.5 12" stroke="white" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <p>Оюутан болох хүсэлт илгээх </p>
      </div>
      <div v-else :class="routename == 'request' ? 'active' : 'inactive'">
        <div class="cirle-number ">3</div>
        <p>Оюутан болох хүсэлт илгээх</p>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  props: {
    stepresult: Object
  },
  data() {
    return {
      agreement: false,
      isstudent: false,
      routename: ''
    }
  },
  mounted() {
    this.routename = this.$route.name;
  },
  methods: {

  }
}
</script>
<style scoped>
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
  font-weight: 600;
}

.breadcrumbs .step2 {
  max-width: 300px !important;
}

.breadcrumbs .active .cirle-number {
  background: var(--primary-color);
  padding-left: 14px;
}

.breadcrumbs .step1 {
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

.breadcrumbs .done .cirle-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
}

.breadcrumbs .done .cirle-number {
  background: var(--success-color);
  margin-top: 8px;
}

.breadcrumbs .done p {
  color: var(--success-color);
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

}</style>