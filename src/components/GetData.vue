<template>
  <div class="container">
      <table class="table table-bordered  centre">
  <thead>
    <tr class="table-dark">
      
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone1</th>
      <th scope="col">Phone2</th>
      <th scope="col">Fax</th>
      <th scope="col">Tag</th>

    </tr>
  </thead>
  <tbody>
    <tr  v-for='(data1,i) in datas' :key='i' :value="data1.email">
     <!-- <td>{{i+1}}</td> -->
      <td>{{data1.frist_name}}</td>
      <td> {{data1.last_name}}</td>
      <td>{{data1.email}}</td>
      <td> {{data1.number1}}</td>
      <td>{{data1.number2}}</td>
      <td>{{data1.number3}}</td>
     <td>{{data1.tag}}</td>
    </tr>
  </tbody>
      </table>
 
  </div>
</template>

<script>
export default {
  name: 'GetData',
  data () {
    return {
    
    }
  },
  

  computed: {
    datas() {
    return this.$store.state.data
    }
  },
  mounted() {
    this.$store.dispatch("FetchData");
  }
}
</script>
<style scoped>
/* .centre{
  display: flex;
  justify-content: center;
  align-items: center;
}  */
</style>