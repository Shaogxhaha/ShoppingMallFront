import { loginAPI } from "@/api/login";
import { UserInfo } from "@/api/model/loginModel";

import { defineStore } from "pinia";
import { useCartStore } from '@/stores/cartStore'
import { ref } from "vue";
import { mergeCartAPI } from '@/api/cart'

export const useUserStore = defineStore('user' ,() => {

    const cartStore = useCartStore();

    //定义管理数据的state
    const  userInfo = ref({} as UserInfo)
    //定义获取接口函数的action函数
    const getUserInfo = async({ account, password}) =>{
        const res = await loginAPI({ account, password})
        userInfo.value = res.result
        //   合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          };
        })
      );
      await cartStore.updateNewList();
    }
    //定义退出登录清楚函数
    const clearUserInfo = () =>{
        userInfo.value = {} as UserInfo;
        cartStore.clearCart();
    }
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
{
    persist: true,
  })