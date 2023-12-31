import axios from 'axios'
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router';
import 'element-plus/theme-chalk/el-message.css';

//创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 10000
})

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore();
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
  }, e => Promise.reject(e))
//axios响应拦截器
const router = useRouter();
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    });
    if (e.response.status === 401) {
      userStore.clearUserInfo();
      router.push('/login');
    }
    return Promise.reject(e);
  }
);
//导出axios实例
export default httpInstance;