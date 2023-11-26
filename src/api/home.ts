import httpInstance from "@/utils/http";
import { BannerRequest, BannerResult ,HotListResult,ProductListResult} from "./model/homeModel";
//获取轮播图
export function getBannerAPI(params: BannerRequest): Result<BannerResult[]>{
    const {distributionSite = '1'} = params;
    return httpInstance({ url: '/home/banner', params:{distributionSite}});
} 
//获取好物
export function getNewAPI(): Result<Good[]>{
    return httpInstance({ url:'./home/new' })
}
//人气推荐
export function getHotAPI(): Result<HotListResult[]>{
    return httpInstance({ url:'./home/hot' })
}
//获取所有商品模块
export function getGoodsAPI(): Result<ProductListResult[]>{
    return httpInstance({ url:'./home/goods' })
}