import { ref, onMounted } from 'vue'
import { getCategoryAPI } from '@/api/category';
import { Category } from '@/api/model/categoryModel';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';


export function useCategory(){
    //获取分类数据
    const route = useRoute();
    const categoryData = ref({} as Category)
    const getCategoryDate = async(id = route.params.id as string) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    }
    onMounted(() => {
        getCategoryDate(route.params.id as string);
    })
    //目标：路由参数变化的时候，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategoryDate(to.params.id as string)
    })
    return {
        categoryData
    }
}