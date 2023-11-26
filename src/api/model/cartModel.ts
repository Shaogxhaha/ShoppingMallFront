//商品购物车
export interface CartItem{
    id: string;
    skuId: string;
    name: string;
    attrsText: string;
    specs: [];
    picture: string;
    price: string;
    nowPrice: string;
    nowOriginalPrice: string;
    selected: boolean;
    stock: number;
    count: number;
    isEffective: boolean;
    discount: null;
    isCollect: boolean;
    postFee: number;
}

//添加购物车请求
export interface addCartRequest{
    skuId:string;
    count:number;
}

// 合并购物车请求
export interface MergeCartRequest {
    skuId: string;
    selected: boolean;
    count: number;
}
  