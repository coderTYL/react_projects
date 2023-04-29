import http from "../utils/http"

export const addTypeApi = (type)=>{
    return http('post', '/addType', type);
}