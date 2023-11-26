//二级分类
export interface Category{
    id:string;
    name:string;
    picture: string;
    children:CategoryChildren[];
}
//children
export interface CategoryChildren{
    id: string;
    name: string;
    picture: string;
    parentId: string;
    parentName: string;
    goods: Good[];
    categories: Categories[];
    brands: null;
    saleProperties: null;

}

// 分类集合
export interface Categories {
    id: string;
    layer: number;
    name: string;
    parent: string;
}
//导航数据
export interface NavigationDataRequest {
    categoryId: string;
    page: number;
    pageSize: number;
    sortField: string;
}

//获取二级分类下导航商品数据
export interface NavigationGoodList {
    count: number;
    items: Good_Pt[];
    page: number;
    pageSize: number;
    pages: number;
}