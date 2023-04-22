import http from "../utils/http"

export const addEventApi = (event)=>{
    return http('post', '/addEvent', event);
}