<template>

<div>

  <div id="about">
    
    我的页面111
   
  </div>
  <router-view></router-view>

    <Header/>
    <el/>
   </div>
</template>


<script>
import Header from './Header'
import el from './el'
export default {
  name:'about',
  components:{
    'Header':Header,
    'el':el
  }
}
</script>


<style lang="scss">

#about {
   background-color: #409EFF;
  color: #fff;
  line-height: 60px;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
 /* color: red; */
    font-weight: bold;
  a {
    font-weight: bold;
    /* color: #2c3e50; */
   /* color: red; */
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>