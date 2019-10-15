<template>
    <div class="login">
<h2>注册</h2>
us:<input type="text" v-model="us">
<hr>
ps:<input type="text" v-model="ps">
{{us}}{{ps}}
<hr>
<button @click="login">login </button>

    </div>
</template>
<script>
import qs from 'querystring'
export default {
    data(){
        return{
            us:'',
            ps:'',
        }
    },
    methods:{
        login(){
            let url='/fcj/v1/user/login'
            this.$axios.post(url,{us:this.us,ps:this.ps})
            .then((data)=>{
                console.log(data)
                if (data.err==0){
                    localStorage.setItem('info',JSON.stringify(data.info))
                    this.$router.push('/home')

                }else{
                    alert(data.msg)
                }
            })
           /// console.log(this.us,this.ps)
        }
    }
}
</script>
