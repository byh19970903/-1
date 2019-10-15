<template>
    
    <div class="list">
<ul v-for ='(item,index) in this.$store.state' :key='index'>
    <li>{{item}}</li>
</ul>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'home',
    
    computed:{
        ...mapGetters(['listAll'])
    },
}
</script>