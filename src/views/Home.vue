<template>
  <div id="home">
<List/>
  </div>
</template>

<script>

import List from './list'
import {mapMutations} from 'vuex'
export default {
  name: 'home',
 components:{List},
 methods:{
  // initList(){
  //   // console.log(2)
  // this.$store.commit('updatedata','测22试')
  //  this.$store.commit('updataList','222246')
  // }
  
   ...mapMutations(['updateList']),
   
initList(){
  let {token,_id}=JSON.parse(localStorage.getItem('info'))
  this.$axios.post('/fcj/v1/matter/get',{token:token,uid:'_id'})
  .then((data)=>{
    console.log(data)
    if(data.err===0){
      this.updateList(data.list)

    }else{
      alert(data.msg)
    }
  })
}
 },
 created(){
   this.initList()
 },
}
</script>

<style lang="scss">
#home {
  /* padding: 30px; */
  color:darkmagenta;
    font-weight: bold;
  /* a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  } */
}
</style>
