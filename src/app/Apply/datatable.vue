<template>
    <div>  
        <div class="centered-content">
    
    <div class="header">
      
      <div class="icons">
        <i class="fas fa-heart fa-lg mr-2"></i>
        <i class="fas fa-link fa-lg mr-4"></i>
        <a href="https://codepen.io/g2g" style="color: #ffd843;">
          <i aria-hidden="true" class="fas fa-paw fa-lg"></i>
        </a>
      </div>
      
      <h1 class="font-weight-light text-white">
        Datatables Example Using Vue.js
      </h1>
      <h4 class="font-weight-light">
        A simple and robust way to update Datatables in Vue.js using an Ajax data source.
      </h4>
      
    </div>

      <div class="p-4">
        <table id="datatable" class="table table-hover table-striped w-100" cellspacing="0">
          <thead>
              <tr v-if="columns">
                <th v-for="column in columns" :key="column" class="text-center">
                  {{column}}
                </th>
              </tr>
          </thead>
          <tbody v-if="tableData">
            <tr v-for="row in tableData" :key="'row'+row.name+row.season">
              <td v-for="column in columns" :key="row.name+row.season+column">
                {{row[column]}}
              </td>
            </tr>
          </tbody>
      </table>
    </div>
    
    <h4 v-if="errors" class="text-white font-weight-light m-3 p-4 rounded-lg" style="background:#102852">
      {{errors}}
    </h4>
    
  </div>
    </div>
</template>

<script >
import $ from 'jquery'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import axios from "axios";
DataTable.use(DataTablesCore);
export default {

    data: function() {
    return {    
      table: '#datatable',
      columns: ['airdate', 'name', 'season'],
      url: 'https://api.tvmaze.com/schedule?country=US&date=2014-12-01', 
      //url: any api will do. just update the columns that correspond to it.
      tableData: null,
      errors: null
    }
  },
  
  mounted() {
      let self = this;
      this.getData().then(function(data) {
        self.loadData(data);
        self.makeTable();
      });      
  },
  
  methods: {
    makeTable() {
      this.$nextTick(function() {
        $(this.table).DataTable(); 
      });
    },

    async getData() {
      let self = this;
      return axios.get(this.url)
        .then( function(response) {
          return response.data;
        })
        .catch( function(error) {
          self.errors = `The API is having an issue: ${error}`;
        });
    },

    loadData(data) {
      let self = this;
      let rows = [];
      
      data.forEach(function(row) {
        let theRow = {};
        self.columns.forEach(function(column) {   
          theRow[column] = row[column]
        });        
        rows.push(theRow);
      })
      
      this.tableData = rows;
    }
    
  }
}
</script>