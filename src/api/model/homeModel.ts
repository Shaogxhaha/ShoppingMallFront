import { ClassData } from "./layoutModel";

//轮播图
export interface BannerResult{
    id: string;
    imgUrl: string;
    hreUrl: string;
    type: string;
}
//Banner请求参数
export interface BannerRequest {
    distributionSite: string;
}
//人气推荐响应
export interface HotListResult{
    id: string;
    picture: string;
    title: string;
    alt: string;
}
//所有产品列表
export interface ProductListResult extends ClassData{
    saleInfo: string;
}