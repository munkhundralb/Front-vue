<template>
  <div class="base-image-input " :style="{ 'background-image': `url(${imageData})` }" @click="chooseImage">
    <div v-if="isloading" class="loadingspin">
                <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary-color" role="status">
                    <span class="visually-hidden">Ачаалж байна...</span>
                </div>
                </div>
            </div>
    <div v-else-if="!imageData" class="noimage text-center">
      <svg class="rounded mx-auto d-block" width="26" height="24" viewBox="0 0 26 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.6663 0.66748H6.33301C3.02501 0.66748 0.333008 3.35948 0.333008 6.66748V17.3341C0.333008 17.7888 0.393014 18.2275 0.489014 18.6528C0.49968 18.7142 0.515681 18.7715 0.543681 18.8275C1.21301 21.4115 3.54234 23.3328 6.33301 23.3328H19.6663C22.9743 23.3328 25.6663 20.6408 25.6663 17.3328V6.66618C25.6663 3.35951 22.9743 0.66748 19.6663 0.66748ZM6.33301 2.00081H19.6663C22.2397 2.00081 24.333 4.09415 24.333 6.66748V14.3914L18.417 8.4755C17.6357 7.69284 16.3623 7.69284 15.581 8.4755L9.00368 15.0622L7.75035 13.8088C6.99568 13.0542 5.66901 13.0542 4.91435 13.8088L1.66502 17.0581V6.66748C1.66635 4.09415 3.75967 2.00081 6.33301 2.00081ZM19.6663 22.0008H6.33301C4.24234 22.0008 2.49034 20.6102 1.89834 18.7115L5.85834 14.7515C6.109 14.5008 6.55702 14.5008 6.80902 14.7515L8.06234 16.0048C8.57967 16.5221 9.42235 16.5221 9.93835 16.0048L16.525 9.41813C16.7863 9.1568 17.2144 9.1568 17.4757 9.41813L24.3344 16.2768V17.3341C24.333 19.9075 22.2383 22.0008 19.6663 22.0008ZM6.33301 8.00081C6.33301 7.26481 6.93034 6.66748 7.66634 6.66748C8.40234 6.66748 8.99967 7.26481 8.99967 8.00081C8.99967 8.73681 8.40234 9.33415 7.66634 9.33415C6.92901 9.33415 6.33301 8.73681 6.33301 8.00081Z"
          fill="#718096" />
      </svg>
      <p class="text-center"> Зураг сонгож оруулах</p>
    </div>

    <input class="file-input" ref="fileInput" type="file" accept="image/jpeg, image/jpg, image/png" @input="onSelectFile">
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    imagetypeprop: String
  },
  data() {
    return {
      imageData: null,
      isloading: false
    }
  },
  created() {

    axios.get(process.env.VUE_APP_API_BASE_URL + "pic?number=" + this.imagetypeprop)
      .then(res => {
        if (res.status == 200) {
          this.imageData = process.env.VUE_APP_API_BASE_URL + 'pic?number=' + this.imagetypeprop;
          this.$parent.changeimage(this.imagetypeprop, 99);
        }
      }).catch(error => {
        // this.$toast.open({
        //   message: 'Холболт амжилтгүй!',
        //   type: 'error'
        // });
      });
  },
  methods: {
    chooseImage() {
      //alert('choose');
      this.$refs.fileInput.click();
    },
    onSelectFile() {

      const input = this.$refs.fileInput
      const files = input.files;

      if (files && files[0]) {
        if (files[0].size > (1024 * 1024) * 4) {
          this.$toast.open({
            duration: 5000,
            message: 'Зургийн хэмжээ 4mb-аас их байна!',
            type: 'error'
          });
          this.$refs.fileInput.value = null;
          // return;
        } else {
          let formData = new FormData();
          formData.append('file', files[0]);
          this.isloading=true;
          axios.post(process.env.VUE_APP_API_BASE_URL + "file/upload?number=" + this.imagetypeprop, formData)
            .then(res => {
              this.isloading=false;
              if (res.data.status == 1) {
                const reader = new FileReader
                reader.onload = e => {
                  this.imageData = e.target.result;
                  this.$parent.changeimage(this.imagetypeprop, 99);
                }
                reader.readAsDataURL(files[0]);
                this.$emit('input', files[0]);

                // this.$toast.open({
                // message: res.data.message,
                // type: 'success'
                // });
              } else {
                this.$toast.open({
                  message: res.data.message,
                  type: 'error'
                });
              }
            }).catch(error => {
              this.isloading=false;
              this.$toast.open({
                message: 'Холболт амжилтгүй!',
                type: 'error'
              });
            });
        }
      }
    }
  }
}
</script>
<style scoped>
.loadingspin{
  padding-top: 100px;
}
.base-image-input {
  display: block;
  /* width: 180px; */
  height: 250px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;

}

.noimage {
  background: #F9F9F9;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
  padding-top: 100px;
  border-radius: 8px;
}

.noimage:hover {
  background: #E0E0E0;
}

.file-input {
  display: none;
}
</style>