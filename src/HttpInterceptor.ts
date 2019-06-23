import http from 'axios';
export function configHttpInterceptor() {
	http.interceptors.request.use(config => {
		config.baseURL = 'http://localhost:8000';
		return config;
	});
}
