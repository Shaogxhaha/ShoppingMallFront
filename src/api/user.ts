import httpInstance from "@/utils/http";
import { LikeListRequest } from "./model/userModel";
//获取猜你喜欢商品列表
export function getLikeListAPI({ limit = 4}): Result<LikeListRequest[]>{
    return httpInstance({
        url: './goods/relevant',
        params:{
            limit
        }
    });
}
//  获取订单列表
export function getUserOrder(params: UserOrderRequest): Result<OrederListResult> {
    return httpInstance({
      url: '/member/order',
      method: 'GET',
      params
    });
  }
  