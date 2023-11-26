import { getCategoryAPI } from "@/api/layout";
import { ClassData } from "@/api/model/layoutModel";
import { defineStore } from "pinia";
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () =>{
    //state导航列表数据
    const categoryList = ref([] as ClassData[])
    
    //aciton获取导航数据的方法
    const getCategory = async() => {
        const res = await getCategoryAPI();
        categoryList.value = res.result
    }
    //返回数据
    return {
        categoryList,
        getCategory
    }
})