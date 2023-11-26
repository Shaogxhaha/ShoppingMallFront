import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//引入scss样式
import '@/styles/common.scss';
import App from './App.vue'
import router from '@/router'
//导入全局组件
import { lazyPlugin } from './directives';
import { componentsPlugin } from '@/components/index';
const app = createApp(App)
app.use(componentsPlugin);
app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
