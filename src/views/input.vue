<template>
    <div class="input">
      <input type="text" v-model="addValue">  
      <button @click="add">add</button>
    </div>
</template>
<script>
export default {
   data(){
       return{
           addValue:""
       }
   },
   methods:{
       add(){
           let {token,_id}=localStorage.getItem('info')
           this.$axios.post('/fcj/v1/matter/add',{token:token,uid:_id,matter:this.addValue})
           .then((data)=>{
console.log(data)
           })
       }
   }
}
</script>
