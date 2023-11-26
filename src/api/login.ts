import httpInstance from "@/utils/http";
import { LoginRequest, UserInfo } from "./model/loginModel";

export function loginAPI(params:LoginRequest): Result<UserInfo>{
    return httpInstance({
        url:'/login',
        method: 'POST',
        data:params
    })
}