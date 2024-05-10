<template>
    <div :class="iscontainer ? 'container my-5' : ''">
        <div class="fullheigth centered-content bg-white-section p-4">
            <div class="content-tittle mb-5">
                <h2><span class="title">Журам</span></h2>
            </div>

            <div class="row">
                <div class="d-flex justify-content-center">
                    <iframe height="100%" width="100%"
                        src="https://www.num.edu.mn/wp-content/uploads/2024/05/NUM2120-%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D1%8B%D0%BD-%D3%A9%D0%B4%D1%80%D0%B8%D0%B9%D0%BD-%D1%85%D3%A9%D1%82%D3%A9%D0%BB%D0%B1%D3%A9%D1%80%D1%82-2024-2025-%D0%BE%D0%BD%D1%8B-%D1%85%D0%B8%D1%87%D1%8D%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD-%D0%B6%D0%B8%D0%BB%D0%B8%D0%B9%D0%BD-%D0%BD%D0%B0%D0%BC%D1%80%D1%8B%D0%BD-%D1%83%D0%BB%D0%B8%D1%80%D0%B0%D0%BB%D0%B4-%D0%BE%D1%8E%D1%83%D1%82%D0%B0%D0%BD-%D1%8D%D0%BB%D1%81%D2%AF%D2%AF%D0%BB%D1%8D%D1%85-%D0%B6%D1%83%D1%80%D0%B0%D0%BC.pdf"
                        title="МУИС-ийн бакалаврын өдрийн хөтөлбөрт 2024-2025 оны хичээлийн жилийн намрын улиралд оюутан элсүүлэх журам">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'juram',
        data() {
            return {  
                iscontainer:false,
                
            }
        },
    mounted() {
        let currentroutname=this.$route.name;
        if(currentroutname=='juram')
        {
            this.iscontainer=true;
        }else
        {
            this.iscontainer=false;
        }
    },
  }
    
</script>

<style scoped>
.bg-white-section iframe{
width: 100%;
max-width: 1000px;
height: 800px;
}
</style>
