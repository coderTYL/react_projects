import http from "../utils/http"

/**
 * 封装登录请求
 * @param userInfo 
 */
export const loginApi = (userInfo)=>{
    return http('post', '/login', userInfo);
}