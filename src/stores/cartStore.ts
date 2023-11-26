import { CartItem } from "@/api/model/cartModel";
import { useUserStore } from './user'
import { defineStore } from "pinia"
import { ref, computed } from 'vue'
import { addCartAPI,findNewCartListAPI ,delCartAPI} from "@/api/cart";

export const useCartStore = defineStore('cart',() => {
    //state => cartList;
    const cartList = ref([] as CartItem[]);
    
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token)

    //aciton => addCart
    const addCart = async ( good : CartItem) => {
        if(isLogin){
            //调用接口
            const {skuId,count} = good;
            await addCartAPI({skuId,count});
            const res = await findNewCartListAPI();
            cartList.value = res.result;
        }else{
            //添加购物车
            //已经添加过 => count + 1
            //没有添加过 => 直接push
            const item  = cartList.value.find((item) => good.skuId === item.skuId)
            if(item) {
                item.count++;
            }else{
                cartList.value.push(good)
            }
        }
        
    }

    //删除商品
    const delCart = async( skuId : string ) => {
        if(isLogin.value){
            await delCartAPI([skuId]);
            const res = await findNewCartListAPI();
            cartList.value = res. result;
        }else{
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }
        
    }
    //清空购物车
    const clearCart = () => {
        cartList.value = [] as CartItem[]; 
    }
    // 购物中商品的总数量
    const allCount = computed(() => {
    return cartList.value.reduce((count, item) => count + item.count, 0);
    });
    // 购物中商品的总价格
    const allPrice = computed(() => {
    return cartList.value.reduce((sum, item) => sum + item.count * parseInt(item.price), 0);
    });
    
    //单选功能
    const singleCheck = (skuId, selected) => {
        //通过skuId找到要修改的那一项，然后把它的selected修改 
        const item = cartList.value.find ((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选框事件
    const allCheckChange = (selected: boolean) => {
        cartList.value.forEach((item) => (item.selected = selected));
    };
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    //选中商品数量
    const selectedCount = computed(()=>{
        return cartList.value.filter((item) => item.selected).reduce((count, item) => count + item.count,0);
    })
    //选中商品价格
    const selectedPrice = computed(() => {
        return cartList.value.filter((item) => item.selected).reduce((count,item)=> count + item.count * parseInt(item.price),0)
    })
      // 获取最新购物车列表
      const updateNewList = async () => {
        const res = await findNewCartListAPI();
        cartList.value = res.result;
      };
      
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheckChange,
        selectedCount,
        selectedPrice,
        clearCart,
        updateNewList
    }
},{
    persist:true
})