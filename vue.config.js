module.exports = {
    devServer: {
      proxy: {
       '/fcj':{
           target:'http://47.95.207.1:8080',
           changeOrigin:true,
       pathRewrite:{
           "^/fcj":''
       }
        }
      }
    }
  }