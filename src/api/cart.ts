import httpInstance  from "@/utils/http";
import { CartItem, addCartRequest,MergeCartRequest } from "./model/cartModel";

export function addCartAPI( params: addCartRequest) : Result<CartItem>{
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: params
    })
} 

// 获取最新购物车数据
export function findNewCartListAPI(): Result<CartItem[]> {
    return httpInstance({
      url: '/member/cart',
      method: 'GET'
    });
}

// 删除购物车商品
export function delCartAPI(ids: string[]): Result<boolean> {
    return httpInstance({
      url: '/member/cart',
      method: 'DELETE',
      data: {
        ids
      }
    });
  }

  // 合并购物车
export function mergeCartAPI(data: MergeCartRequest[]): Result<null> {
    return httpInstance({
      url: '/member/cart/merge',
      method: 'POST',
      data
    });
  }