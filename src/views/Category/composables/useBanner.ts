import { ref, onMounted} from 'vue'
import { BannerResult } from '@/api/model/homeModel';
import { getBannerAPI } from '@/api/home';
export function useBanner(){
    //获取轮播图数据
    const bannerList = ref([] as BannerResult[])
    const getBannerList = async() =>{
    const res = await getBannerAPI( {distributionSite : '2'});
    bannerList.value = res.result;
    }
    onMounted(() => { 
        getBannerList();
    })
    return {
        bannerList
    }
}