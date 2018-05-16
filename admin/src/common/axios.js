import axios from 'axios'

function install(Vue) {
	const instance = axios.create({
	  	baseURL: 'https://api.example.com',
	  	timeout: 3000
	});

	// 添加请求拦截器
	axios.interceptors.request.use(config => {
	    return config;
	}, error => {
	    return Promise.reject(error);
	});

	// 添加响应拦截器
	axios.interceptors.response.use(response => {
	    return response;
	}, error => {
	    return Promise.reject(error);
	});

	Vue.prototype.$get = (url,params,success,err)=>{
		axios.get(url,{
			params: params
		}).then(response => {
			if(success)  success(response)
		}).catch(error => {
			if(err)  err(error)
		})
	}

	Vue.prototype.$post = (url,params,data,success,err)=>{
		axios.post(url,data,{
			params: params
		}).then(response => {
			if(success)  success(response)
		}).catch(error => {
			if(err)  err(error)
		})
	}
}

export default install;