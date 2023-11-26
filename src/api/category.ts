import httpInstance from "@/utils/http";
import { Category, CategoryChildren, NavigationDataRequest, NavigationGoodList } from "./model/categoryModel";

//获取分类数据
export function getCategoryAPI(id: string): Result<Category>{
    return httpInstance( '/category', { params:{ id } });
}
//获取二级分类列表数据
export function getCategoryFilterAPI(id: string) : Result<CategoryChildren>{
    return httpInstance( '/category/sub/filter', {params: { id }});
}

//获取导航数据
export function getSubCategoryAPI(data: NavigationDataRequest): Result<NavigationGoodList>{
    return httpInstance( '/category/goods/temporary', {method:'POST',data});
}