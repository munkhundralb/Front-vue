<template>
    <div >
  <!-- Modal -->
  <div v-if="OpenClose" class="modal fade show" 
   tabindex="-1" aria-labelledby="exampleModalLabel"  aria-modal="true" role="dialog" 
   style="display:block">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-header">
          
          <button type="button" @click="OpenCloseFun()" class="btn-close" ></button>
        </div>
        <div class="modal-body">
         <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button"  @click="OpenCloseFun()" :class="'btn btn-'+variant" >Хаах</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="OpenClose" class="modal-backdrop fade show"></div>
  <button v-if="visiblebutton" type="button" @click="OpenCloseFun" :class="'btn btn-'+variant">open modal </button>


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade " id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" >Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>

 
  </template>
<script>
export default {
  name: 'Modal',
  props: {
    visible: Boolean,
    visiblebutton: Boolean,
    variant:String,
  },
  data(){
    return{
       OpenClose:this.visible
    }
  },
  methods:{
        OpenCloseFun(){
           this.OpenClose =!this.OpenClose;
           const body = document.querySelector("body")
           this.OpenClose ? body.classList.add("modal-open") : body.classList.remove("modal-open")
        },
  },
  watch: { 
      visible: function(newVal, oldVal) { // watch it
        this.OpenClose =newVal;
        console.log('new' +newVal+ '==' +oldVal)
      }
    }

}
</script>