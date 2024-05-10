import axios from "axios";
export const toggle = {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    isExpired() {
      var calldata = JSON.parse(localStorage.getItem('iscallapi'));
      return new Date(calldata.enddatetime) > new Date();
    },
    callnotif() {
      
      if(localStorage.getItem('iscallapi'))
      {
        var calldata = JSON.parse(localStorage.getItem('iscallapi'));

        if(new Date(calldata.enddatetime) > new Date()) // хугацаа дуусаагүй бол
        {
          this.counter=this.counter+1;
        if(this.counter==1) // эхний удаа дуудхад 3сек байна.
        {
        setTimeout(() => this.callnotif(), 3000);
        }else{
          axios.get("https://burtgel.num.edu.mn/buils/api/check?pid="+calldata.programID)
          .then(res => {
            if (res.data.includes('CUTEOK')) {
              this.$toast.open({
                duration: 10000,
                message: 'Таны сонгосон хөтөлбөр амжилттай баталгаажлаа.',
                type: 'success'
              });
              this.isloadingpage=false;
              this.Stopnotif(); // амжилттай хариу ирсэн учир recurse дуудалтыг зогсоож loading зогсоод reload хийх
            } else 
            if(res.data.includes('CUTEONGOING')){ // хүсэлт боловсруулж байна
              this.$toast.open({
                duration: 5000,
                message: 'Таны хүсэлтийг боловсруулж байна. Түр хүлээнэ үү!',
                type: 'warning'});
            }else{   // Алдаа гарсан бусад
              var resdata= res.data.replace("CUTEPROBLEM", "");

              this.$toast.open({
                duration: 10000,
                message: resdata,
                type: 'warning'});
                this.Stopnotif();
            }
          }).catch(error => {
            this.$toast.open({
              message: 'Холболт амжилтгүй!',
              type: 'error'});
              // this.Stopnotif();
          });
          setTimeout(() => this.callnotif(), 10000);
        }
        }
        else{
          console.log('end recurse time: ' + calldata);
          this.Stopnotif();
        }
      }
    },
    Startnotif(pid,online1){
      
      var today = new Date();
      today.setMinutes(today.getMinutes() + 10);
      var checkpid = JSON.stringify({ programID: pid, isonline: online1, enddatetime: today.toString()});

      localStorage.setItem("iscallapi", checkpid);
      this.callnotif();
    },
    Stopnotif() {

     // var calldata = JSON.parse(localStorage.getItem('iscallapi'));

      localStorage.removeItem('confirmprogram');
      localStorage.removeItem('iscallapi');
      if(this.$route.name!='confirm') 
      {
       this.$router.push({ name: "confirm" });
      }else{
        this.$router.go();
      }
    }
},
};
