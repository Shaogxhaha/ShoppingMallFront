//用户信息
export interface UserInfo {
    id: string;
    account: string;
    mobile: string;
    token: string;
    avatar: string;
    nickname: string;
    gender: string;
    birthday: string;
    cityCode: string;
    provinceCode: string;
    profession: string;
  }



//登录请求
export interface LoginRequest {
    account : string;
    password: string;
}