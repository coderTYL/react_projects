import http from '../utils/http';

export const registerApi = (adminInfo)=>{
    return http('post', '/register', adminInfo);
}