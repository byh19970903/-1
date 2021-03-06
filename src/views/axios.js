import Axios from 'axios'
import qs from 'querystring'
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config,'请求拦截器')
    let data=qs.stringify(config.data)
    config.data=data
    console.log(config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  export default Axios