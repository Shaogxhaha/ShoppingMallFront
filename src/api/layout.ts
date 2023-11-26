import httpInstance from "@/utils/http";
import { ClassData } from "@/api/model/layoutModel";

export function getCategoryAPI(): Result<ClassData[]>{
    return httpInstance({ url: '/home/category/head' });
}